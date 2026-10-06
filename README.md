# CampusCore — project structure

This is the same CampusCore app you already use, split out of the single
`CampusCore.html` file into a normal web project so it's easier to work on
inside an IDE (e.g. Antigravity, VS Code, Cursor).

```
index.html          — markup only (no inline CSS/JS)
css/styles.css       — everything that was in the <style> block
js/firebase-sync.js  — Firebase config, auth, and the cloud-sync layer
                        (this is what used to be the FIRST <script> block)
js/app.js            — the whole app: `function startApp(){ ... }` plus
                        every feature (students, faculty, timetable,
                        attendance, dashboard, HOD tab, settings, etc.)
                        — this was the SECOND, much larger <script> block
```

## Running it

It's still a static site — no build step required. Any static file server
works, e.g.:

```
npx serve .
# or
python3 -m http.server 8000
```

Then open it in a browser. Firebase sync behaves exactly as it did in the
single-file version (same `firebaseConfig`, same `orgs/default` document).

## Why `app.js` wasn't split further

Everything inside the old app lives inside **one JavaScript function**
(`startApp()`) — every variable, helper, and feature is scoped to that one
function, not to the page globally. That's normal for a file that grew
one `<script>` tag at a time, but it means the ~9,000 lines of `app.js`
can't be safely cut into separate files just by picking line ranges:
each new file would become its own top-level scope, and code in one file
would stop being able to see variables/functions declared in another —
the app would silently break (`ReferenceError`s all over).

Splitting `app.js` into real modules (e.g. `students.js`, `attendance.js`,
`dashboard.js`, `timetable.js`, each `import`/`export`-ing what it needs)
is a bigger, separate refactor — worth doing, but it means rewriting every
cross-feature reference to go through explicit imports instead of shared
function scope, and testing each feature afterwards. That's the natural
next step to tackle inside an agentic IDE like Antigravity, where an
agent can work through `app.js` section by section, extract one feature
at a time into its own module, and verify nothing broke before moving to
the next — rather than attempting it as one large mechanical cut.

## Note on the Firebase key in `js/firebase-sync.js`

The `firebaseConfig` API key committed here is the same one already in
your live `CampusCore.html` — carried over as-is, not newly exposed. (A
Firebase Web API key is meant to be public; what actually protects your
data is your Firestore security rules and the HOD-login gate in the app,
not keeping this key secret.)
