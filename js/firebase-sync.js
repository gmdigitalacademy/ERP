// ---- 1) PASTE YOUR PROJECT'S CONFIG HERE ----
const firebaseConfig = {
  apiKey: "AIzaSyCBAKxLUllQ3iulU5FZWVvq8pcA3tiQgZ0",
  authDomain: "campuscore-3b438.firebaseapp.com",
  projectId: "campuscore-3b438",
  storageBucket: "campuscore-3b438.firebasestorage.app",
  messagingSenderId: "292597338320",
  appId: "1:292597338320:web:2916b2b1223caf44afced5"
};
const CLOUD_ENABLED = !!(firebaseConfig.apiKey && firebaseConfig.apiKey.indexOf('PASTE_') !== 0);

// Every top-level localStorage key the app persists organisational data
// under (must match the *_KEY constants further down exactly). Per-device
// display prefs — theme, font size, which sections are collapsed, last
// backup timestamp — are deliberately left OUT: those stay local.
const CLOUD_SYNCED_KEYS = [
  'student_records_v2','student_records_subjects_v1','student_records_program_outcomes_v1',
  'student_records_faculty_v1','student_records_attendance_v1','student_records_faculty_attendance_v1',
  'student_records_hod_scope_v1','student_records_timetable_v1','student_records_period_times_v1',
  'student_records_timings_v1','student_records_subject_faculty_v1','student_records_alarm_v1',
  'student_records_num_periods_v1','student_records_od_types_v1','student_records_diary_v1',
  'student_records_tasks_v1','student_records_mom_v1','student_records_combined_groups_v1',
  'student_records_marks_v1','student_records_app_settings_v1','student_records_mark_components_v1',
  'student_records_marks_convert_max_v1','student_records_quick_att_v1'
];
// One shared document for the whole department. Firestore documents cap at
// 1MB — plenty for one department's data, but if this ever fills up (many
// years of attendance/marks piling into one doc), it'd need splitting into
// one document per key instead of one document for everything.
const CLOUD_DOC_COLLECTION = 'orgs', CLOUD_DOC_ID = 'default';

let fbAuth=null, fbDb=null, cloudUserRole='faculty', cloudUserName='';
const DEVICE_ID = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
let SYNCING_FROM_CLOUD = false; // true while a remote snapshot is being written into localStorage, so our own setItem hook doesn't immediately push it right back up
let APP_BOOTED = false;

function cloudToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1f2937;color:#fff;padding:10px 18px;border-radius:24px;font-size:13px;font-weight:600;z-index:9999;box-shadow:0 6px 18px rgba(0,0,0,0.3);transition:opacity 0.25s,transform 0.25s;pointer-events:none;opacity:0;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(()=>{
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2200);
}
function authErr(msg){
  const el = document.getElementById('authError');
  if(el) el.textContent = msg||'';
}
function authBusy(msg){
  const el = document.getElementById('authStatus');
  if(el) el.textContent = msg||'';
}

function addCloudSignOutButton(){
  if(document.getElementById('cloudSignOutBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'cloudSignOutBtn';
  btn.type = 'button';
  btn.title = `Signed in as ${cloudUserName} — tap to sign out`;
  btn.textContent = '🔓 Sign out';
  btn.onclick = ()=>{ sessionStorage.removeItem('cc_cloud_reloaded'); if(fbAuth) fbAuth.signOut().then(()=>location.reload()); else location.reload(); };
  const host = document.getElementById('headerIconGroup') || document.body;
  host.appendChild(btn);
}

function bootApp(){
  // startApp() is defined in a LATER <script> block further down the page,
  // so calling this at the top of the page (before that block has even run
  // yet) would find typeof startApp === 'undefined' and silently boot
  // nothing. setTimeout(...,0) pushes the call to right after every script
  // block on the page has finished executing, once startApp genuinely exists.
  const tryBoot = ()=>{
    if(APP_BOOTED) return;
    if(typeof startApp === 'function'){ startApp(); APP_BOOTED = true; }
    else setTimeout(tryBoot, 0);
  };
  tryBoot();
}

function bootWithoutCloud(){
  const ov = document.getElementById('authOverlay');
  if(ov) ov.remove();
  const googleOv = document.getElementById('googleRoleOverlay');
  if(googleOv) googleOv.remove();
  bootApp();
}

// Sign-in is opt-in, not a gate: the app boots straight into local/offline
// mode immediately, on every load. A signed-in session (if one is already
// persisted by the browser) is picked up quietly in the background by
// onAuthStateChanged below and just switches on cloud sync without ever
// blocking the UI — no login screen unless the person asks for one via the
// "Sign in for cloud sync" button.
function addCloudSignInButton(){
  if(document.getElementById('cloudSignInBtn') || document.getElementById('cloudSignOutBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'cloudSignInBtn';
  btn.type = 'button';
  btn.textContent = '☁️ Sync';
  btn.title = 'Sign in for cloud sync';
  btn.onclick = ()=>{
    const ov = document.getElementById('authOverlay');
    if(ov) ov.classList.add('open');
  };
  // Docked into the same header row as the font-size/theme icons (rather
  // than floating fixed over the page) so it never covers them — falls
  // back to appending to <body> if that row isn't there yet for some reason.
  const host = document.getElementById('headerIconGroup') || document.body;
  host.appendChild(btn);
}

if(!CLOUD_ENABLED){
  bootWithoutCloud();
} else {
  bootApp(); // boot immediately; cloud sync attaches silently below if a session exists
  addCloudSignInButton();

  const authCloseBtn = document.getElementById('authCloseBtn');
  if(authCloseBtn) authCloseBtn.onclick = ()=>{
    const ov = document.getElementById('authOverlay');
    if(ov) ov.classList.remove('open');
  };

  if(typeof firebase === 'undefined'){
    console.warn('Firebase SDK not available. Running in local offline mode.');
  } else {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();

    const tabIn = document.getElementById('authTabSignin');
    const tabUp = document.getElementById('authTabSignup');
    const roleField = document.getElementById('authRoleField');
    const submitBtn = document.getElementById('authSubmitBtn');
    let mode = 'signin';
    function setAuthMode(m){
      mode = m;
      if(tabIn) tabIn.classList.toggle('active', m==='signin');
      if(tabUp) tabUp.classList.toggle('active', m==='signup');
      if(roleField) roleField.style.display = m==='signup' ? '' : 'none';
      if(submitBtn) submitBtn.textContent = m==='signup' ? 'Create Account' : 'Sign In';
      authErr('');
    }
    if(tabIn) tabIn.onclick = ()=>setAuthMode('signin');
    if(tabUp) tabUp.onclick = ()=>setAuthMode('signup');

    async function submitAuth(){
      authErr('');
      const emailEl = document.getElementById('authEmail');
      const passEl = document.getElementById('authPassword');
      const email = emailEl ? emailEl.value.trim() : '';
      const password = passEl ? passEl.value : '';
      if(!email || !password){ authErr('Enter an email and password.'); return; }
      if(submitBtn) submitBtn.disabled = true;
      try{
        if(mode==='signup'){
          const nameEl = document.getElementById('authName');
          const roleEl = document.getElementById('authRole');
          const name = nameEl ? nameEl.value.trim() : '';
          const role = roleEl ? roleEl.value : 'faculty';
          if(!name){ authErr('Enter your name.'); if(submitBtn) submitBtn.disabled=false; return; }
          authBusy('Creating account…');
          const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
          await fbDb.collection('users').doc(cred.user.uid).set({name, email, role, createdAt: Date.now()});
        } else {
          authBusy('Signing in…');
          await fbAuth.signInWithEmailAndPassword(email, password);
        }
      }catch(e){
        authErr(e.message || 'Sign-in failed.');
        authBusy('');
        if(submitBtn) submitBtn.disabled = false;
      }
    }
    if(submitBtn) submitBtn.onclick = submitAuth;
    const passInput = document.getElementById('authPassword');
    if(passInput) passInput.addEventListener('keydown', e=>{ if(e.key==='Enter') submitAuth(); });

    // Redirect flow rather than a popup: modern Chrome's Cross-Origin-Opener
    // -Policy defaults often block the popup<->opener handshake Firebase's
    // signInWithPopup needs, leaving the button stuck on "Opening Google
    // sign-in…" even though the Google side completed fine. Redirect just
    // navigates the whole tab to Google and back — nothing to block.
    const googleBtn = document.getElementById('authGoogleBtn');
    if(googleBtn) googleBtn.onclick = ()=>{
      authErr('');
      authBusy('Redirecting to Google…');
      const provider = new firebase.auth.GoogleAuthProvider();
      // signInWithRedirect returns a promise that can reject asynchronously
      // (e.g. auth/unauthorized-domain) — a plain try/catch around the call
      // does NOT catch that, since the rejection happens after this function
      // has already returned. .catch() here is what actually surfaces it
      // instead of the page just sitting there with no error shown.
      fbAuth.signInWithRedirect(provider).catch(e=>{
        authErr((e && e.code ? '['+e.code+'] ' : '') + (e && e.message || 'Google sign-in failed.'));
        authBusy('');
      });
    };
    // Surfaces any error from that redirect once the browser comes back
    // (e.g. an account/email conflict); the success path is handled by
    // onAuthStateChanged below like any other sign-in.
    fbAuth.getRedirectResult().catch(e=>{
      if(e && e.code && e.code !== 'auth/no-redirect-operation'){
        authErr('['+e.code+'] ' + (e.message || 'Google sign-in failed.'));
      }
    });

    // Every account needs a users/{uid} profile (name + role). Email/password
    // sign-up writes it immediately at creation. Google sign-in has no form
    // to attach that to, so on a brand-new Google account (no profile doc
    // yet) this pops a one-time "pick your name & role" sheet instead.
    function ensureProfile(user){
      return fbDb.collection('users').doc(user.uid).get().then(snap=>{
        if(snap.exists) return snap.data();
        return new Promise((resolve, reject)=>{
          const ov = document.getElementById('googleRoleOverlay');
          const nameInp = document.getElementById('googleRoleName');
          const roleSel = document.getElementById('googleRoleSelect');
          const errEl = document.getElementById('googleRoleError');
          const saveBtn = document.getElementById('googleRoleSaveBtn');
          if(!ov || !nameInp || !roleSel || !saveBtn){
            resolve({name: user.displayName || 'Faculty', email: user.email || '', role: 'faculty', createdAt: Date.now()});
            return;
          }
          nameInp.value = user.displayName || '';
          if(errEl) errEl.textContent = '';
          ov.classList.add('open');
          saveBtn.onclick = async ()=>{
            const name = nameInp.value.trim();
            if(!name){ if(errEl) errEl.textContent = 'Enter your name.'; return; }
            const role = roleSel.value;
            const profile = {name, email: user.email || '', role, createdAt: Date.now()};
            try{
              await fbDb.collection('users').doc(user.uid).set(profile);
              ov.classList.remove('open');
              resolve(profile);
            }catch(e){
              if(errEl) errEl.textContent = e.message || 'Could not save profile — try again.';
            }
          };
        });
      });
    }

    fbAuth.onAuthStateChanged(async user=>{
      if(!user) return; // no persisted session — stays in local/offline mode until asked to sign in
      authBusy('Loading your college\'s data…');

      let profile = null;
      try{ profile = await ensureProfile(user); }catch(e){}
      cloudUserRole = (profile && profile.role) || 'faculty';
      cloudUserName = (profile && profile.name) || user.email;
      document.body.classList.toggle('role-faculty', cloudUserRole !== 'hod');

      // One-time initial pull: populate localStorage from the cloud BEFORE
      // starting the app, so it boots from localStorage exactly as it always
      // has — nothing about how the app reads its data changes.
      try{
        const docSnap = await fbDb.collection(CLOUD_DOC_COLLECTION).doc(CLOUD_DOC_ID).get();
        if(docSnap.exists){
          const data = docSnap.data() || {};
          SYNCING_FROM_CLOUD = true;
          CLOUD_SYNCED_KEYS.forEach(k=>{ if(typeof data[k] === 'string') localStorage.setItem(k, data[k]); });
          SYNCING_FROM_CLOUD = false;
        }
      }catch(e){
        authErr('Could not reach the cloud database — check your Firestore setup/rules. ' + (e.message||''));
        if(submitBtn) submitBtn.disabled = false;
        return;
      }

      // Intercept every localStorage.setItem for a synced key and push it to
      // Firestore (debounced 800ms so rapid edits collapse into one write).
      // This is the ONLY hook needed for outbound sync — every existing
      // saveX() function in the app already calls localStorage.setItem(KEY,
      // ...), so this alone sends every save in the app to the cloud too,
      // with zero changes to any of those functions.
      const origSetItem = Storage.prototype.setItem;
      let pending = {}, pushTimer = null;
      Storage.prototype.setItem = function(key, value){
        origSetItem.apply(this, arguments);
        if(SYNCING_FROM_CLOUD) return;
        if(CLOUD_SYNCED_KEYS.indexOf(key) === -1) return;
        pending[key] = value;
        clearTimeout(pushTimer);
        pushTimer = setTimeout(()=>{
          const batch = pending; pending = {};
          batch._updatedBy = DEVICE_ID;
          batch._updatedAt = Date.now();
          fbDb.collection(CLOUD_DOC_COLLECTION).doc(CLOUD_DOC_ID).set(batch, {merge:true}).catch(()=>{
            cloudToast('⚠️ Could not sync to cloud — check your connection');
          });
        }, 800);
      };

      // Live inbound sync: another device's change lands here within about a
      // second. Refresh localStorage and reload — simplest way to guarantee
      // every screen in an app this size reflects the new data correctly,
      // rather than trying to re-render dozens of views in place.
      fbDb.collection(CLOUD_DOC_COLLECTION).doc(CLOUD_DOC_ID).onSnapshot(snap=>{
        if(!snap.exists) return;
        const data = snap.data() || {};
        if(data._updatedBy === DEVICE_ID) return; // our own write echoing back
        let changed = false;
        SYNCING_FROM_CLOUD = true;
        CLOUD_SYNCED_KEYS.forEach(k=>{
          if(typeof data[k] === 'string' && data[k] !== localStorage.getItem(k)){
            localStorage.setItem(k, data[k]);
            changed = true;
          }
        });
        SYNCING_FROM_CLOUD = false;
        if(changed && APP_BOOTED){
          cloudToast('🔄 Updated elsewhere — refreshing…');
          setTimeout(()=>location.reload(), 900);
        }
      });

      const authOv = document.getElementById('authOverlay');
      if(authOv) authOv.remove();
      const signInBtn = document.getElementById('cloudSignInBtn');
      if(signInBtn) signInBtn.remove();
      // The app already booted locally (bootWithoutCloud() ran unconditionally
      // above) without the cloud data pulled in yet, so reload once now that
      // localStorage has been refreshed from Firestore and the sync hooks are
      // wired up — this guarantees every screen reflects synced data instead
      // of trying to patch an already-rendered UI in place.
      if(APP_BOOTED && !sessionStorage.getItem('cc_cloud_reloaded')){
        sessionStorage.setItem('cc_cloud_reloaded', '1');
        location.reload();
        return;
      }
      if(!APP_BOOTED && typeof startApp === 'function'){ startApp(); APP_BOOTED = true; }
      addCloudSignOutButton();
    });
  }
}
