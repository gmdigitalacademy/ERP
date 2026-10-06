function startApp(){
const SEED_DATA = {"AI & DS": {"1st Year": [{"sno": 1, "regno": "", "name": "ABDUL MUHAIMIN H", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 2, "regno": "", "name": "ABDUR RAHMAN S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 3, "regno": "", "name": "ABDURRAHMAN M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 4, "regno": "", "name": "AHAMED AFRITH", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 5, "regno": "", "name": "DEEPAN RAJ D", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 6, "regno": "", "name": "DHINESH M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 7, "regno": "", "name": "DHIYANI M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 8, "regno": "", "name": "ELAVARASAN  M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 9, "regno": "", "name": "FAHEEM M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 10, "regno": "", "name": "HARINI T", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 11, "regno": "", "name": "HEMALATHA K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 12, "regno": "", "name": "IMRAN S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 13, "regno": "", "name": "IRFAN KHAN A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 14, "regno": "", "name": "JAFFAR ALI KHAN J", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 15, "regno": "", "name": "KAVIPRIYA R", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 16, "regno": "", "name": "LAKSHANYA K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 17, "regno": "", "name": "MEHNAZ FATHIMA A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 18, "regno": "", "name": "MOHAMED ABUBACKER SIDDIQ", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 19, "regno": "", "name": "MOHAMED AJAS R", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 20, "regno": "", "name": "MOHAMED BATHRU K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 21, "regno": "", "name": "MOHAMED FAHEEM M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 22, "regno": "", "name": "MOHAMED IRFAN  A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 23, "regno": "", "name": "MOHAMED IRFAN A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 24, "regno": "", "name": "MOHAMED JASEEM A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 25, "regno": "", "name": "MOHAMED NISHAN N", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 26, "regno": "", "name": "MOHAMED SHARUK M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 27, "regno": "", "name": "MOHAMED THANVEER", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 28, "regno": "", "name": "MOHAMMED ARIF", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 29, "regno": "", "name": "MOHAMMED AYAAN M H", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 30, "regno": "", "name": "MOHAMMED MUZAMMIL", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 31, "regno": "", "name": "MUFEEDUR RAHMAN M R", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 32, "regno": "", "name": "MUHAMMAD MARWAN", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 33, "regno": "", "name": "NAVDEEP K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 34, "regno": "", "name": "NISHANTH E", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 35, "regno": "", "name": "POONGOTHAI M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 36, "regno": "", "name": "PRAVEEN K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 37, "regno": "", "name": "PRAVEENKUMAR N", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 38, "regno": "", "name": "REHAN SAMDANI M S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 39, "regno": "", "name": "SANDIYA NOUSHIN M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 40, "regno": "", "name": "SASI NATHAN I", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 41, "regno": "", "name": "SHAHUL HAMEED F", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 42, "regno": "", "name": "SHEIK ABDULLAH A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 43, "regno": "", "name": "SHOBANA S V", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 44, "regno": "", "name": "SYED ARFAN  S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 45, "regno": "", "name": "SYED KARAMATH S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 46, "regno": "", "name": "UZAIR AHAMED M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 47, "regno": "", "name": "ZAHEERAH  F", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 48, "regno": "", "name": "ZAKKIYA E", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}], "2nd Year": [{"sno": 1, "regno": 311825201001, "name": "ABBAS M", "hostel": "Day Scholar Boys", "phone": 8015465126, "father": "H.mubarak", "fatherphone": 9894463421, "mother": "Guljar begum ", "motherphone": 9597154578, "address": "12/16 naidu street, elavanasur kottai, kallakurichi (dt)-607202", "cgpa": "", "arrears": 0}, {"sno": 2, "regno": 311825201002, "name": "ABDUL MAJEED", "hostel": "Hosteller Boys", "phone": 9566770179, "father": "Mohammed Faisal A", "fatherphone": 971529877224, "mother": "Afrose banu", "motherphone": 9789762185, "address": "96/2 , Ambethkar Nagar, CMP lane , Adirampattinam.", "cgpa": 7.38, "arrears": 0}, {"sno": 3, "regno": 311825201003, "name": "ABU FALITH F", "hostel": "Hosteller Boys", "phone": 8438258069, "father": "M Farook", "fatherphone": 8695665503, "mother": "F Rehana", "motherphone": 9003692070, "address": "brammakundam main road, pounjipattu, vanapuram taluk, kallakurichi district pin:605702", "cgpa": 7.79, "arrears": 0}, {"sno": 4, "regno": 311825201004, "name": "AHAMED RASHIM SAHIB S", "hostel": "Hosteller Boys", "phone": 9342158470, "father": "M H Sultan Hackani Sahib", "fatherphone": 7010842523, "mother": "A Sithi Noorul Ayn", "motherphone": 9786068346, "address": "13, Manavara North Street, Nagapattinam, Nagore - 611002", "cgpa": 3.12, "arrears": 8}, {"sno": 5, "regno": 311825201005, "name": "AKASH A", "hostel": "Day Scholar Boys", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 6, "regno": 311825201006, "name": "ARAVIND R", "hostel": "Hosteller Boys", "phone": "", "father": "", "fatherphone": 8754147190, "mother": "deepa malar. VB", "motherphone": 9788447092, "address": "A38,kuzhiveelai, kappiyari(p/o)629156,kanyakumaari", "cgpa": "", "arrears": ""}, {"sno": 7, "regno": 311825201007, "name": "ARIPRASATH E", "hostel": "Day Scholar Boys", "phone": 6385116509, "father": "Elancheziyan D", "fatherphone": 9843057173, "mother": "Sudha E", "motherphone": 8778283002, "address": "1/71 shanmuga nagar karanai, Chengalpattu ", "cgpa": 6.12, "arrears": 1}, {"sno": 8, "regno": 311825201008, "name": "AYISHA A", "hostel": "Day Scholar Girls", "phone": 6379465158, "father": "Mohammed Amjath", "fatherphone": 8825452753, "mother": "Nayeema ", "motherphone": 8680827665, "address": "No:15/37a S.R.P Koil Street chennai 600082", "cgpa": 9.17, "arrears": "-"}, {"sno": 9, "regno": 311825201009, "name": "AYISHA SITHIKA.M", "hostel": "Day Scholar Girls", "phone": 6383019442, "father": "H.mubarak", "fatherphone": 9087522999, "mother": "Guljar begum", "motherphone": 9597154578, "address": "12/16 naidu street, elavanasur kottai, kallakurichi (dt)-607202", "cgpa": "", "arrears": 0}, {"sno": 10, "regno": 311825201010, "name": "BARAKATHULLAH B J", "hostel": "Day Scholar Boys", "phone": 8610217178, "father": "MOHAMED JALEEL ", "fatherphone": 7299849971, "mother": "AMEENAL BEGUMJ", "motherphone": 9042159025, "address": "93, angappan naicken street, mannady, Chennai, tamilnadu,ch-600 001", "cgpa": 9.1667, "arrears": 0}, {"sno": 11, "regno": 311825201011, "name": "BAVIYA M", "hostel": "Day Scholar Girls", "phone": 8489976126, "father": "Muniyan T", "fatherphone": 9790630885, "mother": "vasanthi M", "motherphone": 9600832491, "address": "29/3,Main Road, sozhampattu, kallakurichi (dt)-606208", "cgpa": "", "arrears": ""}, {"sno": 12, "regno": 311825201013, "name": "DEVI SHREE N", "hostel": "Hosteller Girls", "phone": "", "father": "", "fatherphone": 9387060839, "mother": "Sankaragomathi", "motherphone": 9585644535, "address": "73/1,Salai Vinayagar Kovil Street, Sambavarvadakarai -627856, Tenkasi district.", "cgpa": 7.96, "arrears": 0}, {"sno": 13, "regno": 311825201014, "name": "DURGA S", "hostel": "Day Scholar Girls", "phone": 9363506376, "father": "R Subramani", "fatherphone": 9884433019, "mother": "S.Kanniyammal", "motherphone": 9884433013, "address": "15/8,Race course road, Guindy, Chennai -600032", "cgpa": 8.58, "arrears": 0}, {"sno": 14, "regno": 311825201015, "name": "FAIZA BEGUM S ", "hostel": "Day Scholar Girls", "phone": "", "father": "", "fatherphone": 8825434172, "mother": "S.Masheera Begum", "motherphone": 8667817449, "address": "No.1 Ramakrishna street, Adambakkam, Chennai 88", "cgpa": 8.74, "arrears": 0}, {"sno": 15, "regno": 311825201016, "name": "FATHIMA MUWAFFIKA", "hostel": "Hosteller Girls", "phone": "", "father": "", "fatherphone": 8925485846, "mother": "\nAmeenal nilofer.A", "motherphone": 8870495846, "address": "98,Marakayar pallivasal street, Tenkasi", "cgpa": 8.545, "arrears": 0}, {"sno": 16, "regno": 311825201017, "name": "FAYAZ AHMED F", "hostel": "Day Scholar Boys", "phone": 9361478784, "father": "N.farook ahmed ", "fatherphone": 9566232198, "mother": "Shayira banu", "motherphone": 6379829697, "address": "no: 44/64,ms Naidu street,old Washermanpet chennai -600021", "cgpa": 8.21, "arrears": 0}, {"sno": 17, "regno": 311825201018, "name": "HALITH HAMEED N", "hostel": "Day Scholar Boys", "phone": 9361261357, "father": "S.Najumudeen", "fatherphone": 8939080485, "mother": "N.Balkis begam", "motherphone": 8015640517, "address": "pudukottai dt, avudayarkovil tk, Kamarajar st,yembal-622204.", "cgpa": "", "arrears": ""}, {"sno": 18, "regno": 311825201019, "name": "HARIHARAN M", "hostel": "Day Scholar Boys", "phone": "7871760882                V.munusami", "father": "", "fatherphone": 8608319434, "mother": "M.prema", "motherphone": 8122208395, "address": "no. 39/8 appar samy Kovil 4th Street,thiruvettriyur,chennai-19", "cgpa": 8.25, "arrears": 0}, {"sno": 19, "regno": 311825201020, "name": "HASSAN KUDDUS MARAICAR. A", "hostel": "Day Scholar Boys", "phone": 6383479714, "father": "Abdul lasa.H", "fatherphone": 9841430004, "mother": "Fathima Nasrin.A", "motherphone": 9841635122, "address": "10/251,1st floor,Angappa Naicken St,Mannady, Chennai-600001", "cgpa": 8.53, "arrears": 0}, {"sno": 20, "regno": 311825201021, "name": "JENIFER C", "hostel": "Day Scholar Girls", "phone": 7397619114, "father": "Chinna durai D", "fatherphone": 7845423206, "mother": "C. Sangeetha", "motherphone": 7845423206, "address": "no. 10 SCR Avenue ptc., thoraipakkam, chennai 97", "cgpa": 9.17, "arrears": 0}, {"sno": 21, "regno": 311825201022, "name": "KAVINAYA S", "hostel": "Day Scholar Boys", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 22, "regno": 311825201023, "name": "MALHAAN SHARIFF. U", "hostel": "Day Scholar Boys", "phone": 9363212930, "father": "Umar sharief M ", "fatherphone": 8610686957, "mother": "furzana R", "motherphone": 8248039385, "address": "no 13/7 Gandhinagar 4th Street kodungaiyur chennai 600118", "cgpa": 8.25, "arrears": 0}, {"sno": 23, "regno": 311825201024, "name": "MANIKANDAN S", "hostel": "Day Scholar Boys", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 24, "regno": 311825201025, "name": "MOHAMED ABDULLAH S.A", "hostel": "Day Scholar Boys", "phone": 6379305402, "father": "M.A.syed ameer abbas", "fatherphone": 9940516360, "mother": "benasir raihana", "motherphone": 9791382219, "address": "no.12/44 saiva muthaiya street mannady chennai 600001", "cgpa": 7.02, "arrears": 0}, {"sno": 25, "regno": 311825201026, "name": "MOHAMED ASHIF. P", "hostel": "Hosteller Boys", "phone": 9585833796, "father": "Peer Mohamed", "fatherphone": 9600819970, "mother": "Fathima farzana ", "motherphone": 7639498821, "address": "3/170,east street ,nachikulam (thiruvarur(D.t).614706", "cgpa": 3.42, "arrears": 4}, {"sno": 26, "regno": 311825201027, "name": "MOHAMED ASIK M", "hostel": "Day Scholar Boys", "phone": 9003187119, "father": "P.Mohammed Bakrudeen", "fatherphone": 9840956134, "mother": "fathima", "motherphone": 7200442949, "address": "4/21 yahya ali 2nd Street anna flyover teynampet chennai ", "cgpa": 4.51, "arrears": 2}, {"sno": 27, "regno": 311825201028, "name": "MOHAMED FARIS. B", "hostel": "Hosteller Boys", "phone": 8190085751, "father": "Basheer Ahamed", "fatherphone": 9159900514, "mother": "Kamila barveen ", "motherphone": "", "address": "4/241,Earikkarai street,Nachikulam,thiruvarur district,614706", "cgpa": 3.42, "arrears": 8}, {"sno": 28, "regno": 311825201029, "name": "MOHAMED HASIM H", "hostel": "Hosteller Boys", "phone": 9342148465, "father": "Hameed Maricar", "fatherphone": 9944616594, "mother": "Rabiyathul baseriya ", "motherphone": 9994675191, "address": "10,kalima nagar,parangipettai,Cuddalore (D.T).608502", "cgpa": 3.79, "arrears": 5}, {"sno": 29, "regno": 311825201030, "name": "MOHAMED JAHITH J", "hostel": "Hosteller Boys", "phone": 8925564669, "father": "jamal Mohamed.M", "fatherphone": 1504950296, "mother": "seeni basira.S", "motherphone": 7200130987, "address": "4/205,East street, periyapattinam, Ramanathapuram,623523", "cgpa": 5.58, "arrears": 2}, {"sno": 30, "regno": 311825201031, "name": "MOHAMED MOHAIDEEN M", "hostel": "Hosteller Boys", "phone": 7094545397, "father": "Mohamed Ansari M", "fatherphone": 9788934758, "mother": "Naseera Banu T", "motherphone": 8220083756, "address": "14, pudhumanai south street pettai, kadayanallur, Tenkasi district - 627751", "cgpa": 3.5, "arrears": 5}, {"sno": 31, "regno": 311825201032, "name": "MOHAMED SAIF SAIT K", "hostel": "Day Scholar Boys", "phone": 8122587563, "father": "Mohamed kasim sait ", "fatherphone": 9841091563, "mother": "Shamshad Begum ", "motherphone": 9941486234, "address": "No 17.\n\n1st Block 19th Street,\n\nMuthamil Nagar,\nkodungaiyur, chennai -600118", "cgpa": 7.88, "arrears": 0}, {"sno": 32, "regno": 311825201033, "name": "MOHAMED USMAN. S", "hostel": "Hosteller Boys", "phone": 9043975480, "father": "shahul hameed s", "fatherphone": 97477058978, "mother": "zulaiha ammal s", "motherphone": 9791773254, "address": "17D/69 pudumanai street, Adirampattinam 614701", "cgpa": 7.8, "arrears": 0}, {"sno": 33, "regno": 311825201034, "name": "MOHAMMED ASLAM M", "hostel": "Day Scholar Boys", "phone": "", "father": "", "fatherphone": 9840489334, "mother": "Yaseem.banu", "motherphone": 9940133566, "address": "no:59,bazaar road, Mylapore Chennai -600004", "cgpa": "8..25", "arrears": 0}, {"sno": 34, "regno": 311825201035, "name": "MOHAMMED IRFAN A.K", "hostel": "Day Scholar Boys", "phone": 9444950430, "father": "I.Ameer John Kibari", "fatherphone": 9791863399, "mother": "", "motherphone": 9791863332, "address": "", "cgpa": "", "arrears": ""}, {"sno": 35, "regno": 311825201036, "name": "MUJAHIDHA THABASUM S", "hostel": "Hosteller Girls", "phone": 9514036355, "father": "", "fatherphone": "", "mother": "Fathima ", "motherphone": 8807664980, "address": "no 2 ganapathy nagar babusalam building mandrakuppam Neyveli ", "cgpa": 7.68, "arrears": 7}, {"sno": 36, "regno": 311825201037, "name": "NAFEELA S", "hostel": "Hosteller Girls", "phone": 6383036503, "father": "Sirajudeen K", "fatherphone": 9842434377, "mother": "Rabeka S", "motherphone": 8098230454, "address": "18/1/35A, Achukkattu street, Thiruppathur, Sivaganga district ", "cgpa": 8.29, "arrears": 0}, {"sno": 37, "regno": 311825201038, "name": "NATCHATHRA K", "hostel": "Hosteller Girls", "phone": 7418142565, "father": "R .Karnan", "fatherphone": 6385463273, "mother": "K. Sendhamarai", "motherphone": 7397164687, "address": "114,mettu street, Adhanur(village &post), Villupuram district, 605 402", "cgpa": 8.54, "arrears": 0}, {"sno": 38, "regno": 311825201039, "name": "NEHA ABBAS SAYEED", "hostel": "Day Scholar Girls", "phone": 7418024241, "father": "Raj Mohammad ", "fatherphone": 9585007070, "mother": "Mahaboo bee", "motherphone": 7418024241, "address": "no.141 ,3rd Street, Rajeshwari Nagar, Thaiyur Road, Kelembakam ", "cgpa": 7.88, "arrears": 0}, {"sno": 39, "regno": 311825201040, "name": "PRIYAN PRASANTH D", "hostel": "Day Scholar Boys", "phone": "", "father": "       ", "fatherphone": 7397469365, "mother": "    Jayalakshmi D", "motherphone": 9894280915, "address": "    24A poongavanapuram kaladipet thiruvottiyur chennai 600019", "cgpa": "", "arrears": ""}, {"sno": 40, "regno": 311825201041, "name": "RAIHANAH PARVEEN M R", "hostel": "Hosteller Girls", "phone": 7418629255, "father": "Mohammad Raffi. ", "fatherphone": 7845105739, "mother": "Raziya begam. A", "motherphone": 7845105739, "address": "No:54 Cuddalore road, Panruti. 607106", "cgpa": 8.79, "arrears": 0}, {"sno": 41, "regno": 311825201042, "name": "RIFA BANU A", "hostel": "Day Scholar Girls", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 42, "regno": 311825201043, "name": "ROHITH V", "hostel": "Hosteller Boys", "phone": 8072050854, "father": "Vijay kumar.M", "fatherphone": 8903161512, "mother": "Deepa .v", "motherphone": 9976980459, "address": "", "cgpa": 4, "arrears": 3}, {"sno": 43, "regno": 311825201044, "name": "SAATHANA S", "hostel": "Day Scholar Girls", "phone": 9176778222, "father": "S.Sakthi", "fatherphone": 9962121360, "mother": "S.Nalini", "motherphone": 9962894808, "address": "42/53 Ezhil nagr okkiyam thuraipakkam chennai 97", "cgpa": "", "arrears": ""}, {"sno": 44, "regno": 311825201045, "name": "SAHANA M", "hostel": "Hosteller Girls", "phone": " 91507 26225", "father": "Manickavasagam.K", "fatherphone": 9629327288, "mother": "Sangamithra.M", "motherphone": 9150188206, "address": "", "cgpa": 8.9, "arrears": 0}, {"sno": 45, "regno": 311825201046, "name": "SANJEEVI HARISH M", "hostel": "Hosteller Boys", "phone": 7867804173, "father": "Mutharasu.S", "fatherphone": 9025884574, "mother": "Pandi meenal.SP", "motherphone": 7904361494, "address": "", "cgpa": 6.46, "arrears": 1}, {"sno": 46, "regno": 311825201047, "name": "SASIKUMAR R", "hostel": "Day Scholar Boys", "phone": 8838143714, "father": "C.Ramesh", "fatherphone": 9962694422, "mother": "R.usha", "motherphone": 8939628474, "address": "No:9/1 madam Street Thiruporur Chengalpet 603110", "cgpa": 8.29, "arrears": 0}, {"sno": 47, "regno": 311825201048, "name": "SEENI MOHAMED NOORUDEEN S", "hostel": "Hosteller Boys", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 48, "regno": 311825201049, "name": "SHAIK SHAKEER.B", "hostel": "Day Scholar Boys", "phone": 9344990868, "father": "Shaik babu.H", "fatherphone": 9894411596, "mother": "Mumtaj.B", "motherphone": 9894463421, "address": "12/182,karnamstreet,elavanasur kottai(po), kallakurichi (dt)-607202", "cgpa": 8.58, "arrears": 0}, {"sno": 49, "regno": 311825201050, "name": "SWARNALAKSHMI S J", "hostel": "Hosteller Girls", "phone": 7708220524, "father": "jothirajan.v", "fatherphone": 9965122096, "mother": "Suganthi . P", "motherphone": 9976449527, "address": "5/21,east kandhasamy puram anna street ulundurpet-606107", "cgpa": 7, "arrears": 1}, {"sno": 50, "regno": 311825201051, "name": "SYED JAVITH J", "hostel": "Day Scholar Boys", "phone": 9342713419, "father": "Syed Jawaharalal.J", "fatherphone": 9080377268, "mother": "Jarina.J", "motherphone": "", "address": "388/8,sivon Kovil Street Elavanasur kottai(village) ,kallakurichi (dt) -6072020", "cgpa": 7.46, "arrears": 0}, {"sno": 51, "regno": 311825201052, "name": "SYED MAHROOF S M", "hostel": "Hosteller Boys", "phone": 9843459545, "father": "Syed mansurdeen SM ", "fatherphone": 9655335113, "mother": "A Amëena nousheen ", "motherphone": "", "address": "354 Mohamed ali street podakkudi,/ Koothanallur Tiruvarur 614103", "cgpa": 7.46, "arrears": 0}, {"sno": 52, "regno": 311825201053, "name": "UBAIDUR RAHMAN S", "hostel": "Hosteller Boys", "phone": 7339356605, "father": "Syed Haleed M", "fatherphone": 9629189818, "mother": "Al jasira banu ", "motherphone": 9629189818, "address": "2/280, Kayethemillath,Street, Periapattinam, Periapattinam,Ramanathapuram,623523", "cgpa": "", "arrears": 1}, {"sno": 53, "regno": 311825201054, "name": "VAISHIKA S A", "hostel": "Day Scholar Girls", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 54, "regno": 311825201055, "name": "VASUPRATHA P", "hostel": "Hosteller Girls", "phone": 6385949094, "father": "prabu. B", "fatherphone": 8807141023, "mother": "lakshmi. K", "motherphone": 7845880414, "address": "4/256 Kolathur main road , sreedevi. ( seedevi post), kallakurichi (dt)-606205", "cgpa": "", "arrears": ""}, {"sno": 55, "regno": 311825201056, "name": "YUVARANI A", "hostel": "Day Scholar Girls", "phone": 8825422579, "father": "E. Arul", "fatherphone": 984040429, "mother": "A. sugantha", "motherphone": 9043479869, "address": "No. 32/40 vallal pari nagar 2nd main road Pallikaranai chennai 600100", "cgpa": 8.54, "arrears": 0}, {"sno": "", "regno": 311824201040, "name": "S.MOHMED NOORULLAH ", "hostel": "Hosteller Boys", "phone": 8667594311, "father": "N.sirajudheen", "fatherphone": "91501 40111", "mother": "S.Fathima rehana", "motherphone": 9944844054, "address": "21/113A upstairs gnaniyar street thuckalay,K.K dist", "cgpa": 7.24, "arrears": ""}, {"sno": "", "regno": "", "name": "ABU TALEEB", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}], "3rd Year": [{"sno": 1, "regno": 311824201001, "name": "AALI IBRAHIM", "hostel": "Day Scholar Boys", "phone": 9360752996, "father": "Abdul khader", "fatherphone": " 79041 57221", "mother": "Jennathul firthous ", "motherphone": "88257 74415", "address": "12/44 saiva muthaiya st,mannadi,chennai-1", "cgpa": 5.76, "arrears": 6}, {"sno": 2, "regno": 311824201002, "name": "ABDUL RAHMAN B", "hostel": "Day Scholar Boys", "phone": 9047094458, "father": "K. Babulal", "fatherphone": 9600149948, "mother": "B. Shameema", "motherphone": 9445106818, "address": "22/2 p.m Dharga 1st street triplicane Mylapore Chennai - 600005", "cgpa": 7.76, "arrears": "-"}, {"sno": 3, "regno": 311824201003, "name": "ADHISINDHA T", "hostel": "Hosteller Girls", "phone": 8870732570, "father": "Thangadurai S", "fatherphone": "", "mother": "Chitra T", "motherphone": 8870465208, "address": "1/82, west street,porpadakurichi ,kallakurichi, 606 213.", "cgpa": 9.57, "arrears": "-"}, {"sno": 4, "regno": 311824201004, "name": "ASIM FAYAZ M", "hostel": "Day Scholar Boys", "phone": 7010774315, "father": "MOHAMED RAFI A", "fatherphone": 9790533543, "mother": "RETHINA MUTHU M", "motherphone": 9790533543, "address": "2/3 G-BLOCK ARUMUGA NAGAR,SEKKALAI,KARAIKUDI-630002", "cgpa": 8.12, "arrears": 0}, {"sno": 5, "regno": 311824201005, "name": "ASWIN J S", "hostel": "Day Scholar Boys", "phone": 8939586838, "father": "Sridhar J", "fatherphone": 9361787773, "mother": "Subhashini S", "motherphone": 9176965228, "address": "No. 5/46 Venkatachala naicker street C Pallavaram chennai-600 043", "cgpa": 7.24, "arrears": "-"}, {"sno": 6, "regno": 311824201006, "name": "BALAMURUGAN S", "hostel": "Hosteller Boys", "phone": 9363920720, "father": "K.Selvaraj", "fatherphone": 9488413841, "mother": "S.Sudha", "motherphone": 9655421724, "address": "No:2/55,Vannimara Theru, Kolakkanatham,Alathur(TK), Perambalur (DT)-621106", "cgpa": 7.81, "arrears": 0}, {"sno": 7, "regno": 311824201007, "name": "BHUVANA K", "hostel": "Day Scholar Girls", "phone": 8828981416, "father": "Kumar K", "fatherphone": 9159637738, "mother": "Deivanai K", "motherphone": 9176466825, "address": "Plat no 13,Manikam avenue, kaspapuram, mappedu, Selaiyur. 600126", "cgpa": 9.19, "arrears": "-"}, {"sno": 8, "regno": 311824201008, "name": "DHANISH M", "hostel": "Hosteller Boys", "phone": 6384852570, "father": "Murugan.c", "fatherphone": 7010906874, "mother": "pazhaniammal", "motherphone": 6384852570, "address": "233,T.kalleri Mariamman Kovil Street, tiruvannamalai -606806.", "cgpa": 6.76, "arrears": 1}, {"sno": 9, "regno": 311824201009, "name": "GANESH S", "hostel": "Day Scholar Boys", "phone": 7845851157, "father": "M. Saravanan", "fatherphone": 9789806894, "mother": "R. Varalakshmi", "motherphone": 7358635494, "address": "No. 24,Dharmaraja kovil street, Sholinganallur, chennai-600119", "cgpa": 6.67, "arrears": 1}, {"sno": 10, "regno": 311824201010, "name": "GODWIN JIJO R", "hostel": "Day Scholar Boys", "phone": 9345525709, "father": "Raja Kumar  T", "fatherphone": 7904332936, "mother": "Ajitha J", "motherphone": 7904332936, "address": "123/B , Near Zepto hub, Veeranam street, Padur, Chennai- 603103", "cgpa": 8.29, "arrears": 0}, {"sno": 11, "regno": 311824201011, "name": "GURU PRIYA M", "hostel": "Hosteller Girls", "phone": 6380394171, "father": "MariMuthu R", "fatherphone": 9942221469, "mother": "Kalpana Kumari M", "motherphone": 9976785613, "address": "No 24,North villai street,Muthukrishnapuram,Kadayanallur-627751", "cgpa": 9.1, "arrears": ""}, {"sno": 12, "regno": 311824201012, "name": "ISAIARUVI P M", "hostel": "Day Scholar Girls", "phone": 6385148109, "father": "Parthiban  O", "fatherphone": 9840118697, "mother": "Manogari  P", "motherphone": 8870371362, "address": "No.22 Muthumariamman Kovil St,New nagar, Mullipakkam, Chengalpattu 603105", "cgpa": 8.29, "arrears": ""}, {"sno": 13, "regno": 311824201013, "name": "JAFEER MOHAMED J", "hostel": "Day Scholar Boys", "phone": 9865155761, "father": "Jamal mohamed", "fatherphone": 9095360191, "mother": "Noorjahan J", "motherphone": 9095360191, "address": "24/9,periya pallivasal st,koranad, Mayiladuthurai -609001", "cgpa": 7.71, "arrears": 0}, {"sno": 14, "regno": 311824201014, "name": "JASMIN BANU M", "hostel": "Hosteller Girls", "phone": 7339159361, "father": "Mohamed Saleem  M", "fatherphone": 9941418385, "mother": "Najumunnisa M", "motherphone": 9486739361, "address": "28/53,Uma Maheswari Nagar, Reddipalyam Road, Thanjavur, Tamilnadu,613004", "cgpa": 9.8, "arrears": "-"}, {"sno": 15, "regno": 311824201015, "name": "KARLIN VATHANA M P", "hostel": "Hosteller Boys", "phone": 6374190836, "father": "Manikandan", "fatherphone": "", "mother": "Pramila", "motherphone": 9750661573, "address": "12/39 kanni vilai, viricode (p.o), Marthandam,Kanyakumari -629165", "cgpa": "", "arrears": 2}, {"sno": 16, "regno": 311824201016, "name": "KARTHICK P", "hostel": "Hosteller Boys", "phone": 8489202926, "father": "Perumal. R", "fatherphone": 8939054963, "mother": "Sasikala. P", "motherphone": 9787394170, "address": "2/262, perumal kovil street kolakkanatham(p.o), perambalur(dt), 621106", "cgpa": 6.6, "arrears": 1}, {"sno": 17, "regno": 311824201017, "name": "KAVIN R", "hostel": "Hosteller Boys", "phone": 6385624877, "father": "Regu Rajan R", "fatherphone": 9486669975, "mother": "Raajini P", "motherphone": 9488078377, "address": " 10-84, KUZHAVILAI, HILL \"WARD, KUZHITHURAI, PO: Kuzhithurai,\nDIST: Kanniyakumari, Tamil Nadu - 629163", "cgpa": 7.86, "arrears": 0}, {"sno": 18, "regno": 311824201018, "name": "LITHIKA H", "hostel": "Day Scholar Girls", "phone": 8939012774, "father": "Harikrishnan . M", "fatherphone": 7092303164, "mother": "Karpagam . H", "motherphone": 7092303164, "address": "No : 1299 , 2nd plot , Mylai Balaji Nagar, Pallikaranai, chennai-600100", "cgpa": 9, "arrears": 0}, {"sno": 19, "regno": 311824201019, "name": "MAGIBALA C", "hostel": "Day Scholar Boys", "phone": 9629944827, "father": "chelladurai.s", "fatherphone": 8098836577, "mother": "kamala.c", "motherphone": 9345300582, "address": "no:128 North Street sangaranathar kudikadu, Thirunallur,orathanadu, Thanjavur 614 626", "cgpa": 7.9, "arrears": 5}, {"sno": 20, "regno": 311824201020, "name": "MANIKANDAN M", "hostel": "Day Scholar Boys", "phone": 6381534560, "father": "Murugan .P", "fatherphone": 8072133118, "mother": "Sangeetha .M", "motherphone": 6381534560, "address": "No.159 Union carbide colony 10th Street kodugaiyor chennai 118", "cgpa": 5, "arrears": ""}, {"sno": 21, "regno": 311824201021, "name": "MEIARASAN S", "hostel": "Day Scholar Boys", "phone": 9150917285, "father": "SIVAGURU S", "fatherphone": 8675351585, "mother": "USHA S", "motherphone": 9962207089, "address": "NO.6,  PILLAIYAR KOVIL STREET, PERUNGUDI, CHENNAI - 96", "cgpa": 6.29, "arrears": 1}, {"sno": 22, "regno": 311824201022, "name": "MOHAMED AADHIL", "hostel": "Day Scholar Boys", "phone": 7548809546, "father": "Haja Mohideen Abdul Cader.K", "fatherphone": 9043061614, "mother": "Fathima Nashath .H.M", "motherphone": 9487149489, "address": "37,keela ravoothar palayam, kulasekarapattinam, thoothukudi , 628206", "cgpa": 7.95, "arrears": 0}, {"sno": 23, "regno": 311824201023, "name": "MOHAMED AAKIF H", "hostel": "Day Scholar Boys", "phone": 6383212793, "father": "Hasan Abdul kadar", "fatherphone": 6383212793, "mother": "Sithi maimoona ", "motherphone": 6383212793, "address": "109,rajathi nagar 4th cross,Karaikal -609602", "cgpa": "", "arrears": ""}, {"sno": 24, "regno": 311824201024, "name": "MOHAMED ABDUL KAPOOR M", "hostel": "Day Scholar Boys", "phone": 8610558094, "father": "K. Malik Mohamed", "fatherphone": 9842825164, "mother": "M.Mohideen Fathima", "motherphone": "73392 90926", "address": "105,South Kadaya Street,Tenkasi-627811", "cgpa": 7.86, "arrears": 0}, {"sno": 25, "regno": 311824201025, "name": "MOHAMED AFSAL A", "hostel": "Hosteller Boys", "phone": 7358256103, "father": "A. Asraf Ali", "fatherphone": 9585258611, "mother": "A. Rabiyathul Basiriya", "motherphone": 8438256103, "address": "37/2  pallivasal street thaikkal 609102 Mayiladuthurai district ", "cgpa": 6.21, "arrears": 5}, {"sno": 26, "regno": 311824201026, "name": "MOHAMED AREEF A", "hostel": "Day Scholar Boys", "phone": 8610558636, "father": "K. Ansar Ali", "fatherphone": 9080760838, "mother": "A. Hajara beevi", "motherphone": 9791872797, "address": "6/175c2 pallivasal West Street, Emaneswaram, Paramakudi 623707 ", "cgpa": 7.9, "arrears": 0}, {"sno": 27, "regno": 311824201027, "name": "MOHAMED FAISAL A", "hostel": "Hosteller Boys", "phone": 8667788566, "father": "A.Askar Ali", "fatherphone": 8610466609, "mother": "Hajira banu.A", "motherphone": 8610466609, "address": "322,katchery street kattumannar koil Cuddalore district 608103", "cgpa": 7.95, "arrears": 4}, {"sno": 28, "regno": 311824201028, "name": "MOHAMED FAROOK M", "hostel": "Day Scholar Boys", "phone": 8248920310, "father": "A.Meeran", "fatherphone": 9840248818, "mother": "M.Noornisha", "motherphone": 9952946268, "address": "No:31/56 ground floor shaik dawood street royepettah chennai-14", "cgpa": 6.8, "arrears": 1}, {"sno": 29, "regno": 311824201029, "name": "MOHAMED HASHIB H", "hostel": "Day Scholar Boys", "phone": 8807570450, "father": "H Haja shahul hameed", "fatherphone": 9443526095, "mother": "umul farveen ", "motherphone": 8903702095, "address": "nesamani garden phase 1, mahaveer mobiles 1st floor,padur,603103", "cgpa": 7.9, "arrears": 0}, {"sno": 30, "regno": 311824201030, "name": "MOHAMED HISSAM K", "hostel": "Day Scholar Boys", "phone": 9150053400, "father": "Mohamed Kabeer A", "fatherphone": 9952550522, "mother": "Safurama M.N", "motherphone": 9952550522, "address": "37A,Kottai thangarai street ,Parangipettai,Cuddalore", "cgpa": 8.14, "arrears": 0}, {"sno": 31, "regno": 311824201031, "name": "MOHAMED HUMDHAN I", "hostel": "Hosteller Boys", "phone": 9442107671, "father": "Imam Ali ", "fatherphone": 9944101576, "mother": "Nowsath Begum ", "motherphone": 9952134871, "address": "1/130 south main street, perumal koil post, Therizhandur, kuthalam taluk, Mayiladuthurai district ", "cgpa": 8.1, "arrears": "-"}, {"sno": 32, "regno": 311824201032, "name": "MOHAMED JASIM D", "hostel": "Day Scholar Boys", "phone": 9487401708, "father": "Deen mohamed", "fatherphone": 9443108897, "mother": "farjana begam", "motherphone": 7598186726, "address": "1.50a pallivasal street avaniyapuram , aduthurai 612101", "cgpa": 7.67, "arrears": "-"}, {"sno": 33, "regno": 311824201033, "name": "MOHAMED MUSHTHAR M", "hostel": "Day Scholar Boys", "phone": 8300941024, "father": "Mujibur Rahman ", "fatherphone": 8300072261, "mother": "aashik nisha", "motherphone": 9488791025, "address": "4-227 masuthi street,melachavadi ,thillaividakan,killai , Chidambaram ", "cgpa": 7.95, "arrears": "-"}, {"sno": 34, "regno": 311824201034, "name": "MOHAMED NALEEF K", "hostel": "Day Scholar Boys", "phone": 9384114092, "father": "Khaleefa Thessan.M", "fatherphone": 9629354746, "mother": "Raliya.S", "motherphone": 8870114372, "address": "2/108, west mosque street,Thirumullaivasal, Mayiladuthurai ", "cgpa": "", "arrears": 3}, {"sno": 35, "regno": 311824201035, "name": "MOHAMED SAAJIDH M", "hostel": "Hosteller Boys", "phone": 9363541410, "father": "Mohamed Rasool maricar ", "fatherphone": "82484 99152", "mother": "Farida Nachiyar ", "motherphone": 8489992288, "address": "2/3 pudhumanai street, nagore, Nagapattinam ", "cgpa": 6.1, "arrears": 3}, {"sno": 36, "regno": 311824201036, "name": "MOHAMED SAHIL S", "hostel": "Day Scholar Boys", "phone": 9514387191, "father": "sabir ahamed M", "fatherphone": "-", "mother": "barakath Nisha S", "motherphone": 9786387191, "address": "2/100 Mosque Street Thirumullaivasal Mayiladuthurai District sirkali taluk 609113", "cgpa": 7.33, "arrears": 0}, {"sno": 37, "regno": 311824201037, "name": "MOHAMED SAJITH M", "hostel": "Day Scholar Boys", "phone": 8122607704, "father": "Mohamed Yousuf Ansari.S.N", "fatherphone": 9791606809, "mother": "sakkina barvin .M.S.N", "motherphone": 8122607704, "address": "masthan shahib street Nehru Nagar Pallavaram Chennai 43", "cgpa": 8.24, "arrears": 0}, {"sno": 38, "regno": 311824201038, "name": "MOHAMMED APSAR A", "hostel": "Day Scholar Boys", "phone": 8056706115, "father": "S.Ansar", "fatherphone": 8870079949, "mother": "A saidha", "motherphone": 7305809382, "address": "No 06 baludaiyar street vandavasi 604408", "cgpa": 7.19, "arrears": 3}, {"sno": 39, "regno": 311824201039, "name": "MOHAMMED SAAD K", "hostel": "Day Scholar Boys", "phone": 6379279065, "father": "K Jalaluddin ", "fatherphone": 8220028948, "mother": "B Kashifa taranum", "motherphone": "-", "address": "19/26 Jalal road , Ambur . ", "cgpa": 8.1, "arrears": "-"}, {"sno": 40, "regno": 311824201040, "name": "MOHAMED NOORULLAH S", "hostel": "Hosteller Girls", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 41, "regno": 311824201041, "name": "NAVEERNRAJ S", "hostel": "Day Scholar Boys", "phone": 8072990459, "father": "R.SANTHANAM ", "fatherphone": 9677221923, "mother": "S.VIJAYA", "motherphone": 9884772769, "address": "5 no. royal street SRVS colony keelkattalai chennai 91", "cgpa": "", "arrears": ""}, {"sno": 42, "regno": 311824201042, "name": "PIRIVINDHAN A", "hostel": "Day Scholar Boys", "phone": 9597352591, "father": "Arumugam", "fatherphone": "-", "mother": "Alamelu A", "motherphone": 9500052591, "address": "No:2/962A,Mahatma Gandhi Nagar, Vettuvankeni,Chennai-600115", "cgpa": 6.29, "arrears": 0}, {"sno": 43, "regno": 311824201043, "name": "RAASID AHAMED M", "hostel": "Day Scholar Boys", "phone": 9747815290, "father": "Mohamed yunoos", "fatherphone": 9746815290, "mother": "Mohammed Saleema ", "motherphone": 8157919155, "address": "Quadiriya Manzil, Thamarakandam, Thekkady, Idukki district, kerala ", "cgpa": 7.52, "arrears": "-"}, {"sno": 44, "regno": 311824201044, "name": "RAM SURAT KUMAR S", "hostel": "Hosteller Boys", "phone": 7418359956, "father": "Sambathkumar V", "fatherphone": 9965202587, "mother": "Rajeshwari.K.S", "motherphone": 8508179957, "address": "19,gandhi salai main road thittacherri, Nagapattinam ", "cgpa": 6.67, "arrears": 2}, {"sno": 45, "regno": 311824201045, "name": "REEMA F", "hostel": "Hosteller Girls", "phone": 7358009930, "father": "Firdhouse A K", "fatherphone": 9750859930, "mother": "Balkish Begum F", "motherphone": 8015265299, "address": "47/1 kulathumettu street , kallakurichi", "cgpa": 9.33, "arrears": "-"}, {"sno": 46, "regno": 311824201046, "name": "SANIA MASOOD", "hostel": "Day Scholar Girls", "phone": 8072661816, "father": "Abdul Masood J", "fatherphone": 9840457802, "mother": "Heena Kauser M", "motherphone": 9840457802, "address": "32/57 Nallanna street , Royapettah, Chennai - 14", "cgpa": 9.67, "arrears": "-"}, {"sno": 47, "regno": 311824201047, "name": "SARAVANAN M", "hostel": "Day Scholar Boys", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 48, "regno": 311824201048, "name": "SHAFIYA S", "hostel": "Hosteller Girls", "phone": 7397044527, "father": "A. V. Sankar@Saleem", "fatherphone": 8122029847, "mother": "Shayen S", "motherphone": 7339269816, "address": "3/272A, Rahamed nagar, Sirupanaiyur thakka, koovanur(PT), Kallakurichi(DT) ", "cgpa": 9.19, "arrears": "-"}, {"sno": 49, "regno": 311824201049, "name": "SIDDHARTHI C M S", "hostel": "Day Scholar Girls", "phone": 8939635580, "father": "C Muthuselvam", "fatherphone": 9176763841, "mother": "CMS Rani", "motherphone": 7598319792, "address": "CMR appartments Kelambakkam Thaiyur 603103", "cgpa": 8.14, "arrears": 0}, {"sno": 50, "regno": 311824201050, "name": "SUBASHINI R", "hostel": "Day Scholar Girls", "phone": 8870281090, "father": "Rajkumar.B", "fatherphone": 9150071011, "mother": "Uma Maheswari", "motherphone": 9840541292, "address": "No.11 paari vallal street, unamancheri, kolapakkam,chennai-127", "cgpa": 9.14, "arrears": 0}, {"sno": 51, "regno": 311824201051, "name": "SUMATHI S", "hostel": "Day Scholar Girls", "phone": 7397257672, "father": "S Senthil Kumar ", "fatherphone": 9841397586, "mother": "S Mohana", "motherphone": 7395911140, "address": "143, C Block Perumbakkam ezhil nagar Chennai -131", "cgpa": "", "arrears": ""}, {"sno": 52, "regno": 311824201052, "name": "THAMIZHKUMARAN M", "hostel": "Hosteller Boys", "phone": 6385328032, "father": "Murugesan", "fatherphone": 7904666780, "mother": "Tamilselvi.M", "motherphone": 9095872860, "address": "No:84,New street,Arasur, Thiruvannaamalai (DT)-604407", "cgpa": 7.57, "arrears": 3}, {"sno": 53, "regno": 311824201053, "name": "THERESHA S", "hostel": "Day Scholar Girls", "phone": 8220575487, "father": "S Sankar", "fatherphone": 8508986621, "mother": "S Ranjini", "motherphone": 9344131497, "address": "148, 1st Street perumbakkam villa and post Chengalpattu - 603302", "cgpa": 8.24, "arrears": 0}, {"sno": 54, "regno": 311824201054, "name": "VINOTHINI P", "hostel": "Hosteller Girls", "phone": 9344491293, "father": "S.Ponnusamy", "fatherphone": 9884674053, "mother": "P. Selvi", "motherphone": 9176388741, "address": "3/122 South Street, Adhanur, Alathur Taluk, Perambalur, Tamilnadu, 621708", "cgpa": 8.71, "arrears": 0}, {"sno": 55, "regno": 311824201055, "name": "VISHALI V", "hostel": "Day Scholar Girls", "phone": 8148435464, "father": "R Viji", "fatherphone": 9360367696, "mother": "V Vanitha", "motherphone": 7010641488, "address": "4/154, Selvaraj avenue 1st Street Kottivakkam Ch-41", "cgpa": "", "arrears": ""}, {"sno": 56, "regno": 311824201056, "name": "YAZHINI V", "hostel": "Day Scholar Girls", "phone": 9551652070, "father": "G. Venkatesan", "fatherphone": 9551652050, "mother": "V. Sangeetha", "motherphone": 9094023612, "address": "22/19, 26th street Ashok nagar chennai-600083", "cgpa": 8.29, "arrears": 0}], "4th Year": [{"sno": 1, "regno": 311823243001, "name": "AAMIR AHAMED G", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 2, "regno": 311823243002, "name": "ABINESHWARI K", "hostel": "Day Scholar Girls", "phone": 9025110579, "father": "Kalimuthu K", "fatherphone": 9442043675, "mother": "Kavitha.K", "motherphone": 9360671035, "address": "Karaikudi, Chettinad post, desikanathar temple street, Sivaganga district 630102", "cgpa": 9.47, "arrears": 0}, {"sno": 3, "regno": 311823243003, "name": "DINAKARAN P", "hostel": "Day Scholar Boys", "phone": 9943811534, "father": "Pachaiyappan M", "fatherphone": 9360231060, "mother": "Poomalli P", "motherphone": "82205 88963", "address": "No.336, manmalai mariyamman kovil st, chengam, Tiruvannamalai,606 709", "cgpa": 7.94, "arrears": 0}, {"sno": 4, "regno": 311823243004, "name": "DIVYA DHARSHINI S", "hostel": "Day Scholar Girls", "phone": 7305944570, "father": "Shanmugam S", "fatherphone": 8072034570, "mother": "Sathya S", "motherphone": 9176725248, "address": "No.1, Ranganathapuram, L.B Road,Thiruvanmiyur, Chennai 600041", "cgpa": 9.68, "arrears": 0}, {"sno": 5, "regno": 311823243005, "name": "FAHADUR RAHMAN J", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 6, "regno": 311823243006, "name": "HAFIL AHAMED B", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 7, "regno": 311823243007, "name": "IRSHAD AHMED. N", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 8, "regno": 311823243008, "name": "KAVIN D", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 9, "regno": 311823243009, "name": "MOHAMED FADIL A R", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 10, "regno": 311823243010, "name": "MOHAMED FARSHAN A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 11, "regno": 311823243011, "name": "MOHAMED FOUZ SULAIMAN", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 12, "regno": 311823243012, "name": "MOHAMED RAYYAN B", "hostel": "Hosteller Boys", "phone": "89254 30567 ", "father": "Basheer Ahamed J", "fatherphone": 9677750630, "mother": "Julaiha Beevi B", "motherphone": 9003330619, "address": "3/601-A, Main Road, Baburajapuram, Kumbakonam Tk, 612302", "cgpa": 7.98, "arrears": 0}, {"sno": 13, "regno": 311823243013, "name": "MOHAMED UKKAS M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 14, "regno": 311823243014, "name": "MOHAMED MASOOD BASHA S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 15, "regno": 311823243015, "name": "MOHAMMED AFSAR A", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 16, "regno": 311823243016, "name": "MOHAMMED AMMAR F", "hostel": "Day Scholar Boys", "phone": 9043091945, "father": "FAJULUDEEN M", "fatherphone": 9043091945, "mother": "SHAJITHA BANU S", "motherphone": 9597047320, "address": "No.6, Moulana Mohamed Ali street, Thiruppalathurai, Papanasam - 614205", "cgpa": 7.98, "arrears": 0}, {"sno": 17, "regno": 311823243017, "name": "MOHAMMED SUHAIL HUSSAIN S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 18, "regno": 311823243018, "name": "NIYAS AHMED N", "hostel": "Day Scholar Boys", "phone": 8220178444, "father": "Nowsath Ali M", "fatherphone": 9626228444, "mother": "Noorjahan H", "motherphone": 9486909203, "address": "1/1,New Muslim St,Fathima Nagar,Aduthurai 612101", "cgpa": 7.24, "arrears": 0}, {"sno": 19, "regno": 311823243019, "name": "RAJKUMAR V", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 20, "regno": 311823243020, "name": "RAMYA R", "hostel": "Day Scholar Girls", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 21, "regno": 311823243021, "name": "SAHIBUL MIGFAR", "hostel": "Day Scholar Boys", "phone": 7550229361, "father": "Murshid Ani ", "fatherphone": 9884222769, "mother": "Jasmine ", "motherphone": 9884422936, "address": "H1503 Urbanrise Revolution One OMR padur Chennai 603103", "cgpa": 8.14, "arrears": 0}, {"sno": 22, "regno": 311823243022, "name": "SAJJAD K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": 0}, {"sno": 23, "regno": 311823243023, "name": "SALEEMULLAH S", "hostel": "Hosteller Boys", "phone": 9087335147, "father": "Safiulla. S", "fatherphone": 9677585507, "mother": "Barkathunnisa Begam.A", "motherphone": 9940844191, "address": "8A/19G, Annai nagar, Alambadi Road, Perambalur 621212", "cgpa": 8.03, "arrears": 0}, {"sno": 24, "regno": 311823243024, "name": "SAMIKSHA B", "hostel": "Day Scholar Girls", "phone": 9342831383, "father": "Baskaran ", "fatherphone": 9843503562, "mother": "Kalpana ", "motherphone": 8072459567, "address": "208 A ,Melmanmalai ,Main road,Thukkapettai post, Chengam Thaluk, Tiruvannamalai district 606709", "cgpa": 9, "arrears": 0}, {"sno": 25, "regno": 311823243025, "name": "SANDHIYA S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 26, "regno": 311823243026, "name": "SAQLIN MUSTAQ M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 27, "regno": 311823243027, "name": "SHAREEN NISHATH S", "hostel": "Day Scholar Girls", "phone": 9080487411, "father": "M. A. Sadiq Basha", "fatherphone": 8754664226, "mother": "Hasina Jan", "motherphone": 9791480810, "address": "350/208, Triplicane high road, Triplicane,  Chennai - 600005", "cgpa": 9, "arrears": 0}, {"sno": 28, "regno": 311823243028, "name": "SHYAM S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 29, "regno": 311823243029, "name": "SIVAVADIVEL S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 30, "regno": 311823243030, "name": "MUHAMMED JUNAID ANWAR SYED", "hostel": "Day Scholar Boys", "phone": 9042430805, "father": "Anwar", "fatherphone": 9884560767, "mother": "Naseem", "motherphone": 98845607767, "address": "34 Elaiamman koil street kotturpuram", "cgpa": 6, "arrears": 1}, {"sno": 31, "regno": 311823243031, "name": "TAAHA M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}]}, "CSBS": {"1st Year": [{"sno": 1, "regno": "", "name": "ABINAYA G", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 2, "regno": "", "name": "FAIYAZ AHAMED M N", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 3, "regno": "", "name": "FATHIMA B S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 4, "regno": "", "name": "KANNA K", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 5, "regno": "", "name": "LITHISHA J", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 6, "regno": "", "name": "MOHAMED AJMAL M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 7, "regno": "", "name": "MOHAMED NABEEL N", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 8, "regno": "", "name": "MOHAMED NADHEEM M", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 9, "regno": "", "name": "MOHAMED SHAHEEM", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}, {"sno": 10, "regno": "", "name": "REEMA BARVEEN S", "hostel": "", "phone": "", "father": "", "fatherphone": "", "mother": "", "motherphone": "", "address": "", "cgpa": "", "arrears": ""}]}};
const SEED_SUBJECTS = {"AI & DS": {"1": [{"code": "24MC121", "name": "Induction Program : Universal Human Value - I"}, {"code": "24TA101", "name": "Heritage of Tamils"}, {"code": "24EN111", "name": "Technical Communication - I"}, {"code": "24CH112", "name": "Engineering Chemistry"}, {"code": "24PY112", "name": "Engineering Physics"}, {"code": "24MA111", "name": "Matrices and Calculus"}, {"code": "24CS112", "name": "Computational Thinking"}, {"code": "24CS111", "name": "Programming in C"}, {"code": "24GE125", "name": "Makers Space lab - Electrical and Electronics"}, {"code": "24SP121", "name": "Physical Education - I"}, {"code": "24MC122", "name": "NSS / NSO / YRC - Level I"}], "2": [{"code": "24TA201", "name": "Tamils and Technology"}, {"code": "24GE101", "name": "Basic Civil and Mechanical Engineering"}, {"code": "24EN211", "name": "Technical Communication - II"}, {"code": "24PY211", "name": "Semiconductor Devices and Quantum Technology"}, {"code": "24MA211", "name": "Transforms and Numerical Methods"}, {"code": "24ME111", "name": "Engineering Visualization and 3D Modelling"}, {"code": "24CS211", "name": "Python Programming"}, {"code": "24IT121", "name": "IT Essential Skills"}, {"code": "24GE126", "name": "Makers Space lab - Mechanical and Civil"}, {"code": "24SP221", "name": "Physical Education - II"}, {"code": "24AU221", "name": "Audit Course - I : Digital Wellness"}], "3": [{"code": "24MA301", "name": "Discrete Mathematics"}, {"code": "24AD301", "name": "Data Science"}, {"code": "24CS302", "name": "Data Structures"}, {"code": "24CS303", "name": "Java Programming"}, {"code": "24EC313", "name": "Basic Electrical and Digital Electronics"}, {"code": "24ES321", "name": "Innovation and Design Thinking"}, {"code": "24AD321", "name": "Data Science Laboratory"}, {"code": "24CS321", "name": "Data Structures Lab"}, {"code": "24CS322", "name": "Java Programming Laboratory"}, {"code": "24MC321", "name": "NSS / NSO / YRC - Level II"}], "4": [{"code": "24AM401", "name": "Artificial Intelligence"}, {"code": "24CS402", "name": "Design and Analysis of Algorithms"}, {"code": "24AD409", "name": "Standards of AI"}, {"code": "24GE421", "name": "Startup and Entrepreneurship"}, {"code": "24MA411", "name": "Probability and Statistics"}, {"code": "24CH412", "name": "Environmental Studies and Sustainable Development"}, {"code": "24AD412", "name": "Database Design and Management Systems"}, {"code": "24GE311", "name": "Universal Human Values and Ethics"}, {"code": "24AM421", "name": "Artificial Intelligence Lab"}], "5": [{"code": "24AM501", "name": "Machine Learning"}, {"code": "24AD501", "name": "Agentic Gen AI"}, {"code": "24AD512", "name": "Data Exploration and Visualization"}, {"code": "24EC611", "name": "Computer Architecture and Networks"}, {"code": "24CS411", "name": "Operating Systems"}, {"code": "24EC412", "name": "Microcontroller and Interfacing"}, {"code": "24AM521", "name": "Machine Learning Lab"}, {"code": "24AD522", "name": "Mini Project / Summer Internship - I"}], "6": [{"code": "24AD601", "name": "Distributed and Cloud Computing"}, {"code": "24CY602", "name": "Data Privacy and Security"}, {"code": "24AD611", "name": "Deep Learning"}, {"code": "24CS612", "name": "UI and UX Design"}, {"code": "24IT622", "name": "Full Stack Development Lab"}, {"code": "24AD621", "name": "Software Project Development Lab"}], "7": [{"code": "24AD701", "name": "Natural Language Processing"}, {"code": "24IT612", "name": "Big Data Analytics"}, {"code": "24GE721", "name": "Soft Skill and Personality Development"}, {"code": "24AD721", "name": "Comprehension"}, {"code": "24AD722", "name": "Mini Project / Summer Internship - II"}], "8": [{"code": "24AD821", "name": "Internship cum Project"}]}};

const STORAGE_KEY = 'student_records_v2';
const SUBJECTS_KEY = 'student_records_subjects_v1';
const THEME_KEY = 'aids_theme_pref';

function loadData(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return JSON.parse(JSON.stringify(SEED_DATA));
}
function saveData(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA)); }catch(e){ toast('Storage error — changes may not persist'); }
}

function loadSubjects(){
  try{
    const raw = localStorage.getItem(SUBJECTS_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return JSON.parse(JSON.stringify(SEED_SUBJECTS));
}
function saveSubjects(){
  try{ localStorage.setItem(SUBJECTS_KEY, JSON.stringify(SUBJECTS)); }catch(e){ toast('Storage error — subjects may not persist'); }
}

// ---- Dept-wide PEO / PO / PSO (Program Educational Objectives / Program
// Outcomes / Program Specific Outcomes), shared by every subject's CO
// attainment mapping ----
const PROGRAM_OUTCOMES_KEY = 'student_records_program_outcomes_v1';
const STANDARD_POS = [
  'Engineering knowledge', 'Problem analysis', 'Design/development of solutions',
  'Conduct investigations of complex problems', 'Modern tool usage', 'The engineer and society',
  'Environment and sustainability', 'Ethics', 'Individual and team work', 'Communication',
  'Project management and finance', 'Life-long learning',
];
function defaultProgramOutcomes(){
  return {
    peos: [],
    pos: STANDARD_POS.map((desc,i)=>({code:'PO'+(i+1), description:desc})),
    psos: [],
  };
}
function loadProgramOutcomes(){
  try{ const raw = localStorage.getItem(PROGRAM_OUTCOMES_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveProgramOutcomes(){
  try{ localStorage.setItem(PROGRAM_OUTCOMES_KEY, JSON.stringify(PROGRAM_OUTCOMES)); }catch(e){ toast('Storage error — PEO/PO/PSO may not persist'); }
}
function ensureProgramOutcomes(dept){
  if(!PROGRAM_OUTCOMES[dept]) PROGRAM_OUTCOMES[dept] = defaultProgramOutcomes();
  return PROGRAM_OUTCOMES[dept];
}

const FACULTY_KEY = 'student_records_faculty_v1';
const ATT_KEY = 'student_records_attendance_v1';
const FAC_ATT_KEY = 'student_records_faculty_attendance_v1';
const HOD_SCOPE_KEY = 'student_records_hod_scope_v1';
const TIMETABLE_KEY = 'student_records_timetable_v1';
const PERIOD_TIMES_KEY = 'student_records_period_times_v1';
const TIMINGS_KEY = 'student_records_timings_v1';
const SUBJ_FAC_KEY = 'student_records_subject_faculty_v1';
const ALARM_KEY = 'student_records_alarm_v1';
const NUM_PERIODS_KEY = 'student_records_num_periods_v1';
const OD_TYPES_KEY = 'student_records_od_types_v1';
const DIARY_KEY = 'student_records_diary_v1';
const TASKS_KEY = 'student_records_tasks_v1';
const MOM_KEY = 'student_records_mom_v1';
const COMBINED_GROUPS_KEY = 'student_records_combined_groups_v1';
const MARKS_KEY = 'student_records_marks_v1';
const QUICK_ATT_KEY = 'student_records_quick_att_v1';
const DEFAULT_OD_TYPES = ['Sports','Event','Workshop','In-campus OD','Out-campus OD','Others'];
function loadOdTypes(){
  try{
    const raw = localStorage.getItem(OD_TYPES_KEY);
    if(raw){ const arr = JSON.parse(raw); if(Array.isArray(arr) && arr.length) return arr; }
  }catch(e){}
  return [...DEFAULT_OD_TYPES];
}
function saveOdTypes(){
  try{ localStorage.setItem(OD_TYPES_KEY, JSON.stringify(OD_TYPES)); }catch(e){ toast('Storage error — OD types may not persist'); }
}
let OD_TYPES = loadOdTypes(); // user-extensible via "+ Add new…" in the OD dropdown
// Full 7-day week, Monday-first, so any day can carry a timetable/timing
// override when needed. Which of these are actually treated as working
// days (shown as columns, used by the generator, counted as "today" for
// Live Status, etc.) is a separate, editable setting — see workingDays().
const WEEKDAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
// By default only Monday-Friday are working days; Saturday and Sunday are
// occasionally turned into working days (e.g. a compensatory class) from
// Settings, without ever losing whatever was scheduled/marked on them.
const DEFAULT_WORKING_DAYS = ['Mon','Tue','Wed','Thu','Fri'];
function workingDays(){
  const wd = APP_SETTINGS.workingDays;
  return (Array.isArray(wd) && wd.length) ? WEEKDAYS.filter(d=>wd.includes(d)) : DEFAULT_WORKING_DAYS;
}

// Number of periods a day runs is configurable (Timings → Number of
// Periods), so PERIODS and DEFAULT_PERIOD_TIMES are recomputed rather than
// fixed constants — every part of the app that lists periods reads PERIODS
// fresh, so growing/shrinking it just works everywhere.
function loadNumPeriods(){
  try{ const raw = localStorage.getItem(NUM_PERIODS_KEY); if(raw) return Math.max(1, Math.min(16, parseInt(raw,10)||7)); }catch(e){}
  return 7;
}
function saveNumPeriods(){
  try{ localStorage.setItem(NUM_PERIODS_KEY, String(NUM_PERIODS)); }catch(e){}
}
function generateSequentialTimes(n, startTime, durationMin){
  const out = [];
  let [h,m] = (startTime||'09:00').split(':').map(Number);
  let total = h*60+m;
  for(let i=0;i<n;i++){
    out.push(String(Math.floor(total/60)%24).padStart(2,'0')+':'+String(total%60).padStart(2,'0'));
    total += durationMin||50;
  }
  return out;
}
let NUM_PERIODS = loadNumPeriods();
let PERIODS = Array.from({length:NUM_PERIODS}, (_,i)=>i+1);
let DEFAULT_PERIOD_TIMES = generateSequentialTimes(NUM_PERIODS, '09:00', 50);

function loadFaculty(){
  try{ const raw = localStorage.getItem(FACULTY_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveFaculty(){
  try{ localStorage.setItem(FACULTY_KEY, JSON.stringify(FACULTY)); }catch(e){ toast('Storage error — faculty may not persist'); }
}

function loadAttendance(){
  try{ const raw = localStorage.getItem(ATT_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveAttendance(){
  try{ localStorage.setItem(ATT_KEY, JSON.stringify(ATT)); }catch(e){ toast('Storage error — attendance may not persist'); }
}

function loadFacAttendance(){
  try{ const raw = localStorage.getItem(FAC_ATT_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveFacAttendance(){
  try{ localStorage.setItem(FAC_ATT_KEY, JSON.stringify(FAC_ATT)); }catch(e){ toast('Storage error — faculty attendance may not persist'); }
}

function loadDiary(){
  try{ const raw = localStorage.getItem(DIARY_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveDiary(){
  try{ localStorage.setItem(DIARY_KEY, JSON.stringify(DIARY)); }catch(e){ toast('Storage error — diary may not persist'); }
}

function loadTasks(){
  try{ const raw = localStorage.getItem(TASKS_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveTasks(){
  try{ localStorage.setItem(TASKS_KEY, JSON.stringify(TASKS)); }catch(e){ toast('Storage error — task checklist may not persist'); }
}

function loadMoM(){
  try{ const raw = localStorage.getItem(MOM_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return [];
}
function saveMoM(){
  try{ localStorage.setItem(MOM_KEY, JSON.stringify(MOM)); }catch(e){ toast('Storage error — minutes of meeting may not persist'); }
}

function loadCombinedGroups(){
  try{ const raw = localStorage.getItem(COMBINED_GROUPS_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return [];
}
function saveCombinedGroups(){
  try{ localStorage.setItem(COMBINED_GROUPS_KEY, JSON.stringify(COMBINED_GROUPS)); }catch(e){ toast('Storage error — combined classes may not persist'); }
}

// QUICK_ATT[dept][year][date][period] = {total,present,absent,od,savedAt} —
// the Quick Attendance Count sheet's own tiny store, separate from the
// per-student ATT records used by the main Attendance sheet/reports/donuts.
function loadQuickAtt(){
  try{ const raw = localStorage.getItem(QUICK_ATT_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function loadMarks(){
  try{ const raw = localStorage.getItem(MARKS_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveMarks(){
  try{ localStorage.setItem(MARKS_KEY, JSON.stringify(MARKS)); }catch(e){ toast('Storage error — marks may not persist'); }
}

function loadHodScope(){
  try{ const raw = localStorage.getItem(HOD_SCOPE_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveHodScope(){
  try{ localStorage.setItem(HOD_SCOPE_KEY, JSON.stringify(HOD_SCOPE)); }catch(e){}
}

function loadTimetable(){
  try{ const raw = localStorage.getItem(TIMETABLE_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveTimetable(){
  try{ localStorage.setItem(TIMETABLE_KEY, JSON.stringify(TIMETABLE)); }catch(e){ toast('Storage error — timetable may not persist'); }
}

function loadPeriodTimes(){
  try{ const raw = localStorage.getItem(PERIOD_TIMES_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return DEFAULT_PERIOD_TIMES.slice();
}
function savePeriodTimes(){
  try{ localStorage.setItem(PERIOD_TIMES_KEY, JSON.stringify(PERIOD_TIMES)); }catch(e){}
}

const DEFAULT_SHORT_BREAK = {start:'10:40', end:'10:50'};
const DEFAULT_LUNCH = {start:'13:10', end:'14:00'};

// TIMINGS.general is the college-wide schedule; TIMINGS.perYear[year], when
// present with useGeneral:false, overrides period/break/lunch times for
// just that academic year (e.g. "1st Year" running a different bell schedule).
function loadTimings(){
  try{
    const raw = localStorage.getItem(TIMINGS_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(!parsed.perYear) parsed.perYear = {};
      if(!parsed.perDay) parsed.perDay = {}; // back-compat with backups saved before day overrides existed
      return parsed;
    }
  }catch(e){}
  return {
    general: { periods: (loadPeriodTimes()), shortBreak: {...DEFAULT_SHORT_BREAK}, lunch: {...DEFAULT_LUNCH} },
    perYear: {},
    perDay: {}
  };
}
function saveTimings(){
  try{ localStorage.setItem(TIMINGS_KEY, JSON.stringify(TIMINGS)); }catch(e){ toast('Storage error — timings may not persist'); }
}
function getYearTiming(year){
  const y = TIMINGS.perYear && TIMINGS.perYear[year];
  if(y && y.useGeneral===false) return y;
  return TIMINGS.general;
}
// A weekday override (e.g. Friday running a shorter pre-lunch and a later
// Jumma lunch) takes priority over the year's own timing for that one day —
// it's meant to apply college-wide on that day, whichever year is showing.
function getTimingFor(year, day){
  const d = TIMINGS.perDay && TIMINGS.perDay[day];
  if(d && d.useGeneral===false) return d;
  return getYearTiming(year);
}

function loadSubjectFacultyMap(){
  try{ const raw = localStorage.getItem(SUBJ_FAC_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
function saveSubjectFacultyMap(){
  try{ localStorage.setItem(SUBJ_FAC_KEY, JSON.stringify(SUBJ_FAC_MAP)); }catch(e){}
}

function loadAlarmSettings(){
  try{ const raw = localStorage.getItem(ALARM_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return { enabled:false, faculty:'', subject:'' };
}
function saveAlarmSettings(){
  try{ localStorage.setItem(ALARM_KEY, JSON.stringify(ALARM_SETTINGS)); }catch(e){}
}

function todayStr(){
  const d = new Date();
  const pad = n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

let DATA = loadData();
let SUBJECTS = loadSubjects();
let PROGRAM_OUTCOMES = loadProgramOutcomes(); // PROGRAM_OUTCOMES[dept] = {peos, pos, psos}
let FACULTY = loadFaculty();
let ATT = loadAttendance();       // ATT[dept][year][date][period] = {markedAt, records:{studentId:{status,od}}}
let FAC_ATT = loadFacAttendance(); // FAC_ATT[dept][date] = {markedAt, records:{facultyId:{status,od}}}
let HOD_SCOPE = loadHodScope();    // HOD_SCOPE[dept] = {included:true, years:{year:true}}
let DIARY = loadDiary();           // DIARY[dept] = [{_id,date,time,title,type,notes,createdAt}]
let TASKS = loadTasks();           // TASKS[dept] = [{_id,title,status,remarks,deadline,createdAt}]
let MOM = loadMoM();                // MOM = [{_id,date,time,title,venue,chair,attendees,agenda,minutes,actions,createdAt}] — HOD-level, not per-department
let COMBINED_GROUPS = loadCombinedGroups(); // [{_id,name,members:[{dept,year}]}] — e.g. "AI & DS + CSBS" for classes taught together
let QUICK_ATT = loadQuickAtt();
// One-time, additive-only migration: earlier versions of this app kept
// "Quick Attendance Count" entries in their own separate store (QUICK_ATT),
// invisible to donuts/reports/HOD views/timetable — exactly the kind of
// split-data problem this app should never have. Fold any old entries into
// the shared ATT store they should have used all along, but ONLY into a
// slot that's still empty — never overwrite existing per-student or Class
// Totals data that's already there. New Quick Counts go straight into ATT
// from now on (see qcRecordFor/saveQcForm), so this only ever runs once
// per old entry.
(function migrateQuickAttIntoSharedAttendance(){
  let migrated = 0;
  Object.keys(QUICK_ATT||{}).forEach(dept=>{
    Object.keys(QUICK_ATT[dept]||{}).forEach(year=>{
      Object.keys(QUICK_ATT[dept][year]||{}).forEach(date=>{
        Object.keys(QUICK_ATT[dept][year][date]||{}).forEach(period=>{
          const already = ATT[dept] && ATT[dept][year] && ATT[dept][year][date] && ATT[dept][year][date][period];
          if(already) return; // real data already there — never touch it
          const q = QUICK_ATT[dept][year][date][period];
          if(!ATT[dept]) ATT[dept] = {};
          if(!ATT[dept][year]) ATT[dept][year] = {};
          if(!ATT[dept][year][date]) ATT[dept][year][date] = {};
          ATT[dept][year][date][period] = {
            markedAt: q.savedAt || Date.now(),
            records: {},
            bulk: {total:q.total||0, present:q.present||0, absent:q.absent||0, od:q.od||0},
          };
          migrated++;
        });
      });
    });
  });
  if(migrated) saveAttendance();
})();
let MARKS = loadMarks(); // MARKS[dept][year][subjectCode] = {studentId: {cia1,cia2,cia3,assignment,model}}
let TIMETABLE = loadTimetable();   // TIMETABLE[dept][year][weekday][period] = {subject,faculty,venue}
let PERIOD_TIMES = loadPeriodTimes(); // ['09:00', '09:50', ...] one per PERIODS index
let TIMINGS = loadTimings();          // {general:{periods,shortBreak,lunch}, perYear:{year:{...,useGeneral:false}}}
let SUBJ_FAC_MAP = loadSubjectFacultyMap(); // SUBJ_FAC_MAP[dept][code] = last-used faculty name
let ALARM_SETTINGS = loadAlarmSettings();
let currentView = 'dashboard';
let currentDept = Object.keys(DATA)[0];
let currentFacDept = Object.keys(DATA)[0];
let currentTtDept = Object.keys(DATA)[0];
let currentTtYear = Object.keys(DATA[currentTtDept])[0];
let currentTtDay = todayWeekdayAbbr();
let currentYear = Object.keys(DATA[currentDept])[0];
let editingId = null; // {year, index}
let deleteTarget = null;
let idCounter = Date.now();

// ---- Resizing the period count keeps every existing timing scope in sync ----
function resizeTimesArray(arr, n){
  const out = (arr||[]).slice(0, n);
  while(out.length < n){
    const last = out[out.length-1] || DEFAULT_PERIOD_TIMES[out.length-1] || '09:00';
    const [h,m] = last.split(':').map(Number);
    const total = h*60+m+50;
    out.push(String(Math.floor(total/60)%24).padStart(2,'0')+':'+String(total%60).padStart(2,'0'));
  }
  return out;
}
function resizePeriodOrder(arr, n){
  if(!Array.isArray(arr)) return undefined;
  let out = arr.filter(p=>p<=n);
  for(let p=1;p<=n;p++){ if(!out.includes(p)) out.push(p); }
  return out.length===n ? out : undefined;
}
function resizeTimingCfg(cfg, n){
  cfg.periods = resizeTimesArray(cfg.periods, n);
  if(cfg.periodEnds) cfg.periodEnds = resizeTimesArray(cfg.periodEnds, n);
  const order = resizePeriodOrder(cfg.periodOrder, n);
  if(order) cfg.periodOrder = order; else delete cfg.periodOrder;
}
// Applies a new period count everywhere: PERIODS/DEFAULT_PERIOD_TIMES are
// recomputed, and every saved timing scope (General, each year, each
// weekday override) is resized to match — new periods get sensible default
// times, removed ones are dropped.
function applyNumPeriods(n){
  n = Math.max(1, Math.min(16, n));
  NUM_PERIODS = n;
  saveNumPeriods();
  DEFAULT_PERIOD_TIMES = generateSequentialTimes(n, DEFAULT_PERIOD_TIMES[0]||'09:00', 50);
  PERIODS = Array.from({length:n}, (_,i)=>i+1);
  resizeTimingCfg(TIMINGS.general, n);
  Object.values(TIMINGS.perYear||{}).forEach(cfg=>resizeTimingCfg(cfg, n));
  Object.values(TIMINGS.perDay||{}).forEach(cfg=>resizeTimingCfg(cfg, n));
  saveTimings();
  PERIOD_TIMES = TIMINGS.general.periods; savePeriodTimes();
}

function ensureIds(){
  Object.keys(DATA).forEach(d=>{
    Object.keys(DATA[d]).forEach(y=>{
      DATA[d][y].forEach(s=>{ if(!s._id){ s._id = 'id'+(idCounter++); } });
    });
  });
  Object.keys(FACULTY).forEach(d=>{
    (FACULTY[d]||[]).forEach(f=>{ if(!f._id){ f._id = 'fac'+(idCounter++); } });
  });
  // make sure every department that has students also has a faculty bucket
  Object.keys(DATA).forEach(d=>{ if(!FACULTY[d]) FACULTY[d] = []; });
}
ensureIds();

function ensureHodScope(dept){
  if(!HOD_SCOPE[dept]) HOD_SCOPE[dept] = { included: true, years: {} };
  Object.keys(DATA[dept]||{}).forEach(y=>{
    if(!(y in HOD_SCOPE[dept].years)) HOD_SCOPE[dept].years[y] = true;
  });
  return HOD_SCOPE[dept];
}
function deptIncluded(dept){ return ensureHodScope(dept).included !== false; }
function yearIncluded(dept, year){
  const sc = ensureHodScope(dept);
  return sc.included !== false && sc.years[year] !== false;
}

function currentList(){
  return (DATA[currentDept] && DATA[currentDept][currentYear]) || [];
}

function currentFacultyList(){
  return FACULTY[currentFacDept] || [];
}

// Best-effort mapping from a year-tab label to the two semesters it covers,
// e.g. "1st Year" -> [1,2], "3rd Year" -> [5,6]. Falls back to all semesters.
function semestersForYear(yearLabel){
  const m = String(yearLabel||'').match(/(\d+)/);
  if(!m) return null;
  const n = parseInt(m[1], 10);
  if(!n || n < 1 || n > 4) return null;
  return [n*2 - 1, n*2];
}

function subjectsForDept(dept){
  return SUBJECTS[dept] || {};
}

// Flat list of {code,name} for the current dept, optionally scoped to the
// semesters matching the current year tab (falls back to all semesters).
function relevantSubjects(dept, yearLabel){
  const bySem = subjectsForDept(dept);
  const sems = semestersForYear(yearLabel);
  const semKeys = sems ? sems.map(String) : Object.keys(bySem);
  const seen = new Map();
  semKeys.forEach(sk=>{
    (bySem[sk]||[]).forEach(sub=>{
      if(sub.code) seen.set(sub.code.toUpperCase(), sub);
    });
  });
  // Also include the rest as fallback suggestions after the primary ones
  Object.keys(bySem).forEach(sk=>{
    (bySem[sk]||[]).forEach(sub=>{
      const key = (sub.code||'').toUpperCase();
      if(key && !seen.has(key)) seen.set(key, sub);
    });
  });
  return [...seen.values()];
}

// ---------- Theme ----------
const themeBtn = document.getElementById('themeBtn');
function applyTheme(){
  const pref = localStorage.getItem(THEME_KEY);
  if(pref === 'dark'){ document.documentElement.setAttribute('data-theme','dark'); }
  else if(pref === 'light'){ document.documentElement.setAttribute('data-theme','light'); }
  else { document.documentElement.removeAttribute('data-theme'); }
}
themeBtn.addEventListener('click', ()=>{
  const cur = localStorage.getItem(THEME_KEY);
  const next = cur === 'dark' ? 'light' : (cur === 'light' ? null : 'dark');
  if(next) localStorage.setItem(THEME_KEY, next); else localStorage.removeItem(THEME_KEY);
  applyTheme();
});
applyTheme();

// ---------- App Settings (institution details, header display, font size) ----------
const APP_SETTINGS_KEY = 'student_records_app_settings_v1';
const FONT_SCALE_KEY = 'student_records_font_scale_v1';
const APP_VERSION = '3.11.27';
const APP_HISTORY = [
  {version:'3.11.27', notes:'Dashboard — Today\'s Attendance Snapshot: removed the "⇠ Swipe a row for Edit / Delete / Share" hint line above the rows; the gesture is unchanged, just no longer spelled out.'},
  {version:'3.11.26', notes:'HOD tab — Student Attendance: each row now has its own checkbox, plus a "Select all" toggle, so you can share just one row, a hand-picked few, or every row together via the new "📤 Share Selected" button — separate from the existing 📤 Share button, which still shares by the Departments/Years/Periods filters above.'},
  {version:'3.11.25', notes:'HOD tab — Student Attendance: each row\'s swipe actions now include 📤 Share (alongside Edit/Delete) to share just that one row\'s dept/year/period/date and counts, matching the Dashboard\'s own snapshot rows.'},
  {version:'3.11.24', notes:'HOD tab — Student Attendance: each row now also shows its date (e.g. "30 Sep 2026 · Period 1"), not just the period, so it\'s clear which day the snapshot is for even after scrolling past the section\'s own Date field.'},
  {version:'3.11.23', notes:'Faculty Timetable grid: press and hold any scheduled period to unschedule it (with a confirmation prompt) — an alternative to opening it and reassigning it in Edit Mode. Already-saved attendance/class-record history for that period is kept.'},
  {version:'3.11.22', notes:'Faculty Daily Class Record (tap a period on a faculty\'s timetable): added a "Clear" button to blank the topic/attendance fields without saving, and a "Delete" button (shown only when that period already has a saved topic or attendance) to remove that period\'s record entirely, with a confirmation prompt.'},
  {version:'3.11.21', notes:'Dashboard: "Today\'s Attendance Snapshot" and "Overall Attendance" headings now name the included department(s) (e.g. "AI & DS — All Included Years"), useful once more than one department is on file. "Attendance by Year — pick any combination" now shows a separate donut per ticked year, each with its own Present/Absent/On-Duty/Total, instead of merging every ticked year into one combined number.'},
  {version:'3.11.20', notes:'Faculty Timetable screen: added a "Departments" checklist above the Faculty picker — tick any combination to narrow which faculty show, plus a "+ Add New Department" shortcut right there instead of having to leave this screen. Defaults to every department ticked, so nothing changes until you actually narrow it.'},
  {version:'3.11.19', notes:'Settings: the old single "Principal / HOD Name" field is now two separate fields — HOD Name and Principal Name — carried over automatically from whatever was in the old field. Both now also appear under their respective signature line (HOD Signature / Principal Signature) on the 🖨️ Print / PDF letterhead.'},
  {version:'3.11.18', notes:'Add/Edit Student form: Gender is now asked first, and the Category field stays disabled until it\'s picked. Category also expanded from Day Scholar/Hosteller into 3 types — Day Scholar, College Hostel, Private Hostel — and only shows the 3 matching the selected Gender (e.g. Male shows Day Scholar Boys / College Hostel Boys / Private Hostel Boys). Bulk Add\'s category column and the Hostellers count/filter were updated to recognize the new categories too; existing students already saved as "Hosteller Boys/Girls" are unaffected and still count correctly.'},
  {version:'3.11.17', notes:'Housekeeping: removed 3 dead functions that nothing in the app called any more (saveQuickAtt — Quick Attendance Count now persists through the main Attendance save path; findAssignedFaculty — a thin wrapper around collectAssignedFaculty(); prDaysBack — an unused date-range helper). No behavior change; scanned all 367 top-level functions and these were the only ones with zero real callers.'},
  {version:'3.11.16', notes:'Fixed the Dashboard\'s "Overall Attendance" donut undercounting: the "Include 1st Year" checkbox looked ticked but had no real effect if 1st Year had separately been turned off in Settings → Dashboard & Report Scope (Include/Exclude) — the total silently left 1st Year out either way. The checkbox now directly overrides that scope setting for this one donut, so ticking it always includes 1st Year in the total, and unticking it always excludes it.'},
  {version:'3.11.15', notes:'The "student-wise details" list under any donut (Present/Absent/On-Duty/Not Marked, on the Dashboard or HOD tab) now: (1) tapping a student\'s name jumps straight to their profile in Students, and (2) the list is organized Year-wise first (1st → 4th) with alphabetical order within each year, instead of one jumbled list sorted by register number.'},
  {version:'3.11.14', notes:'Added ABU TALEEB to AI & DS — 2nd Year (57th student). Register no., phone and other details are left blank — edit his profile in Students to fill those in.'},
  {version:'3.11.13', notes:'Restored the 201-student dataset (AI & DS + CSBS) that v3.11.12 had removed — it turned out to be your real class list, not placeholder demo data, so the "no data" request the previous version acted on was a misunderstanding. Department/Year tabs are back to normal.'},
  {version:'3.11.12', notes:'(Reverted) Removed the 201-student seed dataset (AI & DS + CSBS) that had been baked into the file — see 3.11.13.'},
  {version:'3.11.11', notes:'Dashboard Quick Actions: "Enter Today\'s Attendance", "Share Today\'s Attendance" and "Quick Attendance Count" now use the same outline/ghost button style as every other button in the app, instead of the solid blue "primary" style — less visually loud, consistent with the rest of the toolbar.'},
  {version:'3.11.10', notes:'Simplified the Attendance toolbar and HOD tab. Students toolbar: kept 🗓️ Attendance and 🔢 Class Totals up front, tucked OD Report/Missing Data/Subjects/Bulk Add/Export/Select behind a new "⋯ More" menu instead of nine buttons in a row. HOD tab: Student Totals and today\'s Student Attendance stay open as before (the daily-use ones), but Live Student Status, Faculty Attendance, Syllabus Coverage, Task Monitor, MoM, Leave & OD Report, Report, Backup & Restore and Archive are now collapsed by default — tap a heading to open just the one you need instead of scrolling past all of them every time.'},
  {version:'3.11.9', notes:'Performance: new 🗄️ Archive Old Attendance under HOD → Backup & Restore. Attendance keeps growing forever in the same record that re-syncs to the cloud on every edit, which can slow things down after a few years of use — this lets you pick a cutoff date, downloads everything marked before it as a backup file, then removes it from the live app (PIN-gated, like Restore Backup; students/faculty/marks/timetable are never touched). Archived dates stop appearing in reports/Dashboard/OD Report, so keep the downloaded file if you may need to look them up again.'},
  {version:'3.11.8', notes:'Performance: the Students and Faculties search boxes now debounce (wait ~180ms after you stop typing) before re-rendering the grid, instead of re-rendering on every keystroke — smoother typing, especially on larger lists/older phones. (Cloud sync was already debounced at 800ms.)'},
  {version:'3.11.7', notes:'Today\'s Student Attendance (HOD view) can now share several departments together — the single Department dropdown is now a "Departments" checklist (tick as many as you like, with All/None), and Years applies across all of them, so e.g. 2nd/3rd/4th Year can be shared for 2–3 departments in one combined message (each department gets its own 🏫 heading when more than one is included). Also moved the Dashboard\'s "⚙️ Include/Exclude" scope control out of the Dashboard and into Settings → 📊 Dashboard & Report Scope, so the Dashboard itself stays free of settings-type controls.'},
  {version:'3.11.6', notes:'Removed the "Source: Class Totals" header line and per-row "(Class Totals)" tags from the Today\'s Attendance share text and the dashboard row\'s quick Share action — the shared message is now just the department/year/period and counts, with no mention of how it was entered.'},
  {version:'3.11.5', notes:'Removed the last remaining always-visible description paragraphs across the app (HOD dashboard sections, Bulk Add, Class Totals, Quick Attendance Count, Combined Classes, Mark Components, Include/Exclude, Timings, Copy Timetable, Auto-Generate Timetable, PEO/PO/PSO, CO–PO/PSO Attainment) — each now sits behind the same tiny "i" info icon used elsewhere, tap to read it.'},
  {version:'3.11.4', notes:'Dashboard\'s Today\'s Attendance Snapshot rows are now swipeable too, like the Share screen\'s list — swipe left for ✏️ Edit, 📤 Share (that one dept/year/period, instantly) and 🗑️ Delete, all acting on the latest period shown on the row.'},
  {version:'3.11.3', notes:'Quick Attendance Count\'s "Enter all years at once" now leaves 1st Year unticked by default (still one tap to include it, or use All/None) since a fresh batch is the one most often not applicable for a given period.'},
  {version:'3.11.2', notes:'Quick Attendance Count\'s "Enter all years at once" now has an Include checkbox on every year\'s row (ticked by default, with an All/None shortcut) — untick a year with no class that period and it\'s skipped and greyed out, instead of having to leave its Total at 0.'},
  {version:'3.11.1', notes:'Quick Attendance Count: new "📋 Enter all years at once" checkbox — instead of picking one Year and reopening the form per year, it shows a Total/Present/OD row for every year in the selected Department (same Period/Date for all), pre-filled from the roster or from whatever was already saved, and a single 💾 Save All Years saves everything together.'},
  {version:'3.11.0', notes:'🖨️ Print / PDF added to every share screen (Report, OD Report, Today\'s Attendance, Faculty Attendance, MoM, …) — opens a clean letterhead-style print dialog, from which "Save as PDF" works on any phone/desktop browser. New ⭳ Export CSV for Faculties (Students already had it). Students and Faculties now have a ☑️ Select mode for bulk actions — bulk delete, and for Students, bulk "Set Category" (Hosteller/Day Scholar/etc.). Deleting a student or faculty member (single or bulk) now shows a brief "Undo" bar instead of needing a full Backup restore to reverse a mistake. New Settings → ⏰ Daily Attendance Reminder — a browser notification if today\'s attendance still hasn\'t been entered by a time you set (checked while the app tab is open).'},
  {version:'3.10.6', notes:'Renamed "Principal Report" to just "Report" in the HOD dashboard section and its generator screen.'},
  {version:'3.10.5', notes:'Today\'s Student Attendance: 📤 Share and the Years\' All/None button are now on the same line (Share on the left, All/None on the right), instead of two separate rows.'},
  {version:'3.10.4', notes:'Today\'s Student Attendance layout: 📤 Share and the Years\' All/None button now sit on their own line below the heading/label instead of floated to the right, where they crowded the row on phone screens. The Department and Years fields are now stacked (full-width) instead of side-by-side, and the Year chips are bigger with more padding so 1st–4th Year read clearly while swiping.'},
  {version:'3.10.3', notes:'Fixed a bug in the new horizontally-swiping Years row (Today\'s Student Attendance) where it could stretch the whole page wider than the screen instead of scrolling within its own box on some phones.'},
  {version:'3.10.2', notes:'Today\'s Student Attendance: the Years checklist (1st–4th Year) is now a single horizontally-swipeable row instead of wrapping onto several lines, saving vertical space on phone screens.'},
  {version:'3.10.1', notes:'Today\'s Student Attendance share text: "(Class Totals)" is no longer repeated on every row when all the rows being shared are Class Totals entries — it now appears once as a "Source: Class Totals" header line instead. Still shown per-row when the shared set is a mix of Class Totals and individually-marked rows.'},
  {version:'3.10.0', notes:'Today\'s Student Attendance: each row now also shows the class Total Students count (not just P/A/OD), on-screen and in the share text. The share text is now grouped by year (with periods listed underneath when a year has more than one) instead of one flat line per period. When more than one period is marked today, a new "Periods to share" picker lets you limit the shared summary to just the period(s) you tick — the on-screen list still shows every period marked today either way.'},
  {version:'3.9.1', notes:'Default number of periods changed from 8 to 7 for a fresh install (Settings → Number of Periods can still set any value from 1–16 any time). Existing installs that already have a period count saved are unaffected.'},
  {version:'3.9.0', notes:'Closed two gaps found in a full QA pass: (1) marking attendance now warns before it silently overwrites another entry for the same period — Class Totals warns if that period already has individual marks, and individual marking warns if that period already has a Class Totals entry, so you can back out instead of losing data by accident. (2) The HOD PIN now also guards Restoring a Backup (previously only "Move Subject" was gated, even though a restore replaces every store on the device) — Settings explains both actions it protects. Also added a short note under Marks explaining exactly how the Converted Total is calculated when it\'s turned on.'},
  {version:'3.8.4', notes:'Strengthened the on-screen-keyboard fix for forms like Class Totals — a numeric keypad (which adds its own emoji/GIF/translate toolbar row, so it\'s taller and slower to open than the normal keyboard) could still end up covering the field you just tapped on some phones. The app now also re-checks and re-scrolls once the keyboard has actually finished opening, instead of only guessing a fixed delay.'},
  {version:'3.8.3', notes:'Today\'s Student Attendance share text can now optionally add a cumulative line — Total Students, Present (On-Duty counted as attended) and % — via a checkbox above the list. Off by default, so the summary stays as short as before unless you turn it on.'},
  {version:'3.8.2', notes:'Removed the "Years:" line from the Today\'s Student Attendance share text too — each row already names its own year, so it was repeating the same information twice.'},
  {version:'3.8.1', notes:'Cleaned up the Today\'s Student Attendance share text — dropped the redundant "Today\'s" wording now that there\'s an explicit Date line, and when every year shares the same period it\'s shown once at the top instead of repeated on every row.'},
  {version:'3.8.0', notes:'New 📋 Bulk Add on the Students screen — copy a range straight from Excel/Google Sheets (S.No, Name, Register Number, Phone, Gender, Category, one student per line) and paste it in; preview the parsed rows before confirming, pick which department/year they go into, and add dozens of students in one go instead of one-by-one. Internal Marks (CIA) table now shows each student\'s Register Number in its own column, and a new "Convert Total To" option lets you turn the raw total (e.g. out of 260) into a mark out of 20/25/30/40/50/75/100 or any custom value you choose — fully user-defined, saved with the rest of your settings, and included in Backup & Restore.'},
  {version:'3.7.0', notes:'Principal Report is now a single "📨 Generate Report" action — pick your scope, tap once, and it both builds the report and opens Share directly; Years and Periods are now mandatory (you\'ll be told if either is left empty, rather than getting a blank report). Today\'s Student Attendance on the HOD tab now has its own Department and Years filters (defaults to AI & DS, 2nd/3rd/4th Year), shows every period marked today (not just the latest), and has its own 📤 Share button to send that period-wise, year-wise breakdown straight to WhatsApp/Telegram/SMS/copy.'},
  {version:'3.6.1', notes:'Class Totals now has its own Department dropdown (listing every department in the app, not just the one you were viewing), so you can log a class\'s totals for any department without switching screens first. Total Students now auto-fills from that department/year\'s roster count as soon as you open the form or change department/year — still fully editable, and "↺ Use Previous Attendance" still works the same way to pull the last entry instead.'},
  {version:'3.6.0', notes:'Internal Marks components (CIA-I, CIA-II, CIA-III, Assignment, Model Exam) are now fully user-editable — rename any of them, change its maximum marks, remove one, or add a brand new component (e.g. Quiz, Seminar) via the new ⚙️ Manage Components button on the Marks tab. Every subject\'s Marks table, its Total/%, the class-average summary and the At-Risk flag update automatically to match. Included in Backup & Restore.'},
  {version:'3.5.1', notes:'Fixed the HOD "Include/Exclude" scope editor — unchecking a department now also visually unchecks and disables its years underneath (since none of them count toward totals while the department itself is off), and re-checking the department restores exactly which years were individually on before.'},
  {version:'3.5.0', notes:'Faculty can now handle subjects across ANY department and year, not just their own — the Add/Edit Faculty form has a repeatable Subjects Handled list, each row its own Department → Year → Subject (useful for a shared First-Year subject taught to two combined groups, or a faculty who teaches in more than one department). Subjects were already grouped semester-wise in the Subjects manager; added a ↔ Move-to-Semester action per subject, gated behind a new HOD PIN/Password login (set in Settings — leave blank to leave it open). New Settings → Working Days control: Monday-Friday by default, with Saturday/Sunday togglable for the days they are actually made working, reflected across the Timetable tab, Master/Faculty timetables and the timetable generator. The Attendance-by-Department dashboard donut now has its own Years include/exclude picker, same as the Attendance-by-Year donut already had.'},
  {version:'3.4.0', notes:'Faculty tiles now open straight into that faculty\'s own weekly Timetable (🗓️ Timetable button on the faculty detail card). Tapping any period on it opens a Daily Class Record — enter the topic covered in that period, plus Present/OD/Absent/Total counts if the period hasn\'t been marked yet (already-marked periods show the counts read-only). An "Edit Mode" toggle switches the same grid back to moving/reassigning classes, so viewing and editing live in one place.'},
  {version:'3.3.0', notes:'New 🧭 Live Student Status tile on the HOD tab — pick a department and year and see, right now, who is in class (with the subject and faculty for the period actually running), who is on OD (with the type, and the specific sport/event when it\'s a Sports OD), who is on Leave (With Permission), who is Absent (Without Permission), and who isn\'t marked yet. Marking OD as "Sports" now asks which sport/event. Also fixed the Task Monitor\'s status filter showing a plain white dropdown in dark mode instead of matching the rest of the app.'},
  {version:'3.2.1', notes:'Fixed the on-screen keyboard hiding the field you\'re typing into on a phone — any open form now resizes to fit the space actually left above the keyboard, and the field you tap into scrolls up into view automatically.'},
  {version:'3.2.0', notes:'New 📝 Minutes of Meeting (MoM) section on the HOD tab — log any meeting with its own date and exact time (Title, Venue, Chaired By, Attendees, Agenda, Minutes/Discussion and Action Items). Entries are grouped day-wise, and several meetings on the same day each keep their own separate time-stamp and record. Filter by date range or search text, edit or delete any entry, and everything is included in Backup & Restore.'},
  {version:'3.1.0', notes:'New 🔢 Class Totals mode on the Students screen — log a whole class\'s attendance as just Total / Present / On-Duty counts (Absent is auto-computed) instead of marking every student one by one, for a single period, the whole day at once, or several periods together, with a "Use Previous Attendance" shortcut to reuse the last totals. These totals feed the Dashboard, HOD overview and every donut (tagged "🔢 Class Totals", with a note in the student-wise details panel since no individual names exist for a bulk entry) exactly like normal attendance. Marking a period individually afterwards always overrides its Class Totals entry.'},
  {version:'3.0.0', notes:'Renamed to CampusCore (all your saved data carries over unchanged — nothing was reset). New 📝 Internal Marks (CIA) tab: CIA-I/II/III, Assignment and Model Exam per subject, with auto-computed Total/% and an "At Risk" flag below 50%, plus a class-average summary. Backup & Restore now also covers Program Outcomes (OBE/PEO/PO/PSO), Diary, Tasks, Combined Classes and Marks — these were previously left out of a backup file. The Dashboard now reminds you to export a backup if you never have, or it has been 7+ days since the last one (separate from the mandatory-settings banner).'},
  {version:'2.8.0', notes:'Tasks can now be assigned to an individual student or faculty member (not just department-wide), shown as a badge on the task. Lesson Plan & Daily Class Record — each subject\'s syllabus topics now carry a Planned Date and a "Mark Covered" tick-off, with a live coverage bar (e.g. "6/10 topics — 60%"). New HOD sections: 📘 Syllabus Coverage Monitor (every subject across every department, most-behind first) and 📋 Task Monitor (every individually-assigned task across every department, filterable by status) — so a HOD can monitor progress without visiting each department.'},
  {version:'2.7.0', notes:'Combined Classes — set up (Settings → 🔗 Combined Classes) any free combination of departments/years that are taught together (commonly 1st Year across all departments, or pairs like AI & DS + CSBS, IT + CS). Combining is entirely optional per session: the normal Attendance button still works as before, and a "🔗 Combined Attendance" option appears only for departments with a group defined, letting you pick which one to use each time. Marks are still saved into each department\'s own attendance records — HOD and Principal Report always stay separated by department, never merged.'},
  {version:'2.6.0', notes:'Attendance now returns you to the class list after Save instead of staying on the marking screen. New 📔 Diary tab — a month calendar with an Add/Edit sheet for events, exams, meetings, holidays, reminders and notes (with an upcoming-14-days list). New ✅ Tasks tab — a departmental to-do checklist with status (Not Started/In Progress/Completed), deadline and remarks, filterable by status. Every attendance donut now has a collapsible "View student-wise details" panel listing who\'s Present/Absent/On-Duty (with the OD reason, e.g. "Placement Drive") or not yet marked — so a HOD can give the Principal an instant, name-and-reason answer. Student list now sorts by Register No by default, using the classroom roll/serial (not the full admission-batch-prefixed number) so ordering starts at roll 1 even when a repeater/lateral-entry student\'s number begins with a different batch code.'},
  {version:'2.4.0', notes:'Timetable Generator — auto-fills a semester\'s weekly timetable from its subject list, sized by each subject\'s L-T-P/weekly periods, avoiding faculty clashes; Master Timetable (full week grid per department/year) and an Individual Faculty Timetable (a faculty member\'s combined schedule across every class they teach). Subjects now carry L-T-P and weekly-period fields.'},
  {version:'2.3.0', notes:'Attendance: Mark All Present/Absent, and "+ Add new…" to create OD types on the fly (shared between student and faculty attendance). AI & DS syllabus one-click import, grouped semester-wise with elective slots and a new Elective subject type.'},
  {version:'2.2.0', notes:'Settings tab with mandatory institution details (College/Department/Academic Year), app-wide font size control, a collapse toggle on every dashboard/report section, premium progress-ring donuts, optional College/Department name in the header, version history and a built-in user manual.'},
  {version:'2.1.0', notes:'Department-wise and Subject-wise attendance donuts added to the dashboard; an Include/Exclude 1st Year toggle on the Overall donut. Category (Day Scholar/Hosteller) now auto-matches its Boys/Girls suffix to the selected Gender.'},
  {version:'2.0.0', notes:'Expanded student-list sorting — Register No, Attendance %, Category, Gender, Father\'s Name, Phone — with an Ascending/Descending toggle.'},
  {version:'1.9.0', notes:'Overall attendance donut and a year-combination donut (pick any mix of years) added to the dashboard.'},
  {version:'1.8.0', notes:'Full Outcome-Based Education module — Syllabus with pedagogy per topic, Course Outcomes, department-wide PEO/PO/PSO, and a CO–PO/PSO attainment matrix per subject with an auto-computed Attainment Value.'},
  {version:'1.7.0', notes:'Principal Report redesigned with Include/Exclude checkboxes for any combination of years and periods.'},
  {version:'1.6.0', notes:'Click-through student/faculty detail from the attendance screen; a Gender field; and a structured multi-line Address (Door No, Street, City, District, State, Country).'},
  {version:'1.5.0', notes:'Auto-fetch of subject name/code and faculty in the Add Faculty form; timetable timings redesigned to always-visible fields with multi-scope (general/year/day) selection.'},
  {version:'1.4.0', notes:'Friday-specific lunch timing override and a generic per-day/per-year timing scope system, with a custom period order.'},
  {version:'1.3.0', notes:'Dashboard Include/Exclude scope for departments and years, with a donut-style attendance chart.'},
  {version:'1.2.0', notes:'Auto-fetch of subject code, subject name and faculty into the timetable; configurable period start/end times, short break and lunch, with per-year overrides.'},
  {version:'1.1.0', notes:'Click-to-edit from Missing Data, and the Principal Report generator (date, period, present/absent/OD breakdown, continuous-leave and low-attendance lists).'},
  {version:'1.0.0', notes:'Initial release — student and faculty records, attendance marking, timetable, HOD dashboard, CGPA and arrears tracking.'},
];

function defaultAppSettings(){
  // hodPin ships set to '1234' rather than blank, so the Move-Subject/
  // Restore-Backup lock is ON by default instead of open to anyone until
  // someone remembers to set a PIN — change it in Settings → HOD PIN /
  // Password the first time you configure the app.
  return {collegeName:'', deptName:'', university:'', academicYear:'', hodName:'', principalName:'', showHeaderInfo:false, workingDays:['Mon','Tue','Wed','Thu','Fri'], hodPin:'1234', attReminderEnabled:false, attReminderTime:'10:00'};
}
function loadAppSettings(){
  try{
    const raw = localStorage.getItem(APP_SETTINGS_KEY);
    if(raw){
      const s = {...defaultAppSettings(), ...JSON.parse(raw)};
      // One-time migration: the old single "Principal / HOD Name" field is
      // now two separate ones (HOD Name / Principal Name) — carry its value
      // into HOD Name so nothing already typed in just disappears.
      if(!s.hodName && s.principal) s.hodName = s.principal;
      return s;
    }
  }catch(e){}
  return defaultAppSettings();
}
function saveAppSettingsData(){
  try{ localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(APP_SETTINGS)); }catch(e){ toast('Storage error — settings may not persist'); }
}
let APP_SETTINGS = loadAppSettings();

function missingMandatorySettings(){
  return !APP_SETTINGS.collegeName || !APP_SETTINGS.deptName || !APP_SETTINGS.academicYear;
}

function renderHeaderInfo(){
  const el = document.getElementById('headerInstitutionInfo');
  if(!el) return;
  if(APP_SETTINGS.showHeaderInfo && (APP_SETTINGS.collegeName || APP_SETTINGS.deptName)){
    el.style.display = '';
    el.textContent = [APP_SETTINGS.collegeName, APP_SETTINGS.deptName].filter(Boolean).join(' · ');
  } else {
    el.style.display = 'none';
  }
}

// Everything lives only in this browser's storage — a cleared cache or a
// new device means total loss unless a backup was exported. Nag gently
// (never blocking, unlike the mandatory-settings banner) once it's been a
// while since the last export.
function daysSinceLastBackup(){
  let ts;
  try{ ts = localStorage.getItem(LAST_BACKUP_KEY); }catch(e){ ts = null; }
  if(!ts) return null;
  return Math.floor((Date.now() - +ts) / (1000*60*60*24));
}
function renderDashSettingsBanner(){
  const el = document.getElementById('dashSettingsBanner');
  if(!el) return;
  if(missingMandatorySettings() && !SUPPRESSED_WARNINGS.mandatorySettingsBanner){
    el.innerHTML = `<div style="background:var(--danger-dim);border:1px solid var(--danger);border-radius:var(--radius);padding:12px 16px;margin:14px 0;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
         <div style="font-size:13px;color:var(--danger);font-weight:700;">⚠️ Please complete the mandatory settings — College Name, Department Name and Academic Year.</div>
         <div style="display:flex;gap:8px;align-items:center;">
           <button type="button" class="btn btn-primary" id="dashGotoSettingsBtn">Open Settings</button>
           <button type="button" class="link-btn" id="dashDismissSettingsBannerBtn" title="Don't show this warning again">Don't show again</button>
         </div>
       </div>`;
    document.getElementById('dashGotoSettingsBtn').addEventListener('click', ()=>switchView('settings'));
    document.getElementById('dashDismissSettingsBannerBtn').addEventListener('click', ()=>{
      SUPPRESSED_WARNINGS.mandatorySettingsBanner = true;
      saveSuppressedWarnings();
      renderDashSettingsBanner();
    });
    return;
  }
  const days = daysSinceLastBackup();
  if((days === null || days >= 7) && !SUPPRESSED_WARNINGS.backupReminderBanner){
    const msg = days === null
      ? `💾 All data lives only in this browser. You haven't exported a backup yet — do it once so a cleared cache or a new device doesn't mean losing everything.`
      : `💾 It's been ${days} day(s) since your last backup. Data lives only in this browser — export a fresh copy regularly.`;
    el.innerHTML = `<div style="background:var(--accent-dim);border:1px solid var(--accent);border-radius:var(--radius);padding:12px 16px;margin:14px 0;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
         <div style="font-size:13px;color:var(--accent);font-weight:700;">${msg}</div>
         <div style="display:flex;gap:8px;align-items:center;">
           <button type="button" class="btn btn-primary" id="dashGotoBackupBtn">Backup Now</button>
           <button type="button" class="link-btn" id="dashDismissBackupBannerBtn" title="Don't show this warning again">Don't show again</button>
         </div>
       </div>`;
    document.getElementById('dashGotoBackupBtn').addEventListener('click', ()=>{ switchView('hod'); setTimeout(()=>document.getElementById('backupExportBtn')?.scrollIntoView({behavior:'smooth', block:'center'}), 200); });
    document.getElementById('dashDismissBackupBannerBtn').addEventListener('click', ()=>{
      SUPPRESSED_WARNINGS.backupReminderBanner = true;
      saveSuppressedWarnings();
      renderDashSettingsBanner();
    });
    return;
  }
  el.innerHTML = '';
}

function populateSettingsForm(){
  document.getElementById('set_collegeName').value = APP_SETTINGS.collegeName || '';
  document.getElementById('set_deptName').value = APP_SETTINGS.deptName || '';
  document.getElementById('set_university').value = APP_SETTINGS.university || '';
  document.getElementById('set_academicYear').value = APP_SETTINGS.academicYear || '';
  document.getElementById('set_hodName').value = APP_SETTINGS.hodName || '';
  document.getElementById('set_principalName').value = APP_SETTINGS.principalName || '';
  document.getElementById('set_showHeaderInfo').checked = !!APP_SETTINGS.showHeaderInfo;
  const wdGroup = document.getElementById('set_workingDaysGroup');
  const activeWd = new Set(workingDays());
  wdGroup.innerHTML = WEEKDAYS.map(d=>`<label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;cursor:pointer;">
    <input type="checkbox" class="set-workingday-check" value="${d}" style="width:auto;" ${activeWd.has(d)?'checked':''}>${d}</label>`).join('');
  document.getElementById('set_attReminderEnabled').checked = !!APP_SETTINGS.attReminderEnabled;
  document.getElementById('set_attReminderTime').value = APP_SETTINGS.attReminderTime || '10:00';
  document.getElementById('set_hodPin').value = APP_SETTINGS.hodPin || '';
  document.getElementById('aboutVersion').textContent = 'v' + APP_VERSION;
  document.getElementById('aboutDeptCount').textContent = Object.keys(DATA).length;
  clearSettingsFieldErrors();
  applyFontScale();
  renderCombinedGroupsList();
}

// ---- Combined Classes (Settings) ----
function allDeptYearOptions(){
  const out = [];
  Object.keys(DATA).forEach(d=>{ Object.keys(DATA[d]).forEach(y=>{ out.push({dept:d, year:y}); }); });
  return out;
}
function renderCombinedGroupsList(){
  const el = document.getElementById('combinedGroupsList');
  if(!el) return;
  if(!COMBINED_GROUPS.length){ el.innerHTML = `<div class="empty-note">No combined classes yet — e.g. AI & DS + CSBS, or IT + CS.</div>`; return; }
  el.innerHTML = COMBINED_GROUPS.map(g=>`
    <div class="task-row" data-gid="${escapeAttr(g._id)}" style="cursor:pointer;">
      <div class="tr-main">
        <div class="tr-title">${escapeHtml(g.name)}</div>
        <div class="tr-remarks">${g.members.map(m=>escapeHtml(m.dept)+' · '+escapeHtml(m.year)).join('  +  ')}</div>
      </div>
    </div>`).join('');
  el.querySelectorAll('[data-gid]').forEach(row=>{
    row.addEventListener('click', ()=> openCombinedGroupEntry(row.dataset.gid));
  });
}

const combinedGroupOverlay = document.getElementById('combinedGroupOverlay');
function renderCombinedMembersCheckboxes(selected){
  const sel = selected || [];
  const el = document.getElementById('cg_membersGroup');
  el.innerHTML = allDeptYearOptions().map(o=>{
    const checked = sel.some(m=>m.dept===o.dept && m.year===o.year);
    return `<label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;cursor:pointer;">
      <input type="checkbox" value="${escapeAttr(o.dept)}|${escapeAttr(o.year)}" style="width:auto;" ${checked?'checked':''}>
      ${escapeHtml(o.dept)} · ${escapeHtml(o.year)}
    </label>`;
  }).join('');
}
function openCombinedGroupEntry(id){
  const g = id ? COMBINED_GROUPS.find(x=>x._id===id) : null;
  document.getElementById('combinedGroupSheetTitle').textContent = g ? '✏️ Edit Combined Class' : '🔗 New Combined Class';
  document.getElementById('cg_id').value = g ? g._id : '';
  document.getElementById('cg_name').value = g ? g.name : '';
  document.getElementById('cg_err_name').textContent = '';
  document.getElementById('cg_err_members').textContent = '';
  renderCombinedMembersCheckboxes(g ? g.members : []);
  document.getElementById('combinedGroupDeleteBtn').style.display = g ? '' : 'none';
  combinedGroupOverlay.classList.add('open');
}
document.getElementById('combinedAddBtn').onclick = ()=> openCombinedGroupEntry(null);

document.getElementById('combinedGroupForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('cg_name').value.trim();
  document.getElementById('cg_err_name').textContent = '';
  document.getElementById('cg_err_members').textContent = '';
  let ok = true;
  if(!name){ document.getElementById('cg_err_name').textContent = 'Group name is required'; ok = false; }
  const members = [...document.querySelectorAll('#cg_membersGroup input:checked')].map(inp=>{
    const [dept, year] = inp.value.split('|');
    return {dept, year};
  });
  if(members.length < 2){ document.getElementById('cg_err_members').textContent = 'Pick at least 2 departments/years to combine'; ok = false; }
  if(!ok) return;
  const id = document.getElementById('cg_id').value;
  if(id){
    const idx = COMBINED_GROUPS.findIndex(x=>x._id===id);
    if(idx>-1) COMBINED_GROUPS[idx] = {...COMBINED_GROUPS[idx], name, members};
  } else {
    COMBINED_GROUPS.push({_id:'comb_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), name, members});
  }
  saveCombinedGroups();
  combinedGroupOverlay.classList.remove('open');
  toast('Combined class saved');
  renderCombinedGroupsList();
  const combBtn = document.getElementById('combinedAttendanceBtn');
  if(combBtn && currentDept) combBtn.style.display = combinedGroupsForDept(currentDept).length ? '' : 'none';
});

document.getElementById('combinedGroupDeleteBtn').onclick = ()=>{
  const id = document.getElementById('cg_id').value;
  if(!id) return;
  if(!confirm('Delete this combined class?')) return;
  const idx = COMBINED_GROUPS.findIndex(x=>x._id===id);
  if(idx>-1) COMBINED_GROUPS.splice(idx,1);
  saveCombinedGroups();
  combinedGroupOverlay.classList.remove('open');
  toast('Combined class deleted');
  renderCombinedGroupsList();
};
function clearSettingsFieldErrors(){
  ['set_collegeName','set_deptName','set_academicYear'].forEach(id=>{
    document.getElementById(id).classList.remove('invalid');
    const err = document.getElementById('set_err_'+id.replace('set_',''));
    if(err) err.classList.remove('show');
  });
}

document.getElementById('settingsSaveBtn').addEventListener('click', ()=>{
  const collegeName = document.getElementById('set_collegeName').value.trim();
  const deptName = document.getElementById('set_deptName').value.trim();
  const academicYear = document.getElementById('set_academicYear').value.trim();
  let hasError = false;
  [
    ['set_collegeName','set_err_collegeName',collegeName,'College name is required'],
    ['set_deptName','set_err_deptName',deptName,'Department name is required'],
    ['set_academicYear','set_err_academicYear',academicYear,'Academic year is required'],
  ].forEach(([inputId, errId, val, msg])=>{
    const inp = document.getElementById(inputId), errEl = document.getElementById(errId);
    if(!val){ inp.classList.add('invalid'); errEl.textContent = msg; errEl.classList.add('show'); hasError = true; }
    else { inp.classList.remove('invalid'); errEl.classList.remove('show'); }
  });
  if(hasError){ toast('Please fill the mandatory settings'); return; }
  APP_SETTINGS.collegeName = collegeName;
  APP_SETTINGS.deptName = deptName;
  APP_SETTINGS.university = document.getElementById('set_university').value.trim();
  APP_SETTINGS.academicYear = academicYear;
  APP_SETTINGS.hodName = document.getElementById('set_hodName').value.trim();
  APP_SETTINGS.principalName = document.getElementById('set_principalName').value.trim();
  APP_SETTINGS.showHeaderInfo = document.getElementById('set_showHeaderInfo').checked;
  const checkedWd = [...document.querySelectorAll('.set-workingday-check:checked')].map(cb=>cb.value);
  APP_SETTINGS.workingDays = checkedWd.length ? checkedWd : ['Mon','Tue','Wed','Thu','Fri'];
  APP_SETTINGS.hodPin = document.getElementById('set_hodPin').value;
  const reminderWasOff = !APP_SETTINGS.attReminderEnabled;
  APP_SETTINGS.attReminderEnabled = document.getElementById('set_attReminderEnabled').checked;
  APP_SETTINGS.attReminderTime = document.getElementById('set_attReminderTime').value || '10:00';
  if(APP_SETTINGS.attReminderEnabled && reminderWasOff && 'Notification' in window && Notification.permission === 'default'){
    Notification.requestPermission();
  }
  saveAppSettingsData();
  renderHeaderInfo();
  renderDashSettingsBanner();
  toast('Settings saved');
});

// ---------- Font size (app-wide zoom, +/- available in header & Settings) ----------
function getFontScale(){
  const v = parseInt(localStorage.getItem(FONT_SCALE_KEY)||'100', 10);
  return isNaN(v) ? 100 : v;
}
function applyFontScale(){
  const scale = getFontScale();
  const appEl = document.querySelector('.app');
  if(appEl) appEl.style.zoom = (scale/100);
  const label = document.getElementById('fontScaleLabel');
  if(label) label.textContent = scale + '%';
}
function changeFontScale(delta){
  let scale = getFontScale() + delta;
  scale = Math.max(70, Math.min(160, scale));
  localStorage.setItem(FONT_SCALE_KEY, String(scale));
  applyFontScale();
}
['fontMinusBtn','fontMinusBtnSettings'].forEach(id=>{
  const b = document.getElementById(id); if(b) b.addEventListener('click', ()=>changeFontScale(-10));
});
['fontPlusBtn','fontPlusBtnSettings'].forEach(id=>{
  const b = document.getElementById(id); if(b) b.addEventListener('click', ()=>changeFontScale(10));
});
const fontResetBtnEl = document.getElementById('fontResetBtn');
if(fontResetBtnEl) fontResetBtnEl.addEventListener('click', ()=>{
  localStorage.removeItem(FONT_SCALE_KEY);
  applyFontScale();
});
applyFontScale();

// ---------- Version History & User Manual ----------
document.getElementById('viewHistoryBtn').addEventListener('click', ()=>{
  document.getElementById('historyList').innerHTML = APP_HISTORY.map(h=>`
    <div class="history-entry">
      <div class="hv">v${escapeHtml(h.version)}</div>
      <div class="hn">${escapeHtml(h.notes)}</div>
    </div>`).join('');
  document.getElementById('historyOverlay').classList.add('open');
});
document.getElementById('viewManualBtn').addEventListener('click', ()=>{
  document.getElementById('manualOverlay').classList.add('open');
});
document.getElementById('resetWarningsBtn').addEventListener('click', ()=>{
  SUPPRESSED_WARNINGS = {};
  saveSuppressedWarnings();
  toast('All "don\'t show again" warnings will appear again');
});

// ---------- Corner collapse toggle — applied to every .dash-section on the
// page (Dashboard, Timetable's alarm block, HOD reports). Persists per
// section across reloads. ----------
function initCollapsibleSections(){
  document.querySelectorAll('.dash-section').forEach((section, idx)=>{
    if(section.dataset.collapsibleInit) return;
    const head = section.querySelector('.dash-section-head');
    if(!head) return;
    section.dataset.collapsibleInit = '1';
    const body = document.createElement('div');
    body.className = 'dash-section-body';
    const toMove = [];
    let sib = head.nextSibling;
    while(sib){ toMove.push(sib); sib = sib.nextSibling; }
    toMove.forEach(n=>body.appendChild(n));
    section.appendChild(body);

    const key = 'student_records_collapse_' + (section.id || ('idx'+idx));
    const collapsed = localStorage.getItem(key) === '1';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'collapse-toggle';
    btn.title = 'Collapse / expand this section';
    btn.textContent = collapsed ? '▸' : '▾';
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const isCollapsed = body.style.display === 'none';
      body.style.display = isCollapsed ? '' : 'none';
      btn.textContent = isCollapsed ? '▾' : '▸';
      localStorage.setItem(key, isCollapsed ? '0' : '1');
    });
    head.insertBefore(btn, head.firstChild);
    if(collapsed) body.style.display = 'none';
  });
}
initCollapsibleSections();
renderHeaderInfo();

// ---------- Tabs ----------
const deptTabsEl = document.getElementById('deptTabs');
const tabsEl = document.getElementById('tabs');

function renderDeptTabs(){
  deptTabsEl.innerHTML = '';
  Object.keys(DATA).forEach(dept=>{
    const b = document.createElement('button');
    b.className = 'tab dept-tab' + (dept===currentDept ? ' active':'');
    b.textContent = dept;
    b.onclick = ()=>{
      currentDept = dept;
      currentYear = Object.keys(DATA[currentDept])[0] || '';
      document.getElementById('searchInput').value = '';
      render();
    };
    deptTabsEl.appendChild(b);
  });
  const addBtn = document.createElement('button');
  addBtn.className = 'tab dept-tab add-tab';
  addBtn.textContent = '+ Department';
  addBtn.onclick = ()=>openAddItem('department');
  deptTabsEl.appendChild(addBtn);
}

function renderTabs(){
  tabsEl.innerHTML = '';
  const years = Object.keys(DATA[currentDept] || {});
  years.forEach(year=>{
    const b = document.createElement('button');
    b.className = 'tab' + (year===currentYear ? ' active':'');
    b.textContent = year;
    b.onclick = ()=>{ currentYear = year; document.getElementById('searchInput').value=''; render(); };
    tabsEl.appendChild(b);
  });
  const addBtn = document.createElement('button');
  addBtn.className = 'tab add-tab';
  addBtn.textContent = '+ Year';
  addBtn.onclick = ()=>openAddItem('year');
  tabsEl.appendChild(addBtn);
}

// ---------- Add Department / Year modal (avoids window.prompt, which many
// webviews / embedded browsers silently block) ----------
const addItemOverlay = document.getElementById('addItemOverlay');
const addItemForm = document.getElementById('addItemForm');
const addItemInput = document.getElementById('addItemInput');
const addItemTitle = document.getElementById('addItemTitle');
const addItemLabel = document.getElementById('addItemLabel');
const addItemError = document.getElementById('addItemError');
let addItemMode = null; // 'department' | 'year'

function openAddItem(mode){
  addItemMode = mode;
  addItemForm.reset();
  addItemInput.classList.remove('invalid');
  addItemError.textContent = '';
  addItemError.classList.remove('show');
  if(mode === 'department'){
    addItemTitle.textContent = 'Add Department';
    addItemLabel.textContent = 'Department name';
    addItemInput.placeholder = 'e.g. CSE, IT, ECE';
  } else if(mode === 'odtype'){
    addItemTitle.textContent = 'Add OD Type';
    addItemLabel.textContent = 'OD type name';
    addItemInput.placeholder = 'e.g. Medical Leave, Placement Drive';
  } else {
    addItemTitle.textContent = 'Add Academic Year';
    addItemLabel.textContent = 'Year label';
    addItemInput.placeholder = 'e.g. 1st Year';
  }
  addItemOverlay.classList.add('open');
  setTimeout(()=>addItemInput.focus(), 50);
}

addItemForm.addEventListener('submit', e=>{
  e.preventDefault();
  const trimmed = addItemInput.value.trim();
  if(!trimmed){
    addItemInput.classList.add('invalid');
    addItemError.textContent = 'Please enter a name';
    addItemError.classList.add('show');
    return;
  }
  if(addItemMode === 'department'){
    if(DATA[trimmed]){
      currentDept = trimmed;
      currentYear = Object.keys(DATA[trimmed])[0] || '';
      toast('Department already exists — switched to it');
    } else {
      DATA[trimmed] = { '1st Year': [] };
      currentDept = trimmed;
      currentYear = '1st Year';
      saveData();
      toast('Department added');
    }
  } else if(addItemMode === 'odtype'){
    const existing = OD_TYPES.find(t=>t.toLowerCase()===trimmed.toLowerCase());
    const finalType = existing || trimmed;
    if(!existing){ OD_TYPES.push(trimmed); saveOdTypes(); toast('OD type added'); }
    else toast('OD type already exists — using it');
    if(odAddNewApply){ odAddNewApply(finalType); odAddNewApply = null; }
    if(odAddNewContext === 'student') paintAttRows();
    else if(odAddNewContext === 'faculty') paintFacAttRows();
    odAddNewContext = null;
    addItemOverlay.classList.remove('open');
    return;
  } else {
    if(!DATA[currentDept]) DATA[currentDept] = {};
    if(DATA[currentDept][trimmed]){
      currentYear = trimmed;
      toast('Year already exists — switched to it');
    } else {
      DATA[currentDept][trimmed] = [];
      currentYear = trimmed;
      saveData();
      toast('Year added');
    }
  }
  addItemOverlay.classList.remove('open');
  document.getElementById('searchInput').value = '';
  render();
  // Adding a department from the Faculty Timetable screen's own "+ Add New
  // Department" shortcut should refresh that screen's Department checklist
  // (and tick the new one) instead of only updating the Students tab behind it.
  if(addItemMode === 'department' && document.getElementById('facTtOverlay').classList.contains('open')){
    if(facTtSelectedDepts){ facTtSelectedDepts.add(trimmed); }
    populateFacTtDepts();
  }
});

// ---------- Filters ----------
// Small debounce helper — used on the search boxes (Students/Faculties) so
// typing doesn't re-render the whole grid on every single keystroke, only
// once typing pauses. Purely a performance smoothing measure; behavior is
// unchanged either way, it just waits a beat before re-rendering.
function debounce(fn, ms){
  let t;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(()=>fn.apply(this, args), ms);
  };
}
const searchInput = document.getElementById('searchInput');
const hostelFilter = document.getElementById('hostelFilter');
const sortSelect = document.getElementById('sortSelect');
searchInput.addEventListener('input', debounce(render, 180));
hostelFilter.addEventListener('change', render);
sortSelect.addEventListener('change', render);

// Ascending/descending toggle applied on top of whichever sort key is
// chosen. Each key has a sensible default order (e.g. CGPA/Attendance highest
// first, Name A-Z) — the button flips whatever is currently showing.
let sortDir = 1;
const sortDirBtn = document.getElementById('sortDirBtn');
sortDirBtn.addEventListener('click', ()=>{
  sortDir *= -1;
  sortDirBtn.innerHTML = sortDir===1 ? '⬆️ Asc' : '⬇️ Desc';
  render();
});

// Overall attendance % per student (present+OD out of every period ever
// marked for them), used for the "Attendance %" sort option — same logic
// as the Principal Report's low-attendance list.
function studentAttendancePctMap(dept, year){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const totals = {};
  Object.values(dateMap).forEach(periods=>{
    Object.values(periods).forEach(rec=>{
      if(!rec || !rec.records) return;
      Object.keys(rec.records).forEach(id=>{
        if(!totals[id]) totals[id] = {present:0, marked:0};
        const st = rec.records[id].status;
        if(!st) return;
        totals[id].marked++;
        if(st==='P' || st==='OD') totals[id].present++;
      });
    });
  });
  const pctMap = {};
  Object.keys(totals).forEach(id=>{
    const t = totals[id];
    pctMap[id] = t.marked ? (t.present/t.marked*100) : null;
  });
  return pctMap;
}

function populateHostelFilter(){
  const cats = new Set();
  Object.values(DATA[currentDept] || {}).forEach(list=>list.forEach(s=>{ if(s.hostel) cats.add(s.hostel); }));
  const cur = hostelFilter.value;
  hostelFilter.innerHTML = '<option value="">All types</option>' +
    [...cats].sort().map(c=>`<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('');
  hostelFilter.value = cur;
}

function handleStatsTileClick(stat){
  if(stat==='total'){
    searchInput.value = '';
    hostelFilter.value = '';
    render();
    grid.scrollIntoView({behavior:'smooth', block:'start'});
  } else if(stat==='cgpa'){
    hostelFilter.value = '';
    sortSelect.value = 'cgpa';
    render();
    grid.scrollIntoView({behavior:'smooth', block:'start'});
  } else if(stat==='hostel'){
    const opt = [...hostelFilter.options].find(o=>o.value.toLowerCase().includes('hostel'));
    hostelFilter.value = opt ? opt.value : '';
    render();
    grid.scrollIntoView({behavior:'smooth', block:'start'});
  } else if(stat==='arrears'){
    openArrearsReport();
  }
}

function escapeHtml(str){
  return String(str ?? '').replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function escapeAttr(str){ return escapeHtml(str); }

function cgpaNum(v){ const n = parseFloat(String(v).replace(/[^\d.]/g,'')); return isNaN(n)?null:n; }

// Register numbers usually end with the student's classroom roll/serial
// (e.g. ...201040 → roll 40), but start with an admission-batch/year code
// that can differ for a repeater or lateral-entry student mixed into the
// same class. Sorting on the raw full number then puts that student's
// record out of order (batch "24" sorts before "25" even though their
// roll is 40th). Pulling out the trailing digit run gives the classroom
// roll order a person actually expects — 1, 2, 3 … — regardless of batch.
function regnoRollNumber(regno){
  const digits = String(regno ?? '').replace(/\D/g,'');
  if(!digits) return Number.POSITIVE_INFINITY;
  // Last 3 digits is the classroom roll/serial in every register-number
  // format we've seen (…001, …002 … …040); the digits before that are the
  // college/branch/admission-batch code and should NOT affect ordering.
  return parseInt(digits.slice(-3), 10);
}

// Renders Call / SMS / WhatsApp icon links for a phone number. Only for
// numbers that look genuinely dialable (10-13 digits) — messy legacy data
// (e.g. a name accidentally stuck in the phone field) is left as plain text.
function phoneActionsHtml(phone, compact){
  const digits = String(phone||'').replace(/\D/g,'');
  if(digits.length < 10 || digits.length > 13) return '';
  const telNum = digits;
  const waNum = digits.length === 10 ? '91' + digits : digits;
  const cls = 'phone-actions' + (compact ? ' compact' : '');
  return `<span class="${cls}" onclick="event.stopPropagation()">` +
    `<a href="tel:${telNum}" class="phone-act call" title="Call" onclick="event.stopPropagation()">📞</a>` +
    `<a href="sms:${telNum}" class="phone-act sms" title="SMS" onclick="event.stopPropagation()">💬</a>` +
    `<a href="https://wa.me/${waNum}" target="_blank" rel="noopener" class="phone-act wa" title="WhatsApp" onclick="event.stopPropagation()">🟢</a>` +
  `</span>`;
}

// ---------- Render ----------
const grid = document.getElementById('grid');
const emptyState = document.getElementById('emptyState');
const statsRow = document.getElementById('statsRow');
const yearLabel = document.getElementById('yearLabel');

// ---------- Bulk select (Students) ----------
// "☑️ Select" turns every card into a checkbox row instead of opening its
// detail on tap; the bar at the bottom then lets the HOD delete or
// re-categorize (Hosteller/Day Scholar/etc.) everything ticked in one go.
// Both actions are undo-able via the same showUndo() strip as a single delete.
let studentsBulkMode = false;
let studentsBulkSelected = new Set();
function updateBulkBar(){
  const bar = document.getElementById('bulkBar');
  const n = studentsBulkSelected.size;
  if(!studentsBulkMode || !n){ bar.style.display = 'none'; return; }
  bar.style.display = 'flex';
  document.getElementById('bulkBarCount').textContent = `${n} selected`;
}
function populateBulkHostelSelect(){
  const cats = new Set();
  Object.values(DATA[currentDept] || {}).forEach(list=>list.forEach(s=>{ if(s.hostel) cats.add(s.hostel); }));
  const sel = document.getElementById('bulkHostelSelect');
  sel.innerHTML = [...cats].sort().map(c=>`<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('')
    || `<option value="">— no categories yet —</option>`;
}
document.getElementById('bulkSelectBtn').onclick = ()=>{
  studentsBulkMode = !studentsBulkMode;
  studentsBulkSelected.clear();
  const btn = document.getElementById('bulkSelectBtn');
  btn.classList.toggle('btn-primary', studentsBulkMode);
  btn.textContent = studentsBulkMode ? '✕ Cancel Select' : '☑️ Select';
  if(studentsBulkMode) populateBulkHostelSelect();
  render();
};
document.getElementById('bulkCancelBtn').onclick = ()=>document.getElementById('bulkSelectBtn').click();
document.getElementById('bulkDeleteBtn').onclick = ()=>{
  const ids = [...studentsBulkSelected];
  if(!ids.length) return;
  if(!confirm(`Delete ${ids.length} selected student(s) from ${currentDept} · ${currentYear}? This can still be undone for a few seconds after.`)) return;
  const dept = currentDept, year = currentYear;
  const list = DATA[dept][year];
  const removed = [];
  ids.forEach(id=>{
    const idx = list.findIndex(s=>s._id===id);
    if(idx!==-1){ removed.push({item:list[idx], idx}); list.splice(idx,1); }
  });
  saveData();
  studentsBulkSelected.clear();
  render();
  showUndo(`${removed.length} student(s) deleted`, ()=>{
    if(!DATA[dept]) DATA[dept] = {};
    if(!DATA[dept][year]) DATA[dept][year] = [];
    removed.sort((a,b)=>a.idx-b.idx).forEach(r=>{
      DATA[dept][year].splice(Math.min(r.idx, DATA[dept][year].length), 0, r.item);
    });
    saveData();
    if(currentDept===dept && currentYear===year) render();
    toast('Students restored');
  });
};
document.getElementById('bulkApplyHostelBtn').onclick = ()=>{
  const val = document.getElementById('bulkHostelSelect').value;
  const ids = [...studentsBulkSelected];
  if(!val){ toast('No category to apply — add one via a student\'s own Edit form first'); return; }
  if(!ids.length) return;
  const dept = currentDept, year = currentYear;
  const list = DATA[dept][year];
  const prev = [];
  ids.forEach(id=>{
    const s = list.find(x=>x._id===id);
    if(s){ prev.push({id, hostel: s.hostel}); s.hostel = val; }
  });
  saveData();
  render();
  toast(`Category set to "${val}" for ${prev.length} student(s)`);
  showUndo(`Category change for ${prev.length} student(s)`, ()=>{
    const l = (DATA[dept]&&DATA[dept][year]) || [];
    prev.forEach(pv=>{ const s = l.find(x=>x._id===pv.id); if(s) s.hostel = pv.hostel; });
    saveData();
    if(currentDept===dept && currentYear===year) render();
    toast('Category change undone');
  });
};

function render(){
  renderDeptTabs();
  renderTabs();
  populateHostelFilter();
  const list = currentList();
  yearLabel.textContent = `${list.length} students · ${currentDept} · ${currentYear}`;
  if(studentsBulkMode){
    // Drop any selected id that no longer belongs to the dept/year now on
    // screen (e.g. the HOD switched tabs mid-selection).
    const idsHere = new Set(list.map(s=>s._id));
    [...studentsBulkSelected].forEach(id=>{ if(!idsHere.has(id)) studentsBulkSelected.delete(id); });
  }
  const combBtn = document.getElementById('combinedAttendanceBtn');
  if(combBtn) combBtn.style.display = combinedGroupsForDept(currentDept).length ? '' : 'none';

  const q = searchInput.value.trim().toLowerCase();
  const hf = hostelFilter.value;
  let filtered = list.filter(s=>{
    if(hf && s.hostel !== hf) return false;
    if(!q) return true;
    return [s.name,s.regno,s.phone,s.father,s.mother,s.address].some(v=>String(v??'').toLowerCase().includes(q));
  });

  const sortKey = sortSelect.value;
  const attPctMap = sortKey==='attendance' ? studentAttendancePctMap(currentDept, currentYear) : null;
  filtered = filtered.slice().sort((a,b)=>{
    let base;
    if(sortKey==='name') base = String(a.name??'').localeCompare(String(b.name??''));
    else if(sortKey==='regno') base = regnoRollNumber(a.regno) - regnoRollNumber(b.regno) || String(a.regno??'').localeCompare(String(b.regno??''), undefined, {numeric:true});
    else if(sortKey==='cgpa') base = (cgpaNum(b.cgpa)??-1) - (cgpaNum(a.cgpa)??-1);
    else if(sortKey==='arrears') base = (parseFloat(b.arrears)||0) - (parseFloat(a.arrears)||0);
    else if(sortKey==='attendance'){
      const pa = attPctMap[a._id], pb = attPctMap[b._id];
      // Students with no attendance marked yet always sort to the bottom,
      // whichever direction is selected.
      if(pa===null||pa===undefined) return pb===null||pb===undefined ? 0 : 1;
      if(pb===null||pb===undefined) return -1;
      base = pb - pa;
    }
    else if(sortKey==='hostel') base = String(a.hostel??'').localeCompare(String(b.hostel??''));
    else if(sortKey==='gender') base = String(a.gender??'').localeCompare(String(b.gender??''));
    else if(sortKey==='father') base = String(a.father??'').localeCompare(String(b.father??''));
    else if(sortKey==='phone') base = String(a.phone??'').localeCompare(String(b.phone??''), undefined, {numeric:true});
    else base = (parseFloat(a.sno)||0) - (parseFloat(b.sno)||0);
    return base * sortDir;
  });

  // stats
  const total = list.length;
  const cgpas = list.map(s=>cgpaNum(s.cgpa)).filter(v=>v!==null);
  const avgCgpa = cgpas.length ? (cgpas.reduce((a,b)=>a+b,0)/cgpas.length).toFixed(2) : '—';
  const withArrears = list.filter(s=>(parseFloat(s.arrears)||0) > 0).length;
  const hostellers = list.filter(s=>String(s.hostel||'').toLowerCase().includes('hostel')).length;
  statsRow.innerHTML = `
    <div class="stat" data-stat="total" style="cursor:pointer;"><b>${total}</b><span>Total students</span></div>
    <div class="stat" data-stat="cgpa" style="cursor:pointer;"><b>${avgCgpa}</b><span>Avg CGPA</span></div>
    <div class="stat" data-stat="arrears" style="cursor:pointer;"><b>${withArrears}</b><span>With arrears</span></div>
    <div class="stat" data-stat="hostel" style="cursor:pointer;"><b>${hostellers}</b><span>Hostellers</span></div>
  `;
  statsRow.querySelectorAll('.stat[data-stat]').forEach(el=>{
    el.onclick = ()=>handleStatsTileClick(el.dataset.stat);
  });

  grid.innerHTML = '';
  if(filtered.length === 0){
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    filtered.forEach(s=>{
      const card = document.createElement('div');
      card.className = 'card';
      const cgpaVal = cgpaNum(s.cgpa);
      const cgpaChip = cgpaVal!==null ? `<span class="chip ${cgpaVal<5?'cgpa-bad':'cgpa-good'}">CGPA ${escapeHtml(s.cgpa)}</span>` : '';
      const arrList = Array.isArray(s.arrearSubjects) ? s.arrearSubjects : [];
      const arrVal = arrList.length || parseFloat(s.arrears) || 0;
      const arrTitle = arrList.length ? arrList.map(a=>`${a.code} - ${a.name}`).join(', ') : '';
      const arrChip = arrVal>0 ? `<span class="chip arr-bad"${arrTitle?` title="${escapeAttr(arrTitle)}"`:''}>${arrVal} arrear${arrVal>1?'s':''}</span>` : `<span class="chip">0 arrears</span>`;
      const checked = studentsBulkSelected.has(s._id);
      if(checked) card.classList.add('bulk-selected');
      card.innerHTML = `
        <div class="card-top">
          ${studentsBulkMode ? `<input type="checkbox" class="card-select-check" ${checked?'checked':''}>` : ''}
          <span class="card-sno">#${escapeHtml(s.sno !== undefined && s.sno !== '' ? s.sno : '—')}</span>
          <div style="flex:1;min-width:0;">
            <div class="card-name">${escapeHtml(s.name)}</div>
            <div class="card-reg">${escapeHtml(s.regno || 'No reg. no.')}</div>
          </div>
          ${s.hostel ? `<span class="badge badge-hostel">${escapeHtml(s.hostel)}</span>` : ''}
        </div>
        <div class="card-meta">
          ${cgpaChip}${arrChip}
          ${s.phone ? `<span class="chip phone-chip">📱 ${escapeHtml(s.phone)}${phoneActionsHtml(s.phone, true)}</span>` : ''}
        </div>
      `;
      if(studentsBulkMode){
        const cb = card.querySelector('.card-select-check');
        const toggle = ()=>{
          cb.checked = !cb.checked;
          if(cb.checked) studentsBulkSelected.add(s._id); else studentsBulkSelected.delete(s._id);
          card.classList.toggle('bulk-selected', cb.checked);
          updateBulkBar();
        };
        cb.addEventListener('click', e=>{ e.stopPropagation(); if(cb.checked) studentsBulkSelected.add(s._id); else studentsBulkSelected.delete(s._id); card.classList.toggle('bulk-selected', cb.checked); updateBulkBar(); });
        card.onclick = toggle;
      } else {
        card.onclick = ()=>openDetail(s._id);
      }
      grid.appendChild(card);
    });
  }
  updateBulkBar();
}

// ---------- Detail Sheet ----------
const detailOverlay = document.getElementById('detailOverlay');
const detailName = document.getElementById('detailName');
const detailBody = document.getElementById('detailBody');
let activeDetailId = null;

function findStudent(id){
  const list = currentList();
  return list.find(s=>s._id===id);
}

function openDetail(id){
  const s = findStudent(id);
  if(!s) return;
  activeDetailId = id;
  detailName.textContent = s.name;
  const arrList = Array.isArray(s.arrearSubjects) ? s.arrearSubjects : [];
  const arrCount = arrList.length || s.arrears || 0;
  const rows = [
    ['Department', currentDept],
    ['Academic Year', currentYear],
    ['S.No', s.sno],
    ['Register Number', s.regno],
    ['Category', s.hostel],
    ['Gender', s.gender],
    ['Student Phone', s.phone],
    ['CGPA', s.cgpa],
    ['Arrears', arrCount],
    ['Father Name', s.father],
    ['Father Phone', s.fatherphone],
    ['Mother Name', s.mother],
    ['Mother Phone', s.motherphone],
  ];
  const phoneLabels = new Set(['Student Phone','Father Phone','Mother Phone']);
  let html = rows.map(([k,v])=>{
    const displayVal = (v===0 || v===''+0) ? '0' : (v || '—');
    if(phoneLabels.has(k) && v){
      const actions = phoneActionsHtml(v, false);
      return `<div class="detail-row"><span class="k">${k}</span><span class="v" style="display:flex;align-items:center;gap:6px;justify-content:flex-end;">${escapeHtml(v)}${actions}</span></div>`;
    }
    return `<div class="detail-row"><span class="k">${k}</span><span class="v">${escapeHtml(displayVal)}</span></div>`;
  }).join('');
  html += `<div class="detail-row" style="display:block;border-bottom:none;">
    <span class="k" style="display:block;margin-bottom:8px;">Arrear Subjects</span>
    ${arrList.length ? `<div style="display:flex;flex-direction:column;gap:8px;">
      ${arrList.map(a=>`<div style="border:1px solid var(--border);border-radius:9px;padding:8px 10px;">
        <div style="display:flex;justify-content:space-between;gap:10px;font-size:13.5px;">
          <span style="color:var(--text-dim);">${escapeHtml(a.code||'—')}</span>
          <span style="font-weight:600;text-align:right;">${escapeHtml(a.name||'—')}</span>
        </div>
        <div style="display:flex;justify-content:space-between;gap:10px;font-size:12px;color:var(--text-dim);margin-top:4px;">
          <span>${a.semester ? 'Semester ' + escapeHtml(a.semester) : ''}</span>
          <span>${a.marks ? 'Marks: ' + escapeHtml(a.marks) : ''}</span>
        </div>
        ${a.reason ? `<div style="font-size:12px;color:var(--text-dim);margin-top:2px;">Reason: ${escapeHtml(a.reason)}</div>` : ''}
      </div>`).join('')}
    </div>` : `<div style="font-size:13.5px;color:var(--text-dim);">No arrears recorded.</div>`}
  </div>`;
  const ad = s.addressDetail || {};
  const addrParts = [
    ad.doorNo, ad.street,
    ...(Array.isArray(ad.lines) ? ad.lines.filter(l=>l&&l.trim()) : []),
    [ad.city, ad.district].filter(Boolean).join(', '),
    [ad.state, ad.country].filter(Boolean).join(', '),
  ].filter(Boolean);
  html += `<div class="detail-row" style="display:block;border-bottom:none;">
    <span class="k" style="display:block;margin-bottom:8px;">Address</span>
    ${addrParts.length
      ? `<div style="font-size:13.5px;line-height:1.6;">${addrParts.map(p=>escapeHtml(p)).join('<br>')}</div>`
      : (s.address ? `<div style="font-size:13.5px;line-height:1.6;">${escapeHtml(s.address)}</div>` : `<div style="font-size:13.5px;color:var(--text-dim);">No address recorded.</div>`)}
  </div>`;
  detailBody.innerHTML = html;
  detailOverlay.classList.add('open');
}

document.getElementById('detailEditBtn').onclick = ()=>{
  detailOverlay.classList.remove('open');
  openForm(activeDetailId);
};
document.getElementById('detailDeleteBtn').onclick = ()=>{
  const s = findStudent(activeDetailId);
  deleteTarget = activeDetailId;
  document.getElementById('deleteName').textContent = s ? s.name : '';
  detailOverlay.classList.remove('open');
  document.getElementById('deleteOverlay').classList.add('open');
};

// ---------- Delete ----------
document.getElementById('confirmDeleteBtn').onclick = ()=>{
  if(!deleteTarget) return;
  const dept = currentDept, year = currentYear;
  const list = DATA[dept][year];
  const idx = list.findIndex(s=>s._id === deleteTarget);
  if(idx === -1) return;
  const removed = list[idx];
  list.splice(idx, 1);
  saveData();
  document.getElementById('deleteOverlay').classList.remove('open');
  render();
  showUndo(`"${removed.name}" deleted`, ()=>{
    if(!DATA[dept]) DATA[dept] = {};
    if(!DATA[dept][year]) DATA[dept][year] = [];
    DATA[dept][year].splice(Math.min(idx, DATA[dept][year].length), 0, removed);
    saveData();
    if(currentDept===dept && currentYear===year) render();
    toast('Student restored');
  });
};

// ---------- Form (Add/Edit) ----------
const formOverlay = document.getElementById('formOverlay');
const formTitle = document.getElementById('formTitle');
const studentForm = document.getElementById('studentForm');

// Category is asked after Gender, and only ever offers the 3 categories
// that match whichever Gender is picked — Male shows Day Scholar Boys /
// College Hostel Boys / Private Hostel Boys, Female shows the Girls
// versions — so there's no separate Boys/Girls choice to get wrong, and
// the field stays disabled (with nothing to pick) until Gender is set.
// Transgender/unset Gender falls back to showing every category, since no
// Boys/Girls split applies there.
const HOSTEL_CATEGORY_BASE = ['Day Scholar', 'College Hostel', 'Private Hostel'];
function populateHostelOptions(){
  const genderSel = document.getElementById('f_gender');
  const hostelSel = document.getElementById('f_hostel');
  const gender = genderSel.value;
  const prevValue = hostelSel.value;
  let opts;
  if(gender === 'Male') opts = HOSTEL_CATEGORY_BASE.map(b=>`${b} Boys`);
  else if(gender === 'Female') opts = HOSTEL_CATEGORY_BASE.map(b=>`${b} Girls`);
  else opts = HOSTEL_CATEGORY_BASE.flatMap(b=>[`${b} Boys`, `${b} Girls`]);
  hostelSel.disabled = !gender;
  hostelSel.innerHTML = '<option value="">— Not set —</option>' + opts.map(o=>`<option>${escapeHtml(o)}</option>`).join('');
  if(opts.includes(prevValue)){
    hostelSel.value = prevValue;
  } else if(prevValue && (gender==='Male' || gender==='Female')){
    // Gender was just changed on an already-picked category — carry the
    // category part over under the new Boys/Girls suffix instead of
    // silently clearing the field.
    const suffix = gender==='Male' ? 'Boys' : 'Girls';
    const prefix = prevValue.replace(/\s+(Boys|Girls)\s*$/i, '').trim();
    const fixed = `${prefix} ${suffix}`;
    hostelSel.value = opts.includes(fixed) ? fixed : '';
  } else {
    hostelSel.value = '';
  }
}
document.getElementById('f_gender').addEventListener('change', populateHostelOptions);

// ---------- Form Validation ----------
const FIELD_IDS = ['name','sno','regno','phone','cgpa','father','fatherphone','mother','motherphone','arrears'];

// ---------- Arrear subject rows ----------
const arrearListEl = document.getElementById('arrearList');
const arrearCountNote = document.getElementById('arrearCountNote');
let arrearRows = []; // [{code, name, semester, marks, reason}]

function populateSubjectDatalist(){
  const dl = document.getElementById('subjectDatalist');
  const subs = relevantSubjects(currentDept, currentYear);
  dl.innerHTML = subs.map(s=>`<option value="${escapeAttr(s.code)}">${escapeAttr(s.name)}</option>`).join('');
  return subs;
}

function renderArrearRows(){
  const subs = populateSubjectDatalist();
  const subByCode = new Map(subs.map(s=>[String(s.code).toUpperCase(), s.name]));
  arrearListEl.innerHTML = '';
  arrearRows.forEach((row, i)=>{
    const div = document.createElement('div');
    div.className = 'arrear-card';
    div.innerHTML = `
      <div class="arrear-row">
        <input type="text" placeholder="Subject code (reuse or type new)" data-field="code" data-i="${i}" value="${escapeAttr(row.code)}" list="subjectDatalist">
        <input type="text" placeholder="Subject name" data-field="name" data-i="${i}" value="${escapeAttr(row.name)}">
        <button type="button" class="rm-arrear" data-i="${i}" title="Remove">✕</button>
      </div>
      <div class="arrear-row2">
        <input type="text" placeholder="Semester (e.g. 3)" data-field="semester" data-i="${i}" value="${escapeAttr(row.semester||'')}">
        <input type="text" placeholder="Marks (if any)" data-field="marks" data-i="${i}" value="${escapeAttr(row.marks||'')}">
        <input type="text" placeholder="Reason (e.g. attendance shortage)" data-field="reason" data-i="${i}" value="${escapeAttr(row.reason||'')}">
      </div>
    `;
    arrearListEl.appendChild(div);
  });
  arrearCountNote.textContent = arrearRows.length ? `(${arrearRows.length} arrear${arrearRows.length>1?'s':''})` : '(no arrears)';
  arrearListEl.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const i = +e.target.dataset.i;
      const field = e.target.dataset.field;
      arrearRows[i][field] = e.target.value;
      if(field === 'code'){
        const match = subByCode.get(e.target.value.trim().toUpperCase());
        if(match && !arrearRows[i].name){
          arrearRows[i].name = match;
          const nameInput = arrearListEl.querySelector(`input[data-field="name"][data-i="${i}"]`);
          if(nameInput) nameInput.value = match;
        }
      }
    });
  });
  arrearListEl.querySelectorAll('.rm-arrear').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const i = +e.target.dataset.i;
      arrearRows.splice(i, 1);
      renderArrearRows();
    });
  });
}

document.getElementById('addArrearBtn').addEventListener('click', ()=>{
  arrearRows.push({code:'', name:'', semester:'', marks:'', reason:''});
  renderArrearRows();
});

// ---------- Address lines (dynamic, add-as-many-as-needed) ----------
const addressLinesListEl = document.getElementById('addressLinesList');
let addressLines = ['']; // ['Address Line 1 text', 'Address Line 2 text', ...]

function renderAddressLines(){
  addressLinesListEl.innerHTML = addressLines.map((line, i)=>`
    <div class="arrear-row" style="grid-template-columns:1fr auto;">
      <input type="text" placeholder="Address Line ${i+1}" data-i="${i}" value="${escapeAttr(line)}">
      <button type="button" class="rm-arrear" data-i="${i}" title="Remove" ${addressLines.length<=1?'style="visibility:hidden;"':''}>✕</button>
    </div>
  `).join('');
  addressLinesListEl.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('input', e=>{ addressLines[+e.target.dataset.i] = e.target.value; });
  });
  addressLinesListEl.querySelectorAll('.rm-arrear').forEach(btn=>{
    btn.addEventListener('click', e=>{
      if(addressLines.length<=1) return;
      addressLines.splice(+e.target.dataset.i, 1);
      renderAddressLines();
    });
  });
}
document.getElementById('addAddressLineBtn').addEventListener('click', ()=>{
  addressLines.push('');
  renderAddressLines();
});

// Builds one plain-text address string from the structured fields, for
// search, the Missing Data check, and CSV export to keep working unchanged.
function composeAddress(detail){
  const parts = [
    detail.doorNo,
    detail.street,
    ...(detail.lines||[]).filter(l=>l && l.trim()),
    detail.city,
    detail.district,
    detail.state,
    detail.country,
  ].map(v=>(v||'').trim()).filter(Boolean);
  return parts.join(', ');
}

function clearFieldErrors(){
  FIELD_IDS.forEach(id=>{
    const input = document.getElementById('f_'+id);
    const err = document.getElementById('err_'+id);
    if(input) input.classList.remove('invalid');
    if(err){ err.textContent=''; err.classList.remove('show'); }
  });
}

function setFieldError(id, msg){
  const input = document.getElementById('f_'+id);
  const err = document.getElementById('err_'+id);
  if(input) input.classList.add('invalid');
  if(err){ err.textContent = msg; err.classList.add('show'); }
}

const NAME_RE = /^[A-Za-z][A-Za-z.\s'\-\/]*$/;
const PHONE_RE = /^[6-9]\d{9}$/;          // Indian 10-digit mobile
const REGNO_RE = /^\d{6,15}$/;             // register no: 6-15 digits
const SNO_RE = /^\d+$/;

function validatePhone(id, label, value, errors){
  if(!value) return;                       // optional field
  if(!/^\d+$/.test(value)){
    errors.push([id, `${label} must contain digits only`]);
  } else if(!PHONE_RE.test(value)){
    errors.push([id, `${label} must be a valid 10-digit mobile number`]);
  }
}

function validateForm(rec){
  const errors = []; // [fieldId, message]

  // Name — required, letters/spaces/common name punctuation only
  if(!rec.name){
    errors.push(['name', 'Name is required']);
  } else if(!NAME_RE.test(rec.name)){
    errors.push(['name', 'Name should contain letters only (no digits)']);
  }

  // S.No — optional but must be a positive whole number if given
  if(rec.sno !== '' && rec.sno !== null && rec.sno !== undefined){
    if(!SNO_RE.test(String(rec.sno)) || Number(rec.sno) < 1){
      errors.push(['sno', 'S.No must be a positive whole number']);
    }
  }

  // Register number — optional, digits only, sane length
  if(rec.regno){
    if(!REGNO_RE.test(rec.regno)){
      errors.push(['regno', 'Register number must be 6–15 digits']);
    }
  }

  // Phones
  validatePhone('phone', 'Student phone', rec.phone, errors);
  validatePhone('fatherphone', 'Father phone', rec.fatherphone, errors);
  validatePhone('motherphone', 'Mother phone', rec.motherphone, errors);

  // Father / Mother names — letters only, when provided
  if(rec.father && !NAME_RE.test(rec.father)){
    errors.push(['father', 'Father name should contain letters only']);
  }
  if(rec.mother && !NAME_RE.test(rec.mother)){
    errors.push(['mother', 'Mother name should contain letters only']);
  }

  // CGPA — number between 0 and 10
  if(rec.cgpa){
    const n = parseFloat(rec.cgpa);
    if(isNaN(n) || !/^\d+(\.\d+)?$/.test(rec.cgpa) || n < 0 || n > 10){
      errors.push(['cgpa', 'CGPA must be a number between 0 and 10']);
    }
  }

  // Arrear subjects — each row needs a code and a name if it exists at all
  const arrearMsgs = [];
  arrearRows.forEach((row, i)=>{
    const code = (row.code||'').trim();
    const name = (row.name||'').trim();
    if(!code && !name) return; // fully blank row, ignore
    if(!code) arrearMsgs.push(`#${i+1}: subject code is required`);
    else if(!/^[A-Za-z0-9\-\/]{2,15}$/.test(code)) arrearMsgs.push(`#${i+1}: subject code looks invalid`);
    if(!name) arrearMsgs.push(`#${i+1}: subject name is required`);
  });
  if(arrearMsgs.length) errors.push(['arrears', 'Arrear ' + arrearMsgs.join('; ')]);

  return errors;
}

function openForm(id){
  editingId = id || null;
  studentForm.reset();
  clearFieldErrors();
  if(id){
    const s = findStudent(id);
    formTitle.textContent = 'Edit Student';
    document.getElementById('f_name').value = s.name || '';
    document.getElementById('f_sno').value = s.sno || '';
    document.getElementById('f_regno').value = s.regno || '';
    document.getElementById('f_gender').value = s.gender || '';
    populateHostelOptions(); // Category options depend on Gender — rebuild before setting the saved Category
    document.getElementById('f_hostel').value = s.hostel || '';
    document.getElementById('f_phone').value = s.phone || '';
    document.getElementById('f_cgpa').value = s.cgpa || '';
    document.getElementById('f_father').value = s.father || '';
    document.getElementById('f_fatherphone').value = s.fatherphone || '';
    document.getElementById('f_mother').value = s.mother || '';
    document.getElementById('f_motherphone').value = s.motherphone || '';
    arrearRows = Array.isArray(s.arrearSubjects) ? s.arrearSubjects.map(r=>({code:r.code||'', name:r.name||'', semester:r.semester||'', marks:r.marks||'', reason:r.reason||''})) : [];
    const ad = s.addressDetail || {};
    document.getElementById('f_addr_door').value = ad.doorNo || '';
    document.getElementById('f_addr_street').value = ad.street || '';
    document.getElementById('f_addr_city').value = ad.city || '';
    document.getElementById('f_addr_district').value = ad.district || '';
    document.getElementById('f_addr_state').value = ad.state || '';
    document.getElementById('f_addr_country').value = ad.country || '';
    addressLines = (Array.isArray(ad.lines) && ad.lines.length) ? ad.lines.slice() : [''];
  } else {
    formTitle.textContent = `Add Student — ${currentDept} · ${currentYear}`;
    arrearRows = [];
    addressLines = [''];
    populateHostelOptions(); // Gender is blank on a fresh form, so Category starts disabled until it's picked
  }
  renderArrearRows();
  renderAddressLines();
  formOverlay.classList.add('open');
}

document.getElementById('addFab').onclick = ()=>openForm(null);

studentForm.addEventListener('submit', e=>{
  e.preventDefault();
  clearFieldErrors();
  const rec = {
    name: document.getElementById('f_name').value.trim(),
    sno: document.getElementById('f_sno').value.trim(),
    regno: document.getElementById('f_regno').value.trim(),
    hostel: document.getElementById('f_hostel').value,
    gender: document.getElementById('f_gender').value,
    phone: document.getElementById('f_phone').value.trim(),
    cgpa: document.getElementById('f_cgpa').value.trim(),
    father: document.getElementById('f_father').value.trim(),
    fatherphone: document.getElementById('f_fatherphone').value.trim(),
    mother: document.getElementById('f_mother').value.trim(),
    motherphone: document.getElementById('f_motherphone').value.trim(),
  };
  const addressDetail = {
    doorNo: document.getElementById('f_addr_door').value.trim(),
    street: document.getElementById('f_addr_street').value.trim(),
    lines: addressLines.map(l=>l.trim()).filter(Boolean),
    city: document.getElementById('f_addr_city').value.trim(),
    district: document.getElementById('f_addr_district').value.trim(),
    state: document.getElementById('f_addr_state').value.trim(),
    country: document.getElementById('f_addr_country').value.trim(),
  };
  rec.addressDetail = addressDetail;
  rec.address = composeAddress(addressDetail);

  const errors = validateForm(rec);
  if(errors.length){
    errors.forEach(([id, msg])=>setFieldError(id, msg));
    const first = document.getElementById('f_'+errors[0][0]);
    if(first) first.scrollIntoView({behavior:'smooth', block:'center'});
    toast(errors.length===1 ? errors[0][1] : `${errors.length} fields need fixing`);
    return;
  }

  const cleanArrears = arrearRows
    .map(r=>({code:(r.code||'').trim(), name:(r.name||'').trim(), semester:(r.semester||'').trim(), marks:(r.marks||'').trim(), reason:(r.reason||'').trim()}))
    .filter(r=>r.code || r.name);
  rec.arrearSubjects = cleanArrears;
  rec.arrears = cleanArrears.length;

  if(editingId){
    const list = DATA[currentDept][currentYear];
    const idx = list.findIndex(s=>s._id===editingId);
    if(idx > -1){ rec._id = editingId; list[idx] = rec; }
    toast('Student updated');
  } else {
    rec._id = 'id'+(idCounter++);
    if(!rec.sno){
      const maxSno = Math.max(0, ...DATA[currentDept][currentYear].map(s=>parseFloat(s.sno)||0));
      rec.sno = maxSno + 1;
    }
    DATA[currentDept][currentYear].push(rec);
    toast('Student added');
  }
  saveData();
  formOverlay.classList.remove('open');
  render();
});

// ---------- Bulk Add Students (paste from Excel/Sheets) ----------
let bulkAddParsedRows = [];
const GENDER_WORDS = {male:'Male', m:'Male', female:'Female', f:'Female', transgender:'Transgender', t:'Transgender'};
function bulkAddNormalizeGender(v){
  if(!v) return '';
  const key = v.trim().toLowerCase();
  return GENDER_WORDS[key] || (['Male','Female','Transgender'].includes(v.trim()) ? v.trim() : '');
}
function bulkAddNormalizeCategory(v){
  if(!v) return '';
  const t = v.trim().toLowerCase();
  const suffix = t.includes('girl') ? 'Girls' : (t.includes('boy') ? 'Boys' : '');
  if(suffix){
    if(t.includes('private') && t.includes('hostel')) return `Private Hostel ${suffix}`;
    if(t.includes('college') && t.includes('hostel')) return `College Hostel ${suffix}`;
    if(t.includes('hostel')) return `College Hostel ${suffix}`; // plain "Hosteller"/"Hostel" defaults to College Hostel
    if(t.includes('day')) return `Day Scholar ${suffix}`;
  }
  const opts = HOSTEL_CATEGORY_BASE.flatMap(b=>[`${b} Boys`, `${b} Girls`]);
  return opts.includes(v.trim()) ? v.trim() : '';
}
function bulkAddParseText(raw){
  // Trim only to test for a blank line — NOT before splitting, since a
  // leading tab (an empty S.No column) is itself meaningful whitespace
  // that must stay in place for the column split below.
  const lines = raw.split(/\r\n|\r|\n/).filter(l=>l.trim() !== '');
  return lines.map(line=>{
    // Excel/Sheets paste is tab-separated; fall back to comma-separated text.
    const cols = line.includes('\t') ? line.split('\t') : line.split(',');
    const [sno='', name='', regno='', phone='', gender='', hostel=''] = cols.map(c=>(c||'').trim());
    return {
      sno: sno.replace(/[^\d.]/g,''),
      name,
      regno,
      phone: phone.replace(/[^\d]/g,''),
      gender: bulkAddNormalizeGender(gender),
      hostel: bulkAddNormalizeCategory(hostel),
    };
  });
}
function openBulkAdd(){
  const deptSel = document.getElementById('bulkAddDept');
  const depts = Object.keys(DATA);
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  const yearSel = document.getElementById('bulkAddYear');
  function fillYears(){
    const years = Object.keys(DATA[deptSel.value]||{});
    const keep = years.includes(currentYear) ? currentYear : years[0];
    yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===keep?'selected':''}>${escapeHtml(y)}</option>`).join('');
  }
  fillYears();
  deptSel.onchange = fillYears;
  document.getElementById('bulkAddText').value = '';
  document.getElementById('bulkAddPreviewWrap').style.display = 'none';
  document.getElementById('bulkAddErr').textContent = '';
  document.getElementById('bulkAddConfirmBtn').disabled = true;
  bulkAddParsedRows = [];
  document.getElementById('bulkAddOverlay').classList.add('open');
}
document.getElementById('bulkAddBtn').onclick = openBulkAdd;

// A student is treated as the "same" student if either their register
// number matches an existing one, or (when no register number is given,
// or none exists yet to compare against) their name matches — so pasting
// the same roster twice, or a sheet that repeats a row, never creates a
// second copy. Matching is case/space-insensitive.
function bulkAddNormName(n){ return (n||'').trim().toLowerCase().replace(/\s+/g,' '); }
function bulkAddNormRegno(r){ return (r||'').trim().toLowerCase(); }
// Decide what a parsed row resolves to against a given student list,
// consulting both the existing roster and rows already placed earlier in
// this same paste (so in-paste duplicates are also caught, not just ones
// already saved).
function bulkAddResolve(row, existingList, seenRegnos, seenNames){
  const regKey = bulkAddNormRegno(row.regno);
  const nameKey = bulkAddNormName(row.name);
  let match = null;
  if(regKey && seenRegnos.has(regKey)) match = seenRegnos.get(regKey);
  else if(!regKey && seenNames.has(nameKey)) match = seenNames.get(nameKey);
  if(!match){
    match = existingList.find(s=>regKey && bulkAddNormRegno(s.regno) === regKey)
         || (!regKey ? existingList.find(s=>bulkAddNormName(s.name) === nameKey) : null);
  }
  return match;
}
function bulkAddMissingFields(existing, row){
  // Only fields this paste format can supply, and only when the existing
  // record doesn't already have a value — never overwrite real data.
  const out = {};
  if(!((existing.regno||'').trim()) && row.regno) out.regno = row.regno;
  if(!((existing.phone||'').trim()) && row.phone) out.phone = row.phone;
  if(!((existing.gender||'').trim()) && row.gender) out.gender = row.gender;
  if(!((existing.hostel||'').trim()) && row.hostel) out.hostel = row.hostel;
  return out;
}
document.getElementById('bulkAddPreviewBtn').onclick = ()=>{
  const raw = document.getElementById('bulkAddText').value;
  const errEl = document.getElementById('bulkAddErr');
  errEl.textContent = '';
  const rows = bulkAddParseText(raw).filter(r=>r.name);
  if(!rows.length){
    errEl.textContent = 'Paste at least one row with a Name.';
    document.getElementById('bulkAddPreviewWrap').style.display = 'none';
    document.getElementById('bulkAddConfirmBtn').disabled = true;
    bulkAddParsedRows = [];
    return;
  }
  const dept = document.getElementById('bulkAddDept').value;
  const year = document.getElementById('bulkAddYear').value;
  const existingList = DATA[dept][year]||[];
  const seenRegnos = new Map(), seenNames = new Map();
  let newCount=0, updateCount=0, dupeCount=0;
  rows.forEach(r=>{
    const match = bulkAddResolve(r, existingList, seenRegnos, seenNames);
    if(match){
      const fillable = bulkAddMissingFields(match, r);
      r._status = Object.keys(fillable).length ? 'update' : 'dupe';
      r._fill = fillable;
      r._matchId = match._id;
      if(r._status==='update') updateCount++; else dupeCount++;
    } else {
      r._status = 'new';
      newCount++;
    }
    // Register this row itself so a second occurrence of the same
    // name/regno later in the SAME paste is also caught, and can even pick
    // up fields the first occurrence in the paste didn't have.
    const regKey = bulkAddNormRegno(r.regno), nameKey = bulkAddNormName(r.name);
    const ref = match || r;
    if(regKey) seenRegnos.set(regKey, ref);
    seenNames.set(nameKey, ref);
  });
  bulkAddParsedRows = rows;
  document.getElementById('bulkAddPreviewNote').textContent =
    `${rows.length} row(s) parsed for ${dept} · ${year}: ${newCount} new` +
    (updateCount ? `, ${updateCount} already exist (missing details will be filled in)` : '') +
    (dupeCount ? `, ${dupeCount} exact duplicate(s) skipped` : '') + '.';
  const table = document.getElementById('bulkAddPreviewTable');
  const statusLabel = {new:'🆕 New', update:'✏️ Fill gaps', dupe:'⏭️ Duplicate — skip'};
  const statusColor = {new:'', update:'color:var(--warn,#b8860b);', dupe:'color:var(--text-dim);'};
  table.innerHTML = `
    <thead><tr style="text-align:left;border-bottom:2px solid var(--border);">
      <th style="padding:5px;">S.No</th><th style="padding:5px;">Name</th><th style="padding:5px;">Reg. No.</th>
      <th style="padding:5px;">Phone</th><th style="padding:5px;">Gender</th><th style="padding:5px;">Category</th><th style="padding:5px;">Status</th>
    </tr></thead>
    <tbody>${rows.map(r=>`
      <tr>
        <td style="padding:5px;">${escapeHtml(r.sno||'—')}</td>
        <td style="padding:5px;">${escapeHtml(r.name)}</td>
        <td style="padding:5px;">${escapeHtml(r.regno||'—')}</td>
        <td style="padding:5px;">${escapeHtml(r.phone||'—')}</td>
        <td style="padding:5px;">${escapeHtml(r.gender||'—')}</td>
        <td style="padding:5px;">${escapeHtml(r.hostel||'—')}</td>
        <td style="padding:5px;${statusColor[r._status]}">${statusLabel[r._status]}</td>
      </tr>`).join('')}</tbody>`;
  document.getElementById('bulkAddPreviewWrap').style.display = '';
  document.getElementById('bulkAddConfirmBtn').disabled = false;
};

document.getElementById('bulkAddConfirmBtn').onclick = ()=>{
  if(!bulkAddParsedRows.length) return;
  const dept = document.getElementById('bulkAddDept').value;
  const year = document.getElementById('bulkAddYear').value;
  const list = DATA[dept][year];
  let maxSno = Math.max(0, ...list.map(s=>parseFloat(s.sno)||0));
  let added=0, updated=0, skipped=0;
  bulkAddParsedRows.forEach(r=>{
    if(r._status === 'dupe'){ skipped++; return; }
    if(r._status === 'update'){
      const existing = list.find(s=>s._id === r._matchId);
      if(existing && r._fill) Object.assign(existing, r._fill);
      updated++;
      return;
    }
    if(!r.sno) maxSno += 1;
    const rec = {
      _id: 'id'+(idCounter++),
      name: r.name,
      sno: r.sno || maxSno,
      regno: r.regno,
      hostel: r.hostel,
      gender: r.gender,
      phone: r.phone,
      cgpa: '', father: '', fatherphone: '', mother: '', motherphone: '',
      addressDetail: {doorNo:'',street:'',lines:[],city:'',district:'',state:'',country:''},
      address: '',
      arrearSubjects: [], arrears: 0,
    };
    list.push(rec);
    added++;
  });
  saveData();
  toast(`${added} added, ${updated} filled in, ${skipped} duplicate(s) skipped — ${dept} · ${year}`);
  document.getElementById('bulkAddOverlay').classList.remove('open');
  bulkAddParsedRows = [];
  if(dept===currentDept && year===currentYear) render();
};

// ---------- Overlay close handling ----------
document.querySelectorAll('[data-close]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.getElementById(btn.dataset.close).classList.remove('open');
  });
});
document.querySelectorAll('.sheet-overlay').forEach(ov=>{
  ov.addEventListener('click', e=>{ if(e.target === ov) ov.classList.remove('open'); });
});

// ---------- Keep the typing field above the on-screen keyboard ----------
// On phones, an open sheet's field near the bottom can end up hidden behind
// the virtual keyboard. Two fixes: (1) track the real visible height via
// the VisualViewport API so the open sheet never grows taller than what's
// actually visible above the keyboard, and (2) scroll whichever field just
// got focus into view once the keyboard has finished animating in.
function setVisibleViewportVar(){
  const h = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
  document.documentElement.style.setProperty('--vvh', h + 'px');
}
// Re-scrolls whatever field currently has focus back into view — used both
// right after focusing a field and again whenever the keyboard itself
// finishes opening/resizing, since on some devices (notably a numeric
// keypad, which adds its own emoji/GIF/translate toolbar row and so is
// taller and slower to animate in than the normal text keyboard) a single
// fixed delay isn't always enough and the field ends up hidden underneath it.
//
// This used to only fire for a field inside an open modal "sheet" — so any
// input living directly in a regular tab/page (Attendance marking rows,
// inline Timetable editing, Faculty search, Subjects rows, dashboard
// filters, etc.) never got this treatment and stayed hidden behind the
// keyboard. It now runs for ANY focused input/select/textarea anywhere on
// the page, not just ones inside a sheet.
function scrollFocusedFieldIntoView(){
  const el = document.activeElement;
  if(!el || !el.matches || !el.matches('input, select, textarea')) return;
  el.scrollIntoView({block:'center', behavior:'smooth'});
}
setVisibleViewportVar();
if(window.visualViewport){
  window.visualViewport.addEventListener('resize', ()=>{ setVisibleViewportVar(); scrollFocusedFieldIntoView(); });
  window.visualViewport.addEventListener('scroll', setVisibleViewportVar);
}
window.addEventListener('resize', setVisibleViewportVar);
document.addEventListener('focusin', e=>{
  const el = e.target;
  if(!el.matches || !el.matches('input, select, textarea')) return;
  // Keyboards (especially a numeric one, with its extra toolbar row) can
  // take longer than a single guess to finish animating in, so retry a
  // couple of times rather than relying on one fixed delay.
  setTimeout(scrollFocusedFieldIntoView, 300);
  setTimeout(scrollFocusedFieldIntoView, 600);
}, true);

// ---------- Missing Data Report ----------
const MISSING_FIELDS = [
  ['regno', 'Reg. No.'],
  ['phone', 'Phone'],
  ['hostel', 'Category'],
  ['cgpa', 'CGPA'],
  ['father', 'Father Name'],
  ['fatherphone', 'Father Phone'],
  ['mother', 'Mother Name'],
  ['motherphone', 'Mother Phone'],
  ['address', 'Address'],
];

function missingFieldsFor(s){
  return MISSING_FIELDS.filter(([key])=>{
    const v = s[key];
    return v === undefined || v === null || String(v).trim() === '';
  }).map(([,label])=>label);
}

const missingOverlay = document.getElementById('missingOverlay');
const missingListEl = document.getElementById('missingList');
const missingSummaryEl = document.getElementById('missingSummary');
const missingScopeAll = document.getElementById('missingScopeAll');

function renderMissingReport(){
  const scopeAll = missingScopeAll.checked;
  const rows = []; // {student, dept, year}
  if(scopeAll){
    Object.keys(DATA).forEach(dept=>{
      Object.keys(DATA[dept]).forEach(year=>{
        DATA[dept][year].forEach(s=>rows.push({s, dept, year}));
      });
    });
  } else {
    currentList().forEach(s=>rows.push({s, dept: currentDept, year: currentYear}));
  }

  const incomplete = rows
    .map(r=>({...r, missing: missingFieldsFor(r.s)}))
    .filter(r=>r.missing.length > 0);

  const totalStudents = rows.length;
  missingSummaryEl.textContent = incomplete.length
    ? `${incomplete.length} of ${totalStudents} student${totalStudents===1?'':'s'} ${scopeAll?'(all departments)':`in ${currentDept} · ${currentYear}`} have missing fields.`
    : `All ${totalStudents} student${totalStudents===1?'':'s'} ${scopeAll?'(all departments)':`in ${currentDept} · ${currentYear}`} have complete data. 🎉`;

  if(!incomplete.length){
    missingListEl.innerHTML = '';
    return;
  }

  missingListEl.innerHTML = incomplete.map(r=>`
    <div class="missing-row" data-dept="${escapeAttr(r.dept)}" data-year="${escapeAttr(r.year)}" data-id="${escapeAttr(r.s._id)}" title="Tap to edit this student">
      <div class="mr-top">
        <span class="mr-name">${escapeHtml(r.s.name)}</span>
        <span class="mr-loc">${escapeHtml(r.dept)} · ${escapeHtml(r.year)}${r.s.regno ? ' · ' + escapeHtml(r.s.regno) : ''}</span>
      </div>
      <div class="mr-chips">
        ${r.missing.map(f=>`<span class="mr-chip">${escapeHtml(f)}</span>`).join('')}
      </div>
    </div>
  `).join('');
  missingListEl.querySelectorAll('.missing-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      editStudentFromElsewhere(row.dataset.dept, row.dataset.year, row.dataset.id);
    });
  });
}

// Jump to a student's edit form from a context outside the normal Students
// tab (Missing Data report, HOD lists, etc): switch to that student's
// department/year, land on the Students view, then open the edit sheet.
function editStudentFromElsewhere(dept, year, studentId){
  currentDept = dept;
  currentYear = year;
  document.getElementById('missingOverlay').classList.remove('open');
  switchView('students');
  openForm(studentId);
}

document.getElementById('missingBtn').onclick = ()=>{
  renderMissingReport();
  missingOverlay.classList.add('open');
};
missingScopeAll.addEventListener('change', renderMissingReport);

// ================= OD REPORT =================
// Per-student OD spells (type + From–To) and Present/Absent/OD day totals
// over a date range — built only from days that have individual,
// per-student marking (a Class Totals / Quick Count day has no per-student
// breakdown to attribute to any one student, so it's skipped here and
// noted in the summary).
function odrPopulateSelectors(){
  const deptSel = document.getElementById('odr_dept');
  const depts = Object.keys(DATA);
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  odrPopulateYears();
  const typeSel = document.getElementById('odr_type');
  typeSel.innerHTML = `<option value="">All types</option>` + OD_TYPES.map(t=>`<option value="${escapeAttr(t)}">${escapeHtml(t)}</option>`).join('');
  const to = todayStr();
  const fromDate = new Date(); fromDate.setDate(fromDate.getDate()-29);
  document.getElementById('odr_from').value = fromDate.toISOString().slice(0,10);
  document.getElementById('odr_to').value = to;
  document.getElementById('odReportResults').innerHTML = '';
}
function odrPopulateYears(){
  const dept = document.getElementById('odr_dept').value;
  const yearSel = document.getElementById('odr_year');
  const years = Object.keys(DATA[dept]||{});
  const keep = years.includes(currentYear) ? currentYear : years[0];
  yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===keep?'selected':''}>${escapeHtml(y)}</option>`).join('');
}
document.getElementById('odr_dept').addEventListener('change', odrPopulateYears);
document.getElementById('odReportBtn').onclick = ()=>{
  odrPopulateSelectors();
  document.getElementById('odReportOverlay').classList.add('open');
};

// Every date between two ISO strings, inclusive.
function odrDateRange(fromISO, toISO){
  const out = [];
  let d = new Date(fromISO+'T00:00:00'), end = new Date(toISO+'T00:00:00');
  while(d <= end){ out.push(d.toISOString().slice(0,10)); d.setDate(d.getDate()+1); }
  return out;
}
document.getElementById('odr_runBtn').onclick = ()=>{
  const dept = document.getElementById('odr_dept').value;
  const year = document.getElementById('odr_year').value;
  const from = document.getElementById('odr_from').value;
  const to = document.getElementById('odr_to').value;
  const typeFilter = document.getElementById('odr_type').value;
  const resultsEl = document.getElementById('odReportResults');
  if(!dept || !year || !from || !to || from > to){
    resultsEl.innerHTML = `<div class="no-data-note">Pick a department, year and a valid From/To date range.</div>`;
    return;
  }
  const roster = (DATA[dept] && DATA[dept][year]) || [];
  const dates = odrDateRange(from, to);
  let bulkOnlyDays = 0;

  // studentDayStatus[studentId][date] = {status:'P'|'A'|'OD', od: type|null}
  // Day-level status from that day's per-period marks: OD wins if any
  // period was OD (with that period's OD type), else Absent if any period
  // was Absent, else Present. A day where the student wasn't marked at all
  // (or the day was only logged as Class Totals) is simply absent from the
  // map, not counted either way.
  const studentDayStatus = {};
  roster.forEach(s=>{ studentDayStatus[s._id] = {}; });

  dates.forEach(date=>{
    const dayData = (ATT[dept] && ATT[dept][year] && ATT[dept][year][date]) || null;
    if(!dayData) return;
    let sawPerStudent = false, sawBulkOnly = false;
    Object.keys(dayData).forEach(period=>{
      const rec = dayData[period];
      if(rec.bulk && !(rec.records && Object.keys(rec.records).length)){ sawBulkOnly = true; return; }
      const recs = rec.records || {};
      Object.keys(recs).forEach(sid=>{
        if(!studentDayStatus[sid]) return; // not on this dept/year's current roster
        sawPerStudent = true;
        const entry = recs[sid];
        const cur = studentDayStatus[sid][date] || {status:'P', od:null};
        if(entry.status === 'OD'){ cur.status = 'OD'; cur.od = entry.od || 'Others'; }
        else if(entry.status === 'A' && cur.status !== 'OD'){ cur.status = 'A'; }
        studentDayStatus[sid][date] = cur;
      });
    });
    if(sawBulkOnly && !sawPerStudent) bulkOnlyDays++;
  });

  // Build OD spells (consecutive calendar dates, same type) + Present/
  // Absent/OD day totals, per student.
  const studentRows = [];
  roster.forEach(s=>{
    const dayMap = studentDayStatus[s._id];
    const markedDates = Object.keys(dayMap).sort();
    if(!markedDates.length) return;
    let present=0, absent=0, odDays=0;
    const spells = [];
    let curSpell = null;
    markedDates.forEach(date=>{
      const {status, od} = dayMap[date];
      if(status==='P') present++;
      else if(status==='A') absent++;
      else if(status==='OD'){
        odDays++;
        const prevDate = curSpell ? new Date(new Date(curSpell.to+'T00:00:00').getTime()+86400000).toISOString().slice(0,10) : null;
        if(curSpell && curSpell.type===od && prevDate===date){
          curSpell.to = date; curSpell.days++;
        } else {
          if(curSpell) spells.push(curSpell);
          curSpell = {type: od, from: date, to: date, days: 1};
        }
      }
    });
    if(curSpell) spells.push(curSpell);
    const relevantSpells = typeFilter ? spells.filter(sp=>sp.type===typeFilter) : spells;
    if(!relevantSpells.length) return; // this student had no OD (of the chosen type) in range
    studentRows.push({student:s, spells:relevantSpells, present, absent, odDays, total:present+absent+odDays});
  });

  if(!studentRows.length){
    resultsEl.innerHTML = `<div class="no-data-note">No student was on OD${typeFilter ? ` (${escapeHtml(typeFilter)})` : ''} in this range for ${escapeHtml(dept)} · ${escapeHtml(year)}.</div>` +
      (bulkOnlyDays ? `<div class="arrear-count-note" style="margin-top:8px;">${bulkOnlyDays} day(s) in range were logged only as 🔢 Class Totals, with no per-student detail to check.</div>` : '');
    return;
  }
  studentRows.sort((a,b)=>a.student.name.localeCompare(b.student.name));
  resultsEl.innerHTML = `
    <div class="arrear-count-note" style="margin-bottom:10px;">${studentRows.length} student(s) · ${formatDateLabel(from)} – ${formatDateLabel(to)}${bulkOnlyDays ? ` · ${bulkOnlyDays} day(s) excluded (Class Totals only, no per-student detail)` : ''}</div>
    ${studentRows.map(r=>`
      <div class="dash-row" style="flex-direction:column;align-items:stretch;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div class="dr-label">${escapeHtml(r.student.name)}${r.student.regno ? ` <span style="font-weight:400;color:var(--text-dim);">· ${escapeHtml(r.student.regno)}</span>` : ''}</div>
          <div class="dash-mini-stats">
            <span class="mini-stat present">P ${r.present}</span>
            <span class="mini-stat absent">A ${r.absent}</span>
            <span class="mini-stat od">OD ${r.odDays}</span>
            <span class="mini-stat">Total ${r.total}</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          ${r.spells.map(sp=>`
            <div style="font-size:12.5px;color:var(--text-dim);display:flex;justify-content:space-between;gap:8px;">
              <span>🧾 ${escapeHtml(sp.type)}</span>
              <span>${formatDateLabel(sp.from)}${sp.to!==sp.from ? ` → ${formatDateLabel(sp.to)}` : ''} · ${sp.days} day(s)</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
};

// Opens a student's full detail card from anywhere outside their own
// department/year context (Arrears Report, etc.) by switching context first.
function openDetailFor(dept, year, studentId){
  currentDept = dept;
  currentYear = year;
  openDetail(studentId);
}

function renderArrearsReport(){
  const scopeAll = document.getElementById('arrearsScopeAll').checked;
  const rows = []; // {s, dept, year}
  if(scopeAll){
    Object.keys(DATA).forEach(dept=>{
      Object.keys(DATA[dept]).forEach(year=>{
        DATA[dept][year].forEach(s=>rows.push({s, dept, year}));
      });
    });
  } else {
    currentList().forEach(s=>rows.push({s, dept: currentDept, year: currentYear}));
  }

  const withArrears = rows
    .map(r=>{
      const list = Array.isArray(r.s.arrearSubjects) ? r.s.arrearSubjects : [];
      const count = list.length || parseFloat(r.s.arrears) || 0;
      return {...r, count, list};
    })
    .filter(r=>r.count > 0)
    .sort((a,b)=> a.count - b.count); // ascending by number of arrears

  const summaryEl = document.getElementById('arrearsSummary');
  const listEl = document.getElementById('arrearsList');
  summaryEl.textContent = withArrears.length
    ? `${withArrears.length} student${withArrears.length===1?'':'s'} ${scopeAll?'(all departments)':`in ${currentDept} · ${currentYear}`} have arrears — sorted lowest to highest.`
    : `No students ${scopeAll?'(all departments)':`in ${currentDept} · ${currentYear}`} have arrears. 🎉`;

  listEl.innerHTML = withArrears.map(r=>`
    <div class="missing-row" data-dept="${escapeAttr(r.dept)}" data-year="${escapeAttr(r.year)}" data-id="${escapeAttr(r.s._id)}" title="Tap to view arrear details">
      <div class="mr-top">
        <span class="mr-name">${escapeHtml(r.s.name)}</span>
        <span class="mr-loc">${escapeHtml(r.dept)} · ${escapeHtml(r.year)}${r.s.regno ? ' · ' + escapeHtml(r.s.regno) : ''}</span>
      </div>
      <div class="mr-chips">
        <span class="mr-chip">${r.count} arrear${r.count>1?'s':''}</span>
        ${r.list.map(a=>a.code ? `<span class="mr-chip">${escapeHtml(a.code)}</span>` : '').join('')}
      </div>
    </div>
  `).join('');
  listEl.querySelectorAll('.missing-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      document.getElementById('arrearsReportOverlay').classList.remove('open');
      openDetailFor(row.dataset.dept, row.dataset.year, row.dataset.id);
    });
  });
}

function openArrearsReport(){
  renderArrearsReport();
  document.getElementById('arrearsReportOverlay').classList.add('open');
}
document.getElementById('arrearsScopeAll').addEventListener('change', renderArrearsReport);

// ---------- Subjects Manager (add / edit / delete / reuse, semester-wise) ----------
const subjectsOverlay = document.getElementById('subjectsOverlay');
const subjectsDeptLabel = document.getElementById('subjectsDeptLabel');
const semesterTabsEl = document.getElementById('semesterTabs');
const subjectRowsEl = document.getElementById('subjectRows');
const subjectFormOverlay = document.getElementById('subjectFormOverlay');
const subjectForm = document.getElementById('subjectForm');
const subjectFormTitle = document.getElementById('subjectFormTitle');
let currentSubjectSem = '1';
let editingSubjectIdx = null; // index within SUBJECTS[dept][sem]

// ---- HOD Login gate ----
// Guards HOD-only actions (currently: moving a subject between semesters).
// If no HOD PIN/Password is set in Settings, the action is left open to
// everyone. Once unlocked, it stays unlocked for the rest of this session
// so the professor isn't re-prompted for every single move.
let hodUnlockedThisSession = false;
let hodLoginPendingCallback = null;
function requireHodLogin(onSuccess, message){
  if(!APP_SETTINGS.hodPin || hodUnlockedThisSession){ onSuccess(); return; }
  hodLoginPendingCallback = onSuccess;
  document.getElementById('hodLoginMsg').textContent = message || 'This action is restricted to the HOD. Enter the HOD PIN/Password to continue.';
  document.getElementById('hodLoginInput').value = '';
  document.getElementById('hodLoginErr').textContent = '';
  document.getElementById('hodLoginOverlay').classList.add('open');
  setTimeout(()=>document.getElementById('hodLoginInput').focus(), 150);
}
document.getElementById('hodLoginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const val = document.getElementById('hodLoginInput').value;
  if(val && val === APP_SETTINGS.hodPin){
    hodUnlockedThisSession = true;
    document.getElementById('hodLoginOverlay').classList.remove('open');
    const cb = hodLoginPendingCallback;
    hodLoginPendingCallback = null;
    if(cb) cb();
  } else {
    document.getElementById('hodLoginErr').textContent = 'Incorrect PIN/Password';
  }
});

function ensureDeptSubjects(dept){
  if(!SUBJECTS[dept]) SUBJECTS[dept] = {};
  for(let i=1;i<=8;i++){ if(!SUBJECTS[dept][i]) SUBJECTS[dept][i] = []; }
  return SUBJECTS[dept];
}

function renderSemesterTabs(){
  semesterTabsEl.innerHTML = '';
  for(let i=1;i<=8;i++){
    const b = document.createElement('button');
    b.className = 'tab' + (String(i)===currentSubjectSem ? ' active':'');
    b.textContent = 'Sem ' + i;
    b.onclick = ()=>{ currentSubjectSem = String(i); renderSemesterTabs(); renderSubjectRows(); };
    semesterTabsEl.appendChild(b);
  }
}

function renderSubjectRows(){
  const bySem = ensureDeptSubjects(currentDept);
  const list = bySem[currentSubjectSem] || [];
  if(!list.length){
    subjectRowsEl.innerHTML = `<div class="subject-empty">No subjects added for Semester ${currentSubjectSem} yet.</div>`;
    return;
  }
  subjectRowsEl.innerHTML = list.map((sub,i)=>`
    <div class="subject-row">
      <div class="sr-info">
        <div class="sr-code">${escapeHtml(sub.code||'—')}</div>
        <div class="sr-name">${escapeHtml(sub.name||'—')}</div>
        <div style="display:flex;gap:6px;margin-top:3px;flex-wrap:wrap;">
          ${sub.type ? `<span class="mr-chip"${sub.type==='Elective' ? ' style="background:var(--accent-dim);color:var(--accent);"' : ''}>${escapeHtml(sub.type)}</span>` : ''}
          ${sub.credit!==undefined && sub.credit!=='' ? `<span class="mr-chip">${escapeHtml(sub.credit)} credit${(+sub.credit)===1?'':'s'}</span>` : ''}
          ${sub.ltp ? `<span class="mr-chip">L-T-P ${escapeHtml(sub.ltp.l)}-${escapeHtml(sub.ltp.t)}-${escapeHtml(sub.ltp.p)}</span>` : ''}
          ${sub.periods!==undefined && sub.periods!=='' ? `<span class="mr-chip">${escapeHtml(sub.periods)} period${(+sub.periods)===1?'':'s'}/week</span>` : ''}
        </div>
      </div>
      <div class="sr-actions">
        <button class="sr-edit" data-i="${i}" title="Syllabus & Outcomes" style="background:var(--good-dim);color:var(--good);">📘</button>
        <button class="sr-edit sr-move" data-i="${i}" title="Move to another Semester (HOD only)" style="background:var(--accent-dim);color:var(--accent);">↔</button>
        <button class="sr-edit sr-edit-plain" data-i="${i}" title="Edit">✏️</button>
        <button class="sr-del" data-i="${i}" title="Delete">🗑️</button>
      </div>
    </div>
  `).join('');
  subjectRowsEl.querySelectorAll('.sr-edit[title="Syllabus & Outcomes"]').forEach(btn=>{
    btn.addEventListener('click', e=>openSubjectOutcomes(+e.currentTarget.dataset.i));
  });
  subjectRowsEl.querySelectorAll('.sr-move').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const i = +e.currentTarget.dataset.i;
      requireHodLogin(()=>openMoveSubject(i), 'Moving a subject between semesters is restricted to the HOD. Enter the HOD PIN/Password to continue.');
    });
  });
  subjectRowsEl.querySelectorAll('.sr-edit-plain').forEach(btn=>{
    btn.addEventListener('click', e=>openSubjectForm(+e.target.dataset.i));
  });
  subjectRowsEl.querySelectorAll('.sr-del').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const i = +e.target.dataset.i;
      const sub = SUBJECTS[currentDept][currentSubjectSem][i];
      if(!confirm(`Delete "${sub.code} — ${sub.name}"?`)) return;
      SUBJECTS[currentDept][currentSubjectSem].splice(i,1);
      saveSubjects();
      renderSubjectRows();
    });
  });
}

// ---- Move Subject to another Semester (HOD-gated) ----
let moveSubjectIdx = null;
function openMoveSubject(i){
  moveSubjectIdx = i;
  const sub = SUBJECTS[currentDept][currentSubjectSem][i];
  document.getElementById('moveSubjectMsg').textContent = `Move "${sub.code ? sub.code+' — ' : ''}${sub.name}" from Semester ${currentSubjectSem} to:`;
  const sel = document.getElementById('moveSubjectTargetSem');
  sel.innerHTML = '';
  for(let s=1;s<=8;s++){
    if(String(s)===currentSubjectSem) continue;
    sel.innerHTML += `<option value="${s}">Semester ${s}</option>`;
  }
  document.getElementById('moveSubjectOverlay').classList.add('open');
}
document.getElementById('moveSubjectConfirmBtn').onclick = ()=>{
  if(moveSubjectIdx===null) return;
  const fromSem = currentSubjectSem;
  const toSem = document.getElementById('moveSubjectTargetSem').value;
  ensureDeptSubjects(currentDept);
  const [sub] = SUBJECTS[currentDept][fromSem].splice(moveSubjectIdx, 1);
  SUBJECTS[currentDept][toSem].push(sub);
  saveSubjects();
  moveSubjectIdx = null;
  document.getElementById('moveSubjectOverlay').classList.remove('open');
  renderSubjectRows();
  toast(`Moved to Semester ${toSem}`);
};

function openSubjectsManager(){
  subjectsDeptLabel.textContent = currentDept;
  ensureDeptSubjects(currentDept);
  // land on the semester matching the currently open academic year, if any
  const sems = semestersForYear(currentYear);
  currentSubjectSem = sems ? String(sems[0]) : '1';
  renderSemesterTabs();
  renderSubjectRows();
  subjectsOverlay.classList.add('open');
}

function openSubjectForm(idx){
  editingSubjectIdx = (idx === undefined) ? null : idx;
  subjectForm.reset();
  sfPeriodsManuallySet = false;
  document.getElementById('sf_err_code').textContent = '';
  document.getElementById('sf_err_code').classList.remove('show');
  document.getElementById('sf_err_name').textContent = '';
  document.getElementById('sf_err_name').classList.remove('show');
  document.getElementById('sf_code').classList.remove('invalid');
  document.getElementById('sf_name').classList.remove('invalid');
  if(editingSubjectIdx !== null){
    const sub = SUBJECTS[currentDept][currentSubjectSem][editingSubjectIdx];
    subjectFormTitle.textContent = `Edit Subject — Sem ${currentSubjectSem}`;
    document.getElementById('sf_code').value = sub.code || '';
    document.getElementById('sf_name').value = sub.name || '';
    document.getElementById('sf_credit').value = sub.credit !== undefined ? sub.credit : '';
    document.getElementById('sf_type').value = sub.type || 'Theory';
    const ltp = sub.ltp || {};
    document.getElementById('sf_l').value = ltp.l !== undefined ? ltp.l : '';
    document.getElementById('sf_t').value = ltp.t !== undefined ? ltp.t : '';
    document.getElementById('sf_p').value = ltp.p !== undefined ? ltp.p : '';
    document.getElementById('sf_periods').value = sub.periods !== undefined ? sub.periods : '';
  } else {
    subjectFormTitle.textContent = `Add Subject — Sem ${currentSubjectSem}`;
    document.getElementById('sf_type').value = 'Theory';
  }
  subjectFormOverlay.classList.add('open');
  setTimeout(()=>document.getElementById('sf_code').focus(), 50);
}

document.getElementById('subjectsBtn').onclick = openSubjectsManager;
document.getElementById('addSubjectBtn').onclick = ()=>openSubjectForm(undefined);

// ---------- AI & DS syllabus import (2025 curriculum) ----------
// Grouped semester-wise, straight from the official curriculum document.
// Elective slots (Professional/Open/Language/Honours/Minor Elective) are
// included as type:'Elective' placeholder rows — the curriculum lets a
// student choose one course per slot from a separate vertical/options list
// rather than fixing one subject per department, so the slot itself (not
// every option in it) is what belongs in a semester's subject list.
function _ltp(l,t,p){ return {ltp:{l:String(l),t:String(t),p:String(p)}, periods:l+t+p}; }
const AIDS_SYLLABUS_SEED = {
  1: [
    {code:'24MC121', name:'Induction Program: Universal Human Value - I', credit:'0', type:'Theory', ..._ltp(0,0,0)},
    {code:'24TA101', name:'Heritage of Tamils', credit:'1', type:'Theory', ..._ltp(1,0,0)},
    {code:'24EN111', name:'Technical Communication - I', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24CH112', name:'Engineering Chemistry', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24PY112', name:'Engineering Physics', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24MA111', name:'Matrices and Calculus', credit:'4', type:'Integrated', ..._ltp(2,1,2)},
    {code:'24CS112', name:'Computational Thinking', credit:'2', type:'Integrated', ..._ltp(1,0,2)},
    {code:'24CS111', name:'Programming in C', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24GE125', name:'Makers Space Lab - Electrical and Electronics', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24SP121', name:'Physical Education - I', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24MC122', name:'NSS / NSO / YRC - Level I', credit:'0', type:'Lab', ..._ltp(0,0,2)},
  ],
  2: [
    {code:'24TA201', name:'Tamils and Technology', credit:'1', type:'Theory', ..._ltp(1,0,0)},
    {code:'24GE101', name:'Basic Civil and Mechanical Engineering', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24EN211', name:'Technical Communication - II', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24PY211', name:'Semiconductor Devices and Quantum Technology', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24MA211', name:'Transforms and Numerical Methods', credit:'4', type:'Integrated', ..._ltp(2,1,2)},
    {code:'24ME111', name:'Engineering Visualization and 3D Modelling', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24CS211', name:'Python Programming', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24IT121', name:'IT Essential Skills', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24GE126', name:'Makers Space Lab - Mechanical and Civil', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24SP221', name:'Physical Education - II', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24AU221', name:'Audit Course - I: Digital Wellness', credit:'0', type:'Lab', ..._ltp(0,0,2)},
  ],
  3: [
    {code:'24MA301', name:'Discrete Mathematics', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24AD301', name:'Data Science', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24CS302', name:'Data Structures', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24CS303', name:'Java Programming', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24EC313', name:'Basic Electrical and Digital Electronics', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24ES321', name:'Innovation and Design Thinking', credit:'2', type:'Integrated', ..._ltp(1,0,2)},
    {code:'24AD321', name:'Data Science Laboratory', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'24CS321', name:'Data Structures Lab', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'24CS322', name:'Java Programming Laboratory', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'LE-I', name:'Language Elective - Level I (choose one)', credit:'0', type:'Elective', ..._ltp(0,0,2)},
    {code:'24MC321', name:'NSS / NSO / YRC - Level II', credit:'0', type:'Lab', ..._ltp(0,0,2)},
  ],
  4: [
    {code:'24AM401', name:'Artificial Intelligence', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24CS402', name:'Design and Analysis of Algorithms', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24AD409', name:'Standards of AI', credit:'1', type:'Theory', ..._ltp(1,0,0)},
    {code:'24GE421', name:'Startup and Entrepreneurship', credit:'2', type:'Integrated', ..._ltp(1,0,2)},
    {code:'24MA411', name:'Probability and Statistics', credit:'4', type:'Integrated', ..._ltp(2,1,2)},
    {code:'24CH412', name:'Environmental Studies and Sustainable Development', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24AD412', name:'Database Design and Management Systems', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24GE311', name:'Universal Human Values and Ethics', credit:'2', type:'Integrated', ..._ltp(1,0,2)},
    {code:'24AM421', name:'Artificial Intelligence Lab', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'LE-I', name:'Language Elective - Level I (choose one)', credit:'0', type:'Elective', ..._ltp(0,0,2)},
    {code:'AC-II', name:'Audit Course - II (choose one)', credit:'0', type:'Elective', ..._ltp(2,0,0)},
  ],
  5: [
    {code:'24AM501', name:'Machine Learning', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24AD501', name:'Agentic Gen AI', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24AD512', name:'Data Exploration and Visualization', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24EC611', name:'Computer Architecture and Networks', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24CS411', name:'Operating Systems', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24EC412', name:'Microcontroller and Interfacing', credit:'4', type:'Integrated', ..._ltp(3,0,2)},
    {code:'24AM521', name:'Machine Learning Lab', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'24AD522', name:'Mini Project / Summer Internship - I', credit:'1', type:'Theory', ..._ltp(0,0,0)},
    {code:'LE-II', name:'Language Elective - Level II (choose one)', credit:'0', type:'Elective', ..._ltp(0,0,2)},
    {code:'HE-I', name:'Honours Elective - I (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'HE-II', name:'Honours Elective - II (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-I', name:'Minor Elective - I (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-II', name:'Minor Elective - II (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
  ],
  6: [
    {code:'24AD601', name:'Distributed and Cloud Computing', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24CY602', name:'Data Privacy and Security', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24AD611', name:'Deep Learning', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'24CS612', name:'UI and UX Design', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'PE-I', name:'Professional Elective - I (choose from Vertical I–VI)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'PE-II', name:'Professional Elective - II (choose from Vertical I–VI)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'OEC-I', name:'Open Elective / Emerging Technology Course - I', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'24IT622', name:'Full Stack Development Lab', credit:'2', type:'Lab', ..._ltp(0,0,4)},
    {code:'24AD621', name:'Software Project Development Lab', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'LE-II', name:'Language Elective - Level II (choose one)', credit:'0', type:'Elective', ..._ltp(0,0,2)},
    {code:'HE-III', name:'Honours Elective - III (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'HE-IV', name:'Honours Elective - IV (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-III', name:'Minor Elective - III (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-IV', name:'Minor Elective - IV (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
  ],
  7: [
    {code:'24AD701', name:'Natural Language Processing', credit:'3', type:'Theory', ..._ltp(3,0,0)},
    {code:'24IT612', name:'Big Data Analytics', credit:'3', type:'Integrated', ..._ltp(2,0,2)},
    {code:'PE-III', name:'Professional Elective - III (choose from Vertical I–VI)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'PE-IV', name:'Professional Elective - IV (choose from Vertical I–VI)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'OEC-II', name:'Open Elective / Emerging Technology Course - II', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'24GE721', name:'Soft Skill and Personality Development', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24AD721', name:'Comprehension', credit:'1', type:'Lab', ..._ltp(0,0,2)},
    {code:'24AD722', name:'Mini Project / Summer Internship - II', credit:'1', type:'Theory', ..._ltp(0,0,0)},
    {code:'AC-III', name:'Audit Course - III (choose one)', credit:'0', type:'Elective', ..._ltp(2,0,0)},
    {code:'HE-V', name:'Honours Elective - V (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'HE-VI', name:'Honours Elective - VI (Honours Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-V', name:'Minor Elective - V (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
    {code:'ME-VI', name:'Minor Elective - VI (Minor Degree)', credit:'3', type:'Elective', ..._ltp(3,0,0)},
  ],
  8: [
    {code:'24AD821', name:'Internship cum Project', credit:'8', type:'Lab', ..._ltp(0,0,16)},
  ],
};

// The 6 Professional Elective verticals (each vertical's 8 course options,
// any one chosen per PE-I..IV slot above) and the Open Elective course pool
// — kept as reference text rather than as individual subject rows, since a
// student picks one course, not all of them.
const AIDS_ELECTIVE_VERTICALS = {
  'Vertical I — Artificial Intelligence': ['Soft Computing','Applied Machine Learning','Generative AI and Prompt Engineering','AI for Industrial Application','AI for Supply Chain','Knowledge Engineering','AI for Robotics','AutoML'],
  'Vertical II — Data Analytics': ['Applied Machine Learning for Data Analytics','Recommender Systems','Image and Video Analytics','Text and Speech Analytics','Prescriptive Analytics and Optimization','Data Mining','R Programming','Healthcare Analytics'],
  'Vertical III — Product Development': ['Software Architecture and System Design','Information Architecture','Java Spring Boot','Fundamentals of DevOps','Robotic Process Automation','Game Programming','Full Stack Development','ML Ops'],
  'Vertical IV — Cyber Security': ['Information Security','Digital Mobile Forensics','Cyber Forensics and Investigation','Web and IoT Security','Blockchain','Firewalls and IDS/IPS','Enterprise Blockchain','Fintech'],
  'Vertical V — Emerging Technology': ['Cloud Computing','Augmented Reality and Virtual Reality','Edge and Fog Computing','Granular Computing','Quantum Computing','Privacy in Communication Networks','Mobile Adhoc Network','Quantum Algorithms and Qiskit'],
  'Vertical VI — Internet of Things and Smart Applications': ['Dynamic Paradigm for IoT','Smart IoT Architecture','Real Time Operating System','IoT in 5G Networks','IoT and Smart Cities','Data Analytics for IoT','IoT and Industry 5.0','Security and Privacy in IoT'],
};

function importAidsSyllabus(){
  const bySem = ensureDeptSubjects(currentDept);
  let added = 0, updated = 0;
  for(let sem=1; sem<=8; sem++){
    const seedList = AIDS_SYLLABUS_SEED[sem] || [];
    const byCode = new Map(bySem[sem].map(s=>[String(s.code||'').toUpperCase(), s]));
    seedList.forEach(seed=>{
      const key = seed.code.toUpperCase();
      const existing = byCode.get(key);
      if(existing){
        // Already on file (e.g. from an earlier basic seed) — fill in only
        // what's missing (credit, type, L-T-P, weekly periods) without
        // touching anything the user has already customized.
        let changed = false;
        if(existing.credit===undefined || existing.credit===''){ existing.credit = seed.credit; changed = true; }
        if(!existing.type){ existing.type = seed.type; changed = true; }
        if(!existing.ltp && seed.ltp){ existing.ltp = {...seed.ltp}; changed = true; }
        if((existing.periods===undefined || existing.periods==='') && seed.periods!==undefined){ existing.periods = seed.periods; changed = true; }
        if(changed) updated++;
        return;
      }
      const fresh = {...seed};
      bySem[sem].push(fresh);
      byCode.set(key, fresh);
      added++;
    });
  }
  saveSubjects();
  renderSemesterTabs();
  renderSubjectRows();
  const parts = [];
  if(added) parts.push(`${added} new subject${added===1?'':'s'} added`);
  if(updated) parts.push(`${updated} existing subject${updated===1?'':'s'} filled in with credit/L-T-P/periods`);
  toast(parts.length ? parts.join(', ') : 'Already up to date — nothing new to import');
}
document.getElementById('importSyllabusBtn').addEventListener('click', importAidsSyllabus);

// Auto-fill Weekly Periods from L+T+P whenever any of the three change,
// unless the user has already typed their own override into that field.
let sfPeriodsManuallySet = false;
document.getElementById('sf_periods').addEventListener('input', ()=>{ sfPeriodsManuallySet = true; });
['sf_l','sf_t','sf_p'].forEach(id=>{
  document.getElementById(id).addEventListener('input', ()=>{
    if(sfPeriodsManuallySet) return;
    const l = +document.getElementById('sf_l').value || 0;
    const t = +document.getElementById('sf_t').value || 0;
    const p = +document.getElementById('sf_p').value || 0;
    if(l||t||p) document.getElementById('sf_periods').value = l+t+p;
  });
});
subjectForm.addEventListener('submit', e=>{
  sfPeriodsManuallySet = false; // reset for the next time the form opens
  e.preventDefault();
  const code = document.getElementById('sf_code').value.trim();
  const name = document.getElementById('sf_name').value.trim();
  let hasError = false;
  if(!code || !/^[A-Za-z0-9\-\/]{2,15}$/.test(code)){
    document.getElementById('sf_code').classList.add('invalid');
    document.getElementById('sf_err_code').textContent = 'Enter a valid subject code (2–15 letters/digits)';
    document.getElementById('sf_err_code').classList.add('show');
    hasError = true;
  }
  if(!name){
    document.getElementById('sf_name').classList.add('invalid');
    document.getElementById('sf_err_name').textContent = 'Subject name is required';
    document.getElementById('sf_err_name').classList.add('show');
    hasError = true;
  }
  if(hasError) return;

  const credit = document.getElementById('sf_credit').value.trim();
  const type = document.getElementById('sf_type').value;
  const l = document.getElementById('sf_l').value.trim();
  const t = document.getElementById('sf_t').value.trim();
  const p = document.getElementById('sf_p').value.trim();
  const ltp = (l||t||p) ? {l:l||'0', t:t||'0', p:p||'0'} : undefined;
  const periodsInput = document.getElementById('sf_periods').value.trim();
  const periods = periodsInput !== '' ? +periodsInput : (ltp ? (+ltp.l + +ltp.t + +ltp.p) : undefined);
  const list = ensureDeptSubjects(currentDept)[currentSubjectSem];
  if(editingSubjectIdx !== null){
    // Preserve syllabus/CO/attainment data already recorded for this subject.
    list[editingSubjectIdx] = {...list[editingSubjectIdx], code, name, credit, type, ltp, periods};
    toast('Subject updated');
  } else {
    list.push({code, name, credit, type, ltp, periods});
    toast('Subject added');
  }
  saveSubjects();
  subjectFormOverlay.classList.remove('open');
  renderSubjectRows();
});

// ---------- PEO / PO / PSO (Program Outcomes overlay) ----------
const programOutcomesOverlay = document.getElementById('programOutcomesOverlay');
document.getElementById('programOutcomesBtn').onclick = ()=>{
  document.getElementById('poDeptLabel').textContent = currentDept;
  renderProgramOutcomeRows();
  programOutcomesOverlay.classList.add('open');
};

function poRowHtml(kind, item, i){
  const codePlaceholder = kind==='peos' ? 'PEO'+(i+1) : (kind==='pos' ? 'PO'+(i+1) : 'PSO'+(i+1));
  return `<div class="arrear-row" data-kind="${kind}" data-i="${i}" style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
    <input type="text" class="po-code" value="${escapeAttr(item.code||codePlaceholder)}" style="width:80px;flex-shrink:0;" placeholder="${codePlaceholder}">
    <input type="text" class="po-desc" value="${escapeAttr(item.description||'')}" style="flex:1;" placeholder="Description">
    <button type="button" class="sr-del po-del" title="Remove" style="flex-shrink:0;">🗑️</button>
  </div>`;
}

function renderProgramOutcomeRows(){
  const po = ensureProgramOutcomes(currentDept);
  const peoRows = document.getElementById('peoRows');
  const poRows = document.getElementById('poRows');
  const psoRows = document.getElementById('psoRows');
  peoRows.innerHTML = po.peos.length ? po.peos.map((it,i)=>poRowHtml('peos',it,i)).join('') : '<div class="arrear-count-note">No PEOs added yet.</div>';
  poRows.innerHTML = po.pos.map((it,i)=>poRowHtml('pos',it,i)).join('');
  psoRows.innerHTML = po.psos.length ? po.psos.map((it,i)=>poRowHtml('psos',it,i)).join('') : '<div class="arrear-count-note">No PSOs added yet.</div>';
  [peoRows, poRows, psoRows].forEach(container=>{
    container.querySelectorAll('.arrear-row').forEach(row=>{
      const kind = row.dataset.kind, i = +row.dataset.i;
      row.querySelector('.po-code').addEventListener('input', e=>{ ensureProgramOutcomes(currentDept)[kind][i].code = e.target.value; saveProgramOutcomes(); });
      row.querySelector('.po-desc').addEventListener('input', e=>{ ensureProgramOutcomes(currentDept)[kind][i].description = e.target.value; saveProgramOutcomes(); });
      row.querySelector('.po-del').addEventListener('click', ()=>{
        ensureProgramOutcomes(currentDept)[kind].splice(i,1);
        saveProgramOutcomes();
        renderProgramOutcomeRows();
      });
    });
  });
}

document.getElementById('addPeoBtn').onclick = ()=>{
  const po = ensureProgramOutcomes(currentDept);
  po.peos.push({code:'PEO'+(po.peos.length+1), description:''});
  saveProgramOutcomes();
  renderProgramOutcomeRows();
};
document.getElementById('addPoBtn').onclick = ()=>{
  const po = ensureProgramOutcomes(currentDept);
  po.pos.push({code:'PO'+(po.pos.length+1), description:''});
  saveProgramOutcomes();
  renderProgramOutcomeRows();
};
document.getElementById('addPsoBtn').onclick = ()=>{
  const po = ensureProgramOutcomes(currentDept);
  po.psos.push({code:'PSO'+(po.psos.length+1), description:''});
  saveProgramOutcomes();
  renderProgramOutcomeRows();
};
document.getElementById('programOutcomesDoneBtn').onclick = ()=>{
  saveProgramOutcomes();
  programOutcomesOverlay.classList.remove('open');
  toast('PEO / PO / PSO saved');
};

// ---------- Subject Syllabus, Course Outcomes & CO-PO/PSO Attainment ----------
const subjectOutcomesOverlay = document.getElementById('subjectOutcomesOverlay');
let soCurrentIdx = null;
const PEDAGOGY_OPTIONS = ['Lecture','Flipped Classroom','PPT / Presentation','Demonstration','Activity-based','Video / Multimedia','Discussion','Chalk & Talk','Case Study','Problem Solving'];

function currentSubjectObj(){
  if(soCurrentIdx === null) return null;
  const list = ensureDeptSubjects(currentDept)[currentSubjectSem];
  return list[soCurrentIdx] || null;
}

function ensureSubjectOutcomeFields(subj){
  if(!Array.isArray(subj.syllabus)) subj.syllabus = [];
  if(!Array.isArray(subj.cos)) subj.cos = [];
  if(!subj.attainment || typeof subj.attainment !== 'object') subj.attainment = {};
  return subj;
}

function openSubjectOutcomes(idx){
  soCurrentIdx = idx;
  const subj = currentSubjectObj();
  if(!subj) return;
  ensureSubjectOutcomeFields(subj);
  document.getElementById('soTitle').textContent = `${subj.code} — ${subj.name}`;
  soSwitchTab('syllabus');
  renderSyllabusRows();
  renderCoRows();
  renderAttainmentTable();
  subjectOutcomesOverlay.classList.add('open');
}

function soSwitchTab(tab){
  const tabs = {syllabus:'soTabSyllabus', cos:'soTabCOs', attainment:'soTabAttainment'};
  const panes = {syllabus:'soPaneSyllabus', cos:'soPaneCOs', attainment:'soPaneAttainment'};
  Object.keys(tabs).forEach(k=>{
    document.getElementById(tabs[k]).classList.toggle('active', k===tab);
    document.getElementById(panes[k]).style.display = (k===tab) ? '' : 'none';
  });
  if(tab==='attainment') renderAttainmentTable();
}
document.getElementById('soTabSyllabus').onclick = ()=>soSwitchTab('syllabus');
document.getElementById('soTabCOs').onclick = ()=>soSwitchTab('cos');
document.getElementById('soTabAttainment').onclick = ()=>soSwitchTab('attainment');

function saveCurrentSubjectOutcomes(){
  saveSubjects();
}

// ----- Syllabus topics: doubles as the subject's Lesson Plan (planned
// date per topic) and Daily Class Record (tick "Covered" as each topic is
// actually taught, period by period) — the coverage bar tracks progress
// against the syllabus so a HOD can see who's on schedule at a glance. -----
function syllabusCoverageStats(subj){
  const topics = subj.syllabus || [];
  const total = topics.length;
  const covered = topics.filter(t=>t.covered).length;
  const pct = total ? Math.round((covered/total)*100) : 0;
  return {total, covered, pct};
}
function renderSyllabusCoverageBar(){
  const subj = currentSubjectObj();
  const el = document.getElementById('syllabusCoverageBar');
  if(!subj || !el) return;
  const {total, covered, pct} = syllabusCoverageStats(subj);
  if(!total){ el.innerHTML = ''; return; }
  el.innerHTML = `
    <div style="display:flex;justify-content:space-between;font-size:12.5px;font-weight:700;margin-bottom:5px;">
      <span>📘 Syllabus Coverage</span>
      <span>${covered} / ${total} topics covered (${pct}%)</span>
    </div>
    <div style="height:9px;border-radius:999px;background:var(--surface-2);overflow:hidden;">
      <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#34d399,#059669);border-radius:999px;"></div>
    </div>`;
}
function renderSyllabusRows(){
  const subj = currentSubjectObj();
  if(!subj) return;
  renderSyllabusCoverageBar();
  const container = document.getElementById('syllabusRows');
  if(!subj.syllabus.length){
    container.innerHTML = '<div class="arrear-count-note">No topics added yet.</div>';
    return;
  }
  container.innerHTML = subj.syllabus.map((t,i)=>{
    const pedagogyOpts = PEDAGOGY_OPTIONS.map(p=>`<option value="${escapeAttr(p)}" ${t.pedagogy===p?'selected':''}>${escapeHtml(p)}</option>`).join('');
    return `<div class="arrear-row" data-i="${i}" style="display:flex;gap:6px;align-items:center;margin-bottom:6px;flex-wrap:wrap;${t.covered?'opacity:0.75;':''}">
      <span style="width:22px;flex-shrink:0;color:var(--text-dim);font-size:12px;">${i+1}.</span>
      <input type="text" class="syl-topic" value="${escapeAttr(t.topic||'')}" style="flex:2;min-width:140px;${t.covered?'text-decoration:line-through;':''}" placeholder="Topic / unit title">
      <input type="number" class="syl-hours" value="${escapeAttr(t.hours||'')}" style="width:70px;flex-shrink:0;" placeholder="Hours" min="0" step="0.5">
      <select class="syl-pedagogy" style="flex:1;min-width:150px;">
        <option value="">Pedagogy…</option>
        ${pedagogyOpts}
        <option value="__custom__">Other…</option>
      </select>
      <label style="display:flex;flex-direction:column;font-size:10px;color:var(--text-dim);gap:2px;flex-shrink:0;">Planned Date
        <input type="date" class="syl-planned" value="${escapeAttr(t.plannedDate||'')}" style="font-size:12px;">
      </label>
      <label style="display:flex;align-items:center;gap:5px;font-size:11.5px;font-weight:700;flex-shrink:0;cursor:pointer;color:${t.covered?'var(--good)':'var(--text-dim)'};">
        <input type="checkbox" class="syl-covered" style="width:auto;" ${t.covered?'checked':''}>
        ${t.covered ? '✅ Covered '+escapeHtml(formatDateLabel(t.coveredDate||'')) : '⬜ Mark Covered'}
      </label>
      <button type="button" class="sr-del syl-del" title="Remove" style="flex-shrink:0;">🗑️</button>
    </div>`;
  }).join('');
  container.querySelectorAll('.arrear-row').forEach(row=>{
    const i = +row.dataset.i;
    row.querySelector('.syl-topic').addEventListener('input', e=>{ subj.syllabus[i].topic = e.target.value; saveCurrentSubjectOutcomes(); });
    row.querySelector('.syl-hours').addEventListener('input', e=>{ subj.syllabus[i].hours = e.target.value; saveCurrentSubjectOutcomes(); });
    row.querySelector('.syl-planned').addEventListener('change', e=>{ subj.syllabus[i].plannedDate = e.target.value; saveCurrentSubjectOutcomes(); });
    row.querySelector('.syl-covered').addEventListener('change', e=>{
      subj.syllabus[i].covered = e.target.checked;
      subj.syllabus[i].coveredDate = e.target.checked ? todayStr() : '';
      saveCurrentSubjectOutcomes();
      renderSyllabusRows();
    });
    const sel = row.querySelector('.syl-pedagogy');
    if(t_hasCustomPedagogy(subj.syllabus[i].pedagogy)){
      sel.value = '__custom__';
    }
    sel.addEventListener('change', e=>{
      if(e.target.value === '__custom__'){
        const custom = window.prompt ? null : null; // no window.prompt per app convention; fall back to inline input
        subj.syllabus[i].pedagogy = subj.syllabus[i].pedagogy && !PEDAGOGY_OPTIONS.includes(subj.syllabus[i].pedagogy) ? subj.syllabus[i].pedagogy : '';
        openCustomPedagogyInput(row, i, subj);
      } else {
        subj.syllabus[i].pedagogy = e.target.value;
        saveCurrentSubjectOutcomes();
      }
    });
    row.querySelector('.syl-del').addEventListener('click', ()=>{
      subj.syllabus.splice(i,1);
      saveCurrentSubjectOutcomes();
      renderSyllabusRows();
    });
  });
}
function t_hasCustomPedagogy(val){
  return val && !PEDAGOGY_OPTIONS.includes(val);
}
function openCustomPedagogyInput(row, i, subj){
  if(row.querySelector('.syl-pedagogy-custom')) return;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'syl-pedagogy-custom';
  input.placeholder = 'Enter pedagogy';
  input.style.cssText = 'flex:1;min-width:120px;';
  input.value = t_hasCustomPedagogy(subj.syllabus[i].pedagogy) ? subj.syllabus[i].pedagogy : '';
  input.addEventListener('input', e=>{ subj.syllabus[i].pedagogy = e.target.value; saveCurrentSubjectOutcomes(); });
  row.appendChild(input);
  input.focus();
}
document.getElementById('addSyllabusTopicBtn').onclick = ()=>{
  const subj = currentSubjectObj();
  if(!subj) return;
  subj.syllabus.push({topic:'', hours:'', pedagogy:''});
  saveCurrentSubjectOutcomes();
  renderSyllabusRows();
};

// ----- Course Outcomes -----
function renderCoRows(){
  const subj = currentSubjectObj();
  if(!subj) return;
  const container = document.getElementById('coRows');
  if(!subj.cos.length){
    container.innerHTML = '<div class="arrear-count-note">No Course Outcomes added yet.</div>';
    return;
  }
  container.innerHTML = subj.cos.map((c,i)=>{
    return `<div class="arrear-row" data-i="${i}" style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
      <input type="text" class="co-code" value="${escapeAttr(c.code||('CO'+(i+1)))}" style="width:70px;flex-shrink:0;">
      <input type="text" class="co-desc" value="${escapeAttr(c.description||'')}" style="flex:1;" placeholder="On completion, students will be able to…">
      <button type="button" class="sr-del co-del" title="Remove" style="flex-shrink:0;">🗑️</button>
    </div>`;
  }).join('');
  container.querySelectorAll('.arrear-row').forEach(row=>{
    const i = +row.dataset.i;
    row.querySelector('.co-code').addEventListener('input', e=>{ subj.cos[i].code = e.target.value; saveCurrentSubjectOutcomes(); renderAttainmentTable(); });
    row.querySelector('.co-desc').addEventListener('input', e=>{ subj.cos[i].description = e.target.value; saveCurrentSubjectOutcomes(); });
    row.querySelector('.co-del').addEventListener('click', ()=>{
      const code = subj.cos[i].code || ('CO'+(i+1));
      delete subj.attainment[code];
      subj.cos.splice(i,1);
      saveCurrentSubjectOutcomes();
      renderCoRows();
      renderAttainmentTable();
    });
  });
}
document.getElementById('addCoBtn').onclick = ()=>{
  const subj = currentSubjectObj();
  if(!subj) return;
  subj.cos.push({code:'CO'+(subj.cos.length+1), description:''});
  saveCurrentSubjectOutcomes();
  renderCoRows();
  renderAttainmentTable();
};

// ----- CO-PO/PSO Attainment matrix -----
function renderAttainmentTable(){
  const subj = currentSubjectObj();
  if(!subj) return;
  const table = document.getElementById('attainmentTable');
  const progOut = ensureProgramOutcomes(currentDept);
  const cols = [...progOut.pos.map(p=>p.code), ...progOut.psos.map(p=>p.code)];
  if(!subj.cos.length || !cols.length){
    table.innerHTML = `<tr><td style="padding:8px 0;color:var(--text-dim);font-size:12.5px;">${!subj.cos.length ? 'Add Course Outcomes first.' : 'Add PO/PSO in Dept PEO/PO/PSO first.'}</td></tr>`;
    document.getElementById('overallAttainmentValue').textContent = '—';
    return;
  }
  let head = '<tr><th style="border:1px solid var(--border);padding:5px 8px;background:var(--panel-2);">CO \\ PO</th>' +
    cols.map(c=>`<th style="border:1px solid var(--border);padding:5px 8px;background:var(--panel-2);">${escapeHtml(c)}</th>`).join('') + '</tr>';
  let rows = subj.cos.map((c,ci)=>{
    const code = c.code || ('CO'+(ci+1));
    if(!subj.attainment[code]) subj.attainment[code] = {};
    const cells = cols.map(col=>{
      const val = subj.attainment[code][col] != null ? subj.attainment[code][col] : '';
      return `<td style="border:1px solid var(--border);padding:2px;text-align:center;">
        <input type="number" class="attain-cell" data-co="${escapeAttr(code)}" data-col="${escapeAttr(col)}" min="0" max="3" step="1" value="${escapeAttr(val)}" style="width:48px;text-align:center;border:none;background:transparent;color:var(--text);">
      </td>`;
    }).join('');
    return `<tr><td style="border:1px solid var(--border);padding:5px 8px;font-weight:600;">${escapeHtml(code)}</td>${cells}</tr>`;
  }).join('');
  table.innerHTML = head + rows;
  table.querySelectorAll('.attain-cell').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const co = e.target.dataset.co, col = e.target.dataset.col;
      let v = e.target.value === '' ? null : Math.max(0, Math.min(3, +e.target.value));
      if(!subj.attainment[co]) subj.attainment[co] = {};
      subj.attainment[co][col] = v;
      saveCurrentSubjectOutcomes();
      computeOverallAttainment();
    });
  });
  computeOverallAttainment();
}

function computeOverallAttainment(){
  const subj = currentSubjectObj();
  if(!subj){ return; }
  let sum = 0, count = 0;
  Object.values(subj.attainment || {}).forEach(row=>{
    Object.values(row).forEach(v=>{
      if(v != null && v !== ''){ sum += (+v); count++; }
    });
  });
  const display = document.getElementById('overallAttainmentValue');
  if(!count){ display.textContent = '—'; return; }
  const avg = sum / count;
  display.textContent = avg.toFixed(2) + ' / 3';
}

document.getElementById('subjectOutcomesDoneBtn').onclick = ()=>{
  saveCurrentSubjectOutcomes();
  subjectOutcomesOverlay.classList.remove('open');
  toast('Syllabus & Outcomes saved');
};

// ---------- Export ----------
document.getElementById('exportBtn').onclick = ()=>{
  const list = currentList();
  if(!list.length){ toast('Nothing to export'); return; }
  const cols = ['sno','regno','name','hostel','gender','phone','father','fatherphone','mother','motherphone','address','cgpa','arrears'];
  const header = ['S.No','Register Number','Student Name','Category','Phone','Father Name','Father Phone','Mother Name','Mother Phone','Address','CGPA','Arrears','Arrear Subjects (Code - Name)'];
  const csvRows = [header.join(',')];
  list.forEach(s=>{
    const rowVals = cols.map(c=>String(s[c] ?? ''));
    const arrList = Array.isArray(s.arrearSubjects) ? s.arrearSubjects : [];
    rowVals.push(arrList.map(a=>`${a.code} - ${a.name}`).join('; '));
    csvRows.push(rowVals.map(v=>{
      v = v.replace(/"/g,'""');
      return /[",\n]/.test(v) ? `"${v}"` : v;
    }).join(','));
  });
  const blob = new Blob([csvRows.join('\n')], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${currentDept.replace(/\s+/g,'_')}_${currentYear.replace(/\s+/g,'_')}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
};

document.getElementById('facExportBtn').onclick = ()=>{
  const list = currentFacultyList();
  if(!list.length){ toast('Nothing to export'); return; }
  const header = ['Faculty Name','Designation','Phone','Email','Subjects Handled'];
  const csvRows = [header.join(',')];
  list.forEach(f=>{
    const subjectsStr = Array.isArray(f.subjects) && f.subjects.length
      ? f.subjects.map(s=>`${s.code?s.code+' - ':''}${s.name} (${s.dept} · ${s.year})`).join('; ')
      : (f.subject || '');
    const rowVals = [f.name, f.designation, f.phone, f.email, subjectsStr].map(v=>String(v ?? ''));
    csvRows.push(rowVals.map(v=>{
      v = v.replace(/"/g,'""');
      return /[",\n]/.test(v) ? `"${v}"` : v;
    }).join(','));
  });
  const blob = new Blob([csvRows.join('\n')], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${currentFacDept.replace(/\s+/g,'_')}_Faculty.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
};

// ---------- Toast ----------
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}

// ---------- Undo bar ----------
// A generic "<message> — Undo" strip for reversible destructive actions
// (single or bulk student/faculty delete). Call with a message and a
// restore function; only one undo is live at a time — starting a new one
// (or letting it time out) drops the previous one, matching how a single
// "Undo" affordance is expected to behave.
let undoBarTimer = null;
let undoBarAction = null;
function showUndo(message, restoreFn, seconds=8){
  const bar = document.getElementById('undoBar');
  document.getElementById('undoBarMsg').textContent = message;
  undoBarAction = restoreFn;
  bar.classList.add('show');
  clearTimeout(undoBarTimer);
  undoBarTimer = setTimeout(()=>{ bar.classList.remove('show'); undoBarAction = null; }, seconds*1000);
}
document.getElementById('undoBarBtn').onclick = ()=>{
  const fn = undoBarAction;
  document.getElementById('undoBar').classList.remove('show');
  clearTimeout(undoBarTimer);
  undoBarAction = null;
  if(fn) fn();
};

// ================= SUPPRESSIBLE WARNINGS =================
// A per-device (not synced — this is a UI preference, like theme) record of
// which repeat "are you sure?" warnings the HOD has said not to show again.
const SUPPRESSED_WARNINGS_KEY = 'student_records_suppressed_warnings_v1';
function loadSuppressedWarnings(){
  try{ const raw = localStorage.getItem(SUPPRESSED_WARNINGS_KEY); if(raw) return JSON.parse(raw); }catch(e){}
  return {};
}
let SUPPRESSED_WARNINGS = loadSuppressedWarnings();
function saveSuppressedWarnings(){
  try{ localStorage.setItem(SUPPRESSED_WARNINGS_KEY, JSON.stringify(SUPPRESSED_WARNINGS)); }catch(e){}
}
// Promise-based replacement for confirm() on the repeat overwrite warnings:
// resolves true immediately (no dialog at all) if this exact warning was
// previously suppressed; otherwise shows the dialog with a "don't show this
// warning again" checkbox and resolves true/false from Continue/Cancel.
function confirmWithSuppress(key, message){
  if(SUPPRESSED_WARNINGS[key]) return Promise.resolve(true);
  return new Promise(resolve=>{
    document.getElementById('warnConfirmMessage').textContent = message;
    document.getElementById('warnConfirmSuppress').checked = false;
    const overlay = document.getElementById('warnConfirmOverlay');
    overlay.classList.add('open');
    const okBtn = document.getElementById('warnConfirmOkBtn');
    const cancelBtn = document.getElementById('warnConfirmCancelBtn');
    const closeBtn = document.getElementById('warnConfirmCloseBtn');
    const cleanup = ()=>{
      overlay.classList.remove('open');
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
      closeBtn.removeEventListener('click', onCancel);
      overlay.removeEventListener('click', onBackdrop);
    };
    const onOk = ()=>{
      if(document.getElementById('warnConfirmSuppress').checked){
        SUPPRESSED_WARNINGS[key] = true;
        saveSuppressedWarnings();
      }
      cleanup(); resolve(true);
    };
    const onCancel = ()=>{ cleanup(); resolve(false); };
    // The app's own generic "click outside a sheet closes it" handler only
    // removes the 'open' class — it doesn't know about this promise, so
    // clicking the backdrop would otherwise leave the await hanging forever.
    const onBackdrop = e=>{ if(e.target === overlay) onCancel(); };
    okBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
    closeBtn.addEventListener('click', onCancel);
    overlay.addEventListener('click', onBackdrop);
  });
}


// ================= MAIN NAV =================
// Groups the 9 screens behind 5 top-level nav buttons. Each entry is
// {key, label} for one screen; a group with only one entry (Dashboard)
// never shows a sub-nav row at all.
const NAV_GROUPS = {
  dashboard: [{key:'dashboard', label:'🏠 Dashboard'}],
  people:    [{key:'students', label:'🎓 Students'}, {key:'faculties', label:'🧑‍🏫 Faculties'}],
  schedule:  [{key:'timetable', label:'📅 Timetable'}, {key:'diary', label:'📔 Diary'}],
  work:      [{key:'tasks', label:'✅ Tasks'}, {key:'marks', label:'📝 Marks'}],
  admin:     [{key:'hod', label:'📊 HOD'}, {key:'settings', label:'⚙️ Settings'}],
};
function navGroupForView(view){
  return Object.keys(NAV_GROUPS).find(g=>NAV_GROUPS[g].some(c=>c.key===view)) || 'dashboard';
}
// Remembers which screen was last open inside each group, so tapping the
// group button again returns to where you were rather than always jumping
// back to the group's first screen.
const lastViewInGroup = {};
function renderSubNav(groupKey){
  const children = NAV_GROUPS[groupKey] || [];
  const subNav = document.getElementById('subNav');
  if(children.length <= 1){ subNav.style.display = 'none'; subNav.innerHTML = ''; return; }
  subNav.style.display = '';
  subNav.innerHTML = children.map(c=>`<button class="tab sub-tab" data-view="${c.key}">${c.label}</button>`).join('');
  subNav.querySelectorAll('.sub-tab').forEach(b=>{
    b.addEventListener('click', ()=>switchView(b.dataset.view));
  });
}
function switchView(view){
  currentView = view;
  const group = navGroupForView(view);
  lastViewInGroup[group] = view;
  document.querySelectorAll('.main-tab[data-group]').forEach(b=>b.classList.toggle('active', b.dataset.group===group));
  renderSubNav(group);
  document.querySelectorAll('.sub-tab').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  ['dashboard','students','faculties','timetable','diary','tasks','marks','hod','settings'].forEach(v=>{
    const el = document.getElementById('view-'+v);
    if(el) el.style.display = (v===view) ? '' : 'none';
  });
  document.getElementById('addFab').style.display = (view==='students') ? '' : 'none';
  document.getElementById('addFacFab').style.display = (view==='faculties') ? '' : 'none';
  if(view==='dashboard') renderDashboard();
  else if(view==='students') render();
  else if(view==='faculties') renderFaculties();
  else if(view==='timetable') renderTimetable();
  else if(view==='diary') renderDiaryView();
  else if(view==='tasks') renderTasksView();
  else if(view==='marks') renderMarksView();
  else if(view==='hod') renderHOD();
  else if(view==='settings') populateSettingsForm();
}
document.querySelectorAll('.main-tab[data-group]').forEach(b=>{
  b.addEventListener('click', ()=>{
    const g = b.dataset.group;
    const children = NAV_GROUPS[g] || [];
    const target = lastViewInGroup[g] || (children[0] && children[0].key) || 'dashboard';
    switchView(target);
  });
});
document.querySelectorAll('[data-goto]').forEach(b=>{
  b.addEventListener('click', ()=>switchView(b.dataset.goto));
});

// ================= QUICK ACCESS (app-wide search/jump) =================
// One list of everything worth jumping straight to — every screen, plus the
// HOD's daily quick actions — searchable by typing, and reachable from
// anywhere via the 🔎 FAB (not just Dashboard's own Quick Actions, and not
// limited to whichever tab happens to be open right now).
const QUICK_ACCESS_ITEMS = [
  {label:'Dashboard', icon:'🏠', hodOnly:false, run:()=>switchView('dashboard')},
  {label:'Students', icon:'🎓', hodOnly:false, run:()=>switchView('students')},
  {label:'Faculties', icon:'🧑‍🏫', hodOnly:false, run:()=>switchView('faculties')},
  {label:'Timetable', icon:'📅', hodOnly:false, run:()=>switchView('timetable')},
  {label:'Diary', icon:'📔', hodOnly:false, run:()=>switchView('diary')},
  {label:'Tasks', icon:'✅', hodOnly:false, run:()=>switchView('tasks')},
  {label:'Marks', icon:'📝', hodOnly:false, run:()=>switchView('marks')},
  {label:'HOD View', icon:'📊', hodOnly:true, run:()=>switchView('hod')},
  {label:'Settings', icon:'⚙️', hodOnly:true, run:()=>switchView('settings')},
  {label:'Enter Today\'s Attendance', icon:'🗓️', hodOnly:true, run:()=>document.getElementById('qaMarkAttendanceBtn').click()},
  {label:'Share Today\'s Attendance', icon:'📤', hodOnly:true, run:()=>document.getElementById('qaShareAttendanceBtn').click()},
  {label:'Quick Attendance Count', icon:'🔢', hodOnly:true, run:()=>document.getElementById('qaQuickCountBtn').click()},
  {label:'Mark Attendance (single class)', icon:'🗓️', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('attendanceBtn')?.click(), 60); }},
  {label:'Class Totals', icon:'🔢', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('classTotalsBtn')?.click(), 60); }},
  {label:'Bulk Add Students', icon:'📋', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('bulkAddBtn')?.click(), 60); }},
  {label:'Export Students', icon:'⭳', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('exportBtn')?.click(), 60); }},
  {label:'Missing Data Report', icon:'⚠️', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('missingBtn')?.click(), 60); }},
  {label:'Students on OD Report', icon:'🧾', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('odReportBtn')?.click(), 60); }},
  {label:'Subjects', icon:'📚', hodOnly:false, run:()=>{ switchView('students'); setTimeout(()=>document.getElementById('subjectsBtn')?.click(), 60); }},
  {label:'Faculty Attendance', icon:'🗓️', hodOnly:false, run:()=>{ switchView('faculties'); setTimeout(()=>document.getElementById('facAttendanceBtn')?.click(), 60); }},
  {label:'Auto-Generate Timetable', icon:'🧮', hodOnly:false, run:()=>{ switchView('timetable'); setTimeout(()=>document.getElementById('ttGenerateBtn')?.click(), 60); }},
  {label:'Master Timetable', icon:'📋', hodOnly:false, run:()=>{ switchView('timetable'); setTimeout(()=>document.getElementById('ttMasterBtn')?.click(), 60); }},
  {label:'Period Timings', icon:'⏱️', hodOnly:false, run:()=>{ switchView('timetable'); setTimeout(()=>document.getElementById('ttTimingsBtn')?.click(), 60); }},
  {label:'Backup / Restore', icon:'💾', hodOnly:true, run:()=>{ switchView('hod'); setTimeout(()=>document.getElementById('backupExportBtn')?.scrollIntoView({behavior:'smooth', block:'center'}), 200); }},
];
function renderQuickAccessList(filterText){
  const q = (filterText||'').trim().toLowerCase();
  const isHod = !document.body.classList.contains('role-faculty');
  const items = QUICK_ACCESS_ITEMS.filter(it=>{
    if(it.hodOnly && !isHod) return false;
    return !q || it.label.toLowerCase().includes(q);
  });
  const listEl = document.getElementById('quickAccessList');
  document.getElementById('quickAccessEmpty').style.display = items.length ? 'none' : '';
  listEl.innerHTML = items.map((it,i)=>`
    <button type="button" class="btn btn-ghost quick-access-item" data-idx="${i}" style="width:100%;justify-content:flex-start;text-align:left;">${it.icon} ${escapeHtml(it.label)}</button>
  `).join('');
  listEl.querySelectorAll('.quick-access-item').forEach((btn,i)=>{
    btn.addEventListener('click', ()=>{
      document.getElementById('quickAccessOverlay').classList.remove('open');
      items[i].run();
    });
  });
}
// Auto-hide the 🔎 button while actively scrolling down (it can sit right
// over content on a long list/report) and bring it back as soon as
// scrolling stops or reverses — so it's out of the way when you're reading
// but always reappears the moment you might want it.
(function(){
  const fab = document.getElementById('quickAccessFab');
  let lastY = window.scrollY, hideTimer = null;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    if(y > lastY + 4){ fab.classList.add('fab-hidden'); }       // scrolling down
    else if(y < lastY - 4){ fab.classList.remove('fab-hidden'); } // scrolling up
    lastY = y;
    clearTimeout(hideTimer);
    hideTimer = setTimeout(()=>fab.classList.remove('fab-hidden'), 900); // idle — show again
  }, {passive:true});
})();
document.getElementById('quickAccessFab').addEventListener('click', ()=>{
  const search = document.getElementById('quickAccessSearch');
  search.value = '';
  renderQuickAccessList('');
  document.getElementById('quickAccessOverlay').classList.add('open');
  setTimeout(()=>search.focus(), 50);
});
document.getElementById('quickAccessSearch').addEventListener('input', e=>renderQuickAccessList(e.target.value));

// Dashboard shortcuts for the HOD's daily routine: enter today's period
// attendance, or jump straight to the period-wise share panel, without
// having to first navigate into Students/HOD and find the right spot.
document.getElementById('qaMarkAttendanceBtn').onclick = ()=>{
  switchView('students');
  // Give switchView's render() a tick to finish building the dept/year
  // tabs (and restoring currentDept/currentYear) before opening the
  // attendance sheet for whichever class was last selected there.
  setTimeout(()=>{ document.getElementById('attendanceBtn').click(); }, 60);
};
document.getElementById('qaShareAttendanceBtn').onclick = ()=>{
  switchView('hod');
  setTimeout(()=>{
    const sec = document.getElementById('hodTodayAttSection');
    if(sec) sec.scrollIntoView({behavior:'smooth', block:'start'});
  }, 60);
};

// ---- Quick Attendance Count: just Total/Present/Absent/OD, saved per
// Dept/Year/Date/Period so re-opening the same combination loads what was
// entered before (editable), instead of always starting blank. ----
// Reads/writes the SAME ATT[dept][year][date][period].bulk record that
// "🔢 Class Totals" and every other attendance view already use — so a count
// entered here immediately shows up in donuts, reports, the HOD dashboard,
// timetable auto-marking, everywhere — instead of living in a private store
// only this form could see.
function qcRecordFor(dept, year, date, period){
  const rec = getAttRecord(dept, year, date, period, false);
  return rec && rec.bulk;
}
// The actual class size from the Students list — used to pre-fill Total so
// the HOD isn't retyping a number that's already on file. Still a plain
// editable field afterwards (a student on the roster but withdrawn/on long
// leave might mean the real headcount differs from the roster count).
function rosterCountFor(dept, year){
  return ((DATA[dept] && DATA[dept][year]) || []).length;
}
function fillQcYear(){
  const dept = document.getElementById('qcDept').value;
  const years = Object.keys(DATA[dept]||{});
  const yearSel = document.getElementById('qcYear');
  yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}">${escapeHtml(y)}</option>`).join('');
  yearSel.value = (currentYear && years.includes(currentYear)) ? currentYear : (years[0]||'');
}
document.getElementById('qcDept').onchange = ()=>{ fillQcYear(); loadQcFieldsForSelection(); if(qcAllYearsMode()) renderQcAllYearsRows(); };
document.getElementById('qcYear').onchange = loadQcFieldsForSelection;
document.getElementById('qcPeriod').onchange = ()=>{ loadQcFieldsForSelection(); if(qcAllYearsMode()) renderQcAllYearsRows(); };
document.getElementById('qcDate').onchange = ()=>{ loadQcFieldsForSelection(); if(qcAllYearsMode()) renderQcAllYearsRows(); };

// Re-reads whichever Dept/Year/Period/Date is currently picked and either
// loads the saved counts for it (editing an existing entry) or clears the
// fields for a fresh one — called on open and whenever any of those four
// selectors change.
function loadQcFieldsForSelection(){
  const dept = document.getElementById('qcDept').value;
  const year = document.getElementById('qcYear').value;
  const period = document.getElementById('qcPeriod').value;
  const date = document.getElementById('qcDate').value || todayStr();
  const rec = qcRecordFor(dept, year, date, period);
  const savedNote = document.getElementById('qcSavedNote');
  if(rec){
    document.getElementById('qcTotal').value = rec.total;
    document.getElementById('qcPresent').value = rec.present;
    document.getElementById('qcAbsent').value = rec.absent;
    document.getElementById('qcOd').value = rec.od;
    savedNote.style.display = '';
    savedNote.style.color = 'var(--text-dim)';
    savedNote.textContent = `✏️ Editing what was already saved for this class/period/date.`;
  } else {
    // Nothing saved yet for this class/period/date — start Total from the
    // actual roster size (still editable) rather than blank, and leave the
    // rest empty until the HOD enters them.
    document.getElementById('qcTotal').value = rosterCountFor(dept, year) || '';
    ['qcPresent','qcAbsent','qcOd'].forEach(id=>{ document.getElementById(id).value = ''; });
    savedNote.style.display = 'none';
  }
  updateQcCheck();
}

function updateQcCheck(){
  const total = +document.getElementById('qcTotal').value || 0;
  const p = +document.getElementById('qcPresent').value || 0;
  const a = +document.getElementById('qcAbsent').value || 0;
  const od = +document.getElementById('qcOd').value || 0;
  const sum = p + a + od;
  const note = document.getElementById('qcCheckNote');
  if(!total && !sum){ note.textContent = ''; return; }
  if(sum === total){
    note.textContent = `✅ ${p} + ${a} + ${od} = ${sum} — matches Total`;
    note.style.color = 'var(--good)';
  } else {
    note.textContent = `⚠️ ${p} + ${a} + ${od} = ${sum}, but Total is ${total}`;
    note.style.color = 'var(--danger)';
  }
}

// Every field stays directly editable, but they're not independent: Total,
// Present, Absent and OD are meant to add up, so changing one recalculates
// another rather than making the HOD do the arithmetic. Editing Present/OD/
// Total recomputes Absent (Present is usually the one actually counted by
// a show of hands); editing Absent directly instead recomputes Present, so
// either direction works. Nothing is ever locked/disabled.
function qcRecompute(changed){
  const totalEl = document.getElementById('qcTotal');
  const presentEl = document.getElementById('qcPresent');
  const absentEl = document.getElementById('qcAbsent');
  const odEl = document.getElementById('qcOd');
  const total = +totalEl.value || 0;
  if(!total) return; // nothing to derive against until Total is known
  const od = +odEl.value || 0;
  if(changed === 'absent'){
    const absent = +absentEl.value || 0;
    presentEl.value = Math.max(0, total - absent - od);
  } else {
    const present = +presentEl.value || 0;
    absentEl.value = Math.max(0, total - present - od);
  }
}
[['qcTotal','total'],['qcPresent','present'],['qcOd','od'],['qcAbsent','absent']].forEach(([id, tag])=>{
  document.getElementById(id).addEventListener('input', ()=>{ qcRecompute(tag); updateQcCheck(); });
});

function openQuickCount(){
  const deptSel = document.getElementById('qcDept');
  deptSel.innerHTML = Object.keys(DATA).map(d=>`<option value="${escapeAttr(d)}">${escapeHtml(d)}</option>`).join('');
  deptSel.value = (currentDept && DATA[currentDept]) ? currentDept : Object.keys(DATA)[0];
  fillQcYear();
  document.getElementById('qcPeriod').innerHTML = PERIODS.map(p=>`<option value="${p}">Period ${p}</option>`).join('');
  document.getElementById('qcDate').value = todayStr();
  loadQcFieldsForSelection();
  document.getElementById('qcMultiWrap').style.display = 'none';
  qcMultiSelected = null;
  document.getElementById('qcAllYearsToggle').checked = false;
  setQcAllYearsMode(false);
  document.getElementById('quickCountOverlay').classList.add('open');
}
document.getElementById('qaQuickCountBtn').onclick = openQuickCount;

// ---- "Enter all years at once" ----
// Same Department/Period/Date, but one Total/Present/OD row per year in
// that department instead of picking Year and re-opening the form for
// each one. Saves straight into the same shared ATT store as the normal
// single-year Quick Count / Class Totals, so it shows up everywhere the
// same way.
function qcAllYearsMode(){ return document.getElementById('qcAllYearsToggle').checked; }
function setQcAllYearsMode(on){
  document.getElementById('qcYearField').style.display = on ? 'none' : '';
  document.getElementById('qcSingleYearFields').style.display = on ? 'none' : '';
  document.getElementById('qcAllYearsWrap').style.display = on ? '' : 'none';
  if(on) renderQcAllYearsRows();
}
document.getElementById('qcAllYearsToggle').addEventListener('change', e=>setQcAllYearsMode(e.target.checked));
function renderQcAllYearsRows(){
  const dept = document.getElementById('qcDept').value;
  const period = document.getElementById('qcPeriod').value;
  const date = document.getElementById('qcDate').value || todayStr();
  const years = Object.keys(DATA[dept] || {});
  const host = document.getElementById('qcAllYearsList');
  host.innerHTML = years.map((y,i)=>{
    const rec = qcRecordFor(dept, y, date, period);
    const total = rec ? rec.total : (rosterCountFor(dept, y) || '');
    const present = rec ? rec.present : '';
    const od = rec ? rec.od : '';
    // 1st Year is unticked by default — a fresh batch usually isn't in
    // regular class rotation yet, so it's the one most often not applicable;
    // still just one tap away via its own checkbox or "All / None".
    const includeByDefault = !/1st/i.test(y);
    return `
    <div class="qcay-row" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:8px;border:1px solid var(--border);border-radius:10px;">
      <input type="checkbox" id="qcay_include_${i}" class="qcay-include" ${includeByDefault?'checked':''} style="width:18px;height:18px;flex:none;" title="Include this year">
      <div style="font-weight:700;font-size:13px;min-width:70px;">${escapeHtml(y)}${rec?' <span style="font-weight:400;color:var(--text-dim);font-size:11px;">(saved)</span>':''}</div>
      <input type="number" id="qcay_total_${i}" value="${total}" min="0" inputmode="numeric" style="width:64px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="Total">
      <input type="number" id="qcay_present_${i}" value="${present}" min="0" inputmode="numeric" style="width:60px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="Present">
      <input type="number" id="qcay_od_${i}" value="${od}" min="0" inputmode="numeric" style="width:56px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="OD">
      <span style="font-size:11px;color:var(--text-dim);">T / P / OD (Absent auto)</span>
    </div>`;
  }).join('') || `<div class="no-data-note">This department has no years set up.</div>`;
  host.dataset.years = JSON.stringify(years);
  // Unticking "Include this year" greys out and disables that row's inputs,
  // so it's obvious at a glance which years are being skipped this time
  // (e.g. a year with no class that period) without deleting anything typed.
  host.querySelectorAll('.qcay-include').forEach((cb,i)=>{
    const row = cb.closest('.qcay-row');
    const applyDim = ()=>{
      row.style.opacity = cb.checked ? '1' : '0.45';
      row.querySelectorAll('input[type="number"]').forEach(inp=>{ inp.disabled = !cb.checked; });
    };
    cb.addEventListener('change', applyDim);
    applyDim();
  });
}
document.getElementById('qcAllYearsAllBtn').onclick = ()=>{
  const boxes = [...document.querySelectorAll('.qcay-include')];
  const allChecked = boxes.every(cb=>cb.checked);
  boxes.forEach(cb=>{ cb.checked = !allChecked; cb.dispatchEvent(new Event('change')); });
};
document.getElementById('qcAllYearsSaveBtn').onclick = async ()=>{
  const dept = document.getElementById('qcDept').value;
  const period = document.getElementById('qcPeriod').value;
  const date = document.getElementById('qcDate').value || todayStr();
  const years = JSON.parse(document.getElementById('qcAllYearsList').dataset.years || '[]');
  const rows = years.map((y,i)=>{
    const included = document.getElementById(`qcay_include_${i}`).checked;
    const total = +document.getElementById(`qcay_total_${i}`).value || 0;
    const present = +document.getElementById(`qcay_present_${i}`).value || 0;
    const od = +document.getElementById(`qcay_od_${i}`).value || 0;
    const absent = Math.max(0, total - present - od);
    return {dept, year:y, period, date, total, present, od, absent, included};
  }).filter(r=>r.included && r.total > 0);
  if(!rows.length){ toast('Enter at least one included year\'s Total students count'); return; }

  const conflicts = rows.filter(v=>{
    const existing = getAttRecord(v.dept, v.year, v.date, v.period, false);
    return existing && existing.records && Object.keys(existing.records).length;
  });
  if(conflicts.length){
    const label = conflicts.map(v=>v.year).join(', ');
    const ok = await confirmWithSuppress('qcOverwritesIndividual', `${label} already ${conflicts.length>1?'have':'has'} individual, per-student attendance marked for Period ${period} on this date. Saving Quick Count will replace ${conflicts.length>1?'those':'it'} with just the totals — per-student marks will be lost. Continue?`);
    if(!ok) return;
  }

  rows.forEach(v=>saveQcForm(v));
  toast(`Saved for ${rows.length} year(s)`);
  document.getElementById('quickCountOverlay').classList.remove('open');
  renderDashboard();
};

// Reads the four count fields off the form; returns null (with a toast) if
// Total is missing, since sharing/saving a blank headcount isn't useful.
function readQcForm(){
  const total = +document.getElementById('qcTotal').value || 0;
  if(!total){ toast('Enter the Total students count first'); return null; }
  return {
    dept: document.getElementById('qcDept').value,
    year: document.getElementById('qcYear').value,
    period: document.getElementById('qcPeriod').value,
    date: document.getElementById('qcDate').value || todayStr(),
    total,
    present: +document.getElementById('qcPresent').value || 0,
    absent: +document.getElementById('qcAbsent').value || 0,
    od: +document.getElementById('qcOd').value || 0,
  };
}
// Returns false (after asking, and backing out on Cancel) if this would
// silently blow away individually-marked, per-student attendance already
// saved for this period — same guard "🔢 Class Totals" uses, so entering a
// quick count never destroys real data without the HOD explicitly saying so.
function qcConfirmOverwrite(v){
  const existing = getAttRecord(v.dept, v.year, v.date, v.period, false);
  if(existing && existing.records && Object.keys(existing.records).length){
    return confirmWithSuppress('qcOverwritesIndividual', `${v.dept} · ${v.year} · Period ${v.period} already has individual, per-student attendance marked for this date. Saving a Quick Count will replace it with just the totals — the per-student marks will be lost. Continue?`);
  }
  return Promise.resolve(true);
}
function saveQcForm(v){
  const rec = getAttRecord(v.dept, v.year, v.date, v.period, true);
  rec.records = {};
  rec.bulk = {total:v.total, present:v.present, absent:v.absent, od:v.od};
  rec.markedAt = Date.now();
  saveAttendance();
}

document.getElementById('qcSaveBtn').onclick = async ()=>{
  const v = readQcForm();
  if(!v) return;
  if(!(await qcConfirmOverwrite(v))) return;
  saveQcForm(v);
  toast('Saved');
  loadQcFieldsForSelection();
};

document.getElementById('qcShareBtn').onclick = async ()=>{
  const v = readQcForm();
  if(!v) return;
  if(!(await qcConfirmOverwrite(v))) return;
  saveQcForm(v); // sharing also saves, so a shared count is never lost
  loadQcFieldsForSelection();
  const pct = v.total ? ((v.present/v.total)*100).toFixed(1) : '0.0';
  const lines = [
    `📋 Attendance — ${v.dept} · ${v.year}`,
    `Date: ${v.date}  |  Period ${v.period}`,
    ``,
    `Total: ${v.total}`,
    `Present: ${v.present}`,
    `Absent: ${v.absent}`,
    `OD: ${v.od}`,
    `Attendance %: ${pct}%`
  ];
  openShare(lines.join('\n'));
};

// ---- Share several saved Quick Attendance Counts together (one message
// covering multiple department/year/period combos for one date) instead of
// only ever being able to share the single class/period currently on the
// form. ----
let qcMultiSelected = null; // Set of "dept||year||period" keys; null until first opened
// Reads from the same shared ATT store as everything else, so this list
// covers every period marked for the date — whether entered here, via
// Class Totals, or via ordinary per-student Attendance marking.
function qcMultiRecordsForDate(date){
  const out = [];
  Object.keys(ATT).forEach(dept=>{
    Object.keys(ATT[dept]||{}).forEach(year=>{
      const dayData = (ATT[dept][year]||{})[date];
      if(!dayData) return;
      Object.keys(dayData).forEach(period=>{
        const rec = dayData[period];
        const c = statsFromAttRecord(rec);
        out.push({dept, year, period, date, total:c.total, present:c.present, absent:c.absent, od:c.od, bulk:!!rec.bulk});
      });
    });
  });
  out.sort((a,b)=> a.dept.localeCompare(b.dept) || a.year.localeCompare(b.year) || (+a.period - +b.period));
  return out;
}
function qcMultiKey(r){ return r.dept+'||'+r.year+'||'+r.period; }
function qcRenderMultiList(){
  const date = document.getElementById('qcDate').value || todayStr();
  document.getElementById('qcMultiDateLabel').textContent = formatDateLabel(date);
  const records = qcMultiRecordsForDate(date);
  const listEl = document.getElementById('qcMultiList');
  if(!records.length){
    listEl.innerHTML = `<div class="no-data-note">No saved Quick Attendance Counts yet for this date.</div>`;
    qcMultiSelected = new Set();
    return;
  }
  if(!qcMultiSelected) qcMultiSelected = new Set(records.map(qcMultiKey));
  listEl.innerHTML = records.map(r=>{
    const key = qcMultiKey(r);
    return `<label style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border:1px solid var(--border);border-radius:10px;cursor:pointer;">
      <span style="display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;">
        <input type="checkbox" class="qc-multi-check" data-key="${escapeAttr(key)}" style="width:18px;height:18px;flex:none;" ${qcMultiSelected.has(key)?'checked':''}>
        ${escapeHtml(r.dept)} · ${escapeHtml(r.year)} · Period ${escapeHtml(r.period)}
      </span>
      <span style="font-size:12px;color:var(--text-dim);white-space:nowrap;">T${r.total} P${r.present} A${r.absent} OD${r.od}</span>
    </label>`;
  }).join('');
  listEl.querySelectorAll('.qc-multi-check').forEach(cb=>{
    cb.addEventListener('change', e=>{
      const key = e.target.dataset.key;
      if(e.target.checked) qcMultiSelected.add(key); else qcMultiSelected.delete(key);
    });
  });
}
document.getElementById('qcMultiToggleBtn').onclick = ()=>{
  const wrap = document.getElementById('qcMultiWrap');
  const opening = wrap.style.display === 'none';
  wrap.style.display = opening ? '' : 'none';
  if(opening) qcRenderMultiList();
};
document.getElementById('qcDate').addEventListener('change', ()=>{
  qcMultiSelected = null; // date changed — fresh default selection ("all") for the new date
  if(document.getElementById('qcMultiWrap').style.display !== 'none') qcRenderMultiList();
});
document.getElementById('qcMultiAllBtn').onclick = ()=>{
  const date = document.getElementById('qcDate').value || todayStr();
  const records = qcMultiRecordsForDate(date);
  const allOn = qcMultiSelected && qcMultiSelected.size === records.length;
  qcMultiSelected = new Set(allOn ? [] : records.map(qcMultiKey));
  qcRenderMultiList();
};
document.getElementById('qcMultiShareBtn').onclick = ()=>{
  const date = document.getElementById('qcDate').value || todayStr();
  const records = qcMultiRecordsForDate(date).filter(r=>qcMultiSelected && qcMultiSelected.has(qcMultiKey(r)));
  if(!records.length){ toast('Tick at least one class/period to share'); return; }

  // Hoist Department and/or Period to a header line when every selected
  // row shares the same one, instead of repeating it on every row (same
  // idea as the Today's Attendance share text).
  const distinctDepts = [...new Set(records.map(r=>r.dept))];
  const singleDept = distinctDepts.length===1 ? distinctDepts[0] : null;
  const distinctPeriods = [...new Set(records.map(r=>r.period))];
  const singlePeriod = distinctPeriods.length===1 ? distinctPeriods[0] : null;

  const yearOrder = [];
  const byDeptYear = {};
  records.forEach(r=>{
    const gKey = singleDept ? r.year : r.dept+' · '+r.year;
    if(!byDeptYear[gKey]){ byDeptYear[gKey] = []; yearOrder.push(gKey); }
    byDeptYear[gKey].push(r);
  });
  const periodTag = r => singlePeriod===null ? ` · Period ${r.period}` : '';
  const rowLines = [];
  yearOrder.forEach(gKey=>{
    const rows = byDeptYear[gKey];
    if(rows.length === 1){
      const r = rows[0];
      const pct = r.total ? Math.round(((r.present+r.od)/r.total)*100) : 0;
      rowLines.push(`${gKey}${periodTag(r)} — Total ${r.total} · P ${r.present} · A ${r.absent} · OD ${r.od} · ${pct}%`);
    } else {
      rowLines.push(`${gKey}:`);
      rows.forEach(r=>{
        const pct = r.total ? Math.round(((r.present+r.od)/r.total)*100) : 0;
        const prefix = singlePeriod===null ? `   Period ${r.period} — ` : `   `;
        rowLines.push(`${prefix}Total ${r.total} · P ${r.present} · A ${r.absent} · OD ${r.od} · ${pct}%`);
      });
    }
  });
  // The "Combined" line adds up different classes/years into one number,
  // which isn't always meaningful (or wanted) — off by default, shown only
  // when the checkbox above the Share button is ticked.
  const includeCombined = document.getElementById('qcMultiIncludeCombinedChk').checked;
  let combinedLines = [];
  if(includeCombined){
    const grandTotal = records.reduce((n,r)=>n+r.total,0);
    const grandPresent = records.reduce((n,r)=>n+r.present+r.od,0); // On-Duty counts as attended
    const grandAbsent = records.reduce((n,r)=>n+r.absent,0);
    const pct = grandTotal ? Math.round((grandPresent/grandTotal)*100) : 0;
    combinedLines = [``, `Combined — Total ${grandTotal} · Present ${grandPresent} (incl. OD) · Absent ${grandAbsent} · ${pct}%`];
  }
  const text = [
    `📋 Attendance — Quick Count`,
    ...(singleDept ? [`Department: ${singleDept}`] : []),
    ...(singlePeriod!==null ? [`Period: ${singlePeriod}`] : []),
    `Date: ${formatDateLabel(date)}`,
    ``,
    ...rowLines,
    ...combinedLines,
  ].join('\n');
  openShare(text);
};

function summarizeAttendance(records){
  let present=0, absent=0, od=0;
  Object.values(records||{}).forEach(r=>{
    if(r.status==='P') present++;
    else if(r.status==='A') absent++;
    else if(r.status==='OD') od++;
  });
  return {present, absent, od, total: present+absent+od};
}

// A period's attendance record is either marked student-by-student
// (rec.records) or logged as one set of Class Totals for the whole class
// (rec.bulk — Present/OD/Absent counts with no per-student breakdown).
// Every place that reads a record's counts goes through this so both entry
// modes feed the same reports/dashboards/HOD views identically.
function statsFromAttRecord(rec){
  if(!rec) return {present:0, absent:0, od:0, total:0};
  if(rec.bulk) return {present:+rec.bulk.present||0, absent:+rec.bulk.absent||0, od:+rec.bulk.od||0, total:+rec.bulk.total||0};
  return summarizeAttendance(rec.records);
}

function formatDateLabel(dateStr){
  try{
    const d = new Date(dateStr+'T00:00:00');
    return d.toLocaleDateString('en-IN', {weekday:'short', day:'2-digit', month:'short', year:'numeric'});
  }catch(e){ return dateStr; }
}

// ---- Donut drill-down: which students are Present/Absent/On-Duty/Others,
// with the OD reason attached, so a HOD can give the Principal an instant,
// name-and-reason answer instead of just a count. ----
function emptyNameDetails(){ return {present:[], absent:[], od:[], others:[], bulkNotes:[]}; }
function mergeNameDetails(a, b){
  return {
    present: [...a.present, ...b.present],
    absent: [...a.absent, ...b.absent],
    od: [...a.od, ...b.od],
    others: [...a.others, ...b.others],
    bulkNotes: [...(a.bulkNotes||[]), ...(b.bulkNotes||[])]
  };
}
// Full-roster version: every student in DATA[dept][year] is classified,
// including ones with no record at all today (→ "others", i.e. not marked).
// A record logged as Class Totals (rec.bulk) has no per-student identities
// at all, so it can't be broken into names — it's surfaced as a note
// instead of silently vanishing or wrongly landing in "not marked".
function namesFromRosterRecord(dept, year, rec){
  const out = emptyNameDetails();
  if(rec && rec.bulk){
    out.bulkNotes.push({dept, year, ...rec.bulk});
    return out;
  }
  const roster = (DATA[dept] && DATA[dept][year]) || [];
  const recMap = (rec && rec.records) || {};
  roster.forEach(s=>{
    const r = recMap[s._id];
    const info = {id:s._id, name:s.name||'(unnamed)', regno:s.regno||'', dept, year};
    if(!r || !r.status){ out.others.push(info); return; }
    if(r.status==='P') out.present.push(info);
    else if(r.status==='A') out.absent.push(info);
    else if(r.status==='OD') out.od.push({...info, reason: r.od || '—'});
    else out.others.push(info);
  });
  return out;
}
// Marked-only version, for subject-wise donuts where "total" is just the
// count of students actually marked in that period (no roster concept).
function namesFromMarkedRecord(dept, year, rec){
  const out = emptyNameDetails();
  if(rec && rec.bulk){
    out.bulkNotes.push({dept, year, ...rec.bulk});
    return out;
  }
  const roster = (DATA[dept] && DATA[dept][year]) || [];
  const byId = {}; roster.forEach(s=>{ byId[s._id] = s; });
  Object.keys((rec && rec.records) || {}).forEach(id=>{
    const r = rec.records[id];
    const s = byId[id];
    const info = {id, name: s ? s.name : '(unknown)', regno: s ? (s.regno||'') : '', dept, year};
    if(r.status==='P') out.present.push(info);
    else if(r.status==='A') out.absent.push(info);
    else if(r.status==='OD') out.od.push({...info, reason: r.od || '—'});
    else out.others.push(info);
  });
  return out;
}

// ================= DIARY / EVENT CALENDAR =================
const DIARY_TYPE_META = {
  event:    {label:'Event',    color:'#2f6fed', emoji:'📌'},
  exam:     {label:'Exam',     color:'#d64545', emoji:'📝'},
  meeting:  {label:'Meeting',  color:'#9a5bd6', emoji:'🧑‍💼'},
  holiday:  {label:'Holiday',  color:'#22a35a', emoji:'🏖️'},
  reminder: {label:'Reminder', color:'#e0942c', emoji:'⏰'},
  note:     {label:'Note',     color:'#6b7280', emoji:'🗒️'}
};
let currentDiaryDept = Object.keys(DATA)[0];
let diaryCalYear, diaryCalMonth; // 0-indexed month
let diarySelectedDate = todayISO();
(function initDiaryCal(){
  const now = new Date();
  diaryCalYear = now.getFullYear();
  diaryCalMonth = now.getMonth();
})();

function todayISO(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function diaryList(dept){
  if(!DIARY[dept]) DIARY[dept] = [];
  return DIARY[dept];
}
function diaryEntriesForDate(dept, dateStr){
  return diaryList(dept).filter(e=>e.date===dateStr).sort((a,b)=>(a.time||'').localeCompare(b.time||''));
}

function renderDiaryView(){
  const sel = document.getElementById('diaryDeptSelect');
  const depts = Object.keys(DATA);
  if(!depts.includes(currentDiaryDept)) currentDiaryDept = depts[0];
  sel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentDiaryDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  document.getElementById('diaryDeptLabel').textContent = currentDiaryDept || '';
  renderDiaryLegend();
  renderDiaryCalendar();
  renderDiaryDayList();
  renderDiaryUpcoming();
}
document.getElementById('diaryDeptSelect').addEventListener('change', e=>{
  currentDiaryDept = e.target.value;
  renderDiaryView();
});

function renderDiaryLegend(){
  const el = document.getElementById('diaryLegend');
  el.innerHTML = Object.values(DIARY_TYPE_META).map(m=>
    `<span><span class="leg-dot" style="background:${m.color};"></span>${m.emoji} ${m.label}</span>`
  ).join('');
}

function renderDiaryCalendar(){
  const grid = document.getElementById('diaryCalGrid');
  const label = document.getElementById('diaryMonthLabel');
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  label.textContent = monthNames[diaryCalMonth] + ' ' + diaryCalYear;

  const dows = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  let html = dows.map(d=>`<div class="cal-dow">${d}</div>`).join('');

  const firstDay = new Date(diaryCalYear, diaryCalMonth, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(diaryCalYear, diaryCalMonth+1, 0).getDate();
  const entries = diaryList(currentDiaryDept);
  const todayStr = todayISO();

  for(let i=0;i<startWeekday;i++) html += `<div class="cal-day blank"></div>`;
  for(let day=1; day<=daysInMonth; day++){
    const dateStr = diaryCalYear+'-'+String(diaryCalMonth+1).padStart(2,'0')+'-'+String(day).padStart(2,'0');
    const dayEntries = entries.filter(e=>e.date===dateStr);
    const dotTypes = [...new Set(dayEntries.map(e=>e.type||'event'))].slice(0,4);
    const dots = dotTypes.map(t=>`<span class="cal-dot" style="background:${(DIARY_TYPE_META[t]||DIARY_TYPE_META.event).color};"></span>`).join('');
    const cls = ['cal-day'];
    if(dateStr===todayStr) cls.push('today');
    if(dateStr===diarySelectedDate) cls.push('selected');
    html += `<div class="${cls.join(' ')}" data-date="${dateStr}">${day}<div class="cal-dots">${dots}</div></div>`;
  }
  grid.innerHTML = html;
  grid.querySelectorAll('.cal-day[data-date]').forEach(el=>{
    el.addEventListener('click', ()=>{
      diarySelectedDate = el.dataset.date;
      renderDiaryCalendar();
      renderDiaryDayList();
    });
  });
}

document.getElementById('diaryPrevMonthBtn').onclick = ()=>{
  diaryCalMonth--;
  if(diaryCalMonth<0){ diaryCalMonth=11; diaryCalYear--; }
  renderDiaryCalendar();
};
document.getElementById('diaryNextMonthBtn').onclick = ()=>{
  diaryCalMonth++;
  if(diaryCalMonth>11){ diaryCalMonth=0; diaryCalYear++; }
  renderDiaryCalendar();
};
document.getElementById('diaryTodayBtn').onclick = ()=>{
  const now = new Date();
  diaryCalYear = now.getFullYear();
  diaryCalMonth = now.getMonth();
  diarySelectedDate = todayISO();
  renderDiaryCalendar();
  renderDiaryDayList();
};

function renderDiaryDayList(){
  document.getElementById('diarySelectedDateLabel').textContent = formatDateLabel(diarySelectedDate);
  const list = diaryEntriesForDate(currentDiaryDept, diarySelectedDate);
  const el = document.getElementById('diaryDayList');
  if(!list.length){ el.innerHTML = `<div class="empty-note">No entries for this day. Tap "+ Add Entry" to create one.</div>`; return; }
  el.innerHTML = list.map(e=>{
    const meta = DIARY_TYPE_META[e.type] || DIARY_TYPE_META.event;
    return `<div class="diary-entry-row" data-id="${escapeAttr(e._id)}">
      <div class="de-time">${e.time ? escapeHtml(e.time) : '—'}</div>
      <div style="flex:1;">
        <span class="diary-type-badge" style="background:${meta.color}22;color:${meta.color};">${meta.emoji} ${meta.label}</span>
        <span class="de-title">${escapeHtml(e.title)}</span>
        ${e.notes ? `<div class="de-notes">${escapeHtml(e.notes)}</div>` : ''}
      </div>
    </div>`;
  }).join('');
  el.querySelectorAll('.diary-entry-row').forEach(row=>{
    row.addEventListener('click', ()=> openDiaryEntry(row.dataset.id));
  });
}

function renderDiaryUpcoming(){
  const el = document.getElementById('diaryUpcomingList');
  const today = todayISO();
  const cutoff = new Date(); cutoff.setDate(cutoff.getDate()+14);
  const cutoffStr = cutoff.getFullYear()+'-'+String(cutoff.getMonth()+1).padStart(2,'0')+'-'+String(cutoff.getDate()).padStart(2,'0');
  const upcoming = diaryList(currentDiaryDept)
    .filter(e=>e.date>=today && e.date<=cutoffStr)
    .sort((a,b)=> a.date===b.date ? (a.time||'').localeCompare(b.time||'') : a.date.localeCompare(b.date));
  if(!upcoming.length){ el.innerHTML = `<div class="empty-note">No upcoming events in the next 14 days.</div>`; return; }
  el.innerHTML = upcoming.map(e=>{
    const meta = DIARY_TYPE_META[e.type] || DIARY_TYPE_META.event;
    return `<div class="diary-entry-row" data-id="${escapeAttr(e._id)}">
      <div class="de-time">${formatDateLabel(e.date).slice(0,10)}${e.time ? ' · '+escapeHtml(e.time) : ''}</div>
      <div style="flex:1;">
        <span class="diary-type-badge" style="background:${meta.color}22;color:${meta.color};">${meta.emoji} ${meta.label}</span>
        <span class="de-title">${escapeHtml(e.title)}</span>
      </div>
    </div>`;
  }).join('');
  el.querySelectorAll('.diary-entry-row').forEach(row=>{
    row.addEventListener('click', ()=> openDiaryEntry(row.dataset.id));
  });
}

const diaryOverlay = document.getElementById('diaryOverlay');
function openDiaryEntry(id){
  const entry = id ? diaryList(currentDiaryDept).find(e=>e._id===id) : null;
  document.getElementById('diarySheetTitle').textContent = entry ? '✏️ Edit Diary Entry' : '📔 New Diary Entry';
  document.getElementById('diary_id').value = entry ? entry._id : '';
  document.getElementById('diary_date').value = entry ? entry.date : diarySelectedDate;
  document.getElementById('diary_time').value = entry ? (entry.time||'') : '';
  document.getElementById('diary_title').value = entry ? entry.title : '';
  document.getElementById('diary_type').value = entry ? (entry.type||'event') : 'event';
  document.getElementById('diary_notes').value = entry ? (entry.notes||'') : '';
  document.getElementById('diary_err_title').textContent = '';
  document.getElementById('diaryDeleteBtn').style.display = entry ? '' : 'none';
  diaryOverlay.classList.add('open');
}
document.getElementById('diaryAddBtn').onclick = ()=> openDiaryEntry(null);

document.getElementById('diaryForm').addEventListener('submit', e=>{
  e.preventDefault();
  const title = document.getElementById('diary_title').value.trim();
  if(!title){ document.getElementById('diary_err_title').textContent = 'Title is required'; return; }
  const id = document.getElementById('diary_id').value;
  const list = diaryList(currentDiaryDept);
  const data = {
    date: document.getElementById('diary_date').value || diarySelectedDate,
    time: document.getElementById('diary_time').value || '',
    title,
    type: document.getElementById('diary_type').value || 'event',
    notes: document.getElementById('diary_notes').value.trim()
  };
  if(id){
    const idx = list.findIndex(e=>e._id===id);
    if(idx>-1) list[idx] = {...list[idx], ...data};
  } else {
    list.push({_id:'diary_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), createdAt:Date.now(), ...data});
  }
  saveDiary();
  diarySelectedDate = data.date;
  diaryCalYear = +data.date.slice(0,4);
  diaryCalMonth = +data.date.slice(5,7) - 1;
  diaryOverlay.classList.remove('open');
  toast('Diary entry saved');
  renderDiaryCalendar();
  renderDiaryDayList();
  renderDiaryUpcoming();
});

document.getElementById('diaryDeleteBtn').onclick = ()=>{
  const id = document.getElementById('diary_id').value;
  if(!id) return;
  if(!confirm('Delete this diary entry?')) return;
  const list = diaryList(currentDiaryDept);
  const idx = list.findIndex(e=>e._id===id);
  if(idx>-1) list.splice(idx,1);
  saveDiary();
  diaryOverlay.classList.remove('open');
  toast('Diary entry deleted');
  renderDiaryCalendar();
  renderDiaryDayList();
  renderDiaryUpcoming();
};

// ================= TASK CHECKLIST =================
const TASK_STATUS_META = {
  not_started: {label:'Not Started', emoji:'⬜'},
  in_progress: {label:'In Progress', emoji:'🟡'},
  completed:   {label:'Completed',   emoji:'✅'}
};
let currentTasksDept = Object.keys(DATA)[0];
let tasksStatusFilter = 'all';

function taskList(dept){
  if(!TASKS[dept]) TASKS[dept] = [];
  return TASKS[dept];
}

function renderTasksView(){
  const sel = document.getElementById('tasksDeptSelect');
  const depts = Object.keys(DATA);
  if(!depts.includes(currentTasksDept)) currentTasksDept = depts[0];
  sel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentTasksDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  document.getElementById('tasksDeptLabel').textContent = currentTasksDept || '';
  renderTasksList();
}
document.getElementById('tasksDeptSelect').addEventListener('change', e=>{
  currentTasksDept = e.target.value;
  renderTasksView();
});

document.querySelectorAll('#tasksStatusFilterTabs .tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tasksStatusFilter = btn.dataset.statusFilter;
    document.querySelectorAll('#tasksStatusFilterTabs .tab').forEach(b=>b.classList.toggle('active', b===btn));
    renderTasksList();
  });
});

function renderTasksList(){
  const all = taskList(currentTasksDept);
  const counts = {not_started:0, in_progress:0, completed:0};
  all.forEach(t=>{ if(counts[t.status]!==undefined) counts[t.status]++; });
  document.getElementById('tasksSummaryLabel').textContent =
    `${all.length} task(s) — ⬜ ${counts.not_started} Not Started · 🟡 ${counts.in_progress} In Progress · ✅ ${counts.completed} Completed`;

  const list = tasksStatusFilter==='all' ? all : all.filter(t=>t.status===tasksStatusFilter);
  const el = document.getElementById('tasksList');
  if(!list.length){ el.innerHTML = `<div class="empty-note">No tasks here yet. Tap "+ Add Task" to create one.</div>`; return; }

  const todayStrVal = todayISO();
  const sorted = list.slice().sort((a,b)=>{
    // Not-completed first, then by nearest deadline, undated last.
    if((a.status==='completed') !== (b.status==='completed')) return a.status==='completed' ? 1 : -1;
    if(!a.deadline && !b.deadline) return 0;
    if(!a.deadline) return 1;
    if(!b.deadline) return -1;
    return a.deadline.localeCompare(b.deadline);
  });

  el.innerHTML = sorted.map(t=>{
    const meta = TASK_STATUS_META[t.status] || TASK_STATUS_META.not_started;
    const overdue = t.deadline && t.status!=='completed' && t.deadline < todayStrVal;
    const assignee = t.assigneeType && t.assigneeType!=='none' && t.assigneeName
      ? `<span class="mr-chip" style="margin-left:6px;">${t.assigneeType==='faculty'?'🧑‍🏫':'🎓'} ${escapeHtml(t.assigneeName)}</span>`
      : '';
    return `<div class="task-row ${escapeAttr(t.status)}" data-id="${escapeAttr(t._id)}">
      <div class="tr-main">
        <div class="tr-title">${escapeHtml(t.title)}${assignee}</div>
        ${t.remarks ? `<div class="tr-remarks">${escapeHtml(t.remarks)}</div>` : ''}
        ${t.deadline ? `<div class="tr-deadline ${overdue?'overdue':''}">📅 Deadline: ${escapeHtml(formatDateLabel(t.deadline))}${overdue?' — Overdue':''}</div>` : ''}
      </div>
      <span class="task-status-badge ${escapeAttr(t.status)}">${meta.emoji} ${meta.label}</span>
    </div>`;
  }).join('');
  el.querySelectorAll('.task-row').forEach(row=>{
    row.addEventListener('click', ()=> openTaskEntry(row.dataset.id));
  });
}

const taskOverlay = document.getElementById('taskOverlay');
function populateTaskAssigneeNames(type, selectedId){
  const nameField = document.getElementById('task_assigneeNameField');
  const sel = document.getElementById('task_assigneeName');
  if(type==='none'){ nameField.style.display = 'none'; sel.innerHTML = ''; return; }
  nameField.style.display = '';
  // Students span multiple years — gather across all years of the dept for a full picker.
  let people = [];
  if(type==='student'){
    Object.keys(DATA[currentTasksDept]||{}).forEach(y=>{
      (DATA[currentTasksDept][y]||[]).forEach(s=>people.push({_id:s._id, name:s.name}));
    });
  } else {
    people = (FACULTY[currentTasksDept]||[]).map(f=>({_id:f._id, name:f.name}));
  }
  sel.innerHTML = people.map(p=>`<option value="${escapeAttr(p._id)}" ${p._id===selectedId?'selected':''}>${escapeHtml(p.name)}</option>`).join('');
}
document.getElementById('task_assigneeType').addEventListener('change', e=>{
  populateTaskAssigneeNames(e.target.value, '');
});
function openTaskEntry(id){
  const t = id ? taskList(currentTasksDept).find(x=>x._id===id) : null;
  document.getElementById('taskSheetTitle').textContent = t ? '✏️ Edit Task' : '✅ New Task';
  document.getElementById('task_id').value = t ? t._id : '';
  document.getElementById('task_title').value = t ? t.title : '';
  document.getElementById('task_status').value = t ? (t.status||'not_started') : 'not_started';
  document.getElementById('task_deadline').value = t ? (t.deadline||'') : '';
  document.getElementById('task_remarks').value = t ? (t.remarks||'') : '';
  document.getElementById('task_assigneeType').value = t ? (t.assigneeType||'none') : 'none';
  populateTaskAssigneeNames(t ? (t.assigneeType||'none') : 'none', t ? t.assigneeId : '');
  document.getElementById('task_err_title').textContent = '';
  document.getElementById('taskDeleteBtn').style.display = t ? '' : 'none';
  taskOverlay.classList.add('open');
}
document.getElementById('tasksAddBtn').onclick = ()=> openTaskEntry(null);

document.getElementById('taskForm').addEventListener('submit', e=>{
  e.preventDefault();
  const title = document.getElementById('task_title').value.trim();
  if(!title){ document.getElementById('task_err_title').textContent = 'Task title is required'; return; }
  const id = document.getElementById('task_id').value;
  const list = taskList(currentTasksDept);
  const assigneeType = document.getElementById('task_assigneeType').value || 'none';
  const assigneeNameSel = document.getElementById('task_assigneeName');
  const assigneeId = assigneeType!=='none' ? (assigneeNameSel.value||'') : '';
  const assigneeName = assigneeType!=='none' && assigneeNameSel.selectedOptions.length ? assigneeNameSel.selectedOptions[0].textContent : '';
  const data = {
    title,
    status: document.getElementById('task_status').value || 'not_started',
    deadline: document.getElementById('task_deadline').value || '',
    remarks: document.getElementById('task_remarks').value.trim(),
    assigneeType, assigneeId, assigneeName
  };
  if(id){
    const idx = list.findIndex(x=>x._id===id);
    if(idx>-1) list[idx] = {...list[idx], ...data};
  } else {
    list.push({_id:'task_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), createdAt:Date.now(), ...data});
  }
  saveTasks();
  taskOverlay.classList.remove('open');
  toast('Task saved');
  renderTasksList();
});

document.getElementById('taskDeleteBtn').onclick = ()=>{
  const id = document.getElementById('task_id').value;
  if(!id) return;
  if(!confirm('Delete this task?')) return;
  const list = taskList(currentTasksDept);
  const idx = list.findIndex(x=>x._id===id);
  if(idx>-1) list.splice(idx,1);
  saveTasks();
  taskOverlay.classList.remove('open');
  toast('Task deleted');
  renderTasksList();
};

// ================= INTERNAL MARKS (CIA) =================
// Mark components (CIA-I, Assignment, Model Exam, ...) are fully editable —
// renamed, resized, removed or added to — from ⚙️ Manage Components on the
// Marks tab, and persisted the same way OD types are. Every place that used
// to read the old MARKS_MAX_TOTAL constant now calls marksMaxTotal(), since
// the total changes whenever the component list does.
const MARK_COMPONENTS_KEY = 'student_records_mark_components_v1';
function defaultMarkComponents(){
  return [
    {key:'cia1', label:'CIA-I', max:50},
    {key:'cia2', label:'CIA-II', max:50},
    {key:'cia3', label:'CIA-III', max:50},
    {key:'assignment', label:'Assignment', max:10},
    {key:'model', label:'Model Exam', max:100},
  ];
}
function loadMarkComponents(){
  try{ const raw = localStorage.getItem(MARK_COMPONENTS_KEY); if(raw){ const parsed = JSON.parse(raw); if(Array.isArray(parsed) && parsed.length) return parsed; } }catch(e){}
  return defaultMarkComponents();
}
function saveMarkComponents(){
  try{ localStorage.setItem(MARK_COMPONENTS_KEY, JSON.stringify(MARK_COMPONENTS)); }catch(e){ toast('Storage error — mark components may not persist'); }
}
let MARK_COMPONENTS = loadMarkComponents();
function marksMaxTotal(){ return MARK_COMPONENTS.reduce((n,c)=>n+(+c.max||0), 0); }
function markComponentKeyFromLabel(label){
  let base = label.trim().toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'') || 'component';
  let key = base, i = 1;
  while(MARK_COMPONENTS.some(c=>c.key===key)) key = base+'_'+(++i);
  return key;
}
const AT_RISK_PCT = 50;

// ---- Converted Total (user-defined, e.g. 260 -> out of 30/40/50/100) ----
const MARKS_CONVERT_KEY = 'student_records_marks_convert_max_v1';
function loadMarksConvertMax(){
  try{ const raw = localStorage.getItem(MARKS_CONVERT_KEY); if(raw!==null){ const v = JSON.parse(raw); if(v===null || (typeof v==='number' && v>0)) return v; } }catch(e){}
  return null; // null = not converted, show raw total only
}
function saveMarksConvertMax(){
  try{ localStorage.setItem(MARKS_CONVERT_KEY, JSON.stringify(MARKS_CONVERT_MAX)); }catch(e){ toast('Storage error — conversion setting may not persist'); }
}
let MARKS_CONVERT_MAX = loadMarksConvertMax();
function convertedMark(total){
  if(!MARKS_CONVERT_MAX || !marksMaxTotal()) return null;
  return Math.round((total / marksMaxTotal()) * MARKS_CONVERT_MAX * 100) / 100;
}

let currentMarksDept = Object.keys(DATA)[0];
let currentMarksYear = null;
let currentMarksSubjectCode = '';

function marksBucket(dept, year, code){
  if(!MARKS[dept]) MARKS[dept] = {};
  if(!MARKS[dept][year]) MARKS[dept][year] = {};
  if(!MARKS[dept][year][code]) MARKS[dept][year][code] = {};
  return MARKS[dept][year][code];
}
function computeMarkTotal(rec){
  let sum = 0;
  MARK_COMPONENTS.forEach(c=>{ const v = parseFloat(rec[c.key]); if(!isNaN(v)) sum += v; });
  return sum;
}

function renderMarksView(){
  const deptSel = document.getElementById('marksDeptSelect');
  const depts = Object.keys(DATA);
  if(!depts.includes(currentMarksDept)) currentMarksDept = depts[0];
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentMarksDept?'selected':''}>${escapeHtml(d)}</option>`).join('');

  const yearSel = document.getElementById('marksYearSelect');
  const years = Object.keys(DATA[currentMarksDept]||{});
  if(!currentMarksYear || !years.includes(currentMarksYear)) currentMarksYear = years[0];
  yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===currentMarksYear?'selected':''}>${escapeHtml(y)}</option>`).join('');

  const subjSel = document.getElementById('marksSubjectSelect');
  const subjects = allKnownSubjectsFlat(currentMarksDept);
  if(!subjects.some(s=>s.code===currentMarksSubjectCode)) currentMarksSubjectCode = subjects.length ? subjects[0].code : '';
  subjSel.innerHTML = subjects.length
    ? subjects.map(s=>`<option value="${escapeAttr(s.code)}" ${s.code===currentMarksSubjectCode?'selected':''}>${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('')
    : `<option value="">No subjects added for this department yet</option>`;

  document.getElementById('marksComponentsNote').textContent =
    MARK_COMPONENTS.map(c=>`${c.label} (out of ${c.max})`).join(', ') + ` — Total and % are computed automatically out of ${marksMaxTotal()}, and any student below ${AT_RISK_PCT}% is flagged "At Risk". Use ⚙️ Manage Components above to rename, resize, add or remove any of these.` +
    (MARKS_CONVERT_MAX ? ` Converted = Total ÷ ${marksMaxTotal()} × ${MARKS_CONVERT_MAX}, rounded to 2 decimals.` : '');

  const presetSel = document.getElementById('marksConvertPreset');
  const customWrap = document.getElementById('marksConvertCustomWrap');
  const customInput = document.getElementById('marksConvertCustom');
  const presetValues = ['20','25','30','40','50','75','100'];
  if(MARKS_CONVERT_MAX === null){
    presetSel.value = '';
    customWrap.style.display = 'none';
  } else if(presetValues.includes(String(MARKS_CONVERT_MAX))){
    presetSel.value = String(MARKS_CONVERT_MAX);
    customWrap.style.display = 'none';
  } else {
    presetSel.value = '__custom__';
    customWrap.style.display = '';
    customInput.value = MARKS_CONVERT_MAX;
  }

  renderMarksTable();
}
document.getElementById('marksConvertPreset').addEventListener('change', e=>{
  const v = e.target.value;
  const customWrap = document.getElementById('marksConvertCustomWrap');
  if(v === ''){
    MARKS_CONVERT_MAX = null;
    customWrap.style.display = 'none';
  } else if(v === '__custom__'){
    customWrap.style.display = '';
    const cur = document.getElementById('marksConvertCustom').value;
    MARKS_CONVERT_MAX = cur ? parseFloat(cur) : null;
    document.getElementById('marksConvertCustom').focus();
  } else {
    customWrap.style.display = 'none';
    MARKS_CONVERT_MAX = parseFloat(v);
  }
  saveMarksConvertMax();
  renderMarksTable();
});
document.getElementById('marksConvertCustom').addEventListener('input', e=>{
  const v = parseFloat(e.target.value);
  MARKS_CONVERT_MAX = (!isNaN(v) && v>0) ? v : null;
  saveMarksConvertMax();
  renderMarksTable();
});
document.getElementById('marksDeptSelect').addEventListener('change', e=>{
  currentMarksDept = e.target.value;
  currentMarksYear = null;
  renderMarksView();
});
document.getElementById('marksYearSelect').addEventListener('change', e=>{
  currentMarksYear = e.target.value;
  renderMarksTable();
});
document.getElementById('marksSubjectSelect').addEventListener('change', e=>{
  currentMarksSubjectCode = e.target.value;
  renderMarksTable();
});

function renderMarksTable(){
  const table = document.getElementById('marksTable');
  const summaryEl = document.getElementById('marksSummaryLabel');
  const roster = (DATA[currentMarksDept] && DATA[currentMarksDept][currentMarksYear]) || [];
  if(!currentMarksSubjectCode || !roster.length){
    table.innerHTML = '';
    summaryEl.textContent = roster.length ? 'Add a subject first (Students → Subjects).' : 'No students in this department/year yet.';
    return;
  }
  const bucket = marksBucket(currentMarksDept, currentMarksYear, currentMarksSubjectCode);
  const sortedRoster = roster.slice().sort((a,b)=>regnoRollNumber(a.regno)-regnoRollNumber(b.regno));

  let atRisk = 0, sumPct = 0;
  const rowsHtml = sortedRoster.map(s=>{
    const rec = bucket[s._id] || {};
    const total = computeMarkTotal(rec);
    const pct = marksMaxTotal() ? Math.round((total/marksMaxTotal())*100) : 0;
    sumPct += pct;
    const risky = pct < AT_RISK_PCT;
    if(risky) atRisk++;
    const cells = MARK_COMPONENTS.map(c=>`
      <td style="padding:4px;">
        <input type="number" class="marks-input" data-id="${escapeAttr(s._id)}" data-key="${c.key}" min="0" max="${c.max}" step="0.5"
          value="${rec[c.key]!==undefined && rec[c.key]!==null && rec[c.key]!=='' ? escapeAttr(rec[c.key]) : ''}"
          style="width:64px;text-align:center;padding:5px;border:1px solid var(--border);border-radius:6px;background:var(--surface-2);color:var(--text);">
      </td>`).join('');
    const conv = convertedMark(total);
    return `<tr data-row="${escapeAttr(s._id)}">
      <td style="padding:6px;white-space:nowrap;"><b>#${escapeHtml(s.sno!==undefined&&s.sno!==''?s.sno:'—')}</b></td>
      <td style="padding:6px;white-space:nowrap;">${escapeHtml(s.name)}</td>
      <td style="padding:6px;white-space:nowrap;color:var(--text-dim);">${escapeHtml(s.regno||'—')}</td>
      ${cells}
      <td style="padding:6px;font-weight:800;text-align:center;" class="marks-total-cell">${total}</td>
      <td style="padding:6px;font-weight:800;text-align:center;color:${risky?'var(--danger)':'var(--good)'};" class="marks-pct-cell">${pct}%</td>
      ${MARKS_CONVERT_MAX ? `<td style="padding:6px;font-weight:800;text-align:center;" class="marks-conv-cell">${conv}</td>` : ''}
      <td style="padding:6px;text-align:center;" class="marks-risk-cell">${risky ? '<span class="task-status-badge not_started" style="background:var(--danger);opacity:1;">⚠️ At Risk</span>' : ''}</td>
    </tr>`;
  }).join('');

  table.innerHTML = `
    <thead><tr style="text-align:left;border-bottom:2px solid var(--border);">
      <th style="padding:6px;">S.No</th><th style="padding:6px;">Name</th><th style="padding:6px;">Reg. No.</th>
      ${MARK_COMPONENTS.map(c=>`<th style="padding:6px;text-align:center;">${escapeHtml(c.label)}<div style="font-weight:400;color:var(--text-dim);font-size:10.5px;">/ ${c.max}</div></th>`).join('')}
      <th style="padding:6px;text-align:center;">Total<div style="font-weight:400;color:var(--text-dim);font-size:10.5px;">/ ${marksMaxTotal()}</div></th>
      <th style="padding:6px;text-align:center;">%</th>
      ${MARKS_CONVERT_MAX ? `<th style="padding:6px;text-align:center;">Converted<div style="font-weight:400;color:var(--text-dim);font-size:10.5px;">/ ${MARKS_CONVERT_MAX}</div></th>` : ''}
      <th style="padding:6px;text-align:center;">Status</th>
    </tr></thead>
    <tbody>${rowsHtml}</tbody>`;

  const avgPct = sortedRoster.length ? Math.round(sumPct/sortedRoster.length) : 0;
  summaryEl.textContent = `${sortedRoster.length} student(s) · Class average ${avgPct}% · ${atRisk} At Risk (below ${AT_RISK_PCT}%)`;

  table.querySelectorAll('.marks-input').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const id = e.target.dataset.id, key = e.target.dataset.key;
      const max = MARK_COMPONENTS.find(c=>c.key===key).max;
      let v = e.target.value === '' ? '' : Math.max(0, Math.min(max, parseFloat(e.target.value)||0));
      if(!bucket[id]) bucket[id] = {};
      bucket[id][key] = v;
      saveMarks();
      // Live-update just this row's total/%/risk without a full re-render (keeps focus in the input) —
      // then recompute the class-average/At-Risk summary line from every row's current values.
      const row = table.querySelector(`tr[data-row="${CSS.escape(id)}"]`);
      if(row){
        const total = computeMarkTotal(bucket[id]);
        const pct = marksMaxTotal() ? Math.round((total/marksMaxTotal())*100) : 0;
        const risky = pct < AT_RISK_PCT;
        row.querySelector('.marks-total-cell').textContent = total;
        const pctCell = row.querySelector('.marks-pct-cell');
        pctCell.textContent = pct+'%';
        pctCell.style.color = risky ? 'var(--danger)' : 'var(--good)';
        const convCell = row.querySelector('.marks-conv-cell');
        if(convCell) convCell.textContent = convertedMark(total);
        row.querySelector('.marks-risk-cell').innerHTML = risky ? '<span class="task-status-badge not_started" style="background:var(--danger);opacity:1;">⚠️ At Risk</span>' : '';
      }
      recomputeMarksSummary(sortedRoster, bucket);
    });
  });
}

function recomputeMarksSummary(roster, bucket){
  const summaryEl = document.getElementById('marksSummaryLabel');
  if(!summaryEl || !roster.length){ return; }
  let atRisk = 0, sumPct = 0;
  roster.forEach(s=>{
    const total = computeMarkTotal(bucket[s._id] || {});
    const pct = marksMaxTotal() ? Math.round((total/marksMaxTotal())*100) : 0;
    sumPct += pct;
    if(pct < AT_RISK_PCT) atRisk++;
  });
  const avgPct = Math.round(sumPct/roster.length);
  summaryEl.textContent = `${roster.length} student(s) · Class average ${avgPct}% · ${atRisk} At Risk (below ${AT_RISK_PCT}%)`;
}

// ---- Manage Mark Components ----
function renderMarksComponentsList(){
  const el = document.getElementById('marksComponentsList');
  el.innerHTML = MARK_COMPONENTS.map((c,i)=>`
    <div class="field-row" data-i="${i}" style="display:grid;grid-template-columns:1.6fr 1fr auto;gap:8px;align-items:end;margin-bottom:8px;">
      <div class="field" style="margin-bottom:0;">
        <label style="font-size:11px;">Name</label>
        <input type="text" class="mc-label" value="${escapeAttr(c.label)}">
      </div>
      <div class="field" style="margin-bottom:0;">
        <label style="font-size:11px;">Max Marks</label>
        <input type="number" class="mc-max" min="1" step="0.5" value="${escapeAttr(c.max)}">
      </div>
      <button type="button" class="icon-btn mc-remove" title="Remove">🗑️</button>
    </div>
  `).join('');
  el.querySelectorAll('[data-i]').forEach(row=>{
    const i = +row.dataset.i;
    row.querySelector('.mc-label').addEventListener('change', e=>{
      const v = e.target.value.trim();
      if(v) MARK_COMPONENTS[i].label = v; else e.target.value = MARK_COMPONENTS[i].label;
      saveMarkComponents();
      renderMarksView();
    });
    row.querySelector('.mc-max').addEventListener('change', e=>{
      const v = parseFloat(e.target.value);
      if(!isNaN(v) && v>0) MARK_COMPONENTS[i].max = v; else e.target.value = MARK_COMPONENTS[i].max;
      saveMarkComponents();
      renderMarksView();
    });
    row.querySelector('.mc-remove').addEventListener('click', ()=>{
      if(MARK_COMPONENTS.length<=1){ toast('At least one component is required'); return; }
      if(!confirm(`Remove "${MARK_COMPONENTS[i].label}"? Marks already entered for it are kept but will no longer show or count.`)) return;
      MARK_COMPONENTS.splice(i,1);
      saveMarkComponents();
      renderMarksComponentsList();
      renderMarksView();
    });
  });
}
document.getElementById('marksManageComponentsBtn').addEventListener('click', ()=>{
  document.getElementById('mc_newLabel').value = '';
  document.getElementById('mc_newMax').value = 10;
  document.getElementById('mc_err').textContent = '';
  renderMarksComponentsList();
  document.getElementById('marksComponentsOverlay').classList.add('open');
});
document.getElementById('mc_addBtn').addEventListener('click', ()=>{
  const label = document.getElementById('mc_newLabel').value.trim();
  const max = parseFloat(document.getElementById('mc_newMax').value);
  const errEl = document.getElementById('mc_err');
  errEl.textContent = '';
  if(!label){ errEl.textContent = 'Enter a name for the new component'; return; }
  if(isNaN(max) || max<=0){ errEl.textContent = 'Enter a valid maximum marks'; return; }
  MARK_COMPONENTS.push({key: markComponentKeyFromLabel(label), label, max});
  saveMarkComponents();
  document.getElementById('mc_newLabel').value = '';
  document.getElementById('mc_newMax').value = 10;
  renderMarksComponentsList();
  renderMarksView();
  toast('Component added');
});

// ================= DASHBOARD =================
// Which department(s)/year(s) count toward the dashboard totals and the
// attendance-by-year donut — shares the same Include/Exclude scope as HOD.
function allYearLabels(){
  const set = new Set();
  Object.values(DATA).forEach(years=>Object.keys(years).forEach(y=>set.add(y)));
  return [...set].sort((a,b)=>{
    const na = parseInt(a,10), nb = parseInt(b,10);
    if(!isNaN(na) && !isNaN(nb) && na!==nb) return na-nb;
    return a.localeCompare(b);
  });
}

function computeYearAttendanceToday(year, forceInclude){
  const today = todayStr();
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  Object.keys(DATA).forEach(dept=>{
    if(!deptIncluded(dept)) return;
    if(!DATA[dept][year]) return;
    if(!forceInclude && !yearIncluded(dept, year)) return;
    total += DATA[dept][year].length;
    const dayData = (ATT[dept]&&ATT[dept][year]&&ATT[dept][year][today]) || null;
    let rec = null;
    if(dayData){
      const periods = Object.keys(dayData).map(Number).sort((a,b)=>b-a);
      if(periods.length){
        rec = dayData[periods[0]];
        const c = statsFromAttRecord(rec);
        present += c.present; absent += c.absent; od += c.od;
      }
    }
    details = mergeNameDetails(details, namesFromRosterRecord(dept, year, rec));
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}

function computeOverallAttendanceToday(){
  let years = allYearLabels();
  const include1st = document.getElementById('dashOverallInclude1st');
  // "Include 1st Year" is meant to directly control whether the lowest year
  // counts toward this one donut — so when it's ticked, that year must be
  // force-included here even if the separate Settings → Dashboard & Report
  // Scope (Include/Exclude) has that year turned off there; otherwise the
  // checkbox looks checked but silently has no effect, undercounting the
  // total. When unticked, the year is simply left out of the list as before.
  const forced = new Set();
  if(include1st && !include1st.checked && years.length){
    years = years.slice(1); // drop the lowest-numbered ("1st") year
  } else if(years.length){
    forced.add(years[0]);
  }
  return computeCombinedAttendanceToday(years, forced);
}

function computeCombinedAttendanceToday(years, forcedYears){
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  years.forEach(year=>{
    const s = computeYearAttendanceToday(year, !!(forcedYears && forcedYears.has(year)));
    total += s.total; present += s.present; absent += s.absent; od += s.od;
    details = mergeNameDetails(details, s.details);
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}

// ---- Department-wise donut (any combination of departments, all their
// years combined, ignoring the Include/Exclude scope so the user can pick
// freely) ----
function computeDeptAttendanceToday(dept, years){
  const today = todayStr();
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  let yearKeys = Object.keys(DATA[dept]||{});
  if(years) yearKeys = yearKeys.filter(y=>years.has(y));
  yearKeys.forEach(year=>{
    total += DATA[dept][year].length;
    const dayData = (ATT[dept]&&ATT[dept][year]&&ATT[dept][year][today]) || null;
    let rec = null;
    if(dayData){
      const periods = Object.keys(dayData).map(Number).sort((a,b)=>b-a);
      if(periods.length){
        rec = dayData[periods[0]];
        const c = statsFromAttRecord(rec);
        present += c.present; absent += c.absent; od += c.od;
      }
    }
    details = mergeNameDetails(details, namesFromRosterRecord(dept, year, rec));
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}
function computeCombinedDeptAttendanceToday(depts, years){
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  depts.forEach(d=>{
    const s = computeDeptAttendanceToday(d, years);
    total += s.total; present += s.present; absent += s.absent; od += s.od;
    details = mergeNameDetails(details, s.details);
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}

// ---- Subject-wise donut (today only — attendance is taken per period, so
// "subject" is resolved from today's timetable slot for each marked period,
// across every department/year) ----
function todayWeekdayAbbr(){
  return WEEKDAYS[(new Date().getDay()+6)%7]; // Date.getDay() is 0=Sun..6=Sat; WEEKDAYS is Monday-first
}
function subjectLabelsMarkedToday(){
  const wd = todayWeekdayAbbr();
  const today = todayStr();
  const set = new Set();
  Object.keys(DATA).forEach(dept=>{
    Object.keys(DATA[dept]).forEach(year=>{
      const dayData = (ATT[dept]&&ATT[dept][year]&&ATT[dept][year][today]) || null;
      if(!dayData) return;
      Object.keys(dayData).forEach(period=>{
        const entry = getTtEntry(dept, year, wd, +period);
        if(entry && entry.subject){
          set.add(entry.code ? `${entry.code} — ${entry.subject}` : entry.subject);
        }
      });
    });
  });
  return [...set].sort();
}
function computeSubjectAttendanceToday(subjectLabel){
  const wd = todayWeekdayAbbr();
  const today = todayStr();
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  Object.keys(DATA).forEach(dept=>{
    Object.keys(DATA[dept]).forEach(year=>{
      const dayData = (ATT[dept]&&ATT[dept][year]&&ATT[dept][year][today]) || null;
      if(!dayData) return;
      Object.keys(dayData).forEach(period=>{
        const entry = getTtEntry(dept, year, wd, +period);
        if(!entry || !entry.subject) return;
        const label = entry.code ? `${entry.code} — ${entry.subject}` : entry.subject;
        if(label !== subjectLabel) return;
        const rec = dayData[period];
        const c = statsFromAttRecord(rec);
        total += rec.bulk ? c.total : Object.keys(rec.records||{}).length;
        present += c.present; absent += c.absent; od += c.od;
        details = mergeNameDetails(details, namesFromMarkedRecord(dept, year, rec));
      });
    });
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}
function computeCombinedSubjectAttendanceToday(labels){
  let total=0, present=0, absent=0, od=0;
  let details = emptyNameDetails();
  labels.forEach(l=>{
    const s = computeSubjectAttendanceToday(l);
    total += s.total; present += s.present; absent += s.absent; od += s.od;
    details = mergeNameDetails(details, s.details);
  });
  let others = total - present - absent - od;
  if(others < 0) others = 0;
  return {total, present, absent, od, others, details};
}

// Renders a donut (SVG ring) for {total,present,absent,od,others} — any
// category that's zero is skipped entirely, from both the ring and legend.
// Premium "progress-ring" donut — gradient-filled, rounded stroke caps,
// soft drop shadow, small gaps between segments so it reads like a set of
// stacked progress bars wrapped into a ring. Any category that's zero is
// skipped entirely, from both the ring and the legend.
// Renders the collapsible "student-wise details" panel under a donut:
// who's Present / Absent / On-Duty (with OD reason) / Not marked yet.
// This is what lets a HOD give the Principal an instant name-and-reason
// answer for "who's on OD and why" instead of just a headcount.
function renderDonutDetails(uid, details){
  if(!details) return '';
  const cats = [
    {key:'present', label:'Present', emoji:'✅', color:'var(--good)'},
    {key:'absent', label:'Absent', emoji:'❌', color:'var(--danger)'},
    {key:'od', label:'On-Duty', emoji:'🧾', color:'var(--accent)'},
    {key:'others', label:'Not Marked / Others', emoji:'➖', color:'var(--text-dim)'}
  ];
  const bulkNotes = details.bulkNotes || [];
  const grandTotal = cats.reduce((n,c)=>n+((details[c.key]||[]).length),0) + bulkNotes.length;
  if(!grandTotal) return '';
  const bulkHtml = bulkNotes.length ? `<div class="donut-detail-group">
      <div class="donut-detail-group-head" style="color:var(--text-dim);">🔢 Logged as Class Totals (no individual names)</div>
      <div class="donut-detail-items">${bulkNotes.map(b=>`
        <div class="donut-detail-item">
          <span class="dd-sub">${escapeHtml(b.dept||'')}${b.year?' · '+escapeHtml(b.year):''}</span>
          <span>Total ${b.total} · Present ${b.present} · OD ${b.od} · Absent ${b.absent}</span>
        </div>`).join('')}</div>
    </div>` : '';
  const groupsHtml = bulkHtml + cats.filter(c=>(details[c.key]||[]).length).map(c=>{
    const list = details[c.key].slice();
    let odSummary = '';
    if(c.key==='od'){
      const reasonCounts = {};
      list.forEach(s=>{ const r=s.reason||'—'; reasonCounts[r]=(reasonCounts[r]||0)+1; });
      odSummary = `<div class="donut-od-summary">${Object.keys(reasonCounts).map(r=>`<span>${escapeHtml(r)}: <b>${reasonCounts[r]}</b></span>`).join('')}</div>`;
    }
    // Organized Year-wise first (1st → 4th, natural order), then
    // alphabetically by name within each year — so a mixed-department/
    // mixed-year list (e.g. "Attendance by Department") reads as clean
    // per-year blocks instead of one long jumbled roll.
    const yearOrder = [];
    const byYear = {};
    list.forEach(s=>{
      const y = s.year || '—';
      if(!byYear[y]){ byYear[y] = []; yearOrder.push(y); }
      byYear[y].push(s);
    });
    yearOrder.sort((a,b)=>{
      const na = parseInt(a, 10), nb = parseInt(b, 10);
      if(!isNaN(na) && !isNaN(nb) && na!==nb) return na-nb;
      if(!isNaN(na) !== !isNaN(nb)) return isNaN(na) ? 1 : -1;
      return a.localeCompare(b);
    });
    const showYearHeads = yearOrder.length > 1;
    const itemHtml = s=>`
      <div class="donut-detail-item"${s.id?` data-id="${escapeAttr(s.id)}" data-dept="${escapeAttr(s.dept||'')}" data-year="${escapeAttr(s.year||'')}" title="Tap to open ${escapeAttr(s.name)}'s profile"`:''}>
        <b>${escapeHtml(s.name)}</b>
        <span class="dd-sub">${s.regno?escapeHtml(s.regno)+' · ':''}${escapeHtml(s.dept||'')}${s.year?' · '+escapeHtml(s.year):''}</span>
        ${c.key==='od' ? `<span class="donut-od-reason">${escapeHtml(s.reason||'—')}</span>` : ''}
      </div>`;
    const items = yearOrder.map(y=>{
      const rows = byYear[y].slice().sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''))).map(itemHtml).join('');
      return (showYearHeads ? `<div class="donut-detail-year-head">${escapeHtml(y)}</div>` : '') + rows;
    }).join('');
    return `<div class="donut-detail-group">
      <div class="donut-detail-group-head" style="color:${c.color};">${c.emoji} ${c.label} (${list.length})</div>
      ${odSummary}
      <div class="donut-detail-items">${items}</div>
    </div>`;
  }).join('');
  return `<div class="donut-details-wrap">
    <button type="button" class="link-btn donut-details-toggle" data-target="${uid}-details">
      <span class="dd-arrow">▶</span> View student-wise details (${grandTotal})
    </button>
    <div class="donut-details-panel" id="${uid}-details" style="display:none;">${groupsHtml}</div>
  </div>`;
}
document.addEventListener('click', e=>{
  const btn = e.target.closest('.donut-details-toggle');
  if(!btn) return;
  const panel = document.getElementById(btn.dataset.target);
  if(!panel) return;
  const opening = panel.style.display === 'none';
  panel.style.display = opening ? '' : 'none';
  btn.classList.toggle('open', opening);
});
// Tapping a student's name inside a donut's "student-wise details" list
// (Present/Absent/On-Duty/Not Marked) jumps straight to that student's
// profile, the same way the Missing Data report's rows already do.
document.addEventListener('click', e=>{
  const item = e.target.closest('.donut-detail-item[data-id]');
  if(!item) return;
  editStudentFromElsewhere(item.dataset.dept, item.dataset.year, item.dataset.id);
});
// "⋯ More" overflow menus: close the one that's open whenever something
// inside it is tapped (so picking an action also tidies the menu away),
// and close any open one when tapping anywhere outside it.
document.addEventListener('click', e=>{
  const insideMenu = e.target.closest('.more-menu');
  document.querySelectorAll('.more-menu[open]').forEach(el=>{
    if(el !== insideMenu) el.removeAttribute('open');
    else if(e.target.closest('.more-menu-body button')) el.removeAttribute('open');
  });
});

function renderDonut(stats, details){
  const segments = [
    {label:'Present', value:stats.present, color:'var(--good)', grad:['#34d399','#059669']},
    {label:'Absent', value:stats.absent, color:'var(--danger)', grad:['#f87171','#dc2626']},
    {label:'On-Duty', value:stats.od, color:'var(--accent)', grad:['#60a5fa','#2563eb']},
    {label:'Others', value:stats.others, color:'var(--text-dim)', grad:['#a1a1aa','#71717a']},
  ].filter(s=>s.value>0);

  if(!stats.total || !segments.length){
    return `<div class="no-data-note">No attendance marked yet for this year today.</div>`;
  }

  const R = 54, CIRC = 2*Math.PI*R, STROKE = 16;
  const GAP = segments.length > 1 ? 3 : 0; // small gap between segments — "progress bar" look
  const uid = 'dg' + Math.random().toString(36).slice(2,9);
  let offset = 0;
  const defs = segments.map((s,i)=>`
    <linearGradient id="${uid}-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.grad[0]}"/>
      <stop offset="100%" stop-color="${s.grad[1]}"/>
    </linearGradient>`).join('');
  const rings = segments.map((s,i)=>{
    const share = (s.value/stats.total) * CIRC;
    const len = Math.max(share - GAP, 0.001);
    const circle = `<circle cx="70" cy="70" r="${R}" fill="none" stroke="url(#${uid}-${i})" stroke-width="${STROKE}" stroke-linecap="round" stroke-dasharray="${len} ${CIRC-len}" stroke-dashoffset="${-offset}" transform="rotate(-90 70 70)"/>`;
    offset += share;
    return circle;
  }).join('');

  const legend = segments.map(s=>`
    <div style="display:flex;align-items:center;gap:6px;font-size:12.5px;">
      <span style="width:10px;height:10px;border-radius:3px;background:${s.color};display:inline-block;flex:none;"></span>
      <span>${s.label}: <b>${s.value}</b></span>
    </div>`).join('');

  return `
    <svg width="150" height="150" viewBox="0 0 140 140" class="donut-svg">
      <defs>${defs}</defs>
      <circle cx="70" cy="70" r="${R}" fill="none" stroke="var(--surface-2)" stroke-width="${STROKE}"/>
      ${rings}
      <text x="70" y="66" text-anchor="middle" font-size="23" font-weight="800" fill="var(--text)">${stats.total}</text>
      <text x="70" y="83" text-anchor="middle" font-size="9.5" letter-spacing="0.5" fill="var(--text-dim)">TOTAL</text>
    </svg>
    <div style="display:flex;flex-direction:column;gap:6px;">${legend}</div>
    ${renderDonutDetails(uid, details)}`;
}

// Which years are checked in the "Attendance by Year — pick any combination"
// donut. Persists only for the session; repopulated (defaulting to just the
// 1st configured year) whenever the set of available years changes.
let dashDonutSelectedYears = null;
function dashDonutPopulateYears(){
  const years = allYearLabels();
  const group = document.getElementById('dashDonutYearsGroup');
  if(dashDonutSelectedYears === null){
    dashDonutSelectedYears = new Set(years.length ? [years[0]] : []);
  }
  group.innerHTML = '';
  years.forEach(y=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;cursor:pointer;';
    lbl.innerHTML = `<input type="checkbox" value="${escapeAttr(y)}" style="width:auto;" ${dashDonutSelectedYears.has(y)?'checked':''}>${escapeHtml(y)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) dashDonutSelectedYears.add(y); else dashDonutSelectedYears.delete(y);
      renderDashDonutByYears();
    });
    group.appendChild(lbl);
  });
}
function renderDashDonutByYears(){
  const years = [...dashDonutSelectedYears];
  const wrap = document.getElementById('dashDonutWrap');
  if(!years.length){ wrap.innerHTML = `<div class="no-data-note">Select one or more years above.</div>`; return; }
  // One donut PER ticked year (its own Present/Absent/On-Duty/Total), not a
  // single number merged across all of them — so e.g. 2nd/3rd/4th Year can
  // be compared side by side instead of only seeing their combined total.
  wrap.innerHTML = years.map(y=>{
    const stats = computeYearAttendanceToday(y, true); // true: this picker is its own authority on which years count, same as the Overall donut's "Include 1st Year" override
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
      <div style="font-weight:700;font-size:13.5px;">${escapeHtml(y)}</div>
      <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center;">${renderDonut(stats, stats.details)}</div>
    </div>`;
  }).join('');
}

document.getElementById('dashOverallInclude1st').addEventListener('change', ()=>{
  const s = computeOverallAttendanceToday();
  document.getElementById('dashDonutOverallWrap').innerHTML = renderDonut(s, s.details);
});

// ---- Department-wise combination donut ----
let dashDonutSelectedDepts = null;
// Years to include, shared across every selected department (years use the
// same "1st Year".."4th Year" labels everywhere) — defaults to every year
// that exists in at least one department, so nothing is silently excluded.
let dashDonutDeptSelectedYears = null;
function allKnownYearLabels(){
  const set = new Set();
  Object.values(DATA).forEach(deptData=>Object.keys(deptData||{}).forEach(y=>set.add(y)));
  return [...set];
}
function dashDonutPopulateDepts(){
  const depts = Object.keys(DATA);
  const group = document.getElementById('dashDonutDeptsGroup');
  if(dashDonutSelectedDepts === null){
    dashDonutSelectedDepts = new Set(depts.length ? [depts[0]] : []);
  }
  group.innerHTML = '';
  depts.forEach(d=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;cursor:pointer;';
    lbl.innerHTML = `<input type="checkbox" value="${escapeAttr(d)}" style="width:auto;" ${dashDonutSelectedDepts.has(d)?'checked':''}>${escapeHtml(d)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) dashDonutSelectedDepts.add(d); else dashDonutSelectedDepts.delete(d);
      renderDashDonutByDepts();
    });
    group.appendChild(lbl);
  });

  const years = allKnownYearLabels();
  const yGroup = document.getElementById('dashDonutDeptYearsGroup');
  if(dashDonutDeptSelectedYears === null){
    dashDonutDeptSelectedYears = new Set(years);
  }
  yGroup.innerHTML = '';
  years.forEach(y=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;cursor:pointer;';
    lbl.innerHTML = `<input type="checkbox" value="${escapeAttr(y)}" style="width:auto;" ${dashDonutDeptSelectedYears.has(y)?'checked':''}>${escapeHtml(y)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) dashDonutDeptSelectedYears.add(y); else dashDonutDeptSelectedYears.delete(y);
      renderDashDonutByDepts();
    });
    yGroup.appendChild(lbl);
  });
}
document.getElementById('dashDonutDeptYearsAllBtn').addEventListener('click', ()=>{
  const years = allKnownYearLabels();
  dashDonutDeptSelectedYears = (dashDonutDeptSelectedYears && dashDonutDeptSelectedYears.size===years.length) ? new Set() : new Set(years);
  dashDonutPopulateDepts();
  renderDashDonutByDepts();
});
function renderDashDonutByDepts(){
  const depts = [...dashDonutSelectedDepts];
  const years = dashDonutDeptSelectedYears;
  const noYears = !years || years.size===0;
  const stats = (depts.length && !noYears) ? computeCombinedDeptAttendanceToday(depts, years) : {total:0,present:0,absent:0,od:0,others:0};
  document.getElementById('dashDonutDeptWrap').innerHTML = !depts.length ? `<div class="no-data-note">Select one or more departments above.</div>`
    : noYears ? `<div class="no-data-note">Select one or more years above.</div>`
    : renderDonut(stats, stats.details);
}

// ---- Subject-wise combination donut (today only) ----
let dashDonutSelectedSubjects = null;
let dashDonutSubjectOptionsKey = '';
function dashDonutPopulateSubjects(){
  const labels = subjectLabelsMarkedToday();
  const key = labels.join('|');
  const group = document.getElementById('dashDonutSubjectsGroup');
  if(dashDonutSelectedSubjects === null || key !== dashDonutSubjectOptionsKey){
    dashDonutSelectedSubjects = new Set(labels.length ? [labels[0]] : []);
    dashDonutSubjectOptionsKey = key;
  }
  group.innerHTML = labels.length ? '' : '';
  if(!labels.length){
    group.innerHTML = `<div class="no-data-note">No subjects with attendance marked today yet.</div>`;
  }
  labels.forEach(l=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;cursor:pointer;';
    lbl.innerHTML = `<input type="checkbox" value="${escapeAttr(l)}" style="width:auto;" ${dashDonutSelectedSubjects.has(l)?'checked':''}>${escapeHtml(l)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) dashDonutSelectedSubjects.add(l); else dashDonutSelectedSubjects.delete(l);
      renderDashDonutBySubjects();
    });
    group.appendChild(lbl);
  });
}
function renderDashDonutBySubjects(){
  const labels = [...dashDonutSelectedSubjects];
  const stats = labels.length ? computeCombinedSubjectAttendanceToday(labels) : {total:0,present:0,absent:0,od:0,others:0};
  document.getElementById('dashDonutSubjectWrap').innerHTML = labels.length ? renderDonut(stats, stats.details) : `<div class="no-data-note">Select one or more subjects above.</div>`;
}

function renderDashboard(){
  renderDashSettingsBanner();
  const depts = Object.keys(DATA);
  let totalStudents = 0, includedDeptCount = 0;
  depts.forEach(d=>{
    if(!deptIncluded(d)) return;
    includedDeptCount++;
    Object.keys(DATA[d]).forEach(y=>{
      if(!yearIncluded(d,y)) return;
      totalStudents += DATA[d][y].length;
    });
  });
  let totalFaculty = 0;
  depts.forEach(d=>{ if(deptIncluded(d)) totalFaculty += (FACULTY[d]||[]).length; });
  document.getElementById('dashStats').innerHTML = `
    <div class="stat"><b>${includedDeptCount}</b><span>Departments</span></div>
    <div class="stat"><b>${totalStudents}</b><span>Total Students</span></div>
    <div class="stat"><b>${totalFaculty}</b><span>Total Faculty</span></div>
    <div class="stat"><b>${new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}</b><span>Today</span></div>
  `;
  // Department name(s) currently counted toward the Dashboard's totals
  // (per Settings → Dashboard & Report Scope), shown in both this
  // section's heading and the Overall Attendance heading below, so it's
  // clear at a glance which department(s) the numbers are for — useful
  // once more than one department is on file.
  const includedDepts = depts.filter(d=>deptIncluded(d));
  const deptLabelPrefix = includedDepts.length ? `${includedDepts.join(', ')} — ` : '';
  document.getElementById('dashSnapshotDeptLabel').textContent = deptLabelPrefix;
  document.getElementById('dashOverallDeptLabel').textContent = deptLabelPrefix;
  const today = todayStr();
  document.getElementById('dashDateLabel').textContent = formatDateLabel(today);
  const rows = [];
  depts.forEach(d=>{
    if(!deptIncluded(d)) return;
    Object.keys(DATA[d]).forEach(y=>{
      if(!yearIncluded(d,y)) return;
      const dayData = (ATT[d]&&ATT[d][y]&&ATT[d][y][today]) || null;
      if(dayData){
        const periods = Object.keys(dayData).map(Number).sort((a,b)=>b-a);
        if(periods.length){
          const latestP = periods[0];
          const rec = dayData[latestP];
          // Show EVERY period entered today for this dept/year, not just the
          // latest — the HOD wants to see at a glance which periods still
          // need marking. Each period is flagged if it was Class Totals
          // (bulk) rather than individually marked.
          const enteredPeriods = periods.slice().sort((a,b)=>a-b)
            .map(p=>({p, bulk: !!dayData[p].bulk}));
          rows.push({d,y,period:latestP,counts:statsFromAttRecord(rec),bulk:!!rec.bulk,enteredPeriods});
        }
      }
    });
  });
  // Each row shows every period entered today, but Edit/Delete/Share (swipe
  // left to reveal) act on the LATEST period — the one whose counts are
  // actually shown on the row.
  document.getElementById('dashAttendance').innerHTML = rows.length ? rows.map(r=>`
    <div class="swipe-item">
      <div class="swipe-actions">
        <button type="button" class="swipe-action-edit" data-act="edit" data-dept="${escapeAttr(r.d)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">✏️<span>Edit</span></button>
        <button type="button" class="swipe-action-share" data-act="share" data-dept="${escapeAttr(r.d)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">📤<span>Share</span></button>
        <button type="button" class="swipe-action-delete" data-act="delete" data-dept="${escapeAttr(r.d)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">🗑️<span>Delete</span></button>
      </div>
      <div class="swipe-content dash-row">
        <div>
          <div class="dr-label">${escapeHtml(r.d)} · ${escapeHtml(r.y)}</div>
          <div class="dr-sub">Periods entered: ${r.enteredPeriods.map(ep=>`${ep.p}${ep.bulk?'🔢':''}`).join(', ')} <span style="color:var(--text-dim);">(latest: P${r.period})</span></div>
        </div>
        <div class="dash-mini-stats">
          <span class="mini-stat present">P ${r.counts.present}</span>
          <span class="mini-stat absent">A ${r.counts.absent}</span>
          <span class="mini-stat od">OD ${r.counts.od}</span>
        </div>
      </div>
    </div>
  `).join('') : `<div class="no-data-note">No attendance marked yet today.</div>`;
  initSwipeRows(document.getElementById('dashAttendance'));

  // Overall donut — all included depts/years combined. Kept un-collapsed
  // (it's one glance, cheap to compute), unlike the three breakdowns below.
  { const s = computeOverallAttendanceToday(); document.getElementById('dashDonutOverallWrap').innerHTML = renderDonut(s, s.details); }

  // The Year/Department/Subject breakdowns are each collapsed by default
  // (see the <details> wrapping them in the HTML) — only recompute one if
  // it's actually open right now, so a dashboard render doesn't pay for
  // combinations nobody's looking at. Each <details>'s own "toggle"
  // listener (wired once, below) catches the case of opening it later.
  if(document.getElementById('dashYearDetails').open){ dashDonutPopulateYears(); renderDashDonutByYears(); }
  if(document.getElementById('dashDeptDetails').open){ dashDonutPopulateDepts(); renderDashDonutByDepts(); }
  if(document.getElementById('dashSubjectDetails').open){ dashDonutPopulateSubjects(); renderDashDonutBySubjects(); }
}
// One delegated listener for every row's swipe-revealed Edit/Share/Delete —
// the rows themselves are rebuilt from scratch on every renderDashboard().
document.getElementById('dashAttendance').addEventListener('click', async e=>{
  const btn = e.target.closest('[data-act]');
  if(!btn) return;
  const dept = btn.dataset.dept, year = btn.dataset.year, period = +btn.dataset.period;
  const today = todayStr();
  if(btn.dataset.act === 'edit'){
    openClassTotals({dept, year, date:today, period});
    return;
  }
  if(btn.dataset.act === 'share'){
    const rec = getAttRecord(dept, year, today, period, false);
    const counts = statsFromAttRecord(rec);
    const lines = [
      `📋 Student Attendance`,
      `Department: ${dept}`,
      `Year: ${year}`,
      `Date: ${formatDateLabel(today)}`,
      `Period: ${period}`,
      ``,
      `Total ${counts.total} · Present ${counts.present} · Absent ${counts.absent} · OD ${counts.od}`,
    ];
    openShare(lines.join('\n'));
    return;
  }
  if(btn.dataset.act === 'delete'){
    const existing = getAttRecord(dept, year, today, period, false);
    if(!existing || (!existing.bulk && !Object.keys(existing.records||{}).length)){ toast('Nothing to delete'); return; }
    const ok = await confirmWithSuppress('todayAttRowDelete', `Delete the saved attendance for ${dept} · ${year} · Period ${period} on ${formatDateLabel(today)}? This cannot be undone.`);
    if(!ok) return;
    if(ATT[dept] && ATT[dept][year] && ATT[dept][year][today]) delete ATT[dept][year][today][period];
    saveAttendance();
    renderDashboard();
    toast('Attendance deleted');
  }
});
// Render a breakdown the first time its section is actually opened, rather
// than on every dashboard render regardless of whether anyone's looking.
document.getElementById('dashYearDetails').addEventListener('toggle', function(){ if(this.open){ dashDonutPopulateYears(); renderDashDonutByYears(); } });
document.getElementById('dashDeptDetails').addEventListener('toggle', function(){ if(this.open){ dashDonutPopulateDepts(); renderDashDonutByDepts(); } });
document.getElementById('dashSubjectDetails').addEventListener('toggle', function(){ if(this.open){ dashDonutPopulateSubjects(); renderDashDonutBySubjects(); } });

// ================= FACULTIES =================
function findFaculty(id){ return currentFacultyList().find(f=>f._id===id); }

function renderFacDeptTabs(){
  const el = document.getElementById('facDeptTabs');
  el.innerHTML = '';
  Object.keys(DATA).forEach(dept=>{
    const b = document.createElement('button');
    b.className = 'tab dept-tab' + (dept===currentFacDept?' active':'');
    b.textContent = dept;
    b.onclick = ()=>{ currentFacDept = dept; document.getElementById('facSearchInput').value=''; renderFaculties(); };
    el.appendChild(b);
  });
}

// ---------- Bulk select (Faculties) ----------
let facBulkMode = false;
let facBulkSelected = new Set();
function updateFacBulkBar(){
  const bar = document.getElementById('facBulkBar');
  const n = facBulkSelected.size;
  if(!facBulkMode || !n){ bar.style.display = 'none'; return; }
  bar.style.display = 'flex';
  document.getElementById('facBulkBarCount').textContent = `${n} selected`;
}
document.getElementById('facBulkSelectBtn').onclick = ()=>{
  facBulkMode = !facBulkMode;
  facBulkSelected.clear();
  const btn = document.getElementById('facBulkSelectBtn');
  btn.classList.toggle('btn-primary', facBulkMode);
  btn.textContent = facBulkMode ? '✕ Cancel Select' : '☑️ Select';
  renderFaculties();
};
document.getElementById('facBulkCancelBtn').onclick = ()=>document.getElementById('facBulkSelectBtn').click();
document.getElementById('facBulkDeleteBtn').onclick = ()=>{
  const ids = [...facBulkSelected];
  if(!ids.length) return;
  if(!confirm(`Delete ${ids.length} selected faculty member(s) from ${currentFacDept}? This can still be undone for a few seconds after.`)) return;
  const dept = currentFacDept;
  const list = FACULTY[dept];
  const removed = [];
  ids.forEach(id=>{
    const idx = list.findIndex(f=>f._id===id);
    if(idx!==-1){ removed.push({item:list[idx], idx}); list.splice(idx,1); }
  });
  saveFaculty();
  facBulkSelected.clear();
  renderFaculties();
  showUndo(`${removed.length} faculty member(s) deleted`, ()=>{
    if(!FACULTY[dept]) FACULTY[dept] = [];
    removed.sort((a,b)=>a.idx-b.idx).forEach(r=>{
      FACULTY[dept].splice(Math.min(r.idx, FACULTY[dept].length), 0, r.item);
    });
    saveFaculty();
    if(currentFacDept===dept) renderFaculties();
    toast('Faculty restored');
  });
};

function renderFaculties(){
  if(!FACULTY[currentFacDept]) FACULTY[currentFacDept] = [];
  renderFacDeptTabs();
  const list = currentFacultyList();
  const q = document.getElementById('facSearchInput').value.trim().toLowerCase();
  const filtered = list.filter(f=> !q || [f.name,f.phone,f.designation,f.subject,...(Array.isArray(f.subjects)?f.subjects.map(s=>s.name+' '+s.code+' '+s.dept):[])].some(v=>String(v||'').toLowerCase().includes(q)));
  document.getElementById('facStatsRow').innerHTML = `<div class="stat"><b>${list.length}</b><span>Total Faculty</span></div>`;
  const grid = document.getElementById('facGrid');
  const empty = document.getElementById('facEmptyState');
  grid.innerHTML = '';
  if(facBulkMode){
    const idsHere = new Set(list.map(f=>f._id));
    [...facBulkSelected].forEach(id=>{ if(!idsHere.has(id)) facBulkSelected.delete(id); });
  }
  if(!filtered.length){ empty.style.display='block'; updateFacBulkBar(); return; }
  empty.style.display='none';
  filtered.forEach(f=>{
    const card = document.createElement('div');
    card.className = 'card';
    const checked = facBulkSelected.has(f._id);
    if(checked) card.classList.add('bulk-selected');
    card.innerHTML = `
      <div class="card-top">
        ${facBulkMode ? `<input type="checkbox" class="card-select-check" ${checked?'checked':''}>` : ''}
        <div style="flex:1;min-width:0;">
          <div class="card-name">${escapeHtml(f.name)}</div>
          <div class="card-reg">${escapeHtml(f.designation || 'Faculty')}</div>
        </div>
      </div>
      <div class="card-meta">
        ${Array.isArray(f.subjects) && f.subjects.length
          ? f.subjects.map(s=>`<span class="chip">📖 ${escapeHtml(s.code?s.code+' — '+s.name:s.name)} <span style="opacity:0.7;">(${escapeHtml(s.dept)} · ${escapeHtml(s.year)})</span></span>`).join('')
          : (f.subject ? `<span class="chip">📖 ${escapeHtml(f.subject)}</span>` : '')}
        ${f.phone ? `<span class="chip phone-chip">📱 ${escapeHtml(f.phone)}${phoneActionsHtml(f.phone, true)}</span>` : ''}
      </div>
    `;
    if(facBulkMode){
      const cb = card.querySelector('.card-select-check');
      const applyToggle = checkedNow=>{
        if(checkedNow) facBulkSelected.add(f._id); else facBulkSelected.delete(f._id);
        card.classList.toggle('bulk-selected', checkedNow);
        updateFacBulkBar();
      };
      cb.addEventListener('click', e=>{ e.stopPropagation(); applyToggle(cb.checked); });
      card.onclick = ()=>{ cb.checked = !cb.checked; applyToggle(cb.checked); };
    } else {
      card.onclick = ()=>openFacDetail(f._id);
    }
    grid.appendChild(card);
  });
  updateFacBulkBar();
}
document.getElementById('facSearchInput').addEventListener('input', debounce(renderFaculties, 180));

// A faculty member's "home department" (where their record lives, under
// FACULTY[dept]) is just administrative — the subjects they actually teach
// can be in any department and any year. ffSubjectRows holds the working
// list of {dept,year,code,name} while the Add/Edit Faculty sheet is open;
// each row cascades Dept -> Year -> Subject the same way the rest of the
// app resolves a year's subjects (relevantSubjects), so the picker only
// ever offers subjects that actually exist for that department+year.
let ffSubjectRows = [];
function ffSubjectOptionsFor(dept, year){
  return relevantSubjects(dept, year || '');
}
function renderFfSubjectsRows(){
  const host = document.getElementById('ffSubjectsRows');
  if(!ffSubjectRows.length){
    host.innerHTML = `<div class="no-data-note">No subjects added yet.</div>`;
    return;
  }
  const depts = Object.keys(DATA);
  host.innerHTML = ffSubjectRows.map((row,i)=>{
    const years = Object.keys(DATA[row.dept]||{});
    const subjects = ffSubjectOptionsFor(row.dept, row.year);
    return `<div class="field-row" data-rowidx="${i}" style="display:grid;grid-template-columns:1fr 1fr 1.4fr auto;gap:8px;align-items:end;margin-bottom:8px;">
      <div class="field" style="margin-bottom:0;">
        <label style="font-size:11px;">Department</label>
        <select class="ffs-dept">${depts.map(d=>`<option value="${escapeAttr(d)}" ${d===row.dept?'selected':''}>${escapeHtml(d)}</option>`).join('')}</select>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label style="font-size:11px;">Year</label>
        <select class="ffs-year">${years.map(y=>`<option value="${escapeAttr(y)}" ${y===row.year?'selected':''}>${escapeHtml(y)}</option>`).join('')}</select>
      </div>
      <div class="field" style="margin-bottom:0;">
        <label style="font-size:11px;">Subject</label>
        <select class="ffs-subject">
          <option value="">— Select subject —</option>
          ${subjects.map(s=>`<option value="${escapeAttr(s.code||s.name)}" ${(s.code||s.name)===(row.code||row.name)?'selected':''}>${escapeHtml(s.code?s.code+' — '+s.name:s.name)}</option>`).join('')}
        </select>
      </div>
      <button type="button" class="icon-btn ffs-remove" title="Remove">🗑️</button>
    </div>`;
  }).join('');
  host.querySelectorAll('[data-rowidx]').forEach(rowEl=>{
    const i = +rowEl.dataset.rowidx;
    rowEl.querySelector('.ffs-dept').addEventListener('change', e=>{
      ffSubjectRows[i].dept = e.target.value;
      ffSubjectRows[i].year = (Object.keys(DATA[e.target.value]||{})[0]) || '';
      ffSubjectRows[i].code = ''; ffSubjectRows[i].name = '';
      renderFfSubjectsRows();
    });
    rowEl.querySelector('.ffs-year').addEventListener('change', e=>{
      ffSubjectRows[i].year = e.target.value;
      ffSubjectRows[i].code = ''; ffSubjectRows[i].name = '';
      renderFfSubjectsRows();
    });
    rowEl.querySelector('.ffs-subject').addEventListener('change', e=>{
      const val = e.target.value;
      const subjects = ffSubjectOptionsFor(ffSubjectRows[i].dept, ffSubjectRows[i].year);
      const match = subjects.find(s=>(s.code||s.name)===val);
      ffSubjectRows[i].code = match ? (match.code||'') : '';
      ffSubjectRows[i].name = match ? match.name : '';
    });
    rowEl.querySelector('.ffs-remove').addEventListener('click', ()=>{
      ffSubjectRows.splice(i,1);
      renderFfSubjectsRows();
    });
  });
}
document.getElementById('ffAddSubjectRowBtn').addEventListener('click', ()=>{
  const dept = currentFacDept;
  const year = (Object.keys(DATA[dept]||{})[0]) || '';
  ffSubjectRows.push({dept, year, code:'', name:''});
  renderFfSubjectsRows();
});

let editingFacId = null;
function openFacForm(id){
  editingFacId = id || null;
  document.getElementById('facultyForm').reset();
  ['name','phone','email'].forEach(k=>{
    document.getElementById('ferr_'+k).textContent='';
    document.getElementById('ferr_'+k).classList.remove('show');
    document.getElementById('ff_'+k).classList.remove('invalid');
  });
  if(id){
    const f = findFaculty(id);
    document.getElementById('facFormTitle').textContent = 'Edit Faculty';
    document.getElementById('ff_name').value = f.name||'';
    document.getElementById('ff_designation').value = f.designation||'';
    document.getElementById('ff_phone').value = f.phone||'';
    document.getElementById('ff_email').value = f.email||'';
    if(Array.isArray(f.subjects) && f.subjects.length){
      ffSubjectRows = f.subjects.map(s=>({...s}));
    } else if(f.subject){
      // Back-compat: a record saved before multi-subject support just had
      // one subject string/code, assumed to be in its own home department.
      ffSubjectRows = [{dept: currentFacDept, year: (Object.keys(DATA[currentFacDept]||{})[0])||'', code: f.subjectCode||'', name: f.subject}];
    } else {
      ffSubjectRows = [];
    }
  } else {
    document.getElementById('facFormTitle').textContent = `Add Faculty — ${currentFacDept}`;
    ffSubjectRows = [];
  }
  renderFfSubjectsRows();
  document.getElementById('facFormOverlay').classList.add('open');
}
document.getElementById('addFacFab').onclick = ()=>openFacForm(null);

document.getElementById('facultyForm').addEventListener('submit', e=>{
  e.preventDefault();
  const name = document.getElementById('ff_name').value.trim();
  const phone = document.getElementById('ff_phone').value.trim();
  const email = document.getElementById('ff_email').value.trim();
  let hasError = false;
  if(!name || !NAME_RE.test(name)){
    document.getElementById('ff_name').classList.add('invalid');
    document.getElementById('ferr_name').textContent = name ? 'Name should contain letters only' : 'Name is required';
    document.getElementById('ferr_name').classList.add('show');
    hasError = true;
  }
  if(phone && !/^[6-9]\d{9}$/.test(phone)){
    document.getElementById('ff_phone').classList.add('invalid');
    document.getElementById('ferr_phone').textContent = 'Enter a valid 10-digit mobile number';
    document.getElementById('ferr_phone').classList.add('show');
    hasError = true;
  }
  if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById('ff_email').classList.add('invalid');
    document.getElementById('ferr_email').textContent = 'Enter a valid email address';
    document.getElementById('ferr_email').classList.add('show');
    hasError = true;
  }
  if(hasError) return;

  const subjects = ffSubjectRows.filter(r=>r.name);
  const rec = {
    name, phone, email,
    designation: document.getElementById('ff_designation').value.trim(),
    subjects,
    // Legacy single-subject fields kept in sync with the first entry so
    // anything still reading f.subject/f.subjectCode (search, chips) works.
    subject: subjects[0] ? subjects[0].name : '',
    subjectCode: subjects[0] ? subjects[0].code : '',
  };
  if(!FACULTY[currentFacDept]) FACULTY[currentFacDept] = [];
  if(editingFacId){
    const idx = FACULTY[currentFacDept].findIndex(f=>f._id===editingFacId);
    if(idx>-1){ rec._id = editingFacId; FACULTY[currentFacDept][idx] = rec; }
    toast('Faculty updated');
  } else {
    rec._id = 'fac'+(idCounter++);
    FACULTY[currentFacDept].push(rec);
    toast('Faculty added');
  }
  saveFaculty();
  document.getElementById('facFormOverlay').classList.remove('open');
  renderFaculties();
});

let activeFacDetailId = null;
function openFacDetail(id){
  const f = findFaculty(id);
  if(!f) return;
  activeFacDetailId = id;
  document.getElementById('facDetailName').textContent = f.name;
  const rows = [
    ['Home Department', currentFacDept],
    ['Designation', f.designation],
    ['Phone', f.phone],
    ['Email', f.email],
  ];
  const subjectsHtml = Array.isArray(f.subjects) && f.subjects.length
    ? `<div class="detail-row" style="flex-direction:column;align-items:flex-start;"><span class="k" style="margin-bottom:6px;">Subjects Handled</span>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${f.subjects.map(s=>`<span class="chip">📖 ${escapeHtml(s.code?s.code+' — '+s.name:s.name)} <span style="opacity:0.7;">(${escapeHtml(s.dept)} · ${escapeHtml(s.year)})</span></span>`).join('')}</div>
      </div>`
    : `<div class="detail-row"><span class="k">Subject Handled</span><span class="v">${escapeHtml(f.subject || '—')}</span></div>`;
  document.getElementById('facDetailBody').innerHTML = rows.map(([k,v])=>{
    if(k==='Phone' && v){
      return `<div class="detail-row"><span class="k">${k}</span><span class="v" style="display:flex;align-items:center;gap:6px;justify-content:flex-end;">${escapeHtml(v)}${phoneActionsHtml(v,false)}</span></div>`;
    }
    return `<div class="detail-row"><span class="k">${k}</span><span class="v">${escapeHtml(v || '—')}</span></div>`;
  }).join('') + subjectsHtml;
  document.getElementById('facDetailOverlay').classList.add('open');
}
document.getElementById('facDetailEditBtn').onclick = ()=>{
  document.getElementById('facDetailOverlay').classList.remove('open');
  openFacForm(activeFacDetailId);
};
document.getElementById('facDetailTimetableBtn').onclick = ()=>{
  const f = findFaculty(activeFacDetailId);
  if(!f) return;
  document.getElementById('facDetailOverlay').classList.remove('open');
  openFacultyTimetableFor(f.name);
};
let facDeleteTarget = null;
document.getElementById('facDetailDeleteBtn').onclick = ()=>{
  const f = findFaculty(activeFacDetailId);
  facDeleteTarget = activeFacDetailId;
  document.getElementById('facDeleteName').textContent = f ? f.name : '';
  document.getElementById('facDetailOverlay').classList.remove('open');
  document.getElementById('facDeleteOverlay').classList.add('open');
};
document.getElementById('facConfirmDeleteBtn').onclick = ()=>{
  if(!facDeleteTarget) return;
  const dept = currentFacDept;
  const list = FACULTY[dept];
  const idx = list.findIndex(f=>f._id===facDeleteTarget);
  if(idx === -1) return;
  const removed = list[idx];
  list.splice(idx, 1);
  saveFaculty();
  document.getElementById('facDeleteOverlay').classList.remove('open');
  renderFaculties();
  showUndo(`"${removed.name}" deleted`, ()=>{
    if(!FACULTY[dept]) FACULTY[dept] = [];
    FACULTY[dept].splice(Math.min(idx, FACULTY[dept].length), 0, removed);
    saveFaculty();
    if(currentFacDept===dept) renderFaculties();
    toast('Faculty restored');
  });
};

// ================= SHARE HELPER =================
// Direct WhatsApp / Telegram / SMS share links, same pattern as the
// reference attendance tracker: build the share URL with the text baked
// in, so it works on both desktop and mobile without relying on the
// (patchy, desktop-unsupported) native Web Share API.
// yearsConfig is optional: {years:[...], selected:Set, onChange(newSelectedSet) => newText}.
// When given, a "Years to include" checkbox row appears inside the share
// popup itself, and re-ticking a year re-runs onChange and updates the
// textarea live — no need to close the popup and go back to a dashboard
// filter first.
let shareYearsOnChange = null;
function openShare(text, yearsConfig){
  document.getElementById('shareText').value = text;
  const nativeRow = document.getElementById('shareNativeRow');
  nativeRow.style.display = navigator.share ? '' : 'none';

  const yearsWrap = document.getElementById('shareYearsWrap');
  const yearsGroup = document.getElementById('shareYearsGroup');
  shareYearsOnChange = null;
  if(yearsConfig && yearsConfig.years && yearsConfig.years.length){
    yearsWrap.style.display = '';
    yearsGroup.innerHTML = '';
    yearsConfig.years.forEach(y=>{
      const lbl = document.createElement('label');
      lbl.style.cssText = 'display:flex;align-items:center;gap:7px;font-size:14px;font-weight:600;cursor:pointer;';
      lbl.innerHTML = `<input type="checkbox" class="share-year-check" value="${escapeAttr(y)}" style="width:18px;height:18px;" ${yearsConfig.selected.has(y)?'checked':''}>${escapeHtml(y)}`;
      lbl.querySelector('input').addEventListener('change', e=>{
        if(e.target.checked) yearsConfig.selected.add(y); else yearsConfig.selected.delete(y);
        document.getElementById('shareText').value = yearsConfig.onChange(yearsConfig.selected);
      });
      yearsGroup.appendChild(lbl);
    });
    shareYearsOnChange = yearsConfig;
  } else {
    yearsWrap.style.display = 'none';
    yearsGroup.innerHTML = '';
  }
  document.getElementById('shareOverlay').classList.add('open');
}
document.getElementById('shareYearsAllBtn').onclick = ()=>{
  if(!shareYearsOnChange) return;
  const allSelected = shareYearsOnChange.selected.size === shareYearsOnChange.years.length;
  shareYearsOnChange.selected = new Set(allSelected ? [] : shareYearsOnChange.years);
  document.querySelectorAll('#shareYearsGroup .share-year-check').forEach(cb=>{ cb.checked = !allSelected; });
  document.getElementById('shareText').value = shareYearsOnChange.onChange(shareYearsOnChange.selected);
};
document.getElementById('shareWhatsappBtn').onclick = ()=>{
  const text = document.getElementById('shareText').value;
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
};
document.getElementById('shareTelegramBtn').onclick = ()=>{
  const text = document.getElementById('shareText').value;
  window.open('https://t.me/share/url?url=&text=' + encodeURIComponent(text), '_blank');
};
document.getElementById('shareSMSBtn').onclick = ()=>{
  const text = document.getElementById('shareText').value;
  window.location.href = 'sms:?body=' + encodeURIComponent(text);
};
document.getElementById('shareCopyBtn').onclick = async ()=>{
  const text = document.getElementById('shareText').value;
  try{
    await navigator.clipboard.writeText(text);
    toast('Copied to clipboard');
  }catch(e){
    const ta = document.getElementById('shareText');
    ta.select();
    try{ document.execCommand('copy'); toast('Copied to clipboard'); }
    catch(e2){ toast('Could not copy — select & copy manually'); }
  }
};
// Print / PDF — every report in the app (Principal Report, OD Report,
// Today's Attendance, Faculty Attendance, MoM, …) funnels through
// openShare()/#shareText, so wiring this once here covers all of them:
// builds a clean, letterhead-style printable page from the same text and
// hands it to the browser's own Print dialog, where "Save as PDF" is one
// of the destination choices on every phone and desktop browser.
document.getElementById('sharePrintBtn').onclick = ()=>{
  const text = document.getElementById('shareText').value;
  if(!text.trim()){ toast('Nothing to print'); return; }
  const win = window.open('', '_blank');
  if(!win){ toast('Pop-up blocked — allow pop-ups to print'); return; }
  const college = escapeHtml(APP_SETTINGS.collegeName || '');
  const dept = escapeHtml(APP_SETTINGS.deptName || '');
  const hodName = escapeHtml(APP_SETTINGS.hodName || '');
  const principalName = escapeHtml(APP_SETTINGS.principalName || '');
  const printedOn = new Date().toLocaleString('en-IN', {dateStyle:'medium', timeStyle:'short'});
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>CampusCore — Print</title>
    <style>
      body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:#111;padding:28px 32px;max-width:720px;margin:0 auto;}
      .ph-head{text-align:center;border-bottom:2px solid #111;padding-bottom:12px;margin-bottom:18px;}
      .ph-college{font-size:19px;font-weight:800;}
      .ph-dept{font-size:14px;color:#444;margin-top:2px;}
      .ph-printed{font-size:11px;color:#888;margin-top:10px;}
      pre{white-space:pre-wrap;word-wrap:break-word;font-family:inherit;font-size:13.5px;line-height:1.7;}
      .ph-sign{display:flex;justify-content:space-between;margin-top:60px;font-size:13px;}
      .ph-sign div{border-top:1px solid #333;padding-top:6px;width:200px;text-align:center;}
      .ph-sign .ph-sign-name{font-weight:700;margin-top:3px;border-top:none;padding-top:0;}
      @media print{ body{padding:0 8mm;} }
    </style></head><body>
    <div class="ph-head">
      ${college ? `<div class="ph-college">${college}</div>` : ''}
      ${dept ? `<div class="ph-dept">${dept}</div>` : ''}
      <div class="ph-printed">Printed on ${escapeHtml(printedOn)}</div>
    </div>
    <pre>${escapeHtml(text)}</pre>
    <div class="ph-sign">
      <div>HOD Signature${hodName ? `<div class="ph-sign-name">${hodName}</div>` : ''}</div>
      <div>Principal Signature${principalName ? `<div class="ph-sign-name">${principalName}</div>` : ''}</div>
    </div>
    </body></html>`);
  win.document.close();
  win.focus();
  setTimeout(()=>{ win.print(); }, 300); // let the popup finish rendering before the print dialog opens
};
document.getElementById('shareNativeBtn').onclick = async ()=>{
  const text = document.getElementById('shareText').value;
  if(navigator.share){
    try{ await navigator.share({text}); }catch(e){ /* cancelled */ }
  }
};

// ================= STUDENT ATTENDANCE =================
let attCurrentDate = todayStr();
let attCurrentPeriod = 1;
let attDraft = {};

// ---- Combined-class attendance: some sessions are taught to two or more
// departments together (e.g. AI & DS + CSBS, IT + CS). When attCombinedGroup
// is set, the roster below is the merged student list from every member
// dept/year, tagged so Save can still write each student's mark back into
// their OWN department's attendance records — every existing report/donut
// keeps working unchanged, they just also see this session's marks. ----
let attCombinedGroup = null;
let attRosterOwnerMap = {}; // studentId -> {dept, year} — populated by attRosterList()

function combinedRosterFor(group){
  const out = [];
  group.members.forEach(m=>{
    ((DATA[m.dept] && DATA[m.dept][m.year]) || []).forEach(s=>{
      out.push({...s, _combDept:m.dept, _combYear:m.year});
    });
  });
  return out;
}
function attRosterList(){
  attRosterOwnerMap = {};
  const list = attCombinedGroup ? combinedRosterFor(attCombinedGroup) : currentList();
  list.forEach(s=>{
    attRosterOwnerMap[s._id] = attCombinedGroup ? {dept:s._combDept, year:s._combYear} : {dept:currentDept, year:currentYear};
  });
  return list;
}

function openAttendance(group){
  attCombinedGroup = group || null;
  document.getElementById('attClassLabel').textContent = attCombinedGroup
    ? `🔗 ${attCombinedGroup.name}`
    : `${currentDept} · ${currentYear}`;
  attCurrentDate = todayStr();
  document.getElementById('attDate').value = attCurrentDate;
  renderAttPeriodTabs();
  renderAttRows();
  document.getElementById('attendanceOverlay').classList.add('open');
}
document.getElementById('attendanceBtn').onclick = ()=> openAttendance(null);

function combinedGroupsForDept(dept){
  return COMBINED_GROUPS.filter(g=>g.members.some(m=>m.dept===dept));
}
document.getElementById('combinedAttendanceBtn').onclick = ()=>{
  const groups = combinedGroupsForDept(currentDept);
  const el = document.getElementById('combinedPickList');
  if(!groups.length){
    el.innerHTML = `<div class="empty-note">No combined class is set up for ${escapeHtml(currentDept)} yet. Add one from Settings → 🔗 Combined Classes.</div>`;
  } else {
    el.innerHTML = groups.map(g=>`
      <div class="task-row" data-gid="${escapeAttr(g._id)}" style="cursor:pointer;">
        <div class="tr-main">
          <div class="tr-title">${escapeHtml(g.name)}</div>
          <div class="tr-remarks">${g.members.map(m=>escapeHtml(m.dept)+' · '+escapeHtml(m.year)).join('  +  ')}</div>
        </div>
      </div>`).join('');
    el.querySelectorAll('[data-gid]').forEach(row=>{
      row.addEventListener('click', ()=>{
        const g = COMBINED_GROUPS.find(x=>x._id===row.dataset.gid);
        document.getElementById('combinedPickOverlay').classList.remove('open');
        if(g) openAttendance(g);
      });
    });
  }
  document.getElementById('combinedPickOverlay').classList.add('open');
};

function renderAttPeriodTabs(){
  const el = document.getElementById('attPeriodTabs');
  el.innerHTML = '';
  PERIODS.forEach(p=>{
    const b = document.createElement('button');
    b.className = 'tab' + (p===attCurrentPeriod ? ' active':'');
    b.textContent = 'P'+p;
    b.onclick = ()=>{ attCurrentPeriod = p; renderAttPeriodTabs(); renderAttRows(); };
    el.appendChild(b);
  });
}

document.getElementById('attDate').addEventListener('change', e=>{
  attCurrentDate = e.target.value || todayStr();
  renderAttRows();
});

function getAttRecord(dept, year, date, period, create){
  if(!ATT[dept]) ATT[dept] = {};
  if(!ATT[dept][year]) ATT[dept][year] = {};
  if(!ATT[dept][year][date]) ATT[dept][year][date] = {};
  if(!ATT[dept][year][date][period] && create){
    ATT[dept][year][date][period] = { markedAt: Date.now(), records: {} };
  }
  return ATT[dept][year][date][period];
}

function odSelectHtml(id, current){
  return `<select class="att-od-select" data-odfor="${id}">
    <option value="">Select OD type…</option>
    ${OD_TYPES.map(t=>`<option value="${t}" ${t===current?'selected':''}>${t}</option>`).join('')}
    <option value="__addnew__">+ Add new…</option>
  </select>`;
}

// Central place every OD-type <select> reports its change through — lets us
// intercept "+ Add new…" and open the shared Add Item modal to collect the
// new type, wherever the dropdown appears (student or faculty attendance).
let odAddNewApply = null; // set right before opening the modal; called with the new type name
let odAddNewContext = null; // 'student' | 'faculty' — which attendance screen to repaint afterwards
function handleOdSelectChange(selectEl, context, applyFn){
  const val = selectEl.value;
  if(val === '__addnew__'){
    selectEl.value = ''; // don't leave "+ Add new…" visibly selected while the modal is open
    odAddNewApply = applyFn;
    odAddNewContext = context;
    openAddItem('odtype');
    return;
  }
  applyFn(val);
}

const LEAVE_PERMISSION_TYPES = ['With Permission', 'Without Permission'];
function permSelectHtml(id, current){
  return `<select class="att-od-select att-perm-select" data-permfor="${id}">
    <option value="">Select permission…</option>
    ${LEAVE_PERMISSION_TYPES.map(t=>`<option value="${t}" ${t===current?'selected':''}>${t}</option>`).join('')}
  </select>`;
}

// When the OD type is specifically "Sports", a second free-text field
// captures which sport/event it was (Cricket, Kabaddi, Athletics Meet...)
// so the Live Student Status tile can show it alongside the OD type.
function sportInputHtml(id, current){
  return `<input type="text" class="att-sport-input" data-sportfor="${id}" placeholder="Which sport / event?" value="${escapeAttr(current||'')}" style="margin-top:6px;">`;
}

// Notify a student's parent (father's phone, falling back to mother's) over
// WhatsApp that their ward was marked absent for the period being marked.
function notifyAbsentParent(studentId){
  const s = findStudent(studentId);
  if(!s) return;
  const phone = s.fatherphone || s.motherphone;
  const digits = String(phone||'').replace(/\D/g,'');
  if(digits.length < 10 || digits.length > 13){ toast('No valid parent phone number on file'); return; }
  const waNum = digits.length === 10 ? '91' + digits : digits;
  const owner = attRosterOwnerMap[studentId] || {dept:currentDept, year:currentYear};
  const msg = `Dear Parent,\n\nYour ward ${s.name} (${owner.dept} · ${owner.year}${s.regno ? ' · '+s.regno : ''}) was marked ABSENT on ${formatDateLabel(attCurrentDate)}, Period ${attCurrentPeriod}.\n\nPlease contact the department if this is unexpected.\n\n— ${owner.dept} Department`;
  window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Combined mode reads/writes attendance from EVERY member dept/year's own
// ATT store (not a separate combined store), so each department's existing
// reports and donuts stay accurate — the combined session is just a
// convenient way to mark them all in one pass.
function loadAttDraftFromExisting(){
  attDraft = {};
  if(attCombinedGroup){
    attCombinedGroup.members.forEach(m=>{
      const existing = getAttRecord(m.dept, m.year, attCurrentDate, attCurrentPeriod, false);
      if(existing) Object.keys(existing.records).forEach(id=>{ attDraft[id] = {...existing.records[id]}; });
    });
  } else {
    const existing = getAttRecord(currentDept, currentYear, attCurrentDate, attCurrentPeriod, false);
    if(existing) Object.keys(existing.records).forEach(id=>{ attDraft[id] = {...existing.records[id]}; });
  }
}

function attBulkRecordsForCurrentPeriod(){
  const members = attCombinedGroup ? attCombinedGroup.members : [{dept:currentDept, year:currentYear}];
  return members
    .map(m=>({...m, rec: getAttRecord(m.dept, m.year, attCurrentDate, attCurrentPeriod, false)}))
    .filter(x=>x.rec && x.rec.bulk);
}
function paintAttRows(){
  const bulkRecs = attBulkRecordsForCurrentPeriod();
  const noticeEl = document.getElementById('attBulkNotice');
  noticeEl.innerHTML = bulkRecs.length ? `<div class="no-data-note" style="background:var(--accent-dim);border:1px solid var(--accent);border-radius:10px;padding:10px 12px;margin-bottom:10px;color:var(--accent);font-weight:600;">
      🔢 ${bulkRecs.map(r=>`${escapeHtml(r.dept)} · ${escapeHtml(r.year)}: Total ${r.rec.bulk.total}, Present ${r.rec.bulk.present}, OD ${r.rec.bulk.od}, Absent ${r.rec.bulk.absent}`).join('<br>')}
      <br><span style="font-weight:400;">This period was logged as Class Totals — marking and saving here individually will replace it with per-student marks.</span>
    </div>` : '';
  const list = attRosterList();
  const rowsEl = document.getElementById('attRows');
  rowsEl.innerHTML = list.map(s=>{
    const rec = attDraft[s._id] || {status:'', od:''};
    return `
    <div class="att-row" data-id="${s._id}">
      <div class="ar-name" data-viewid="${s._id}" style="cursor:pointer;" title="Tap to view full details">
        <span class="ar-sno">#${escapeHtml(s.sno!==undefined&&s.sno!==''?s.sno:'—')}</span>${escapeHtml(s.name)}
        ${attCombinedGroup ? `<span class="task-status-badge not_started" style="margin-left:6px;opacity:1;background:var(--accent-dim);color:var(--accent);">${escapeHtml(s._combDept)} · ${escapeHtml(s._combYear)}</span>` : ''}
      </div>
      <div style="flex:none;">
        <div class="att-status-group">
          <button type="button" class="att-status-btn p ${rec.status==='P'?'active':''}" data-status="P">P</button>
          <button type="button" class="att-status-btn a ${rec.status==='A'?'active':''}" data-status="A">A</button>
          <button type="button" class="att-status-btn od ${rec.status==='OD'?'active':''}" data-status="OD">OD</button>
        </div>
        ${rec.status==='OD' ? odSelectHtml(s._id, rec.od) + (rec.od==='Sports' ? sportInputHtml(s._id, rec.sport) : '') : ''}
        ${rec.status==='A' ? permSelectHtml(s._id, rec.permission) + `<button type="button" class="link-btn att-notify-btn" data-notifyfor="${s._id}" style="margin-top:6px;font-size:11.5px;">📨 Notify Parent</button>` : ''}
      </div>
    </div>`;
  }).join('');
  wireAttRowEvents();
  updateAttSummary();
}

function renderAttRows(){
  loadAttDraftFromExisting();
  paintAttRows();
}

function wireAttRowEvents(){
  document.querySelectorAll('#attRows .att-status-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const row = e.target.closest('.att-row');
      const id = row.dataset.id;
      const status = e.target.dataset.status;
      attDraft[id] = attDraft[id] || {};
      attDraft[id].status = status;
      if(status !== 'OD'){ attDraft[id].od = ''; attDraft[id].sport = ''; }
      if(status !== 'A') attDraft[id].permission = '';
      row.querySelectorAll('.att-status-btn').forEach(b=>b.classList.toggle('active', b.dataset.status===status));
      // Remove any existing extras (OD-type select, permission select, notify button)
      row.querySelectorAll('.att-od-select, .att-notify-btn').forEach(el=>el.remove());
      const extrasHost = row.querySelector('div[style]');
      if(status==='OD'){
        extrasHost.insertAdjacentHTML('beforeend', odSelectHtml(id, ''));
        extrasHost.querySelector('.att-od-select').addEventListener('change', e2=>{ handleOdSelectChange(e2.target, 'student', val=>{ attDraft[id].od = val; }); });
      } else if(status==='A'){
        extrasHost.insertAdjacentHTML('beforeend', permSelectHtml(id, '') + `<button type="button" class="link-btn att-notify-btn" data-notifyfor="${id}" style="margin-top:6px;font-size:11.5px;">📨 Notify Parent</button>`);
        extrasHost.querySelector('.att-perm-select').addEventListener('change', e2=>{ attDraft[id].permission = e2.target.value; });
        extrasHost.querySelector('.att-notify-btn').addEventListener('click', ()=>notifyAbsentParent(id));
      }
      updateAttSummary();
    });
  });
  document.querySelectorAll('#attRows .att-od-select:not(.att-perm-select)').forEach(sel=>{
    sel.addEventListener('change', e=>{
      const id = e.target.dataset.odfor;
      handleOdSelectChange(e.target, 'student', val=>{
        attDraft[id] = attDraft[id] || {};
        attDraft[id].od = val;
        const row = e.target.closest('.att-row');
        row.querySelectorAll('.att-sport-input').forEach(el=>el.remove());
        if(val==='Sports'){
          e.target.insertAdjacentHTML('afterend', sportInputHtml(id, ''));
          row.querySelector('.att-sport-input').addEventListener('input', e2=>{ attDraft[id].sport = e2.target.value; });
        } else {
          attDraft[id].sport = '';
        }
      });
    });
  });
  document.querySelectorAll('#attRows .att-sport-input').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const id = e.target.dataset.sportfor;
      attDraft[id] = attDraft[id] || {};
      attDraft[id].sport = e.target.value;
    });
  });
  document.querySelectorAll('#attRows .att-perm-select').forEach(sel=>{
    sel.addEventListener('change', e=>{
      const id = e.target.dataset.permfor;
      attDraft[id] = attDraft[id] || {};
      attDraft[id].permission = e.target.value;
    });
  });
  document.querySelectorAll('#attRows .att-notify-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>notifyAbsentParent(btn.dataset.notifyfor));
  });
  document.querySelectorAll('#attRows .ar-name[data-viewid]').forEach(el=>{
    el.addEventListener('click', ()=>openDetail(el.dataset.viewid));
  });
}

function updateAttSummary(){
  const list = attRosterList();
  let present=0, absent=0, od=0, unmarked=0;
  list.forEach(s=>{
    const st = (attDraft[s._id]||{}).status;
    if(st==='P') present++;
    else if(st==='A') absent++;
    else if(st==='OD') od++;
    else unmarked++;
  });
  document.getElementById('attSummary').innerHTML = `
    <span class="mini-stat">Total ${list.length}</span>
    <span class="mini-stat present">Present ${present}</span>
    <span class="mini-stat absent">Absent ${absent}</span>
    <span class="mini-stat od">OD ${od}</span>
    ${unmarked ? `<span class="mini-stat">Unmarked ${unmarked}</span>` : ''}
  `;
}

document.getElementById('attMarkAllPresentBtn').onclick = ()=>{
  attRosterList().forEach(s=>{ attDraft[s._id] = {status:'P'}; });
  paintAttRows();
  toast('Marked all Present');
};
document.getElementById('attMarkAllAbsentBtn').onclick = ()=>{
  attRosterList().forEach(s=>{ attDraft[s._id] = {status:'A'}; });
  paintAttRows();
  toast('Marked all Absent');
};

document.getElementById('attSaveBtn').onclick = async ()=>{
  // Warn before silently replacing an earlier Class Totals bulk entry —
  // saving per-student marks here always overwrites it, and the original
  // total/present/OD/absent counts (with no per-student names) can't be
  // recovered afterwards.
  const bulkRecsNow = attBulkRecordsForCurrentPeriod();
  if(bulkRecsNow.length){
    const label = bulkRecsNow.map(r=>`${r.dept} · ${r.year}`).join(', ');
    const ok = await confirmWithSuppress('individualOverwritesClassTotals', `${label} already ${bulkRecsNow.length>1?'have':'has'} a 🔢 Class Totals entry for this period. Saving individual attendance now will replace ${bulkRecsNow.length>1?'those':'it'} with per-student marks, and the original totals-only entry will be lost. Continue?`);
    if(!ok) return;
  }
  if(attCombinedGroup){
    // Split the combined draft back out by each student's own department/
    // year, and write into that department's own ATT store.
    attCombinedGroup.members.forEach(m=>{
      const rec = getAttRecord(m.dept, m.year, attCurrentDate, attCurrentPeriod, true);
      rec.records = {};
      rec.bulk = null; // per-student marking always supersedes an earlier Class Totals entry for this period
      const roster = (DATA[m.dept] && DATA[m.dept][m.year]) || [];
      roster.forEach(s=>{ if(attDraft[s._id] && attDraft[s._id].status) rec.records[s._id] = {...attDraft[s._id]}; });
      rec.markedAt = Date.now();
    });
  } else {
    const rec = getAttRecord(currentDept, currentYear, attCurrentDate, attCurrentPeriod, true);
    rec.records = {};
    rec.bulk = null; // per-student marking always supersedes an earlier Class Totals entry for this period
    Object.keys(attDraft).forEach(id=>{ if(attDraft[id].status) rec.records[id] = {...attDraft[id]}; });
    rec.markedAt = Date.now();
  }
  saveAttendance();
  toast('Attendance saved');
  document.getElementById('attendanceOverlay').classList.remove('open');
};

function findMostRecentAttendance(dept, year, excludeDate, excludePeriod){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const dates = Object.keys(dateMap).sort().reverse();
  for(const date of dates){
    const periods = Object.keys(dateMap[date]).map(Number).sort((a,b)=>b-a);
    for(const p of periods){
      if(date===excludeDate && p===excludePeriod) continue;
      const rec = dateMap[date][p];
      if(rec && rec.records && Object.keys(rec.records).length) return rec;
    }
  }
  return null;
}

// ================= CLASS TOTALS (bulk attendance entry) =================
// An alternative to per-student marking: log Present/OD/Absent COUNTS for
// the whole class in one go — no roster needed. Stored as rec.bulk on the
// same ATT[dept][year][date][period] record used everywhere else, so every
// report/donut/HOD view already reads it correctly via statsFromAttRecord().
function findMostRecentBulkAttendance(dept, year, excludeDate, excludePeriod){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const dates = Object.keys(dateMap).sort().reverse();
  for(const date of dates){
    const periods = Object.keys(dateMap[date]).map(Number).sort((a,b)=>b-a);
    for(const p of periods){
      if(date===excludeDate && p===excludePeriod) continue;
      const rec = dateMap[date][p];
      if(rec && rec.bulk) return rec;
    }
  }
  return null;
}

const classTotalsOverlay = document.getElementById('classTotalsOverlay');
function ctPopulateYears(){
  const dept = document.getElementById('ct_dept').value;
  const yearSel = document.getElementById('ct_year');
  const years = Object.keys(DATA[dept]||{});
  const keepYear = years.includes(currentYear) ? currentYear : years[0];
  yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===keepYear?'selected':''}>${escapeHtml(y)}</option>`).join('');
}
function ctAutoFillTotal(){
  const dept = document.getElementById('ct_dept').value;
  const year = document.getElementById('ct_year').value;
  const totalEl = document.getElementById('ct_total');
  const hintEl = document.getElementById('ct_totalHint');
  const roster = (DATA[dept] && DATA[dept][year]) ? DATA[dept][year].length : 0;
  if(!totalEl.value){
    totalEl.value = roster || '';
  }
  hintEl.textContent = roster ? `(${roster} on roll)` : '';
  ctRecomputeAbsent();
}
// prefill (optional): {dept, year, date, period} — used by the swipe-to-edit
// action on the Today's Attendance list so tapping "Edit" jumps straight to
// that row's own dept/year/date/period, with its existing counts loaded if
// it was a Class Totals (bulk) entry. Called with no args (or a click
// event, from the header button) it behaves exactly as before.
function openClassTotals(prefill){
  const p = (prefill && prefill.dept) ? prefill : null;
  document.getElementById('ct_date').value = (p && p.date) || todayStr();

  const deptSel = document.getElementById('ct_dept');
  const depts = Object.keys(DATA);
  const initialDept = (p && p.dept) || currentDept;
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===initialDept?'selected':''}>${escapeHtml(d)}</option>`).join('');

  ctPopulateYears();
  if(p && p.year){
    const yearSel = document.getElementById('ct_year');
    if([...yearSel.options].some(o=>o.value===p.year)) yearSel.value = p.year;
  }

  const periodSel = document.getElementById('ct_period');
  periodSel.innerHTML = `<option value="__whole__">Whole Day (apply to every period)</option>` +
    PERIODS.map(pd=>`<option value="${pd}">Period ${pd}</option>`).join('');
  if(p && p.period) periodSel.value = String(p.period);

  const alsoEl = document.getElementById('ct_alsoPeriods');
  alsoEl.innerHTML = PERIODS.map(pd=>`<label style="display:flex;align-items:center;gap:5px;font-size:12.5px;font-weight:600;cursor:pointer;">
    <input type="checkbox" class="ct-also-period" value="${pd}" style="width:auto;">P${pd}</label>`).join('');

  ['ct_total','ct_present','ct_od','ct_absent'].forEach(id=>document.getElementById(id).value = '');
  document.getElementById('ct_err').textContent = '';
  document.getElementById('ctPasteText').value = '';
  document.getElementById('ctPasteNote').style.display = 'none';
  document.getElementById('ctMultiYearWrap').style.display = 'none';

  if(p && p.year && p.period){
    const existing = getAttRecord(p.dept, p.year, p.date || todayStr(), p.period, false);
    if(existing && existing.bulk){
      document.getElementById('ct_total').value = existing.bulk.total;
      document.getElementById('ct_present').value = existing.bulk.present;
      document.getElementById('ct_od').value = existing.bulk.od;
    }
  }
  ctAutoFillTotal();
  classTotalsOverlay.classList.add('open');
}
document.getElementById('classTotalsBtn').onclick = openClassTotals;

// ---- Paste attendance notes → auto-fill the form above -------------------
// Reads loose, human-written notes (any order, any of the usual date
// formats, department by full name or a common short form like "AI&DS" /
// "Aids", year as "2nd year" or "II Year") and fills in whichever of
// Department/Year/Date/Present/Absent/OD/Total it can confidently find.
// Nothing is saved until the HOD reviews the filled-in fields and taps
// 💾 Save Attendance themselves — this only ever pre-fills the form.
function ctNormalizeKey(s){ return (s||'').toLowerCase().replace(/[^a-z]/g,''); }
function ctFindDept(text){
  const depts = Object.keys(DATA);
  const norm = ctNormalizeKey(text);
  if(!norm) return null;
  // Exact normalized match first ("aids" === "AI & DS" stripped of & and spaces)…
  let hit = depts.find(d=>ctNormalizeKey(d) === norm);
  if(hit) return hit;
  // …then a looser "appears as a whole word" containment check, either way.
  hit = depts.find(d=>{
    const dn = ctNormalizeKey(d);
    return dn && (norm.includes(dn) || dn.includes(norm));
  });
  return hit || null;
}
function ctFindYear(dept, text){
  const years = Object.keys(DATA[dept]||{});
  const m = text.match(/([1-4])(?:st|nd|rd|th)?\s*year|(?:^|\D)(i{1,3}v?|iv)\s*year/i);
  let digit = null;
  if(m){
    if(m[1]) digit = m[1];
    else if(m[2]){
      const roman = {i:'1', ii:'2', iii:'3', iv:'4'};
      digit = roman[m[2].toLowerCase()] || null;
    }
  }
  if(!digit) return null;
  return years.find(y=>y.includes(digit)) || null;
}
function ctParseDate(text){
  // dd-mm-yy, dd/mm/yy, dd-mm-yyyy, dd/mm/yyyy — the formats an Indian
  // college's day-to-day notes actually get written in.
  const m = text.match(/\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})\b/);
  if(!m) return null;
  let [, d, mo, y] = m;
  if(y.length===2) y = (+y < 70 ? '20'+y : '19'+y);
  d = d.padStart(2,'0'); mo = mo.padStart(2,'0');
  if(+d<1||+d>31||+mo<1||+mo>12) return null;
  return `${y}-${mo}-${d}`;
}
function ctParseNumberFor(labelRe, text){
  const m = text.match(labelRe);
  return m ? +m[1] : null;
}
// Splits a note that has SEVERAL years' worth of counts in one paste (e.g.
// "IV year / Present.../ III year / Present..." all together) into one
// block per year, each parsed independently — so a daily multi-year note
// can be saved in one go instead of pasting/filling once per year.
const CT_YEAR_MARKER_RE = /([1-4])(?:st|nd|rd|th)?\s*year|(?:^|\D)(i{1,3}v?)\s*year/gi;
function ctSplitYearBlocks(dept, text){
  const years = Object.keys(DATA[dept]||{});
  const roman = {i:'1', ii:'2', iii:'3', iv:'4'};
  const markers = [...text.matchAll(CT_YEAR_MARKER_RE)];
  if(markers.length < 2) return []; // not a multi-year note — let the single-year path handle it
  const blocks = [];
  markers.forEach((m, i)=>{
    const digit = m[1] || (m[2] ? roman[m[2].toLowerCase()] : null);
    const year = digit ? years.find(y=>y.includes(digit)) : null;
    if(!year) return;
    const segStart = m.index;
    const segEnd = i+1 < markers.length ? markers[i+1].index : text.length;
    const seg = text.slice(segStart, segEnd);
    const present = ctParseNumberFor(/present\s*[:\-]?\s*(\d+)/i, seg);
    const absent = ctParseNumberFor(/absent\s*[:\-]?\s*(\d+)/i, seg);
    const od = ctParseNumberFor(/\bod\b\s*[:\-]?\s*(\d+)|on-?duty\s*[:\-]?\s*(\d+)/i, seg);
    let total = ctParseNumberFor(/total\s*[:\-]?\s*(\d+)/i, seg);
    if(total===null && present!==null && absent!==null) total = present + absent + (od||0);
    if(total===null) return; // nothing usable in this block
    blocks.push({year, present: present||0, absent: absent||0, od: od||0, total});
  });
  // Collapse to one block per year (keep the last occurrence) in case a
  // year name is mentioned twice (a heading, then the actual data line).
  const byYear = {};
  blocks.forEach(b=>{ byYear[b.year] = b; });
  return years.filter(y=>byYear[y]).map(y=>byYear[y]);
}
let ctMultiYearRows = [];
function ctRenderMultiYearList(rows){
  ctMultiYearRows = rows;
  document.getElementById('ctMultiYearCount').textContent = rows.length;
  document.getElementById('ctMultiYearList').innerHTML = rows.map((r,i)=>`
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:8px;border:1px solid var(--border);border-radius:10px;">
      <div style="font-weight:700;font-size:13px;min-width:70px;">${escapeHtml(r.year)}</div>
      <input type="number" id="ctmy_total_${i}" value="${r.total}" min="0" style="width:64px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="Total">
      <input type="number" id="ctmy_present_${i}" value="${r.present}" min="0" style="width:60px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="Present">
      <input type="number" id="ctmy_od_${i}" value="${r.od}" min="0" style="width:56px;padding:6px;border-radius:8px;border:1px solid var(--border);background:var(--surface-2);color:var(--text);" title="OD">
      <span style="font-size:11px;color:var(--text-dim);">T / P / OD (Absent auto)</span>
    </div>
  `).join('');
}
document.getElementById('ctPasteFillBtn').onclick = ()=>{
  const raw = document.getElementById('ctPasteText').value;
  const noteEl = document.getElementById('ctPasteNote');
  const multiWrap = document.getElementById('ctMultiYearWrap');
  if(!raw.trim()){ noteEl.style.display='none'; multiWrap.style.display='none'; return; }

  const deptForMulti = ctFindDept(raw);
  const multiBlocks = deptForMulti ? ctSplitYearBlocks(deptForMulti, raw) : [];
  if(multiBlocks.length > 1){
    noteEl.style.display = 'none';
    document.getElementById('ct_dept').value = deptForMulti;
    ctPopulateYears();
    const dm = [...raw.matchAll(/date\s*[:\-]?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/gi)];
    const dateStr = dm.length ? ctParseDate(dm[dm.length-1][1]) : ctParseDate(raw);
    if(dateStr) document.getElementById('ct_date').value = dateStr;
    ctRenderMultiYearList(multiBlocks);
    multiWrap.style.display = '';
    return;
  }
  multiWrap.style.display = 'none';

  const found = [];
  const missing = [];

  // Dates: a note can have more than one "Date:" line (a heading date and
  // the actual entry date) — the LAST one found wins, since that's the one
  // immediately next to the actual counts in every example seen.
  const dateMatches = [...raw.matchAll(/date\s*[:\-]?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/gi)];
  const dateStr = dateMatches.length ? ctParseDate(dateMatches[dateMatches.length-1][1]) : ctParseDate(raw);
  if(dateStr){ document.getElementById('ct_date').value = dateStr; found.push('Date'); } else missing.push('Date');

  const dept = ctFindDept(raw);
  if(dept){
    document.getElementById('ct_dept').value = dept;
    ctPopulateYears();
    found.push('Department');
  } else missing.push('Department');

  if(dept){
    const year = ctFindYear(dept, raw);
    if(year){ document.getElementById('ct_year').value = year; found.push('Year'); } else missing.push('Year');
  } else missing.push('Year');

  document.getElementById('ct_total').value = '';
  ctAutoFillTotal(); // roster-based default, overwritten below if pasted

  const present = ctParseNumberFor(/present\s*[:\-]?\s*(\d+)/i, raw);
  const absent = ctParseNumberFor(/absent\s*[:\-]?\s*(\d+)/i, raw);
  const od = ctParseNumberFor(/\bod\b\s*[:\-]?\s*(\d+)|on-?duty\s*[:\-]?\s*(\d+)/i, raw);
  const total = ctParseNumberFor(/total\s*[:\-]?\s*(\d+)/i, raw);

  if(present!==null){ document.getElementById('ct_present').value = present; found.push('Present'); } else missing.push('Present');
  if(od!==null){ document.getElementById('ct_od').value = od; found.push('OD'); } else missing.push('OD');
  if(total!==null){ document.getElementById('ct_total').value = total; found.push('Total'); }
  else if(present!==null && absent!==null){
    document.getElementById('ct_total').value = present + absent + (od||0);
    found.push('Total (computed)');
  }
  ctRecomputeAbsent();
  if(absent!==null) found.push('Absent'); // shown for confirmation even though it's auto-computed

  noteEl.style.display = '';
  noteEl.style.color = missing.length ? 'var(--danger)' : 'var(--good)';
  noteEl.textContent = (found.length ? `✅ Filled: ${found.join(', ')}. ` : '') +
    (missing.length ? `⚠️ Couldn't find: ${missing.join(', ')} — check/fill those manually before saving.` : 'Review the fields below, then Save.');
};
document.getElementById('ct_dept').addEventListener('change', ()=>{
  ctPopulateYears();
  document.getElementById('ct_total').value = '';
  ctAutoFillTotal();
});
document.getElementById('ct_year').addEventListener('change', ()=>{
  document.getElementById('ct_total').value = '';
  ctAutoFillTotal();
});

function ctRecomputeAbsent(){
  const total = parseFloat(document.getElementById('ct_total').value) || 0;
  const present = parseFloat(document.getElementById('ct_present').value) || 0;
  const od = parseFloat(document.getElementById('ct_od').value) || 0;
  const absent = Math.max(0, total - present - od);
  document.getElementById('ct_absent').value = total ? absent : '';
}
['ct_total','ct_present','ct_od'].forEach(id=>{
  document.getElementById(id).addEventListener('input', ctRecomputeAbsent);
});

document.getElementById('ctUsePreviousBtn').onclick = ()=>{
  const dept = document.getElementById('ct_dept').value;
  const year = document.getElementById('ct_year').value;
  const periodVal = document.getElementById('ct_period').value;
  const date = document.getElementById('ct_date').value || todayStr();
  const excludePeriod = periodVal==='__whole__' ? null : +periodVal;
  const src = findMostRecentBulkAttendance(dept, year, date, excludePeriod);
  if(!src){ toast('No previous class totals to reuse'); return; }
  document.getElementById('ct_total').value = src.bulk.total;
  document.getElementById('ct_present').value = src.bulk.present;
  document.getElementById('ct_od').value = src.bulk.od;
  ctRecomputeAbsent();
  toast('Reused previous class totals — remember to Save');
};

document.getElementById('classTotalsClearBtn').onclick = ()=>{
  ['ct_total','ct_present','ct_od','ct_absent'].forEach(id=>document.getElementById(id).value = '');
  document.getElementById('ct_err').textContent = '';
};

// Clears whatever attendance is already SAVED (Class Totals or individually
// marked — same ATT store) for the selected dept/year/date/period(s), as
// opposed to "Clear" above which only blanks the form's own input fields.
document.getElementById('ctDeleteSavedBtn').onclick = async ()=>{
  const dept = document.getElementById('ct_dept').value;
  const year = document.getElementById('ct_year').value;
  const date = document.getElementById('ct_date').value || todayStr();
  const periodVal = document.getElementById('ct_period').value;
  const errEl = document.getElementById('ct_err');
  errEl.textContent = '';
  if(!dept){ errEl.textContent = 'Pick a department'; return; }
  if(!year){ errEl.textContent = 'Pick a year'; return; }

  const alsoPeriods = [...document.querySelectorAll('.ct-also-period:checked')].map(cb=>+cb.value);
  let targetPeriods = periodVal==='__whole__' ? PERIODS.slice() : [+periodVal, ...alsoPeriods];
  targetPeriods = [...new Set(targetPeriods)];

  const withData = targetPeriods.filter(p=>{
    const existing = getAttRecord(dept, year, date, p, false);
    return existing && (Object.keys(existing.records||{}).length || existing.bulk);
  });
  if(!withData.length){ toast('Nothing saved for this selection'); return; }

  const label = withData.map(p=>`Period ${p}`).join(', ');
  const ok = await confirmWithSuppress('ctClearSavedAttendance', `This will permanently delete the saved attendance for ${dept} · ${year} · ${date} · ${label}. This cannot be undone. Continue?`);
  if(!ok) return;

  withData.forEach(p=>{
    if(ATT[dept] && ATT[dept][year] && ATT[dept][year][date]){
      delete ATT[dept][year][date][p];
    }
  });
  saveAttendance();
  ['ct_total','ct_present','ct_od','ct_absent'].forEach(id=>document.getElementById(id).value = '');
  toast(`Cleared saved attendance for ${withData.length} period(s)`);
  renderDashboard();
};

document.getElementById('classTotalsForm').addEventListener('submit', async e=>{
  e.preventDefault();
  const dept = document.getElementById('ct_dept').value;
  const year = document.getElementById('ct_year').value;
  const date = document.getElementById('ct_date').value || todayStr();
  const periodVal = document.getElementById('ct_period').value;
  const total = parseFloat(document.getElementById('ct_total').value);
  const present = parseFloat(document.getElementById('ct_present').value) || 0;
  const od = parseFloat(document.getElementById('ct_od').value) || 0;
  const errEl = document.getElementById('ct_err');
  errEl.textContent = '';
  if(!dept){ errEl.textContent = 'Pick a department'; return; }
  if(!year){ errEl.textContent = 'Pick a year'; return; }
  if(isNaN(total) || total <= 0){ errEl.textContent = 'Enter the total number of students'; return; }
  if(present + od > total){ errEl.textContent = 'Present + On-Duty cannot exceed Total students'; return; }
  const absent = Math.max(0, total - present - od);

  const alsoPeriods = [...document.querySelectorAll('.ct-also-period:checked')].map(cb=>+cb.value);
  let targetPeriods = periodVal==='__whole__' ? PERIODS.slice() : [+periodVal, ...alsoPeriods];
  targetPeriods = [...new Set(targetPeriods)];

  // Warn before silently replacing individually-marked attendance with a
  // bulk Class Totals entry — that per-student detail can't be recovered
  // once overwritten.
  const periodsWithIndividualMarks = targetPeriods.filter(p=>{
    const existing = getAttRecord(dept, year, date, p, false);
    return existing && existing.records && Object.keys(existing.records).length;
  });
  if(periodsWithIndividualMarks.length){
    const label = periodsWithIndividualMarks.map(p=>`Period ${p}`).join(', ');
    const ok = await confirmWithSuppress('classTotalsOverwritesIndividual', `${label} already ${periodsWithIndividualMarks.length>1?'have':'has'} individual, per-student attendance marked. Saving Class Totals will replace ${periodsWithIndividualMarks.length>1?'those':'it'} with just the totals — per-student marks for ${periodsWithIndividualMarks.length>1?'these periods':'this period'} will be lost. Continue?`);
    if(!ok) return;
  }

  targetPeriods.forEach(p=>{
    const rec = getAttRecord(dept, year, date, p, true);
    rec.records = {};
    rec.bulk = {total, present, od, absent};
    rec.markedAt = Date.now();
  });
  saveAttendance();
  toast(`Class totals saved for ${targetPeriods.length} period(s)`);
  classTotalsOverlay.classList.remove('open');
  renderDashboard();
});

document.getElementById('ctMultiYearSaveBtn').onclick = async ()=>{
  const dept = document.getElementById('ct_dept').value;
  const date = document.getElementById('ct_date').value || todayStr();
  const periodVal = document.getElementById('ct_period').value;
  const errEl = document.getElementById('ct_err');
  errEl.textContent = '';
  if(!dept){ errEl.textContent = 'Pick a department'; return; }

  const alsoPeriods = [...document.querySelectorAll('.ct-also-period:checked')].map(cb=>+cb.value);
  let targetPeriods = periodVal==='__whole__' ? PERIODS.slice() : [+periodVal, ...alsoPeriods];
  targetPeriods = [...new Set(targetPeriods)];
  if(!targetPeriods.length){ errEl.textContent = 'Pick a period'; return; }

  const rows = ctMultiYearRows.map((r,i)=>{
    const total = parseFloat(document.getElementById(`ctmy_total_${i}`).value) || 0;
    const present = parseFloat(document.getElementById(`ctmy_present_${i}`).value) || 0;
    const od = parseFloat(document.getElementById(`ctmy_od_${i}`).value) || 0;
    const absent = Math.max(0, total - present - od);
    return {year: r.year, total, present, od, absent};
  }).filter(r=>r.total > 0);
  if(!rows.length){ errEl.textContent = 'No valid rows to save — check the totals above'; return; }

  // One combined overwrite warning covering every year/period this batch
  // would touch, instead of asking once per row.
  const conflicts = [];
  rows.forEach(r=>{
    targetPeriods.forEach(p=>{
      const existing = getAttRecord(dept, r.year, date, p, false);
      if(existing && existing.records && Object.keys(existing.records).length) conflicts.push(`${r.year} · Period ${p}`);
    });
  });
  if(conflicts.length){
    const ok = await confirmWithSuppress('classTotalsOverwritesIndividual', `${conflicts.join(', ')} already ${conflicts.length>1?'have':'has'} individual, per-student attendance marked. Saving Class Totals will replace ${conflicts.length>1?'those':'it'} with just the totals — per-student marks will be lost. Continue?`);
    if(!ok) return;
  }

  rows.forEach(r=>{
    targetPeriods.forEach(p=>{
      const rec = getAttRecord(dept, r.year, date, p, true);
      rec.records = {};
      rec.bulk = {total: r.total, present: r.present, od: r.od, absent: r.absent};
      rec.markedAt = Date.now();
    });
  });
  saveAttendance();
  toast(`Saved for ${rows.length} year(s) × ${targetPeriods.length} period(s)`);
  classTotalsOverlay.classList.remove('open');
  renderDashboard();
};

document.getElementById('attReuseBtn').onclick = ()=>{
  attDraft = {};
  let found = false;
  const members = attCombinedGroup ? attCombinedGroup.members : [{dept:currentDept, year:currentYear}];
  members.forEach(m=>{
    const src = findMostRecentAttendance(m.dept, m.year, attCurrentDate, attCurrentPeriod);
    if(src){ found = true; Object.keys(src.records).forEach(id=>{ attDraft[id] = {...src.records[id]}; }); }
  });
  if(!found){ toast('No previous attendance to reuse'); return; }
  paintAttRows();
  toast('Reused previous attendance — remember to Save');
};

document.getElementById('attDeleteBtn').onclick = ()=>{
  const label = attCombinedGroup ? attCombinedGroup.name : `${currentDept} · ${currentYear}`;
  if(!confirm(`Delete attendance for ${label}, ${attCurrentDate}, Period ${attCurrentPeriod}?`)) return;
  const members = attCombinedGroup ? attCombinedGroup.members : [{dept:currentDept, year:currentYear}];
  members.forEach(m=>{
    if(ATT[m.dept] && ATT[m.dept][m.year] && ATT[m.dept][m.year][attCurrentDate]){
      delete ATT[m.dept][m.year][attCurrentDate][attCurrentPeriod];
    }
  });
  saveAttendance();
  renderAttRows();
  toast('Attendance deleted');
};

document.getElementById('attShareBtn').onclick = ()=>{
  const list = attRosterList();
  let present=0, absent=0; const odCounts = {}; OD_TYPES.forEach(t=>odCounts[t]=0);
  list.forEach(s=>{
    const st = (attDraft[s._id]||{}).status;
    if(st==='P') present++;
    else if(st==='A') absent++;
    else if(st==='OD'){ const t = attDraft[s._id].od || 'Others'; odCounts[t] = (odCounts[t]||0)+1; }
  });
  const odTotal = Object.values(odCounts).reduce((a,b)=>a+b,0);
  const text = [
    `📋 Attendance Summary`,
    `Class: ${attCombinedGroup ? '🔗 '+attCombinedGroup.name : currentDept+' · '+currentYear}`,
    `Date: ${formatDateLabel(attCurrentDate)}  |  Period: ${attCurrentPeriod}`,
    ``,
    `Total Students: ${list.length}`,
    `Present: ${present}`,
    `Absent: ${absent}`,
    `On-Duty: ${odTotal}`,
    ...OD_TYPES.filter(t=>odCounts[t]>0).map(t=>`   • ${t}: ${odCounts[t]}`),
  ].join('\n');
  openShare(text);
};

// ================= FACULTY ATTENDANCE =================
let facAttCurrentDate = todayStr();
let facAttDraft = {};

function openFacAttendance(){
  document.getElementById('facAttDeptLabel').textContent = currentFacDept;
  facAttCurrentDate = todayStr();
  document.getElementById('facAttDate').value = facAttCurrentDate;
  renderFacAttRows();
  document.getElementById('facAttendanceOverlay').classList.add('open');
}
document.getElementById('facAttendanceBtn').onclick = openFacAttendance;

document.getElementById('facAttDate').addEventListener('change', e=>{
  facAttCurrentDate = e.target.value || todayStr();
  renderFacAttRows();
});

function getFacAttRecord(dept, date, create){
  if(!FAC_ATT[dept]) FAC_ATT[dept] = {};
  if(!FAC_ATT[dept][date] && create) FAC_ATT[dept][date] = {markedAt:Date.now(), records:{}};
  return FAC_ATT[dept][date];
}

function loadFacAttDraft(){
  const existing = getFacAttRecord(currentFacDept, facAttCurrentDate, false);
  facAttDraft = {};
  if(existing) Object.keys(existing.records).forEach(id=>{ facAttDraft[id] = {...existing.records[id]}; });
}

function paintFacAttRows(){
  const list = currentFacultyList();
  const rowsEl = document.getElementById('facAttRows');
  rowsEl.innerHTML = list.map(f=>{
    const rec = facAttDraft[f._id] || {status:'', od:''};
    return `
    <div class="att-row" data-id="${f._id}">
      <div class="ar-name" data-viewid="${f._id}" style="cursor:pointer;" title="Tap to view full details">${escapeHtml(f.name)}</div>
      <div style="flex:none;">
        <div class="att-status-group">
          <button type="button" class="att-status-btn p ${rec.status==='P'?'active':''}" data-status="P">P</button>
          <button type="button" class="att-status-btn a ${rec.status==='A'?'active':''}" data-status="A">A</button>
          <button type="button" class="att-status-btn od ${rec.status==='OD'?'active':''}" data-status="OD">OD</button>
        </div>
        ${rec.status==='OD' ? odSelectHtml(f._id, rec.od) : ''}
        ${rec.status==='A' ? permSelectHtml(f._id, rec.permission) : ''}
      </div>
    </div>`;
  }).join('');
  wireFacAttRowEvents();
  updateFacAttSummary();
}

function renderFacAttRows(){ loadFacAttDraft(); paintFacAttRows(); }

function wireFacAttRowEvents(){
  document.querySelectorAll('#facAttRows .att-status-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const row = e.target.closest('.att-row');
      const id = row.dataset.id;
      const status = e.target.dataset.status;
      facAttDraft[id] = facAttDraft[id] || {};
      facAttDraft[id].status = status;
      if(status !== 'OD') facAttDraft[id].od = '';
      if(status !== 'A') facAttDraft[id].permission = '';
      row.querySelectorAll('.att-status-btn').forEach(b=>b.classList.toggle('active', b.dataset.status===status));
      row.querySelectorAll('.att-od-select').forEach(el=>el.remove());
      const extrasHost = row.querySelector('div[style]');
      if(status==='OD'){
        extrasHost.insertAdjacentHTML('beforeend', odSelectHtml(id, ''));
        extrasHost.querySelector('.att-od-select').addEventListener('change', e2=>{ handleOdSelectChange(e2.target, 'faculty', val=>{ facAttDraft[id].od = val; }); });
      } else if(status==='A'){
        extrasHost.insertAdjacentHTML('beforeend', permSelectHtml(id, ''));
        extrasHost.querySelector('.att-perm-select').addEventListener('change', e2=>{ facAttDraft[id].permission = e2.target.value; });
      }
      updateFacAttSummary();
    });
  });
  document.querySelectorAll('#facAttRows .att-od-select:not(.att-perm-select)').forEach(sel=>{
    sel.addEventListener('change', e=>{
      const id = e.target.dataset.odfor;
      handleOdSelectChange(e.target, 'faculty', val=>{
        facAttDraft[id] = facAttDraft[id] || {};
        facAttDraft[id].od = val;
      });
    });
  });
  document.querySelectorAll('#facAttRows .att-perm-select').forEach(sel=>{
    sel.addEventListener('change', e=>{
      const id = e.target.dataset.permfor;
      facAttDraft[id] = facAttDraft[id] || {};
      facAttDraft[id].permission = e.target.value;
    });
  });
  document.querySelectorAll('#facAttRows .ar-name[data-viewid]').forEach(el=>{
    el.addEventListener('click', ()=>openFacDetail(el.dataset.viewid));
  });
}

function updateFacAttSummary(){
  const list = currentFacultyList();
  let present=0, absent=0, od=0, unmarked=0;
  list.forEach(f=>{
    const st = (facAttDraft[f._id]||{}).status;
    if(st==='P') present++;
    else if(st==='A') absent++;
    else if(st==='OD') od++;
    else unmarked++;
  });
  document.getElementById('facAttSummary').innerHTML = `
    <span class="mini-stat">Total ${list.length}</span>
    <span class="mini-stat present">Present ${present}</span>
    <span class="mini-stat absent">Absent ${absent}</span>
    <span class="mini-stat od">OD ${od}</span>
    ${unmarked ? `<span class="mini-stat">Unmarked ${unmarked}</span>` : ''}
  `;
}

document.getElementById('facAttMarkAllPresentBtn').onclick = ()=>{
  currentFacultyList().forEach(f=>{ facAttDraft[f._id] = {status:'P'}; });
  paintFacAttRows();
  toast('Marked all Present');
};
document.getElementById('facAttMarkAllAbsentBtn').onclick = ()=>{
  currentFacultyList().forEach(f=>{ facAttDraft[f._id] = {status:'A'}; });
  paintFacAttRows();
  toast('Marked all Absent');
};

document.getElementById('facAttSaveBtn').onclick = ()=>{
  const rec = getFacAttRecord(currentFacDept, facAttCurrentDate, true);
  rec.records = {};
  Object.keys(facAttDraft).forEach(id=>{ if(facAttDraft[id].status) rec.records[id] = {...facAttDraft[id]}; });
  rec.markedAt = Date.now();
  saveFacAttendance();
  toast('Faculty attendance saved');
  document.getElementById('facAttendanceOverlay').classList.remove('open');
};

document.getElementById('facAttReuseBtn').onclick = ()=>{
  const dateMap = FAC_ATT[currentFacDept] || {};
  const dates = Object.keys(dateMap).filter(d=>d!==facAttCurrentDate).sort().reverse();
  const prevDate = dates.find(d=> dateMap[d] && dateMap[d].records && Object.keys(dateMap[d].records).length);
  if(!prevDate){ toast('No previous day to reuse'); return; }
  facAttDraft = {};
  Object.keys(dateMap[prevDate].records).forEach(id=>{ facAttDraft[id] = {...dateMap[prevDate].records[id]}; });
  paintFacAttRows();
  toast('Reused previous day — remember to Save');
};

document.getElementById('facAttDeleteBtn').onclick = ()=>{
  if(!confirm(`Delete faculty attendance for ${currentFacDept}, ${facAttCurrentDate}?`)) return;
  if(FAC_ATT[currentFacDept]) delete FAC_ATT[currentFacDept][facAttCurrentDate];
  saveFacAttendance();
  renderFacAttRows();
  toast('Attendance deleted');
};

document.getElementById('facAttShareBtn').onclick = ()=>{
  const list = currentFacultyList();
  let present=0, absent=0; const odCounts={}; OD_TYPES.forEach(t=>odCounts[t]=0);
  list.forEach(f=>{
    const st = (facAttDraft[f._id]||{}).status;
    if(st==='P') present++;
    else if(st==='A') absent++;
    else if(st==='OD'){ const t = facAttDraft[f._id].od || 'Others'; odCounts[t]=(odCounts[t]||0)+1; }
  });
  const odTotal = Object.values(odCounts).reduce((a,b)=>a+b,0);
  const text = [
    `🧑‍🏫 Faculty Attendance Summary`,
    `Department: ${currentFacDept}`,
    `Date: ${formatDateLabel(facAttCurrentDate)}`,
    ``,
    `Total Faculty: ${list.length}`,
    `Present: ${present}`,
    `Absent: ${absent}`,
    `On-Duty: ${odTotal}`,
    ...OD_TYPES.filter(t=>odCounts[t]>0).map(t=>`   • ${t}: ${odCounts[t]}`),
  ].join('\n');
  openShare(text);
};

// ================= HOD =================
// ---- Student Attendance (period-wise, dept + year + date filterable) ----
let todayAttSelectedDepts = null; // Set — one or more departments, shared together
let todayAttSelectedYears = null; // Set — applied across every ticked department
let todayAttSelectedDate = null; // defaults to today; editable via the Date field, not just "today"
function todayAttDefaultDeptSingle(){
  const depts = Object.keys(DATA);
  if(depts.includes('AI & DS')) return 'AI & DS';
  return depts.includes(currentDept) ? currentDept : (depts[0] || '');
}
function todayAttDefaultDepts(){
  const d = todayAttDefaultDeptSingle();
  return new Set(d ? [d] : []);
}
// Union of year names across every ticked department (falls back to every
// department if none is ticked yet), ordered by whichever department has
// the most years so "1st/2nd/3rd/4th" stays in a sensible order.
function todayAttAvailableYears(){
  const depts = (todayAttSelectedDepts && todayAttSelectedDepts.size) ? [...todayAttSelectedDepts] : Object.keys(DATA);
  const set = new Set();
  let orderSrc = [];
  depts.forEach(d=>{
    const ys = Object.keys(DATA[d]||{});
    ys.forEach(y=>set.add(y));
    if(ys.length > orderSrc.length) orderSrc = ys;
  });
  return orderSrc.filter(y=>set.has(y)).concat([...set].filter(y=>!orderSrc.includes(y)));
}
function todayAttDefaultYears(years){
  // Defaults to 2nd/3rd/4th Year onward (skips 1st Year), matching the
  // Principal Report's "2nd Year onward" default — still fully editable.
  const picked = years.filter(y=>/2|3|4/.test(y) && !/1st/i.test(y));
  return new Set(picked.length ? picked : years);
}
function todayAttPopulateSelectors(){
  const depts = Object.keys(DATA);
  if(!depts.length) return;
  if(!todayAttSelectedDepts || !todayAttSelectedDepts.size || ![...todayAttSelectedDepts].every(d=>depts.includes(d))){
    todayAttSelectedDepts = todayAttDefaultDepts();
  }
  const deptsEl = document.getElementById('todayAttDeptsGroup');
  deptsEl.innerHTML = '';
  depts.forEach(d=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:7px;font-size:14px;font-weight:600;flex-shrink:0;white-space:nowrap;';
    lbl.innerHTML = `<input type="checkbox" class="today-att-dept-check" value="${escapeAttr(d)}" style="width:18px;height:18px;" ${todayAttSelectedDepts.has(d)?'checked':''}>${escapeHtml(d)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) todayAttSelectedDepts.add(d);
      else if(todayAttSelectedDepts.size > 1) todayAttSelectedDepts.delete(d);
      else { e.target.checked = true; toast('At least one department must stay ticked'); return; }
      todayAttSelectedYears = null; // the available years can change with the department set
      todayAttPopulateSelectors();
      renderTodayAttOverview();
    });
    deptsEl.appendChild(lbl);
  });

  const years = todayAttAvailableYears();
  if(todayAttSelectedYears === null) todayAttSelectedYears = todayAttDefaultYears(years);
  const yearsEl = document.getElementById('todayAttYearsGroup');
  yearsEl.innerHTML = '';
  years.forEach(y=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:7px;font-size:14.5px;font-weight:600;flex-shrink:0;white-space:nowrap;';
    lbl.innerHTML = `<input type="checkbox" class="today-att-year-check" value="${escapeAttr(y)}" style="width:18px;height:18px;" ${todayAttSelectedYears.has(y)?'checked':''}>${escapeHtml(y)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) todayAttSelectedYears.add(y); else todayAttSelectedYears.delete(y);
      renderTodayAttOverview();
    });
    yearsEl.appendChild(lbl);
  });
  if(!todayAttSelectedDate) todayAttSelectedDate = todayStr();
  document.getElementById('todayAttDateSelect').value = todayAttSelectedDate;
}
document.getElementById('todayAttDeptsAllBtn').onclick = ()=>{
  const depts = Object.keys(DATA);
  const allOn = todayAttSelectedDepts && todayAttSelectedDepts.size===depts.length;
  todayAttSelectedDepts = new Set(allOn ? [depts[0]] : depts); // never allow zero ticked
  todayAttSelectedYears = null;
  todayAttPopulateSelectors();
  renderTodayAttOverview();
};
document.getElementById('todayAttDateSelect').addEventListener('change', e=>{
  todayAttSelectedDate = e.target.value || todayStr();
  renderTodayAttOverview();
});
document.getElementById('todayAttDateTodayBtn').onclick = ()=>{
  todayAttSelectedDate = todayStr();
  document.getElementById('todayAttDateSelect').value = todayAttSelectedDate;
  renderTodayAttOverview();
};
document.getElementById('todayAttYearsAllBtn').onclick = ()=>{
  const years = todayAttAvailableYears();
  todayAttSelectedYears = (todayAttSelectedYears && todayAttSelectedYears.size===years.length) ? new Set() : new Set(years);
  todayAttPopulateSelectors();
  renderTodayAttOverview();
};
// yearsSet defaults to the dashboard's own Years filter (todayAttSelectedYears)
// for on-screen rendering, but the Share popup's own "Years to include"
// picker passes its own set — which can include a year the dashboard tile
// currently has unticked — so it must NOT be re-filtered through
// todayAttSelectedYears a second time here.
function todayAttRows(yearsSet){
  const date = todayAttSelectedDate || todayStr();
  const depts = (todayAttSelectedDepts && todayAttSelectedDepts.size) ? [...todayAttSelectedDepts] : [todayAttDefaultDeptSingle()];
  const useYears = yearsSet || todayAttSelectedYears || new Set();
  const rows = [];
  depts.forEach(dept=>{
    const years = Object.keys(DATA[dept]||{}).filter(y=>useYears.has(y));
    years.forEach(y=>{
      const dayData = (ATT[dept]&&ATT[dept][y]&&ATT[dept][y][date]) || null;
      if(!dayData) return;
      Object.keys(dayData).map(Number).sort((a,b)=>a-b).forEach(p=>{
        rows.push({dept, y, period:p, counts:statsFromAttRecord(dayData[p]), bulk:!!dayData[p].bulk});
      });
    });
  });
  return rows;
}
let todayAttSelectedSharePeriods = null; // Set; the user's own picks, kept across re-renders
let todayAttLastAvailablePeriods = null; // the periods list this selection was made against
function todayAttPopulateSharePeriods(rows){
  const wrap = document.getElementById('todayAttSharePeriodsWrap');
  const periods = [...new Set(rows.map(r=>r.period))].sort((a,b)=>a-b);
  if(periods.length <= 1){
    // Nothing to choose between right now — hide the picker. Only replace the
    // remembered selection if there wasn't one yet; a bare 0/1-period state
    // can be transient (e.g. briefly toggling all Years off), and clobbering
    // the user's picks here would make them vanish once periods reappear.
    wrap.style.display = 'none';
    if(!todayAttSelectedSharePeriods){
      todayAttSelectedSharePeriods = new Set(periods);
      todayAttLastAvailablePeriods = periods.join(',');
    }
    return;
  }
  wrap.style.display = '';
  // Only reset the default when the AVAILABLE set of periods itself changed
  // (a different department/years picked, or new data marked) — never just
  // because the user's own picks are a subset of it, or their one manual
  // check/uncheck would get silently undone on the next re-render. The
  // default itself is "1st hour only" rather than every period, since that's
  // what gets shared most; the user can still tick on more via the checkboxes
  // or "All / None".
  const periodsKey = periods.join(',');
  if(!todayAttSelectedSharePeriods || todayAttLastAvailablePeriods !== periodsKey){
    todayAttSelectedSharePeriods = new Set(periods.includes(1) ? [1] : periods.slice(0,1));
    todayAttLastAvailablePeriods = periodsKey;
  }
  const groupEl = document.getElementById('todayAttSharePeriodsGroup');
  groupEl.innerHTML = '';
  periods.forEach(p=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;';
    lbl.innerHTML = `<input type="checkbox" class="today-att-share-period-check" value="${p}" style="width:auto;" ${todayAttSelectedSharePeriods.has(p)?'checked':''}>Period ${p}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      const val = +e.target.value;
      if(e.target.checked) todayAttSelectedSharePeriods.add(val); else todayAttSelectedSharePeriods.delete(val);
    });
    groupEl.appendChild(lbl);
  });
}
document.getElementById('todayAttSharePeriodsAllBtn').onclick = ()=>{
  const boxes = [...document.querySelectorAll('.today-att-share-period-check')];
  const allChecked = boxes.every(cb=>cb.checked);
  boxes.forEach(cb=>{ cb.checked = !allChecked; });
  todayAttSelectedSharePeriods = new Set(boxes.filter(cb=>cb.checked).map(cb=>+cb.value));
};
// Wires the swipe-left-to-reveal action gesture (Edit/Delete, or
// Edit/Delete/Share) onto every .swipe-content row inside containerEl.
// Re-run after any re-render since the rows are rebuilt from scratch each
// time. The reveal width is read from each row's own .swipe-actions
// element (its immediately preceding sibling) rather than a fixed
// constant, so a 2-button row and a 3-button row both open exactly as far
// as their own buttons need — no dead space, nothing clipped.
function initSwipeRows(containerEl){
  containerEl.querySelectorAll('.swipe-content').forEach(content=>{
    const actionsEl = content.previousElementSibling;
    let startX=0, startY=0, curX=0, dragging=false, axisLocked=null;
    const width = ()=> (actionsEl ? actionsEl.offsetWidth : 136) || 136;
    const isOpen = ()=>content.classList.contains('open');
    const setOpen = v=>{
      content.classList.toggle('open', v);
      content.style.transform = v ? `translateX(-${width()}px)` : '';
    };
    const closeOthers = ()=>{
      containerEl.querySelectorAll('.swipe-content.open').forEach(o=>{
        if(o!==content){ o.classList.remove('open'); o.style.transform=''; }
      });
    };
    content.addEventListener('touchstart', e=>{
      closeOthers();
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
      curX = isOpen() ? -width() : 0;
      dragging = true; axisLocked = null;
      content.classList.add('dragging');
    }, {passive:true});
    content.addEventListener('touchmove', e=>{
      if(!dragging) return;
      const x = e.touches[0].clientX, y = e.touches[0].clientY;
      const dx = x-startX, dy = y-startY;
      if(axisLocked===null){
        if(Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        axisLocked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }
      if(axisLocked!=='x') return; // let the page scroll vertically instead
      e.preventDefault();
      const w = width();
      const next = Math.max(-w-10, Math.min(0, curX+dx));
      content.style.transform = `translateX(${next}px)`;
    }, {passive:false});
    content.addEventListener('touchend', ()=>{
      if(!dragging) return;
      dragging = false;
      content.classList.remove('dragging');
      const m = /translateX\((-?\d+(?:\.\d+)?)px\)/.exec(content.style.transform);
      const x = m ? parseFloat(m[1]) : 0;
      setOpen(x < -width()/2);
    });
    // While open, a tap anywhere on the row (not the action buttons) just
    // closes it again, instead of falling through to whatever's underneath.
    content.addEventListener('click', e=>{
      if(isOpen()){ e.preventDefault(); e.stopPropagation(); setOpen(false); }
    }, true);
  });
}
// Rows the HOD has ticked (via the checkbox on each row) to share together,
// independent of the "Periods to share" filter used by the main 📤 Share
// button. Keyed "dept||year||period"; cleared whenever the underlying row
// set changes shape (see rowKey/renderTodayAttOverview) so a stale tick
// can't silently apply to a different row after Date/Departments/Years change.
let todayAttSelectedRowKeys = new Set();
function todayAttRowKey(r){ return `${r.dept}||${r.y}||${r.period}`; }
function renderTodayAttOverview(){
  const rows = todayAttRows();
  const liveKeys = new Set(rows.map(todayAttRowKey));
  [...todayAttSelectedRowKeys].forEach(k=>{ if(!liveKeys.has(k)) todayAttSelectedRowKeys.delete(k); });
  document.getElementById('hodAttendanceOverview').innerHTML = rows.length ? `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <label style="display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;cursor:pointer;">
        <input type="checkbox" id="todayAttRowSelectAll" style="width:auto;" ${rows.length && todayAttSelectedRowKeys.size===rows.length ? 'checked' : ''}>
        Select all
      </label>
      <button type="button" class="link-btn" id="todayAttShareSelectedBtn" style="${todayAttSelectedRowKeys.size ? '' : 'display:none;'}">📤 Share Selected (${todayAttSelectedRowKeys.size})</button>
    </div>
    <div class="swipe-hint">⇠ Swipe a row for Edit / Delete</div>` + rows.map(r=>{
    const key = todayAttRowKey(r);
    return `
    <div class="swipe-item">
      <div class="swipe-actions">
        <button type="button" class="swipe-action-edit" data-act="edit" data-dept="${escapeAttr(r.dept)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">✏️<span>Edit</span></button>
        <button type="button" class="swipe-action-share" data-act="share" data-dept="${escapeAttr(r.dept)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">📤<span>Share</span></button>
        <button type="button" class="swipe-action-delete" data-act="delete" data-dept="${escapeAttr(r.dept)}" data-year="${escapeAttr(r.y)}" data-period="${r.period}">🗑️<span>Delete</span></button>
      </div>
      <div class="swipe-content dash-row">
        <label style="display:flex;align-items:center;padding-right:2px;" onclick="event.stopPropagation();">
          <input type="checkbox" class="today-att-row-chk" data-key="${escapeAttr(key)}" style="width:18px;height:18px;" ${todayAttSelectedRowKeys.has(key)?'checked':''}>
        </label>
        <div>
          <div class="dr-label">${escapeHtml(r.dept)} · ${escapeHtml(r.y)}</div>
          <div class="dr-sub">${escapeHtml(formatDateLabel(todayAttSelectedDate||todayStr()))} · Period ${r.period}${r.bulk ? ' · 🔢 Class Totals' : ''}</div>
        </div>
        <div class="dash-mini-stats">
          <span class="mini-stat">Total ${r.counts.total}</span>
          <span class="mini-stat present">P ${r.counts.present}</span>
          <span class="mini-stat absent">A ${r.counts.absent}</span>
          <span class="mini-stat od">OD ${r.counts.od}</span>
        </div>
      </div>
    </div>
  `;
  }).join('') : `<div class="no-data-note">No attendance marked on ${escapeHtml(formatDateLabel(todayAttSelectedDate||todayStr()))} for the selected years.</div>`;
  const selectAllChk = document.getElementById('todayAttRowSelectAll');
  if(selectAllChk){
    selectAllChk.addEventListener('change', ()=>{
      if(selectAllChk.checked) rows.forEach(r=>todayAttSelectedRowKeys.add(todayAttRowKey(r)));
      else todayAttSelectedRowKeys.clear();
      renderTodayAttOverview();
    });
  }
  document.querySelectorAll('.today-att-row-chk').forEach(chk=>{
    chk.addEventListener('change', ()=>{
      if(chk.checked) todayAttSelectedRowKeys.add(chk.dataset.key);
      else todayAttSelectedRowKeys.delete(chk.dataset.key);
      renderTodayAttOverview();
    });
  });
  const shareSelBtn = document.getElementById('todayAttShareSelectedBtn');
  if(shareSelBtn){
    shareSelBtn.onclick = ()=>{
      const selectedRows = rows.filter(r=>todayAttSelectedRowKeys.has(todayAttRowKey(r)));
      if(!selectedRows.length){ toast('No rows selected'); return; }
      openShare(buildShareTextFromRows(selectedRows));
    };
  }
  todayAttPopulateSharePeriods(rows);
  initSwipeRows(document.getElementById('hodAttendanceOverview'));
}
// One delegated listener handles every row's Edit/Delete button, since the
// rows themselves are rebuilt on every render.
document.getElementById('hodAttendanceOverview').addEventListener('click', async e=>{
  const btn = e.target.closest('[data-act]');
  if(!btn) return;
  const dept = btn.dataset.dept, year = btn.dataset.year, period = +btn.dataset.period;
  const date = todayAttSelectedDate || todayStr();
  if(btn.dataset.act === 'edit'){
    openClassTotals({dept, year, date, period});
    return;
  }
  if(btn.dataset.act === 'share'){
    const rec = getAttRecord(dept, year, date, period, false);
    const counts = statsFromAttRecord(rec);
    const lines = [
      `📋 Student Attendance`,
      `Department: ${dept}`,
      `Year: ${year}`,
      `Date: ${formatDateLabel(date)}`,
      `Period: ${period}`,
      ``,
      `Total ${counts.total} · Present ${counts.present} · Absent ${counts.absent} · OD ${counts.od}`,
    ];
    openShare(lines.join('\n'));
    return;
  }
  if(btn.dataset.act === 'delete'){
    const existing = getAttRecord(dept, year, date, period, false);
    if(!existing || (!existing.bulk && !Object.keys(existing.records||{}).length)){ toast('Nothing to delete'); return; }
    const ok = await confirmWithSuppress('todayAttRowDelete', `Delete the saved attendance for ${dept} · ${year} · Period ${period} on ${formatDateLabel(date)}? This cannot be undone.`);
    if(!ok) return;
    if(ATT[dept] && ATT[dept][year] && ATT[dept][year][date]) delete ATT[dept][year][date][period];
    saveAttendance();
    renderTodayAttOverview();
    renderDashboard();
    toast('Attendance deleted');
  }
});
// Builds the Today's Attendance share text for a given set of years (a
// subset of, or equal to, the dashboard's own "Years" filter) — used both
// by the initial 📤 Share tap and by the "Years to include" checkboxes
// inside the share popup itself, so re-ticking a year there updates the
// message live without closing the popup and going back to the dashboard.
function buildTodayAttShareText(yearsSet){
  const allRows = todayAttRows(yearsSet);
  if(!allRows.length) return null;

  // Only the periods ticked in "Periods to share" go into the share text —
  // the on-screen list above still shows every period marked today.
  const rows = todayAttSelectedSharePeriods
    ? allRows.filter(r=>todayAttSelectedSharePeriods.has(r.period))
    : allRows;
  if(!rows.length) return '';
  return buildShareTextFromRows(rows);
}
// Shared by buildTodayAttShareText (filtered by the Years/Periods pickers)
// and the row-checkbox "Share Selected" action (an explicit row list) — the
// grouping/formatting logic is identical either way.
function buildShareTextFromRows(rows){
  // If every included row is the same period, hoist it to a header line
  // instead of repeating "Period X" on every row (redundant when it's
  // always the same).
  const distinctPeriods = [...new Set(rows.map(r=>r.period))];
  const singlePeriod = distinctPeriods.length===1 ? distinctPeriods[0] : null;

  // Group rows by department, then by year within each department, so a
  // year marked for more than one period shows its name once, with each
  // period listed underneath, instead of repeating it on a separate line
  // per period. When more than one department is included, each gets its
  // own "🏫 Dept" header so 2nd/3rd/4th Year figures from different
  // departments are never run together.
  const deptOrder = [];
  const byDept = {};
  rows.forEach(r=>{
    if(!byDept[r.dept]){ byDept[r.dept] = []; deptOrder.push(r.dept); }
    byDept[r.dept].push(r);
  });
  const multiDept = deptOrder.length > 1;

  const rowLines = [];
  deptOrder.forEach(dept=>{
    if(multiDept) rowLines.push(`🏫 ${dept}`);
    const yearOrder = [];
    const byYear = {};
    byDept[dept].forEach(r=>{
      if(!byYear[r.y]){ byYear[r.y] = []; yearOrder.push(r.y); }
      byYear[r.y].push(r);
    });
    yearOrder.forEach(y=>{
      const yRows = byYear[y];
      if(singlePeriod!==null || yRows.length===1){
        yRows.forEach(r=>{
          rowLines.push(`${y}${singlePeriod===null?` · Period ${r.period}`:''} — Total ${r.counts.total} · P ${r.counts.present} · A ${r.counts.absent} · OD ${r.counts.od}`);
        });
      } else {
        rowLines.push(`${y}:`);
        yRows.forEach(r=>{
          rowLines.push(`   Period ${r.period} — Total ${r.counts.total} · P ${r.counts.present} · A ${r.counts.absent} · OD ${r.counts.od}`);
        });
      }
    });
    if(multiDept) rowLines.push(``);
  });
  while(rowLines.length && rowLines[rowLines.length-1] === ``) rowLines.pop();

  const lines = [
    `📋 Student Attendance`,
    `Department${multiDept?'s':''}: ${deptOrder.join(', ')}`,
    `Date: ${formatDateLabel(todayAttSelectedDate || todayStr())}`,
    ...(singlePeriod!==null ? [`Period: ${singlePeriod}`] : []),
    ``,
    ...rowLines,
  ];
  if(document.getElementById('todayAttIncludeTotalsChk').checked){
    // Cumulative totals — one figure per dept+year (its most recent included
    // period), so a year marked for more than one period doesn't get its
    // roster counted twice.
    const latestPerRow = {};
    rows.forEach(r=>{ latestPerRow[r.dept+'||'+r.y] = r; }); // rows are period-ascending, so the last one wins
    const vals = Object.values(latestPerRow);
    const totalStudents = vals.reduce((n,r)=>n + r.counts.total, 0);
    const totalPresent = vals.reduce((n,r)=>n + r.counts.present + r.counts.od, 0); // On-Duty counts as attended
    const pct = totalStudents ? Math.round((totalPresent/totalStudents)*100) : 0;
    lines.push(``, `Cumulative — Total ${totalStudents} · Present ${totalPresent} · ${pct}%`);
  }
  return lines.join('\n');
}

document.getElementById('todayAttShareBtn').onclick = ()=>{
  const years = todayAttAvailableYears();
  if(!years.length){ toast('No years available for the selected department(s)'); return; }
  // Share popup's own year picks start out matching the dashboard's Years
  // filter, but from here on are independent — ticking/unticking inside the
  // popup only affects this one share, not the dashboard tile behind it.
  let shareYears = new Set(todayAttSelectedYears || years);
  const text = buildTodayAttShareText(shareYears);
  if(text === null){ toast('Nothing to share — no attendance marked on the selected date for the selected years'); return; }
  if(!text){ toast('Tick at least one period to share'); return; }
  openShare(text, {
    years,
    selected: shareYears,
    onChange: (newSelected)=>{
      shareYears = newSelected;
      const t = buildTodayAttShareText(shareYears);
      return t === null ? '(No attendance marked on the selected date for these years)' : (t || '(Tick at least one period to share)');
    }
  });
};

function renderHOD(){
  document.getElementById('hodDateLabel').textContent = formatDateLabel(todayAttSelectedDate || todayStr());

  let grandTotal = 0;
  const deptRows = [];
  Object.keys(DATA).forEach(dept=>{
    ensureHodScope(dept);
    if(!deptIncluded(dept)) return;
    let deptTotal = 0;
    const years = [];
    Object.keys(DATA[dept]).forEach(y=>{
      if(!yearIncluded(dept,y)) return;
      const n = DATA[dept][y].length;
      deptTotal += n;
      years.push({y, n});
    });
    grandTotal += deptTotal;
    deptRows.push({dept, deptTotal, years});
  });

  document.getElementById('hodTotalStats').innerHTML = `
    <div class="stat"><b>${grandTotal}</b><span>Grand Total (Included)</span></div>
    <div class="stat"><b>${deptRows.length}</b><span>Departments Included</span></div>
  `;

  document.getElementById('hodDeptBreakdown').innerHTML = deptRows.length ? deptRows.map(r=>`
    <div class="dash-row">
      <div>
        <div class="dr-label">${escapeHtml(r.dept)}</div>
        <div class="dr-sub">${r.years.map(y=>`${escapeHtml(y.y)}: ${y.n}`).join(' · ') || 'No years included'}</div>
      </div>
      <div class="dash-mini-stats"><span class="mini-stat">${r.deptTotal}</span></div>
    </div>
  `).join('') : `<div class="no-data-note">No departments included. Use Include/Exclude to add some.</div>`;

  todayAttPopulateSelectors();
  renderTodayAttOverview();

  let fPresent=0, fAbsent=0, fOd=0, fTotal=0;
  const facRows = [];
  Object.keys(FACULTY).forEach(dept=>{
    if(!deptIncluded(dept)) return;
    const list = FACULTY[dept]||[];
    fTotal += list.length;
    const dayRec = (FAC_ATT[dept]&&FAC_ATT[dept][today]) || null;
    const counts = dayRec ? summarizeAttendance(dayRec.records) : {present:0,absent:0,od:0};
    fPresent += counts.present; fAbsent += counts.absent; fOd += counts.od;
    facRows.push({dept, total:list.length, counts, marked: !!dayRec});
  });
  document.getElementById('hodFacultyStats').innerHTML = `
    <div class="stat"><b>${fTotal}</b><span>Total Faculty</span></div>
    <div class="stat"><b>${fPresent}</b><span>Present Today</span></div>
    <div class="stat"><b>${fAbsent}</b><span>Absent Today</span></div>
    <div class="stat"><b>${fOd}</b><span>On-Duty Today</span></div>
  `;
  document.getElementById('hodFacultyBreakdown').innerHTML = facRows.length ? facRows.map(r=>`
    <div class="dash-row">
      <div>
        <div class="dr-label">${escapeHtml(r.dept)}</div>
        <div class="dr-sub">${r.total} faculty${r.marked?'':' · not marked today'}</div>
      </div>
      <div class="dash-mini-stats">
        <span class="mini-stat present">P ${r.counts.present}</span>
        <span class="mini-stat absent">A ${r.counts.absent}</span>
        <span class="mini-stat od">OD ${r.counts.od}</span>
      </div>
    </div>
  `).join('') : `<div class="no-data-note">No departments included.</div>`;

  renderHodSyllabusCoverage();
  renderHodTaskMonitor();
  renderMoMList();
  renderLiveStatus();
}

// ---- HOD: Syllabus Coverage Monitor (Lesson Plan / Daily Class Record) ----
// Walks every subject in every department that has syllabus topics defined,
// and reports how many of those topics are ticked "Covered" — so a HOD can
// spot, at a glance, which faculty/subjects are falling behind their own
// lesson plan.
function renderHodSyllabusCoverage(){
  const el = document.getElementById('hodSyllabusCoverage');
  if(!el) return;
  const rows = [];
  Object.keys(SUBJECTS).forEach(dept=>{
    if(!deptIncluded(dept)) return;
    Object.keys(SUBJECTS[dept]||{}).forEach(sem=>{
      (SUBJECTS[dept][sem]||[]).forEach(subj=>{
        if(!subj.syllabus || !subj.syllabus.length) return;
        const {total, covered, pct} = syllabusCoverageStats(subj);
        rows.push({dept, sem, code:subj.code, name:subj.name, total, covered, pct});
      });
    });
  });
  if(!rows.length){ el.innerHTML = `<div class="no-data-note">No subject has syllabus topics recorded yet. Add topics from Students → Subjects → a subject's Syllabus &amp; Outcomes.</div>`; return; }
  rows.sort((a,b)=>a.pct-b.pct); // most-behind subjects first
  el.innerHTML = rows.map(r=>{
    const color = r.pct>=75 ? 'var(--good)' : r.pct>=40 ? '#e0942c' : 'var(--danger)';
    return `<div class="dash-row" style="flex-direction:column;align-items:stretch;gap:4px;">
      <div style="display:flex;justify-content:space-between;font-size:12.5px;">
        <div><b>${escapeHtml(r.code||'')}</b> ${escapeHtml(r.name||'')} <span class="mr-chip" style="margin-left:6px;">${escapeHtml(r.dept)} · Sem ${escapeHtml(r.sem)}</span></div>
        <div style="font-weight:700;color:${color};">${r.covered}/${r.total} (${r.pct}%)</div>
      </div>
      <div style="height:7px;border-radius:999px;background:var(--surface-2);overflow:hidden;">
        <div style="height:100%;width:${r.pct}%;background:${color};border-radius:999px;"></div>
      </div>
    </div>`;
  }).join('');
}

// ---- HOD: Task Monitor — every individually-assigned task, every dept ----
function renderHodTaskMonitor(){
  const el = document.getElementById('hodTaskMonitor');
  const filterSel = document.getElementById('hodTaskStatusFilter');
  if(!el || !filterSel) return;
  const filter = filterSel.value || 'all';
  const rows = [];
  Object.keys(TASKS).forEach(dept=>{
    if(!deptIncluded(dept)) return;
    (TASKS[dept]||[]).forEach(t=>{
      if(filter!=='all' && t.status!==filter) return;
      rows.push({...t, dept});
    });
  });
  if(!rows.length){ el.innerHTML = `<div class="no-data-note">No tasks match this filter.</div>`; return; }
  const todayStrVal = todayISO();
  rows.sort((a,b)=>{
    if((a.status==='completed') !== (b.status==='completed')) return a.status==='completed' ? 1 : -1;
    if(!a.deadline && !b.deadline) return 0;
    if(!a.deadline) return 1;
    if(!b.deadline) return -1;
    return a.deadline.localeCompare(b.deadline);
  });
  el.innerHTML = rows.map(t=>{
    const meta = TASK_STATUS_META[t.status] || TASK_STATUS_META.not_started;
    const overdue = t.deadline && t.status!=='completed' && t.deadline < todayStrVal;
    const assignee = t.assigneeType && t.assigneeType!=='none' && t.assigneeName
      ? `<span class="mr-chip">${t.assigneeType==='faculty'?'🧑‍🏫':'🎓'} ${escapeHtml(t.assigneeName)}</span>`
      : `<span class="mr-chip">Department-wide</span>`;
    return `<div class="task-row ${escapeAttr(t.status)}">
      <div class="tr-main">
        <div class="tr-title">${escapeHtml(t.title)} <span class="mr-chip" style="margin-left:4px;">${escapeHtml(t.dept)}</span> ${assignee}</div>
        ${t.remarks ? `<div class="tr-remarks">${escapeHtml(t.remarks)}</div>` : ''}
        ${t.deadline ? `<div class="tr-deadline ${overdue?'overdue':''}">📅 ${escapeHtml(formatDateLabel(t.deadline))}${overdue?' — Overdue':''}</div>` : ''}
      </div>
      <span class="task-status-badge ${escapeAttr(t.status)}">${meta.emoji} ${meta.label}</span>
    </div>`;
  }).join('');
}
document.getElementById('hodTaskStatusFilter')?.addEventListener('change', renderHodTaskMonitor);

// ---- HOD: Minutes of Meeting (MoM) ----
// A single, department-independent log of meetings — grouped day-wise, with
// each meeting's own time kept separately (several meetings on the same day
// each show under their own time), plus optional venue/chair/attendees,
// agenda, minutes and action items.
function momFilteredSorted(){
  const from = document.getElementById('momFilterFrom')?.value || '';
  const to = document.getElementById('momFilterTo')?.value || '';
  const q = (document.getElementById('momFilterSearch')?.value || '').trim().toLowerCase();
  let rows = MOM.slice();
  if(from) rows = rows.filter(m=>m.date >= from);
  if(to) rows = rows.filter(m=>m.date <= to);
  if(q) rows = rows.filter(m=>
    (m.title||'').toLowerCase().includes(q) ||
    (m.attendees||'').toLowerCase().includes(q) ||
    (m.minutes||'').toLowerCase().includes(q) ||
    (m.agenda||'').toLowerCase().includes(q) ||
    (m.venue||'').toLowerCase().includes(q) ||
    (m.chair||'').toLowerCase().includes(q)
  );
  // newest date first; within a day, latest time first
  rows.sort((a,b)=> (b.date||'').localeCompare(a.date||'') || (b.time||'').localeCompare(a.time||''));
  return rows;
}
function formatTimeLabel(t){
  if(!t) return '';
  const [h,m] = t.split(':').map(Number);
  const ampm = h>=12 ? 'PM' : 'AM';
  const h12 = ((h%12)||12);
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}
function renderMoMList(){
  const el = document.getElementById('momList');
  if(!el) return;
  const rows = momFilteredSorted();
  if(!rows.length){ el.innerHTML = `<div class="no-data-note">No meetings recorded${MOM.length?' for this filter':' yet'}. Click "➕ Add" to log one.</div>`; return; }
  // group day-wise
  const byDate = {};
  rows.forEach(m=>{ (byDate[m.date] = byDate[m.date] || []).push(m); });
  const dates = Object.keys(byDate).sort().reverse();
  el.innerHTML = dates.map(date=>`
    <div class="mom-day-group" style="margin-bottom:14px;">
      <div style="font-weight:700;font-size:13px;color:var(--accent);margin-bottom:6px;">📅 ${escapeHtml(formatDateLabel(date))}</div>
      ${byDate[date].map(m=>`
        <div class="task-row" data-mom-id="${escapeAttr(m._id)}" style="cursor:pointer;flex-direction:column;align-items:stretch;gap:4px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
            <div class="tr-title">🕐 ${escapeHtml(formatTimeLabel(m.time))} — ${escapeHtml(m.title)}</div>
          </div>
          ${(m.venue || m.chair) ? `<div class="tr-remarks">${m.venue ? '📍 '+escapeHtml(m.venue) : ''}${m.venue && m.chair ? ' · ' : ''}${m.chair ? '🧑‍💼 Chaired by '+escapeHtml(m.chair) : ''}</div>` : ''}
          ${m.attendees ? `<div class="tr-remarks">👥 ${escapeHtml(m.attendees)}</div>` : ''}
          <div class="tr-remarks" style="white-space:pre-wrap;">${escapeHtml(m.minutes)}</div>
          ${m.actions ? `<div class="tr-deadline">✅ Action items: ${escapeHtml(m.actions)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');
  el.querySelectorAll('[data-mom-id]').forEach(row=>{
    row.addEventListener('click', ()=> openMoMEntry(row.dataset.momId));
  });
}
['momFilterFrom','momFilterTo','momFilterSearch'].forEach(id=>{
  document.getElementById(id)?.addEventListener('input', renderMoMList);
});
function openMoMEntry(id){
  const entry = id ? MOM.find(m=>m._id===id) : null;
  document.getElementById('momSheetTitle').textContent = entry ? '✏️ Edit Minutes of Meeting' : '📝 New Minutes of Meeting';
  document.getElementById('mom_id').value = entry ? entry._id : '';
  document.getElementById('mom_date').value = entry ? entry.date : todayStr();
  document.getElementById('mom_time').value = entry ? (entry.time||'') : '';
  document.getElementById('mom_title').value = entry ? entry.title : '';
  document.getElementById('mom_venue').value = entry ? (entry.venue||'') : '';
  document.getElementById('mom_chair').value = entry ? (entry.chair||'') : '';
  document.getElementById('mom_attendees').value = entry ? (entry.attendees||'') : '';
  document.getElementById('mom_agenda').value = entry ? (entry.agenda||'') : '';
  document.getElementById('mom_minutes').value = entry ? (entry.minutes||'') : '';
  document.getElementById('mom_actions').value = entry ? (entry.actions||'') : '';
  document.getElementById('mom_err_title').textContent = '';
  document.getElementById('mom_err_minutes').textContent = '';
  document.getElementById('momDeleteBtn').style.display = entry ? '' : 'none';
  document.getElementById('momOverlay').classList.add('open');
}
document.getElementById('momAddBtn').onclick = ()=>openMoMEntry(null);
document.getElementById('momForm').addEventListener('submit', e=>{
  e.preventDefault();
  const title = document.getElementById('mom_title').value.trim();
  const minutes = document.getElementById('mom_minutes').value.trim();
  document.getElementById('mom_err_title').textContent = '';
  document.getElementById('mom_err_minutes').textContent = '';
  if(!title){ document.getElementById('mom_err_title').textContent = 'Title is required'; return; }
  if(!minutes){ document.getElementById('mom_err_minutes').textContent = 'Minutes / discussion is required'; return; }
  const id = document.getElementById('mom_id').value;
  const data = {
    date: document.getElementById('mom_date').value || todayStr(),
    time: document.getElementById('mom_time').value || '',
    title,
    venue: document.getElementById('mom_venue').value.trim(),
    chair: document.getElementById('mom_chair').value.trim(),
    attendees: document.getElementById('mom_attendees').value.trim(),
    agenda: document.getElementById('mom_agenda').value.trim(),
    minutes,
    actions: document.getElementById('mom_actions').value.trim()
  };
  if(id){
    const idx = MOM.findIndex(m=>m._id===id);
    if(idx>=0) MOM[idx] = {...MOM[idx], ...data};
  }else{
    MOM.push({_id:'mom_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), createdAt:Date.now(), ...data});
  }
  saveMoM();
  document.getElementById('momOverlay').classList.remove('open');
  renderMoMList();
  toast('Minutes of meeting saved');
});
document.getElementById('momDeleteBtn').onclick = ()=>{
  const id = document.getElementById('mom_id').value;
  if(!id) return;
  if(!confirm('Delete this meeting record?')) return;
  MOM = MOM.filter(m=>m._id!==id);
  saveMoM();
  document.getElementById('momOverlay').classList.remove('open');
  renderMoMList();
  toast('Meeting record deleted');
};

// ---- HOD: Live Student Status (right now) ----
// Answers "where is everyone right now" for a chosen department/year: which
// period is currently running (from that year/day's own timing schedule),
// what's being taught and by whom (from the Timetable), and each student's
// live status for that period — In Classroom, On Duty (with type, and the
// sport/event if the OD type is Sports), On Leave (With Permission) or
// Absent (Without Permission), or Not Marked Yet.
function currentWeekdayAbbr(){
  const abbr = todayWeekdayAbbr();
  return workingDays().includes(abbr) ? abbr : null;
}
function currentTimeHM(){
  const now = new Date();
  return String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
}
function findCurrentPeriod(year, day){
  if(!day) return null;
  const hm = currentTimeHM();
  const bounds = periodBoundaries(year, day);
  return bounds.find(b=> hm >= b.start && hm < b.end) || null;
}
function populateLiveSelectors(){
  const deptSel = document.getElementById('liveDeptSelect');
  const yearSel = document.getElementById('liveYearSelect');
  if(!deptSel || !yearSel) return;
  const depts = Object.keys(DATA);
  const prevDept = deptSel.value && depts.includes(deptSel.value) ? deptSel.value : (depts.includes(currentDept) ? currentDept : depts[0]);
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===prevDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  const dept = deptSel.value;
  const years = Object.keys((DATA[dept]||{}));
  const prevYear = yearSel.value && years.includes(yearSel.value) ? yearSel.value : (years.includes(currentYear) ? currentYear : years[0]);
  yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===prevYear?'selected':''}>${escapeHtml(y)}</option>`).join('');
}
function renderLiveStatus(){
  const body = document.getElementById('liveStatusBody');
  if(!body) return;
  populateLiveSelectors();
  const dept = document.getElementById('liveDeptSelect').value;
  const year = document.getElementById('liveYearSelect').value;
  if(!dept || !year){ body.innerHTML = `<div class="no-data-note">No department/year set up yet.</div>`; return; }

  const day = currentWeekdayAbbr();
  const today = todayStr();
  const q = (document.getElementById('liveSearchInput').value||'').trim().toLowerCase();
  const roster = (DATA[dept] && DATA[dept][year]) || [];
  const filteredRoster = q ? roster.filter(s=>(s.name||'').toLowerCase().includes(q) || String(s.regno||'').toLowerCase().includes(q)) : roster;

  if(!day){
    body.innerHTML = `<div class="no-data-note">It's Sunday — no classes scheduled today.</div>`;
    return;
  }
  const period = findCurrentPeriod(year, day);
  if(!period){
    body.innerHTML = `<div class="no-data-note">No period is running right now (before/after college hours, a short break, lunch, or no timetable set for today).</div>`;
    return;
  }
  const ttEntry = TIMETABLE[dept] && TIMETABLE[dept][year] && TIMETABLE[dept][year][day] && TIMETABLE[dept][year][day][period.period];
  const header = `<div style="font-weight:700;margin-bottom:10px;">🕐 Period ${period.period} (${formatTimeLabel(period.start)}–${formatTimeLabel(period.end)})${ttEntry && ttEntry.subject ? ' — '+escapeHtml(ttEntry.subject) : ' — No subject set in timetable'}${ttEntry && ttEntry.faculty ? ' · 🧑‍🏫 '+escapeHtml(ttEntry.faculty) : ''}</div>`;

  const rec = ATT[dept] && ATT[dept][year] && ATT[dept][year][today] && ATT[dept][year][today][period.period];
  if(rec && rec.bulk){
    body.innerHTML = header + `<div class="no-data-note">This period was logged as Class Totals (Total ${rec.bulk.total}, Present ${rec.bulk.present}, OD ${rec.bulk.od}, Absent ${rec.bulk.absent}) — individual student status isn't available for a bulk entry.</div>`;
    return;
  }

  const groups = { inclass: [], od: [], leave: [], absent: [], unmarked: [] };
  filteredRoster.forEach(s=>{
    const r = rec && rec.records ? rec.records[s._id] : null;
    if(!r || !r.status) groups.unmarked.push(s);
    else if(r.status==='P') groups.inclass.push(s);
    else if(r.status==='OD') groups.od.push({...s, odType:r.od||'—', sport:r.sport||''});
    else if(r.status==='A'){
      if(r.permission==='With Permission') groups.leave.push(s);
      else groups.absent.push(s);
    }
  });

  const section = (title, emoji, items, renderItem) => items.length ? `
    <div style="margin-bottom:12px;">
      <div style="font-weight:700;font-size:13px;margin-bottom:6px;">${emoji} ${title} (${items.length})</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">${items.map(renderItem).join('')}</div>
    </div>` : '';

  let listHtml = section('In Classroom', '🏫', groups.inclass, s=>`<span class="chip">${escapeHtml(s.name)}</span>`) +
    section('On Duty (OD)', '🧾', groups.od, s=>`<span class="chip">${escapeHtml(s.name)} — ${escapeHtml(s.odType)}${s.odType==='Sports' && s.sport ? ' ('+escapeHtml(s.sport)+')' : ''}</span>`) +
    section('On Leave (With Permission)', '🌴', groups.leave, s=>`<span class="chip">${escapeHtml(s.name)}</span>`) +
    section('Absent (Without Permission)', '❌', groups.absent, s=>`<span class="chip cgpa-bad">${escapeHtml(s.name)}</span>`) +
    section('Not Marked Yet', '⏳', groups.unmarked, s=>`<span class="chip">${escapeHtml(s.name)}</span>`);

  if(!filteredRoster.length) listHtml = `<div class="no-data-note">No students found${q ? ' matching "'+escapeHtml(q)+'"' : ''}.</div>`;

  body.innerHTML = header + listHtml;
}
document.getElementById('liveDeptSelect')?.addEventListener('change', renderLiveStatus);
document.getElementById('liveYearSelect')?.addEventListener('change', renderLiveStatus);
document.getElementById('liveSearchInput')?.addEventListener('input', renderLiveStatus);

// Shared Include/Exclude scope editor — opened from both the Dashboard and
// the HOD tab, since both read the same HOD_SCOPE.
function openHodScopeOverlay(){
  const el = document.getElementById('hodScopeBody');
  el.innerHTML = Object.keys(DATA).map(dept=>{
    const sc = ensureHodScope(dept);
    const years = Object.keys(DATA[dept]);
    const deptOn = sc.included !== false;
    return `
      <div class="scope-dept">
        <div class="scope-dept-head">
          <input type="checkbox" class="scope-dept-check" data-dept="${escapeAttr(dept)}" ${deptOn?'checked':''}>
          ${escapeHtml(dept)}
        </div>
        ${years.map(y=>`
          <div class="scope-year-row" style="${deptOn?'':'opacity:0.45;'}">
            <input type="checkbox" class="scope-year-check" data-dept="${escapeAttr(dept)}" data-year="${escapeAttr(y)}" ${(deptOn && sc.years[y]!==false)?'checked':''} ${deptOn?'':'disabled'}>
            ${escapeHtml(y)}
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
  // Unchecking a department visually unchecks and disables its years (so
  // it's clear nothing under it counts toward the totals either) without
  // discarding each year's own on/off state — re-checking the department
  // restores exactly which years were included before.
  el.querySelectorAll('.scope-dept-check').forEach(cb=>{
    cb.addEventListener('change', e=>{
      ensureHodScope(e.target.dataset.dept).included = e.target.checked;
      saveHodScope();
      openHodScopeOverlay();
    });
  });
  el.querySelectorAll('.scope-year-check').forEach(cb=>{
    cb.addEventListener('change', e=>{
      ensureHodScope(e.target.dataset.dept).years[e.target.dataset.year] = e.target.checked;
      saveHodScope();
    });
  });
  document.getElementById('hodScopeOverlay').classList.add('open');
}
document.getElementById('hodScopeBtn').onclick = openHodScopeOverlay;
document.getElementById('dashScopeBtn').onclick = openHodScopeOverlay;
document.getElementById('hodScopeDoneBtn').onclick = ()=>{
  document.getElementById('hodScopeOverlay').classList.remove('open');
  renderHOD();
  renderDashboard();
};



// ================= TIMETABLE =================
function ensureTtYear(dept, year){
  if(!TIMETABLE[dept]) TIMETABLE[dept] = {};
  if(!TIMETABLE[dept][year]) TIMETABLE[dept][year] = {};
  WEEKDAYS.forEach(d=>{ if(!TIMETABLE[dept][year][d]) TIMETABLE[dept][year][d] = {}; });
  return TIMETABLE[dept][year];
}
function getTtEntry(dept, year, day, period){
  const y = ensureTtYear(dept, year);
  return (y[day] && y[day][period]) || null;
}
function setTtEntry(dept, year, day, period, entry){
  const y = ensureTtYear(dept, year);
  if(entry) y[day][period] = entry; else delete y[day][period];
  saveTimetable();
}

// Optional `depts` (a Set of department names) restricts this to faculty
// belonging to just those departments — used by the Faculty Timetable
// screen's own Department filter. Omitted/empty, it covers every
// department as before.
function allKnownFaculty(depts){
  const deptList = (depts && depts.size) ? [...depts] : [...new Set([...Object.keys(FACULTY), ...Object.keys(TIMETABLE)])];
  const set = new Set();
  deptList.forEach(dept=>{
    (FACULTY[dept]||[]).forEach(f=>{ if(f.name) set.add(f.name); });
    const years = TIMETABLE[dept] || {};
    Object.values(years).forEach(days=>Object.values(days).forEach(periods=>{
      Object.values(periods).forEach(e=>{ if(e && e.faculty) set.add(e.faculty); });
    }));
  });
  return [...set].sort();
}
function allKnownSubjectsFlat(dept){
  const bySem = subjectsForDept(dept);
  const set = new Map();
  Object.values(bySem).forEach(list=>list.forEach(s=>{ if(s.code) set.set(s.code.toUpperCase(), s); }));
  return [...set.values()];
}

function periodBoundaries(year, day){
  // Returns [{period, start:'HH:MM', end:'HH:MM'}] using that year+day's
  // resolved timing (day override > year override > general), each period
  // running until the next one starts (last period defaults to +50min).
  // cfg.periodOrder, when set, lets a day (e.g. Friday) run its periods in
  // a different sequence — the same period keeps its own subject/faculty
  // (looked up by period number in the timetable), it just occupies a
  // different time slot, so "the period after lunch" can become "the
  // period before lunch" on that day without touching what's taught in it.
  const cfg = getTimingFor(year || currentTtYear, day || currentTtDay);
  const periods = cfg.periods || DEFAULT_PERIOD_TIMES;
  const order = (Array.isArray(cfg.periodOrder) && cfg.periodOrder.length===PERIODS.length) ? cfg.periodOrder : PERIODS;
  return order.map((p,i)=>{
    const start = periods[i] || DEFAULT_PERIOD_TIMES[i] || '09:00';
    let end;
    if(cfg.periodEnds && cfg.periodEnds[i]){
      // Explicit end time (set directly, or via a duration) always wins.
      end = cfg.periodEnds[i];
    } else if(i < periods.length-1 && periods[i+1]){
      end = periods[i+1];
    } else {
      const [h,m] = start.split(':').map(Number);
      const total = h*60+m+50;
      end = String(Math.floor(total/60)%24).padStart(2,'0')+':'+String(total%60).padStart(2,'0');
    }
    return {period:p, start, end};
  });
}

// 24h 'HH:MM' -> '9:00 AM' style label.
function to12Hour(hhmm){
  if(!hhmm) return '';
  const [h,m] = hhmm.split(':').map(Number);
  const ampm = h>=12 ? 'PM' : 'AM';
  let h12 = h%12; if(h12===0) h12=12;
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}
function minutesBetween(start, end){
  const [sh,sm] = start.split(':').map(Number);
  const [eh,em] = end.split(':').map(Number);
  let diff = (eh*60+em) - (sh*60+sm);
  if(diff < 0) diff += 24*60;
  return diff;
}
function addMinutes(hhmm, mins){
  const [h,m] = hhmm.split(':').map(Number);
  const total = ((h*60+m+mins)%1440+1440)%1440;
  return String(Math.floor(total/60)).padStart(2,'0')+':'+String(total%60).padStart(2,'0');
}

// Interleaves period rows with the Short Break and Lunch blocks (sorted by
// start time) for the given year+day's resolved schedule — used to paint
// the full day view including breaks.
function scheduleBlocks(year, day){
  const cfg = getTimingFor(year || currentTtYear, day || currentTtDay);
  const bounds = periodBoundaries(year, day);
  const blocks = bounds.map(b=>({type:'period', period:b.period, start:b.start, end:b.end}));
  if(cfg.shortBreak && cfg.shortBreak.start && cfg.shortBreak.end){
    blocks.push({type:'break', label:'Short Break', start:cfg.shortBreak.start, end:cfg.shortBreak.end});
  }
  if(cfg.lunch && cfg.lunch.start && cfg.lunch.end){
    blocks.push({type:'lunch', label:'Lunch Break', start:cfg.lunch.start, end:cfg.lunch.end});
  }
  blocks.sort((a,b)=> a.start.localeCompare(b.start));
  return blocks;
}

function isNowWithin(day, start, end){
  const now = new Date();
  if(todayWeekdayAbbr() !== day) return false;
  const hm = String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  return hm >= start && hm < end;
}

function renderTtDeptTabs(){
  const el = document.getElementById('ttDeptTabs');
  el.innerHTML = '';
  Object.keys(DATA).forEach(dept=>{
    const b = document.createElement('button');
    b.className = 'tab dept-tab' + (dept===currentTtDept?' active':'');
    b.textContent = dept;
    b.onclick = ()=>{ currentTtDept = dept; currentTtYear = Object.keys(DATA[dept])[0]||''; renderTimetable(); };
    el.appendChild(b);
  });
}
function renderTtYearTabs(){
  const el = document.getElementById('ttYearTabs');
  el.innerHTML = '';
  Object.keys(DATA[currentTtDept]||{}).forEach(year=>{
    const b = document.createElement('button');
    b.className = 'tab' + (year===currentTtYear?' active':'');
    b.textContent = year;
    b.onclick = ()=>{ currentTtYear = year; renderTimetable(); };
    el.appendChild(b);
  });
}
function renderTtDayTabs(){
  const el = document.getElementById('ttDayTabs');
  el.innerHTML = '';
  const days = workingDays();
  if(!days.includes(currentTtDay)) currentTtDay = days[0] || 'Mon';
  days.forEach(day=>{
    const b = document.createElement('button');
    b.className = 'tab' + (day===currentTtDay?' active':'');
    b.textContent = day;
    b.onclick = ()=>{ currentTtDay = day; renderTimetable(); };
    el.appendChild(b);
  });
}

function paintTtRows(){
  const blocks = scheduleBlocks(currentTtYear, currentTtDay);
  const rowsEl = document.getElementById('ttRows');
  rowsEl.innerHTML = blocks.map(b=>{
    const running = isNowWithin(currentTtDay, b.start, b.end);
    if(b.type!=='period'){
      const icon = b.type==='lunch' ? '🍽️' : '☕';
      return `
        <div class="tt-row is-break${running?' running':''}">
          <div class="tt-period-num">${icon}</div>
          <div class="tt-period-time">${b.start}</div>
          <div class="tt-body"><div class="tt-subject">${escapeHtml(b.label)}</div><div class="tt-meta">${b.start} – ${b.end}</div></div>
          ${running ? '<span class="mini-stat present">Now</span>' : ''}
        </div>`;
    }
    const entry = getTtEntry(currentTtDept, currentTtYear, currentTtDay, b.period);
    const subjectLabel = entry && entry.subject
      ? `${entry.code ? '['+escapeHtml(entry.code)+'] ' : ''}${escapeHtml(entry.subject)}`
      : '—';
    const body = entry && (entry.subject || entry.faculty || entry.venue)
      ? `<div class="tt-subject">${subjectLabel}</div>
         <div class="tt-meta">${[entry.faculty, entry.venue].filter(Boolean).map(escapeHtml).join(' · ') || ''}</div>`
      : `<div class="tt-empty-slot">Tap to add subject / faculty</div>`;
    return `
      <div class="tt-row${running?' running':''}" data-period="${b.period}">
        <div class="tt-period-num">P${b.period}</div>
        <div class="tt-period-time">${b.start}</div>
        <div class="tt-body">${body}</div>
        ${running ? '<span class="mini-stat present">Now</span>' : ''}
      </div>`;
  }).join('');
  rowsEl.querySelectorAll('.tt-row[data-period]').forEach(row=>{
    row.addEventListener('click', ()=>openTtSlot(+row.dataset.period));
  });
}

function renderTimetable(){
  if(!currentTtDept) currentTtDept = Object.keys(DATA)[0];
  if(!currentTtYear || !DATA[currentTtDept] || !DATA[currentTtDept][currentTtYear]){
    currentTtYear = Object.keys(DATA[currentTtDept]||{})[0] || '';
  }
  renderTtDeptTabs();
  renderTtYearTabs();
  renderTtDayTabs();
  paintTtRows();
  renderAlarmSelectors();
}

let ttEditingPeriod = null;
let ttSubjectIndex = { byName:new Map(), byCode:new Map() }; // for auto-fetch on the open slot's dept

function buildTtSubjectIndex(dept){
  const byName = new Map(), byCode = new Map();
  allKnownSubjectsFlat(dept).forEach(s=>{
    if(s.name) byName.set(s.name.trim().toLowerCase(), s);
    if(s.code) byCode.set(s.code.trim().toUpperCase(), s);
  });
  ttSubjectIndex = { byName, byCode };
}

// Auto-fetch: typing/picking a subject name fills its code (and vice versa),
// and — if the faculty box is still empty — fills in whoever last taught
// that subject in this department, from SUBJ_FAC_MAP.
function ttAutoFetchFromSubject(){
  const subjectInp = document.getElementById('tts_subject');
  const codeInp = document.getElementById('tts_code');
  const facultyInp = document.getElementById('tts_faculty');
  const raw = subjectInp.value.trim();
  let match = ttSubjectIndex.byName.get(raw.toLowerCase()) || ttSubjectIndex.byCode.get(raw.toUpperCase());
  if(match){
    if(subjectInp.value.trim().toUpperCase() === (match.code||'').toUpperCase()){
      subjectInp.value = match.name || raw; // typed the code — fill in the name
    }
    codeInp.value = match.code || '';
    const lastFaculty = SUBJ_FAC_MAP[currentTtDept] && SUBJ_FAC_MAP[currentTtDept][(match.code||'').toUpperCase()];
    if(lastFaculty && !facultyInp.value.trim()) facultyInp.value = lastFaculty;
  } else {
    codeInp.value = '';
  }
}

function openTtSlot(period){
  ttEditingPeriod = period;
  const entry = getTtEntry(currentTtDept, currentTtYear, currentTtDay, period) || {};
  document.getElementById('ttSlotTitle').textContent = `Period ${period} — ${currentTtDay}`;
  document.getElementById('tts_subject').value = entry.subject || '';
  document.getElementById('tts_code').value = entry.code || '';
  document.getElementById('tts_faculty').value = entry.faculty || '';
  document.getElementById('tts_venue').value = entry.venue || '';
  buildTtSubjectIndex(currentTtDept);
  const subDl = document.getElementById('ttSubjectDatalist');
  subDl.innerHTML = allKnownSubjectsFlat(currentTtDept).map(s=>`<option value="${escapeAttr(s.name)}">${escapeAttr(s.code)}</option>`).join('');
  const facDl = document.getElementById('ttFacultyDatalist');
  facDl.innerHTML = allKnownFaculty().map(n=>`<option value="${escapeAttr(n)}"></option>`).join('');
  document.getElementById('ttSlotOverlay').classList.add('open');
}
document.getElementById('tts_subject').addEventListener('input', ttAutoFetchFromSubject);
document.getElementById('tts_subject').addEventListener('change', ttAutoFetchFromSubject);
document.getElementById('ttSlotForm').addEventListener('submit', e=>{
  e.preventDefault();
  const subject = document.getElementById('tts_subject').value.trim();
  const code = document.getElementById('tts_code').value.trim();
  const faculty = document.getElementById('tts_faculty').value.trim();
  const venue = document.getElementById('tts_venue').value.trim();
  if(!subject && !faculty && !venue){
    setTtEntry(currentTtDept, currentTtYear, currentTtDay, ttEditingPeriod, null);
  } else {
    setTtEntry(currentTtDept, currentTtYear, currentTtDay, ttEditingPeriod, {subject, code, faculty, venue});
    if(code && faculty){
      if(!SUBJ_FAC_MAP[currentTtDept]) SUBJ_FAC_MAP[currentTtDept] = {};
      SUBJ_FAC_MAP[currentTtDept][code.toUpperCase()] = faculty;
      saveSubjectFacultyMap();
    }
  }
  document.getElementById('ttSlotOverlay').classList.remove('open');
  paintTtRows();
  refreshOpenTimetableGrids();
  toast('Period updated');
});
document.getElementById('ttSlotClearBtn').onclick = ()=>{
  setTtEntry(currentTtDept, currentTtYear, currentTtDay, ttEditingPeriod, null);
  document.getElementById('ttSlotOverlay').classList.remove('open');
  paintTtRows();
  refreshOpenTimetableGrids();
  toast('Period cleared');
};

// Re-paints Master/Faculty Timetable if either is open behind the slot
// editor, so an edit made from inside one of them shows up immediately.
function refreshOpenTimetableGrids(){
  const masterOverlay = document.getElementById('masterTtOverlay');
  if(masterOverlay.classList.contains('open')){
    renderMasterTtTable(document.getElementById('masterTtDept').value, document.getElementById('masterTtYear').value);
  }
  const facOverlay = document.getElementById('facTtOverlay');
  if(facOverlay.classList.contains('open')){
    renderFacTtTable(document.getElementById('facTtSelect').value);
  }
}

// ---- Period, Short Break & Lunch timings (general, or per-year override) ----
function ttTimingsAllYears(){
  const set = new Set();
  Object.values(DATA).forEach(years=>Object.keys(years).forEach(y=>set.add(y)));
  return [...set];
}
// Computes each period's start+end for the fields panel the same way
// periodBoundaries() does (explicit periodEnds > next period's start >
// +50min default), so what's shown matches what will actually be used.
function ttTimingsResolveEnd(cfg, i, start){
  if(cfg.periodEnds && cfg.periodEnds[i]) return cfg.periodEnds[i];
  const periods = cfg.periods || DEFAULT_PERIOD_TIMES;
  if(i < PERIODS.length-1 && periods[i+1]) return periods[i+1];
  return addMinutes(start, 50);
}
function ttTimingsRenderFields(cfg){
  const el = document.getElementById('ttTimingsRows');
  el.innerHTML = PERIODS.map((p,i)=>{
    const start = (cfg.periods && cfg.periods[i]) || DEFAULT_PERIOD_TIMES[i];
    const end = ttTimingsResolveEnd(cfg, i, start);
    const duration = minutesBetween(start, end);
    return `
    <div class="tt-timing-row" style="display:grid;grid-template-columns:32px 1fr 64px 1fr;gap:6px;align-items:start;margin-bottom:8px;">
      <label style="padding-top:8px;">P${p}</label>
      <div>
        <input type="time" data-i="${i}" data-role="start" class="tt-time-input" value="${start}">
        <div class="tt-12h-label" data-i="${i}" data-role="start-label" style="font-size:10.5px;color:var(--text-dim);margin-top:2px;">${to12Hour(start)}</div>
      </div>
      <input type="number" data-i="${i}" data-role="duration" class="tt-duration-input" min="5" max="240" step="5" value="${duration}" title="Duration (minutes)">
      <div>
        <input type="time" data-i="${i}" data-role="end" class="tt-time-input" value="${end}">
        <div class="tt-12h-label" data-i="${i}" data-role="end-label" style="font-size:10.5px;color:var(--text-dim);margin-top:2px;">${to12Hour(end)}</div>
      </div>
    </div>`;
  }).join('');
  PERIODS.forEach((p,i)=>{
    const startInp = el.querySelector(`input[data-i="${i}"][data-role="start"]`);
    const durInp = el.querySelector(`input[data-i="${i}"][data-role="duration"]`);
    const endInp = el.querySelector(`input[data-i="${i}"][data-role="end"]`);
    const startLbl = el.querySelector(`[data-i="${i}"][data-role="start-label"]`);
    const endLbl = el.querySelector(`[data-i="${i}"][data-role="end-label"]`);
    startInp.addEventListener('input', ()=>{
      startLbl.textContent = to12Hour(startInp.value);
      const dur = parseInt(durInp.value,10) || 50;
      endInp.value = addMinutes(startInp.value, dur);
      endLbl.textContent = to12Hour(endInp.value);
    });
    durInp.addEventListener('input', ()=>{
      const dur = parseInt(durInp.value,10) || 0;
      if(dur>0){ endInp.value = addMinutes(startInp.value, dur); endLbl.textContent = to12Hour(endInp.value); }
    });
    endInp.addEventListener('input', ()=>{
      endLbl.textContent = to12Hour(endInp.value);
      const dur = minutesBetween(startInp.value, endInp.value);
      if(dur>0) durInp.value = dur;
    });
  });
  document.getElementById('ttShortBreakStart').value = (cfg.shortBreak && cfg.shortBreak.start) || DEFAULT_SHORT_BREAK.start;
  document.getElementById('ttShortBreakEnd').value = (cfg.shortBreak && cfg.shortBreak.end) || DEFAULT_SHORT_BREAK.end;
  document.getElementById('ttLunchStart').value = (cfg.lunch && cfg.lunch.start) || DEFAULT_LUNCH.start;
  document.getElementById('ttLunchEnd').value = (cfg.lunch && cfg.lunch.end) || DEFAULT_LUNCH.end;
  const order = (Array.isArray(cfg.periodOrder) && cfg.periodOrder.length===PERIODS.length) ? cfg.periodOrder : PERIODS;
  document.getElementById('ttPeriodOrder').value = order.join(',');
}
function ttTimingsCheckedScopes(){
  return [...document.querySelectorAll('#ttTimingsApplyTo input:checked')].map(cb=>cb.value);
}
// Scope values are encoded as 'general', 'year:<Year Label>' or
// 'day:<Weekday>' so Save/Reset can tell them apart.
function ttTimingsConfigFor(scope){
  if(scope==='general') return TIMINGS.general;
  if(scope.startsWith('year:')){
    const y = scope.slice(5);
    return (TIMINGS.perYear[y] && TIMINGS.perYear[y].useGeneral===false) ? TIMINGS.perYear[y] : TIMINGS.general;
  }
  if(scope.startsWith('day:')){
    const d = scope.slice(4);
    return (TIMINGS.perDay[d] && TIMINGS.perDay[d].useGeneral===false) ? TIMINGS.perDay[d] : TIMINGS.general;
  }
  return TIMINGS.general;
}
// The fields are always visible and editable now (previously they hid
// behind a "use general" checkbox that was checked by default, which made
// the whole panel look broken). Ticking "General" and/or any combination
// of years and weekdays just decides where the values on screen get saved.
document.getElementById('ttNumPeriodsApplyBtn').onclick = ()=>{
  const n = parseInt(document.getElementById('ttNumPeriods').value, 10);
  if(!n || n<1 || n>16){ toast('Enter a period count between 1 and 16'); return; }
  applyNumPeriods(n);
  const checked = ttTimingsCheckedScopes();
  const scope = checked[0] || 'general';
  ttTimingsRenderFields(ttTimingsConfigFor(scope));
  toast(`Now running ${n} period${n===1?'':'s'} a day`);
};
document.getElementById('ttTimingsBtn').onclick = ()=>{
  document.getElementById('ttNumPeriods').value = NUM_PERIODS;
  const years = ttTimingsAllYears();
  const applyToEl = document.getElementById('ttTimingsApplyTo');
  const chip = (value, label)=>`<label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;"><input type="checkbox" value="${escapeAttr(value)}" style="width:auto;">${escapeHtml(label)}</label>`;
  applyToEl.innerHTML =
    chip('general', 'General') +
    years.map(y=>chip('year:'+y, y)).join('') +
    WEEKDAYS.map(d=>chip('day:'+d, d+' only')).join('');
  // Default selection: the year currently being viewed if it has its own
  // override, otherwise General.
  const yr = currentTtYear && TIMINGS.perYear[currentTtYear];
  const defaultScope = (yr && yr.useGeneral===false) ? ('year:'+currentTtYear) : 'general';
  const cb = applyToEl.querySelector(`input[value="${CSS.escape(defaultScope)}"]`);
  if(cb) cb.checked = true;
  ttTimingsRenderFields(ttTimingsConfigFor(defaultScope));
  applyToEl.querySelectorAll('input').forEach(cb2=>{
    cb2.addEventListener('change', ()=>{
      // Loading a fresh set of fields when exactly one scope is ticked
      // helps avoid accidentally overwriting a different scope's times;
      // with multiple ticked, the fields on screen are left as-is and
      // applied to all of them on Save.
      const checked = ttTimingsCheckedScopes();
      if(checked.length===1) ttTimingsRenderFields(ttTimingsConfigFor(checked[0]));
    });
  });
  document.getElementById('ttTimingsOverlay').classList.add('open');
};
document.getElementById('ttTimingsSaveBtn').onclick = ()=>{
  const checked = ttTimingsCheckedScopes();
  if(!checked.length){ toast('Tick General and/or at least one year or weekday first'); return; }
  const periods = PERIODS.map((p,i)=>{
    const inp = document.querySelector(`#ttTimingsRows input[data-i="${i}"][data-role="start"]`);
    return (inp && inp.value) || DEFAULT_PERIOD_TIMES[i];
  });
  const periodEnds = PERIODS.map((p,i)=>{
    const inp = document.querySelector(`#ttTimingsRows input[data-i="${i}"][data-role="end"]`);
    return (inp && inp.value) || addMinutes(periods[i], 50);
  });
  const shortBreak = { start: document.getElementById('ttShortBreakStart').value || DEFAULT_SHORT_BREAK.start, end: document.getElementById('ttShortBreakEnd').value || DEFAULT_SHORT_BREAK.end };
  const lunch = { start: document.getElementById('ttLunchStart').value || DEFAULT_LUNCH.start, end: document.getElementById('ttLunchEnd').value || DEFAULT_LUNCH.end };
  const orderRaw = document.getElementById('ttPeriodOrder').value.split(',').map(s=>parseInt(s.trim(),10));
  const validOrder = orderRaw.length===PERIODS.length && PERIODS.every(p=>orderRaw.includes(p)) && orderRaw.every(n=>!isNaN(n));
  if(!validOrder){ toast(`Period order must list each of ${PERIODS.join(',')} exactly once`); return; }
  const periodOrder = orderRaw;
  const sameAsDefault = periodOrder.every((p,i)=>p===PERIODS[i]);
  checked.forEach(scope=>{
    const cfg = { periods, periodEnds, shortBreak, lunch };
    if(!sameAsDefault) cfg.periodOrder = periodOrder;
    if(scope==='general'){
      TIMINGS.general = cfg;
      PERIOD_TIMES = periods; savePeriodTimes(); // keep legacy key in sync
    } else if(scope.startsWith('year:')){
      TIMINGS.perYear[scope.slice(5)] = { ...cfg, useGeneral:false };
    } else if(scope.startsWith('day:')){
      TIMINGS.perDay[scope.slice(4)] = { ...cfg, useGeneral:false };
    }
  });
  saveTimings();
  document.getElementById('ttTimingsOverlay').classList.remove('open');
  paintTtRows();
  const labels = checked.map(s=> s==='general' ? 'General' : s.slice(s.indexOf(':')+1));
  toast(`Timings saved for ${labels.join(', ')}`);
};
document.getElementById('ttTimingsResetBtn').onclick = ()=>{
  const checked = ttTimingsCheckedScopes().filter(s=>s!=='general');
  if(!checked.length){ toast('Tick one or more specific years/weekdays to reset'); return; }
  const labels = [];
  checked.forEach(scope=>{
    if(scope.startsWith('year:')){ const y=scope.slice(5); delete TIMINGS.perYear[y]; labels.push(y); }
    else if(scope.startsWith('day:')){ const d=scope.slice(4); delete TIMINGS.perDay[d]; labels.push(d); }
  });
  saveTimings();
  document.getElementById('ttTimingsOverlay').classList.remove('open');
  paintTtRows();
  toast(`${labels.join(', ')} reset to General timing`);
};

// ---- Copy timetable ----
document.getElementById('ttCopyBtn').onclick = ()=>{
  const deptSel = document.getElementById('ttCopyDept');
  const yearSel = document.getElementById('ttCopyYear');
  deptSel.innerHTML = Object.keys(DATA).map(d=>`<option value="${escapeAttr(d)}">${escapeHtml(d)}</option>`).join('');
  deptSel.value = currentTtDept;
  function fillYears(){
    yearSel.innerHTML = Object.keys(DATA[deptSel.value]||{}).map(y=>`<option value="${escapeAttr(y)}">${escapeHtml(y)}</option>`).join('');
  }
  fillYears();
  deptSel.onchange = fillYears;
  document.getElementById('ttCopyOverlay').classList.add('open');
};
document.getElementById('ttCopyConfirmBtn').onclick = ()=>{
  const fromDept = document.getElementById('ttCopyDept').value;
  const fromYear = document.getElementById('ttCopyYear').value;
  if(fromDept===currentTtDept && fromYear===currentTtYear){ toast('That is already the current class'); return; }
  const src = TIMETABLE[fromDept] && TIMETABLE[fromDept][fromYear];
  if(!src || !Object.keys(src).length){ toast('That class has no timetable yet'); return; }
  ensureTtYear(currentTtDept, currentTtYear);
  TIMETABLE[currentTtDept][currentTtYear] = JSON.parse(JSON.stringify(src));
  saveTimetable();
  document.getElementById('ttCopyOverlay').classList.remove('open');
  paintTtRows();
  toast(`Copied timetable from ${fromDept} · ${fromYear}`);
};

// ---- Share day's schedule ----
document.getElementById('ttShareBtn').onclick = ()=>{
  const bounds = periodBoundaries();
  const lines = [
    `📅 Timetable — ${currentTtDept} · ${currentTtYear}`,
    `Day: ${currentTtDay}`,
    ``,
  ];
  bounds.forEach(b=>{
    const entry = getTtEntry(currentTtDept, currentTtYear, currentTtDay, b.period);
    if(entry && (entry.subject || entry.faculty)){
      lines.push(`P${b.period} (${b.start}): ${entry.subject||'—'}${entry.faculty?' — '+entry.faculty:''}${entry.venue?' @ '+entry.venue:''}`);
    } else {
      lines.push(`P${b.period} (${b.start}): —`);
    }
  });
  openShare(lines.join('\n'));
};

// ---- Timetable Generator ----
// Fills a semester's weekly timetable from its subject list. Weekly period
// count comes from each subject's L-T-P / Weekly Periods (set in Subjects);
// Lab-type subjects are placed as one contiguous 2-period block per session
// (or whatever's left for a short remainder), everything else as single
// periods spread across different days. A faculty already teaching
// elsewhere (any department/year) at that exact day+period is skipped.
function facultyBusyAt(day, period, facultyName, excludeDept, excludeYear){
  if(!facultyName) return false;
  const fname = facultyName.trim().toLowerCase();
  if(!fname) return false;
  for(const dept of Object.keys(TIMETABLE)){
    for(const year of Object.keys(TIMETABLE[dept])){
      if(dept===excludeDept && year===excludeYear) continue;
      const entry = TIMETABLE[dept][year] && TIMETABLE[dept][year][day] && TIMETABLE[dept][year][day][period];
      if(entry && entry.faculty && entry.faculty.trim().toLowerCase()===fname) return true;
    }
  }
  return false;
}

function openTtGenerator(){
  const deptSel = document.getElementById('genDept');
  const yearSel = document.getElementById('genYear');
  const semSel = document.getElementById('genSem');
  deptSel.innerHTML = Object.keys(DATA).map(d=>`<option value="${escapeAttr(d)}">${escapeHtml(d)}</option>`).join('');
  deptSel.value = currentTtDept;
  function fillYears(){
    const years = Object.keys(DATA[deptSel.value]||{});
    yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}">${escapeHtml(y)}</option>`).join('');
    yearSel.value = (currentTtYear && years.includes(currentTtYear)) ? currentTtYear : (years[0]||'');
  }
  // Semester options are scoped to the selected year (e.g. "2nd Year" only
  // ever offers Semester 3 or 4) — using semestersForYear() here, the same
  // mapping the Batch Generator uses, instead of listing all of 1–8.
  function fillSemesters(){
    const sems = semestersForYear(yearSel.value) || Array.from({length:8},(_,i)=>i+1);
    semSel.innerHTML = sems.map(i=>`<option value="${i}">Semester ${i}</option>`).join('');
    semSel.value = String(sems[0]);
  }
  fillYears();
  fillSemesters();
  deptSel.onchange = ()=>{ fillYears(); fillSemesters(); renderGenSubjectRows(); };
  yearSel.onchange = ()=>{ fillSemesters(); renderGenSubjectRows(); };
  semSel.onchange = renderGenSubjectRows;
  document.getElementById('ttGenResult').innerHTML = '';
  renderGenSubjectRows();
  document.getElementById('ttGenOverlay').classList.add('open');
}
document.getElementById('ttGenerateBtn').onclick = openTtGenerator;

// Looks up who is actually assigned to teach a subject, from each faculty
// member's own "Subjects Handled" list (FACULTY[homeDept][*].subjects —
// each entry {dept, year, code, name}) rather than guessing from whatever
// name was last typed into a generator run. Searches every faculty record
// in every home department, since a faculty's home department and the
// department they teach a given subject in need not be the same. Matches
// by subject code when both sides have one, else falls back to name.
// Returns every distinct faculty name matched, so a subject accidentally
// assigned to two different people can be surfaced as a conflict instead
// of silently picking one.
function collectAssignedFaculty(dept, year, code, name){
  const codeUp = (code||'').trim().toUpperCase();
  const nameNorm = String(name||'').trim().toLowerCase();
  const matches = [];
  Object.keys(FACULTY).forEach(homeDept=>{
    (FACULTY[homeDept]||[]).forEach(f=>{
      const subs = Array.isArray(f.subjects) && f.subjects.length ? f.subjects
        : (f.subject ? [{dept:homeDept, year:'', code:f.subjectCode||'', name:f.subject}] : []);
      subs.forEach(s=>{
        if(s.dept !== dept) return;
        if(year && s.year && s.year !== year) return;
        const sCode = (s.code||'').trim().toUpperCase();
        const sName = String(s.name||'').trim().toLowerCase();
        const codeMatch = codeUp && sCode && sCode===codeUp;
        const nameMatch = (!codeUp || !sCode) && nameNorm && sName===nameNorm;
        if((codeMatch || nameMatch) && f.name && !matches.includes(f.name)) matches.push(f.name);
      });
    });
  });
  return matches;
}
function renderGenSubjectRows(){
  const dept = document.getElementById('genDept').value;
  const year = document.getElementById('genYear').value;
  const sem = document.getElementById('genSem').value;
  const list = ensureDeptSubjects(dept)[sem] || [];
  const container = document.getElementById('genSubjectRows');
  if(!list.length){
    container.innerHTML = `<div class="arrear-count-note">No subjects found for ${escapeHtml(dept)} · Semester ${escapeHtml(sem)}. Add them in 📚 Subjects first (or use 📥 Import AI &amp; DS Syllabus).</div>`;
    return;
  }
  container.innerHTML = list.map((s,i)=>{
    const assigned = collectAssignedFaculty(dept, year, s.code, s.name);
    const fac = assigned[0] || (SUBJ_FAC_MAP[dept] && SUBJ_FAC_MAP[dept][(s.code||'').toUpperCase()]) || '';
    const conflict = assigned.length > 1;
    const periods = s.periods !== undefined && s.periods !== '' ? s.periods : (s.ltp ? (+s.ltp.l + +s.ltp.t + +s.ltp.p) : '');
    return `<div class="arrear-row" data-i="${i}" style="display:flex;gap:6px;align-items:center;margin-bottom:6px;flex-wrap:wrap;">
      <label style="display:flex;align-items:center;gap:6px;flex:2;min-width:170px;">
        <input type="checkbox" class="gen-include" checked style="width:auto;">
        <span style="font-size:12.5px;"><b>${escapeHtml(s.code||'')}</b> ${escapeHtml(s.name||'')}</span>
      </label>
      <input type="number" class="gen-periods" value="${escapeAttr(periods)}" min="0" max="20" style="width:64px;" placeholder="P/wk" title="Weekly periods">
      <input type="text" class="gen-faculty" value="${escapeAttr(fac)}" placeholder="Faculty" style="flex:1;min-width:140px;${conflict?'border-color:var(--danger);':''}" title="${conflict ? escapeAttr('Assigned to more than one faculty in Faculty records: '+assigned.join(', ')+' — using '+fac+'. Fix in 👥 Faculty if wrong.') : (assigned.length ? 'Auto-filled from Faculty → Subjects Handled' : '')}">
    </div>`;
  }).join('');
}

// Places a list of {code,name,type,faculty,periods} into dept/year's weekly
// timetable, skipping any faculty already busy at that day+period anywhere
// else in TIMETABLE (any department/year). Shared by the single-class
// generator (ttGenRun) and the multi-department Batch Generate (ttBatchRun)
// — calling it repeatedly across classes, in order, is what lets a batch
// run avoid double-booking a faculty member across the whole college.
function placeSubjectsInTimetable(dept, year, placements, overwrite){
  ensureTtYear(dept, year);
  WEEKDAYS.forEach(d=>{ if(!TIMETABLE[dept][year][d]) TIMETABLE[dept][year][d] = {}; });

  const placedList = [], unplacedList = [];
  let dayPointer = 0;
  const genDays = workingDays();

  placements.forEach(sub=>{
    const chunk = sub.type==='Lab' ? Math.max(1, Math.min(2, sub.periods)) : 1;
    let remaining = sub.periods;
    const usedDaysForThisSubject = new Set();
    let guard = 0;
    let placedAny = false;
    while(remaining > 0 && guard < 60){
      guard++;
      const size = Math.min(chunk, remaining);
      let placedThisSession = false;
      for(let attempt=0; attempt<genDays.length*2 && !placedThisSession; attempt++){
        const day = genDays[(dayPointer+attempt) % genDays.length];
        if(attempt < genDays.length && usedDaysForThisSubject.has(day)) continue;
        for(let startP=1; startP<=PERIODS.length-size+1; startP++){
          const chunkPeriods = [];
          for(let k=0;k<size;k++) chunkPeriods.push(PERIODS[startP-1+k]);
          const slotFree = chunkPeriods.every(p=>{
            const existing = TIMETABLE[dept][year][day][p];
            return overwrite ? true : !(existing && existing.subject);
          });
          if(!slotFree) continue;
          const clash = sub.faculty && chunkPeriods.some(p=>facultyBusyAt(day, p, sub.faculty, dept, year));
          if(clash) continue;
          chunkPeriods.forEach(p=>{
            const prevVenue = (TIMETABLE[dept][year][day][p] && TIMETABLE[dept][year][day][p].venue) || '';
            TIMETABLE[dept][year][day][p] = {subject:sub.name, code:sub.code, faculty:sub.faculty, venue:prevVenue};
          });
          usedDaysForThisSubject.add(day);
          placedThisSession = true;
          break;
        }
        if(placedThisSession) break;
      }
      if(placedThisSession){
        remaining -= size;
        placedAny = true;
      } else {
        break;
      }
    }
    if(remaining > 0) unplacedList.push(`${sub.code} (${remaining} of ${sub.periods} period${sub.periods===1?'':'s'} short)`);
    if(placedAny) placedList.push(`${sub.code} (${sub.periods-remaining}/${sub.periods}p)`);
    dayPointer = (dayPointer+1) % genDays.length;
    if(sub.faculty){
      if(!SUBJ_FAC_MAP[dept]) SUBJ_FAC_MAP[dept] = {};
      SUBJ_FAC_MAP[dept][(sub.code||'').toUpperCase()] = sub.faculty;
    }
  });

  return {placedList, unplacedList};
}

function ttGenRun(){
  const dept = document.getElementById('genDept').value;
  const year = document.getElementById('genYear').value;
  const sem = document.getElementById('genSem').value;
  const overwrite = document.getElementById('genOverwrite').checked;
  const rows = [...document.querySelectorAll('#genSubjectRows .arrear-row')];
  const subjectList = ensureDeptSubjects(dept)[sem] || [];
  const placements = [];
  rows.forEach(row=>{
    const i = +row.dataset.i;
    if(!row.querySelector('.gen-include').checked) return;
    const sub = subjectList[i];
    if(!sub) return;
    const periods = +row.querySelector('.gen-periods').value || 0;
    const faculty = row.querySelector('.gen-faculty').value.trim();
    if(periods <= 0) return;
    placements.push({code:sub.code, name:sub.name, type:sub.type, faculty, periods});
  });
  if(!placements.length){ toast('No subjects with weekly periods to place'); return; }

  const {placedList, unplacedList} = placeSubjectsInTimetable(dept, year, placements, overwrite);

  saveTimetable();
  saveSubjectFacultyMap();
  if(dept===currentTtDept && year===currentTtYear) paintTtRows();
  const resultEl = document.getElementById('ttGenResult');
  resultEl.innerHTML =
    `<div style="color:var(--good);font-weight:700;">✅ Placed: ${placedList.length ? escapeHtml(placedList.join(', ')) : 'none'}</div>` +
    (unplacedList.length ? `<div style="color:var(--danger);font-weight:700;margin-top:4px;">⚠️ Could not fully place: ${escapeHtml(unplacedList.join('; '))} — free up slots, add more periods/week, or resolve a faculty clash and generate again.</div>` : '');
  toast(`Generated for ${dept} · ${year} — ${placedList.length} subject(s) placed${unplacedList.length ? ', '+unplacedList.length+' short' : ''}`);
}
document.getElementById('ttGenRunBtn').onclick = ttGenRun;

// ---- Batch Generate: every department/year at once, scoped to odd/even/
// semester-1-only. Faculty for each subject is collected from the Faculty
// records' own "Subjects Handled" lists (collectAssignedFaculty — the
// actual assignment, dept+year+subject -> faculty), falling back to
// SUBJ_FAC_MAP (last faculty typed into a generator run) only when no
// Faculty record claims that subject. Classes are processed one at a time,
// in order, into the SAME shared TIMETABLE object, so facultyBusyAt() sees
// every earlier placement in this same batch run — a faculty member handling
// a subject in two different years/departments in the same odd/even sweep
// still gets clash-checked and skipped rather than double-booked.
function buildAutoPlacementsForClass(dept, year, semKey){
  const list = ensureDeptSubjects(dept)[semKey] || [];
  const conflicts = [], noFaculty = [];
  const placements = list.map(s=>{
    const assigned = collectAssignedFaculty(dept, year, s.code, s.name);
    const faculty = assigned[0] || (SUBJ_FAC_MAP[dept] && SUBJ_FAC_MAP[dept][(s.code||'').toUpperCase()]) || '';
    const periods = s.periods !== undefined && s.periods !== '' ? +s.periods : (s.ltp ? (+s.ltp.l + +s.ltp.t + +s.ltp.p) : 0);
    if(!periods || periods <= 0) return null;
    if(assigned.length > 1) conflicts.push(`${s.code||s.name} → ${assigned.join(', ')} (used ${faculty})`);
    else if(!faculty) noFaculty.push(s.code || s.name);
    return {code:s.code, name:s.name, type:s.type, faculty, periods};
  }).filter(Boolean);
  return {placements, conflicts, noFaculty};
}

function ttBatchRun(){
  const scope = document.getElementById('genBatchScope').value; // 'odd' | 'even' | 'all' | 'sem1'
  const skipSem1 = document.getElementById('genBatchSkipSem1').checked;
  const overwrite = document.getElementById('genBatchOverwrite').checked;
  const runs = []; // [{dept, year, sem}]

  Object.keys(DATA).forEach(dept=>{
    Object.keys(DATA[dept]||{}).forEach(year=>{
      const sems = semestersForYear(year) || [];
      sems.forEach(sem=>{
        if(scope==='sem1'){ if(sem!==1) return; }
        else if(scope==='odd'){ if(sem%2===0) return; if(sem===1 && skipSem1) return; }
        else if(scope==='even'){ if(sem%2===1) return; }
        else { /* all */ if(sem===1 && skipSem1) return; }
        runs.push({dept, year, sem});
      });
    });
  });

  if(!runs.length){ toast('Nothing to generate for that scope — check Subjects have been added and years/semesters are set up.'); return; }

  const results = [];
  let totalPlaced = 0, totalShort = 0, totalSkippedEmpty = 0, totalConflicts = 0, totalNoFaculty = 0;
  runs.forEach(({dept, year, sem})=>{
    const semKey = String(sem);
    const {placements, conflicts, noFaculty} = buildAutoPlacementsForClass(dept, year, semKey);
    if(!placements.length){ totalSkippedEmpty++; return; }
    const {placedList, unplacedList} = placeSubjectsInTimetable(dept, year, placements, overwrite);
    if(placedList.length) totalPlaced += placedList.length;
    if(unplacedList.length) totalShort += unplacedList.length;
    if(conflicts.length) totalConflicts += conflicts.length;
    if(noFaculty.length) totalNoFaculty += noFaculty.length;
    if(placedList.length || unplacedList.length){
      results.push({dept, year, sem, placedList, unplacedList, conflicts, noFaculty});
    }
  });

  saveTimetable();
  saveSubjectFacultyMap();
  paintTtRows();

  const resultEl = document.getElementById('ttBatchResult');
  if(!results.length){
    resultEl.innerHTML = `<div class="arrear-count-note">No subjects with faculty/periods on file for the selected semesters — add subjects (and assign faculty to them in 👥 Faculty → Subjects Handled) first, or use the single generator above.</div>`;
  } else {
    resultEl.innerHTML = results.map(r=>
      `<div style="margin-bottom:8px;padding-bottom:8px;border-bottom:1px solid var(--border);">
        <div style="font-weight:700;">${escapeHtml(r.dept)} · ${escapeHtml(r.year)} — Semester ${r.sem}</div>
        <div style="color:var(--good);">✅ Placed: ${r.placedList.length ? escapeHtml(r.placedList.join(', ')) : 'none'}</div>
        ${r.unplacedList.length ? `<div style="color:var(--danger);">⚠️ Short (likely a faculty clash or full week): ${escapeHtml(r.unplacedList.join('; '))}</div>` : ''}
        ${r.conflicts.length ? `<div style="color:var(--danger);">⚠️ Assigned to more than one faculty in records — picked the first: ${escapeHtml(r.conflicts.join('; '))}</div>` : ''}
        ${r.noFaculty.length ? `<div style="color:var(--text-dim);">ℹ️ No faculty on file for: ${escapeHtml(r.noFaculty.join(', '))} — placed with faculty left blank; assign them in 👥 Faculty → Subjects Handled.</div>` : ''}
      </div>`
    ).join('');
  }
  toast(`Batch complete — ${results.length} class(es) touched, ${totalPlaced} subject(s) placed${totalShort ? ', '+totalShort+' short' : ''}${totalSkippedEmpty ? ', '+totalSkippedEmpty+' skipped (no subjects/periods on file)' : ''}${totalConflicts ? ', '+totalConflicts+' faculty conflict(s)' : ''}${totalNoFaculty ? ', '+totalNoFaculty+' subject(s) with no faculty on file' : ''}`);
}
document.getElementById('ttBatchRunBtn').onclick = ttBatchRun;

// ---- Master Timetable (full week grid, read-only) ----
// Master Timetable is fully editable — tapping any cell (filled or empty)
// opens the same period-slot editor the day-by-day Timetable tab uses, then
// refreshes whichever timetable views are currently open.
function renderMasterTtTable(dept, year){
  const table = document.getElementById('masterTtTable');
  const days = workingDays();
  let head = '<tr><th>Period</th>' + days.map(d=>`<th>${escapeHtml(d)}</th>`).join('') + '</tr>';
  let rows = PERIODS.map(p=>{
    const cells = days.map(day=>{
      const entry = getTtEntry(dept, year, day, p);
      if(entry && (entry.subject || entry.faculty)){
        return `<td class="mtt-cell mtt-editable" data-day="${escapeAttr(day)}" data-period="${p}" title="Tap to edit"><div class="mtt-subj">${entry.code ? escapeHtml(entry.code)+' — ' : ''}${escapeHtml(entry.subject||'—')}</div>${entry.faculty ? `<div>${escapeHtml(entry.faculty)}</div>` : ''}${entry.venue ? `<div>@ ${escapeHtml(entry.venue)}</div>` : ''}</td>`;
      }
      return `<td class="mtt-cell mtt-empty mtt-editable" data-day="${escapeAttr(day)}" data-period="${p}" title="Tap to add">—</td>`;
    }).join('');
    return `<tr><th>P${p}</th>${cells}</tr>`;
  }).join('');
  table.innerHTML = head + rows;
  table.querySelectorAll('.mtt-editable').forEach(cell=>{
    cell.addEventListener('click', ()=>{
      currentTtDept = dept;
      currentTtYear = year;
      currentTtDay = cell.dataset.day;
      openTtSlot(+cell.dataset.period);
    });
  });
}
function openMasterTimetable(){
  const deptSel = document.getElementById('masterTtDept');
  const yearSel = document.getElementById('masterTtYear');
  deptSel.innerHTML = Object.keys(DATA).map(d=>`<option value="${escapeAttr(d)}">${escapeHtml(d)}</option>`).join('');
  deptSel.value = currentTtDept;
  function fillYears(){
    const years = Object.keys(DATA[deptSel.value]||{});
    yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}">${escapeHtml(y)}</option>`).join('');
    yearSel.value = (currentTtYear && years.includes(currentTtYear)) ? currentTtYear : (years[0]||'');
  }
  fillYears();
  function refresh(){
    document.getElementById('masterTtLabel').textContent = `${deptSel.value} · ${yearSel.value}`;
    renderMasterTtTable(deptSel.value, yearSel.value);
  }
  deptSel.onchange = ()=>{ fillYears(); refresh(); };
  yearSel.onchange = refresh;
  refresh();
  document.getElementById('masterTtOverlay').classList.add('open');
}
document.getElementById('ttMasterBtn').onclick = openMasterTimetable;
document.getElementById('masterTtShareBtn').onclick = ()=>{
  const dept = document.getElementById('masterTtDept').value;
  const year = document.getElementById('masterTtYear').value;
  const lines = [`📋 Master Timetable — ${dept} · ${year}`, ``];
  WEEKDAYS.forEach(day=>{
    lines.push(day + ':');
    PERIODS.forEach(p=>{
      const entry = getTtEntry(dept, year, day, p);
      if(entry && (entry.subject || entry.faculty)){
        lines.push(`  P${p}: ${entry.subject||'—'}${entry.faculty?' — '+entry.faculty:''}${entry.venue?' @ '+entry.venue:''}`);
      }
    });
  });
  openShare(lines.join('\n'));
};

// ---- Individual Faculty Timetable (combined across every dept/year they teach in) ----
// Also fully editable: a filled cell opens the slot editor for the class it
// actually belongs to; a blank cell opens it for whichever class is
// currently selected in the Timetable tab (shown in the cell's tooltip),
// with this faculty's name pre-filled — pick a different class first from
// the Timetable tab or Master Timetable if it should go elsewhere.
// Tapping a scheduled period here normally opens the Daily Class Record
// (topic covered + attendance counts) for TODAY's occurrence of that class.
// Ticking "Edit Mode" switches taps back to the ordinary timetable-slot
// editor, for actually moving/reassigning which subject/faculty sits in
// that period — the two are kept as one grid rather than two screens so a
// faculty member's whole week stays in one place.
function renderFacTtTable(facultyName){
  const table = document.getElementById('facTtTable');
  if(!facultyName){ table.innerHTML = ''; return; }
  const editMode = document.getElementById('facTtEditModeToggle').checked;
  const fname = facultyName.trim().toLowerCase();
  const days = workingDays();
  let head = '<tr><th>Period</th>' + days.map(d=>`<th>${escapeHtml(d)}</th>`).join('') + '</tr>';
  let rows = PERIODS.map(p=>{
    const cells = days.map(day=>{
      let found = null, foundDept = '', foundYear = '';
      for(const dept of Object.keys(TIMETABLE)){
        for(const year of Object.keys(TIMETABLE[dept])){
          const entry = TIMETABLE[dept][year][day] && TIMETABLE[dept][year][day][p];
          if(entry && entry.faculty && entry.faculty.trim().toLowerCase()===fname){ found = entry; foundDept = dept; foundYear = year; break; }
        }
        if(found) break;
      }
      if(found){
        return `<td class="mtt-cell mtt-editable" data-day="${escapeAttr(day)}" data-period="${p}" data-dept="${escapeAttr(foundDept)}" data-year="${escapeAttr(foundYear)}" data-faculty="${escapeAttr(facultyName)}" data-code="${escapeAttr(found.code||'')}" data-subject="${escapeAttr(found.subject||'')}" title="${editMode?'Tap to edit':'Tap to log today’s class record'}"><div class="mtt-subj">${escapeHtml(found.subject||'—')}</div><div>${escapeHtml(foundDept)} · ${escapeHtml(foundYear)}</div>${found.venue ? `<div>@ ${escapeHtml(found.venue)}</div>` : ''}</td>`;
      }
      return `<td class="mtt-cell mtt-empty mtt-editable" data-day="${escapeAttr(day)}" data-period="${p}" data-dept="${escapeAttr(currentTtDept)}" data-year="${escapeAttr(currentTtYear)}" data-faculty="${escapeAttr(facultyName)}" data-code="" data-subject="" title="Tap to schedule in ${escapeAttr(currentTtDept)} · ${escapeAttr(currentTtYear)}">—</td>`;
    }).join('');
    return `<tr><th>P${p}</th>${cells}</tr>`;
  }).join('');
  table.innerHTML = head + rows;
  table.querySelectorAll('.mtt-editable').forEach(cell=>{
    let holdTimer = null, held = false;
    const clearHold = ()=>{ if(holdTimer){ clearTimeout(holdTimer); holdTimer=null; } };
    if(!cell.classList.contains('mtt-empty')){
      cell.addEventListener('pointerdown', ()=>{
        held = false;
        clearHold();
        holdTimer = setTimeout(()=>{
          held = true;
          if(confirm(`Remove ${cell.dataset.subject||'this class'} (${cell.dataset.dept} · ${cell.dataset.year}) from ${cell.dataset.day} Period ${cell.dataset.period}?\n\nThis only unschedules it from the timetable — any already-saved attendance/class-record for past dates is kept.`)){
            delete TIMETABLE[cell.dataset.dept][cell.dataset.year][cell.dataset.day][cell.dataset.period];
            saveTimetable();
            toast('Removed from timetable');
            renderFacTtTable(document.getElementById('facTtSelect').value);
          }
        }, 550);
      });
      ['pointerup','pointerleave','pointercancel'].forEach(ev=>cell.addEventListener(ev, clearHold));
    }
    cell.addEventListener('click', ()=>{
      if(held){ held = false; return; }
      const isEmpty = cell.classList.contains('mtt-empty');
      if(editMode || isEmpty){
        currentTtDept = cell.dataset.dept;
        currentTtYear = cell.dataset.year;
        currentTtDay = cell.dataset.day;
        openTtSlot(+cell.dataset.period);
        const facInput = document.getElementById('tts_faculty');
        if(!facInput.value) facInput.value = cell.dataset.faculty;
      } else {
        openFacClassRecord({
          dept: cell.dataset.dept, year: cell.dataset.year, day: cell.dataset.day,
          period: +cell.dataset.period, subject: cell.dataset.subject, code: cell.dataset.code,
          faculty: cell.dataset.faculty
        });
      }
    });
  });
}
// Which departments' faculty show in the picker below — defaults to every
// department (so behavior is unchanged until someone actually narrows it),
// remembered across re-opens of this screen within the session.
let facTtSelectedDepts = null; // Set
function populateFacTtDepts(){
  const allDepts = [...new Set([...Object.keys(FACULTY), ...Object.keys(TIMETABLE)])];
  if(!facTtSelectedDepts) facTtSelectedDepts = new Set(allDepts);
  else allDepts.forEach(d=>{ if(!(d in DATA) && !FACULTY[d] && !TIMETABLE[d]) facTtSelectedDepts.delete(d); }); // drop any department that no longer exists
  const wrap = document.getElementById('facTtDeptsGroup');
  wrap.innerHTML = '';
  allDepts.forEach(d=>{
    const lbl = document.createElement('label');
    lbl.style.cssText = 'display:flex;align-items:center;gap:7px;font-size:13.5px;font-weight:600;flex-shrink:0;white-space:nowrap;';
    lbl.innerHTML = `<input type="checkbox" class="fac-tt-dept-check" value="${escapeAttr(d)}" style="width:18px;height:18px;" ${facTtSelectedDepts.has(d)?'checked':''}>${escapeHtml(d)}`;
    lbl.querySelector('input').addEventListener('change', e=>{
      if(e.target.checked) facTtSelectedDepts.add(d);
      else if(facTtSelectedDepts.size > 1) facTtSelectedDepts.delete(d);
      else { e.target.checked = true; toast('At least one department must stay ticked'); return; }
      populateFacTtSelect();
    });
    wrap.appendChild(lbl);
  });
  populateFacTtSelect();
}
document.getElementById('facTtDeptsAllBtn').onclick = ()=>{
  const allDepts = [...new Set([...Object.keys(FACULTY), ...Object.keys(TIMETABLE)])];
  const allOn = facTtSelectedDepts && facTtSelectedDepts.size===allDepts.length;
  facTtSelectedDepts = new Set(allOn ? allDepts.slice(0,1) : allDepts); // never allow zero ticked
  populateFacTtDepts();
};
document.getElementById('facTtAddDeptBtn').onclick = ()=>openAddItem('department');
// Rebuilds the Faculty dropdown from whichever departments are ticked
// above, keeping the current pick if it's still in the filtered list.
function populateFacTtSelect(){
  const sel = document.getElementById('facTtSelect');
  const prev = sel.value;
  const names = allKnownFaculty(facTtSelectedDepts);
  sel.innerHTML = names.length ? names.map(n=>`<option value="${escapeAttr(n)}">${escapeHtml(n)}</option>`).join('') : '<option value="">No faculty in the ticked department(s)</option>';
  sel.value = names.includes(prev) ? prev : (names[0] || '');
  renderFacTtTable(sel.value);
}
function openFacultyTimetable(){
  const sel = document.getElementById('facTtSelect');
  populateFacTtDepts();
  sel.onchange = ()=>renderFacTtTable(sel.value);
  document.getElementById('facTtEditModeToggle').checked = false;
  document.getElementById('facTtOverlay').classList.add('open');
}
// Opened from a faculty's own detail card — pre-selects that faculty in
// the picker so their week is showing immediately, rather than landing on
// whichever faculty was last chosen from the Timetable tab.
function openFacultyTimetableFor(name){
  // Make sure whichever department(s) this faculty actually belongs to are
  // ticked, in case the Department filter had been narrowed to exclude
  // them on a previous visit to this screen — otherwise they'd silently
  // fail to appear in the (now-filtered) picker.
  const theirDepts = Object.keys(FACULTY).filter(d=>(FACULTY[d]||[]).some(f=>f.name===name));
  if(theirDepts.length){
    if(!facTtSelectedDepts) facTtSelectedDepts = new Set();
    theirDepts.forEach(d=>facTtSelectedDepts.add(d));
  }
  openFacultyTimetable();
  const sel = document.getElementById('facTtSelect');
  if([...sel.options].some(o=>o.value===name)) sel.value = name;
  renderFacTtTable(sel.value);
}
document.getElementById('facTtEditModeToggle').addEventListener('change', ()=>{
  document.getElementById('facTtHint').textContent = document.getElementById('facTtEditModeToggle').checked
    ? 'Tap any period to move or reassign the class taught in it. Press and hold a scheduled period to remove it.'
    : "Tap any period to enter today's topic covered and attendance counts for that class. Press and hold a scheduled period to remove it.";
  renderFacTtTable(document.getElementById('facTtSelect').value);
});
document.getElementById('ttFacultyTtBtn').onclick = openFacultyTimetable;

// ---- Faculty Daily Class Record — topic covered + attendance counts ----
// Opened by tapping a scheduled period on a faculty's own timetable. The
// topic is stored directly on that period's own attendance record
// (ATT[dept][year][date][period].topic) so it travels with backup/restore
// automatically. Attendance counts show read-only (via statsFromAttRecord)
// once that period has been marked — individually or as Class Totals —
// otherwise the faculty can enter counts here, which are saved the same
// way Class Totals are (rec.bulk), so they immediately feed every existing
// report/donut/HOD view.
let fcrContext = null;
function openFacClassRecord(ctx){
  fcrContext = ctx;
  document.getElementById('fcrTitle').textContent = `📘 ${ctx.subject || 'Class'} Record`;
  document.getElementById('fcrMeta').textContent = `${ctx.dept} · ${ctx.year} — ${ctx.day}, Period ${ctx.period}${ctx.faculty ? ' · '+ctx.faculty : ''}`;
  const dateInp = document.getElementById('fcr_date');
  dateInp.value = todayStr();
  renderFcrBody();
  dateInp.onchange = renderFcrBody;
  document.getElementById('facClassRecordOverlay').classList.add('open');
}
function renderFcrBody(){
  if(!fcrContext) return;
  const { dept, year, period } = fcrContext;
  const date = document.getElementById('fcr_date').value || todayStr();
  const rec = ATT[dept] && ATT[dept][year] && ATT[dept][year][date] && ATT[dept][year][date][period];
  document.getElementById('fcr_topic').value = (rec && rec.topic) || '';
  const hasAnything = !!(rec && (rec.topic || rec.bulk || (rec.records && Object.keys(rec.records).length)));
  document.getElementById('fcrDeleteBtn').style.display = hasAnything ? '' : 'none';

  const attBlock = document.getElementById('fcrAttendanceBlock');
  const alreadyMarked = rec && ((rec.records && Object.keys(rec.records).length) || rec.bulk);
  if(alreadyMarked){
    const s = statsFromAttRecord(rec);
    attBlock.innerHTML = `<div class="field">
      <label>Attendance for this period</label>
      <div class="no-data-note">Total ${s.total} · ✅ Present ${s.present} · ❌ Absent ${s.absent} · 🧾 OD ${s.od}${rec.bulk ? ' (logged as Class Totals)' : ' (marked individually — open Attendance to change)'}</div>
    </div>`;
  } else {
    attBlock.innerHTML = `<div class="field">
      <label>Attendance for this period — not marked yet</label>
      <div class="field-row" style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;">
        <div class="field"><label style="font-size:11px;">Total</label><input type="number" id="fcr_total" min="0"></div>
        <div class="field"><label style="font-size:11px;">Present</label><input type="number" id="fcr_present" min="0"></div>
        <div class="field"><label style="font-size:11px;">OD</label><input type="number" id="fcr_od" min="0"></div>
        <div class="field"><label style="font-size:11px;">Absent</label><input type="number" id="fcr_absent" min="0" readonly></div>
      </div>
      <div class="arrear-count-note">Optional — leave Total at 0 to just log the topic without attendance counts.</div>
    </div>`;
    const recompute = ()=>{
      const total = parseFloat(document.getElementById('fcr_total').value)||0;
      const present = parseFloat(document.getElementById('fcr_present').value)||0;
      const od = parseFloat(document.getElementById('fcr_od').value)||0;
      document.getElementById('fcr_absent').value = total ? Math.max(0,total-present-od) : '';
    };
    ['fcr_total','fcr_present','fcr_od'].forEach(id=>document.getElementById(id).addEventListener('input', recompute));
  }
}
document.getElementById('fcrSaveBtn').onclick = ()=>{
  if(!fcrContext) return;
  const { dept, year, period } = fcrContext;
  const date = document.getElementById('fcr_date').value || todayStr();
  const rec = getAttRecord(dept, year, date, period, true);
  rec.topic = document.getElementById('fcr_topic').value.trim();
  const totalInp = document.getElementById('fcr_total');
  if(totalInp){
    const total = parseFloat(totalInp.value)||0;
    if(total > 0){
      const present = parseFloat(document.getElementById('fcr_present').value)||0;
      const od = parseFloat(document.getElementById('fcr_od').value)||0;
      const absent = Math.max(0, total-present-od);
      rec.bulk = {total, present, od, absent};
      rec.records = {};
      rec.markedAt = Date.now();
    }
  }
  saveAttendance();
  toast('Class record saved');
  document.getElementById('facClassRecordOverlay').classList.remove('open');
  renderDashboard();
};
document.getElementById('fcrClearBtn').onclick = ()=>{
  document.getElementById('fcr_topic').value = '';
  const totalInp = document.getElementById('fcr_total');
  if(totalInp){
    ['fcr_total','fcr_present','fcr_od','fcr_absent'].forEach(id=>{
      const el = document.getElementById(id);
      if(el) el.value = '';
    });
  }
};
document.getElementById('fcrDeleteBtn').onclick = ()=>{
  if(!fcrContext) return;
  if(!confirm('Delete this period\'s topic and attendance record? This cannot be undone.')) return;
  const { dept, year, period } = fcrContext;
  const date = document.getElementById('fcr_date').value || todayStr();
  if(ATT[dept] && ATT[dept][year] && ATT[dept][year][date] && ATT[dept][year][date][period]){
    delete ATT[dept][year][date][period];
    if(Object.keys(ATT[dept][year][date]).length === 0) delete ATT[dept][year][date];
    saveAttendance();
    toast('Class record deleted');
    renderDashboard();
  }
  renderFcrBody();
};
document.getElementById('facTtShareBtn').onclick = ()=>{
  const facultyName = document.getElementById('facTtSelect').value;
  if(!facultyName){ toast('No faculty selected'); return; }
  const fname = facultyName.trim().toLowerCase();
  const lines = [`👤 Faculty Timetable — ${facultyName}`, ``];
  WEEKDAYS.forEach(day=>{
    const dayLines = [];
    PERIODS.forEach(p=>{
      for(const dept of Object.keys(TIMETABLE)){
        for(const year of Object.keys(TIMETABLE[dept])){
          const entry = TIMETABLE[dept][year][day] && TIMETABLE[dept][year][day][p];
          if(entry && entry.faculty && entry.faculty.trim().toLowerCase()===fname){
            dayLines.push(`  P${p}: ${entry.subject||'—'} — ${dept} · ${year}${entry.venue?' @ '+entry.venue:''}`);
          }
        }
      }
    });
    if(dayLines.length){ lines.push(day+':'); lines.push(...dayLines); }
  });
  openShare(lines.join('\n'));
};

// ---- Alarm ----
function renderAlarmSelectors(){
  const facSel = document.getElementById('ttAlarmFaculty');
  const subSel = document.getElementById('ttAlarmSubject');
  const facultyNames = allKnownFaculty();
  const subjects = allKnownSubjectsFlat(currentTtDept);
  facSel.innerHTML = '<option value="">— Any faculty —</option>' + facultyNames.map(n=>`<option value="${escapeAttr(n)}">${escapeHtml(n)}</option>`).join('');
  subSel.innerHTML = '<option value="">— Any subject —</option>' + subjects.map(s=>`<option value="${escapeAttr(s.name)}">${escapeHtml(s.name)}</option>`).join('');
  document.getElementById('ttAlarmToggle').checked = !!ALARM_SETTINGS.enabled;
  facSel.value = ALARM_SETTINGS.faculty || '';
  subSel.value = ALARM_SETTINGS.subject || '';
}
document.getElementById('ttAlarmToggle').addEventListener('change', e=>{
  ALARM_SETTINGS.enabled = e.target.checked;
  saveAlarmSettings();
  if(e.target.checked && 'Notification' in window && Notification.permission === 'default'){
    Notification.requestPermission();
  }
  document.getElementById('ttAlarmStatus').textContent = e.target.checked
    ? 'Watching for the next matching period, checked every minute while this tab is open.'
    : 'Checks the timetable every minute, only while this tab is open.';
});
document.getElementById('ttAlarmFaculty').addEventListener('change', e=>{
  ALARM_SETTINGS.faculty = e.target.value;
  saveAlarmSettings();
});
document.getElementById('ttAlarmSubject').addEventListener('change', e=>{
  ALARM_SETTINGS.subject = e.target.value;
  saveAlarmSettings();
});

function beep(){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  }catch(e){}
}
function notifyAlarm(title, body){
  if('Notification' in window && Notification.permission === 'granted'){
    try{ new Notification(title, {body}); }catch(e){}
  }
  toast(title + (body ? ' — ' + body : ''));
  beep();
}

const _alarmFired = new Set();
function checkAlarm(){
  if(!ALARM_SETTINGS.enabled) return;
  const now = new Date();
  const todayAbbr = currentWeekdayAbbr();
  if(!todayAbbr) return; // not a working day today
  const hm = String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  Object.keys(DATA).forEach(dept=>{
    Object.keys(DATA[dept]).forEach(year=>{
      const bounds = periodBoundaries(year, todayAbbr);
      bounds.forEach(b=>{
        const entry = getTtEntry(dept, year, todayAbbr, b.period);
        if(!entry) return;
        const facMatch = !ALARM_SETTINGS.faculty || entry.faculty === ALARM_SETTINGS.faculty;
        const subMatch = !ALARM_SETTINGS.subject || entry.subject === ALARM_SETTINGS.subject;
        if(!facMatch || !subMatch) return;
        // fire once, 2 minutes before the period starts
        const [sh,sm] = b.start.split(':').map(Number);
        const total = sh*60+sm;
        const nowTotal = now.getHours()*60+now.getMinutes();
        const key = `${dept}|${year}|${todayAbbr}|${b.period}|${now.toDateString()}`;
        if(nowTotal >= total-2 && nowTotal < total && !_alarmFired.has(key)){
          _alarmFired.add(key);
          notifyAlarm(`${entry.subject||'Class'} starts at ${b.start}`, `${dept} · ${year} — ${entry.faculty||''}`.trim());
        }
      });
    });
  });
}
setInterval(checkAlarm, 30000);

// ---- Daily attendance reminder (Settings → ⏰ Daily Attendance Reminder) ----
// Same pattern as the class-period alarm above: checked once a minute while
// this tab is open, fires a browser Notification (plus a toast/beep as a
// fallback) once per calendar day if the reminder time has passed and NO
// attendance has been entered yet today for any included department/year.
let _attReminderFiredDate = null;
function checkAttendanceReminder(){
  if(!APP_SETTINGS.attReminderEnabled) return;
  const today = todayStr();
  if(_attReminderFiredDate === today) return; // already fired today
  const now = new Date();
  const [rh, rm] = (APP_SETTINGS.attReminderTime || '10:00').split(':').map(Number);
  const nowMins = now.getHours()*60 + now.getMinutes();
  if(nowMins < (rh*60 + (rm||0))) return; // not time yet
  const anyMarked = Object.keys(DATA).some(d=>{
    if(!deptIncluded(d)) return false;
    return Object.keys(DATA[d]).some(y=>{
      if(!yearIncluded(d,y)) return false;
      const dayData = ATT[d] && ATT[d][y] && ATT[d][y][today];
      return dayData && Object.keys(dayData).length;
    });
  });
  if(anyMarked) return; // something's already been entered today — nothing to remind about
  _attReminderFiredDate = today;
  notifyAlarm('📋 Attendance reminder', "Today's attendance hasn't been entered yet.");
}
setInterval(checkAttendanceReminder, 60000);
checkAttendanceReminder(); // also check once right away, in case the reminder time has already passed today

// ================= LEAVE & OD REPORT =================
let lrMode = 'students'; // 'students' | 'faculty'

function computeStudentLeaveOdStats(dept, year){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const list = currentListFor(dept, year);
  const byId = {}; list.forEach(s=>byId[s._id] = {s, odEntries:[], absentEntries:[]});
  Object.keys(dateMap).sort().forEach(date=>{
    Object.keys(dateMap[date]).forEach(period=>{
      const rec = dateMap[date][period];
      if(!rec || !rec.records) return;
      Object.keys(rec.records).forEach(id=>{
        if(!byId[id]) return;
        const r = rec.records[id];
        if(r.status==='OD') byId[id].odEntries.push({date, period, type:r.od||'Others'});
        else if(r.status==='A') byId[id].absentEntries.push({date, period, permission:r.permission||'Not specified'});
      });
    });
  });
  return Object.values(byId);
}

function computeFacultyLeaveOdStats(dept){
  const dateMap = FAC_ATT[dept] || {};
  const list = FACULTY[dept] || [];
  const byId = {}; list.forEach(f=>byId[f._id] = {s:f, odEntries:[], absentEntries:[]});
  Object.keys(dateMap).sort().forEach(date=>{
    const rec = dateMap[date];
    if(!rec || !rec.records) return;
    Object.keys(rec.records).forEach(id=>{
      if(!byId[id]) return;
      const r = rec.records[id];
      if(r.status==='OD') byId[id].odEntries.push({date, period:null, type:r.od||'Others'});
      else if(r.status==='A') byId[id].absentEntries.push({date, period:null, permission:r.permission||'Not specified'});
    });
  });
  return Object.values(byId);
}

function lrRenderList(){
  const dept = document.getElementById('lrDept').value;
  const year = document.getElementById('lrYear').value;
  const stats = lrMode==='students' ? computeStudentLeaveOdStats(dept, year) : computeFacultyLeaveOdStats(dept);
  const listEl = document.getElementById('lrList');
  const withHistory = stats.filter(r=>r.odEntries.length || r.absentEntries.length)
    .sort((a,b)=> (b.odEntries.length+b.absentEntries.length) - (a.odEntries.length+a.absentEntries.length));

  if(!withHistory.length){
    listEl.innerHTML = `<div class="no-data-note">No OD or Absent records found for this scope yet.</div>`;
    return;
  }

  listEl.innerHTML = withHistory.map((r,i)=>{
    const withPerm = r.absentEntries.filter(e=>e.permission==='With Permission').length;
    const withoutPerm = r.absentEntries.filter(e=>e.permission==='Without Permission').length;
    const unspecified = r.absentEntries.length - withPerm - withoutPerm;
    const odByType = {};
    r.odEntries.forEach(e=>{ odByType[e.type] = (odByType[e.type]||0)+1; });
    return `
    <div class="missing-row" data-idx="${i}" style="cursor:pointer;">
      <div class="mr-top">
        <span class="mr-name">${escapeHtml(r.s.name)}</span>
        <span class="mr-loc">${r.odEntries.length} OD · ${r.absentEntries.length} Absent</span>
      </div>
      <div class="mr-chips">
        ${Object.keys(odByType).map(t=>`<span class="mr-chip">${escapeHtml(t)}: ${odByType[t]}</span>`).join('')}
        ${withPerm ? `<span class="mr-chip">With Permission: ${withPerm}</span>` : ''}
        ${withoutPerm ? `<span class="mr-chip">Without Permission: ${withoutPerm}</span>` : ''}
        ${unspecified ? `<span class="mr-chip">Unspecified: ${unspecified}</span>` : ''}
      </div>
      <div class="lr-detail" id="lrDetail${i}" style="display:none;margin-top:8px;font-size:12.5px;color:var(--text-dim);border-top:1px solid var(--border);padding-top:8px;">
        ${r.odEntries.length ? `<div style="font-weight:700;color:var(--text);margin-bottom:4px;">On-Duty</div>` + r.odEntries.map(e=>`<div>${formatDateLabel(e.date)}${e.period?' · Period '+e.period:''} — ${escapeHtml(e.type)}</div>`).join('') : ''}
        ${r.absentEntries.length ? `<div style="font-weight:700;color:var(--text);margin:8px 0 4px;">Absent</div>` + r.absentEntries.map(e=>`<div>${formatDateLabel(e.date)}${e.period?' · Period '+e.period:''} — ${escapeHtml(e.permission)}</div>`).join('') : ''}
      </div>
    </div>`;
  }).join('');
  listEl.querySelectorAll('.missing-row').forEach(row=>{
    row.addEventListener('click', ()=>{
      const detail = document.getElementById('lrDetail'+row.dataset.idx);
      detail.style.display = detail.style.display==='none' ? 'block' : 'none';
    });
  });
}

function lrPopulateSelectors(){
  const deptSel = document.getElementById('lrDept');
  const yearSel = document.getElementById('lrYear');
  const yearField = document.getElementById('lrYearField');
  deptSel.innerHTML = Object.keys(DATA).map(d=>`<option value="${escapeAttr(d)}" ${d===currentDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  const fillYears = ()=>{
    if(lrMode==='faculty'){ yearField.style.display='none'; return; }
    yearField.style.display='';
    const years = Object.keys(DATA[deptSel.value]||{});
    yearSel.innerHTML = years.map(y=>`<option value="${escapeAttr(y)}" ${y===currentYear?'selected':''}>${escapeHtml(y)}</option>`).join('');
  };
  fillYears();
  deptSel.onchange = ()=>{ fillYears(); lrRenderList(); };
  yearSel.onchange = lrRenderList;
}
document.getElementById('leaveReportBtn').onclick = ()=>{
  lrMode = 'students';
  document.getElementById('lrTabStudents').classList.add('active');
  document.getElementById('lrTabFaculty').classList.remove('active');
  lrPopulateSelectors();
  lrRenderList();
  document.getElementById('leaveReportOverlay').classList.add('open');
};
document.getElementById('lrTabStudents').onclick = ()=>{
  lrMode = 'students';
  document.getElementById('lrTabStudents').classList.add('active');
  document.getElementById('lrTabFaculty').classList.remove('active');
  lrPopulateSelectors();
  lrRenderList();
};
document.getElementById('lrTabFaculty').onclick = ()=>{
  lrMode = 'faculty';
  document.getElementById('lrTabFaculty').classList.add('active');
  document.getElementById('lrTabStudents').classList.remove('active');
  lrPopulateSelectors();
  lrRenderList();
};

// ================= PRINCIPAL REPORT =================
function ordinalPeriod(p){
  const s = ['th','st','nd','rd'], v = p % 100;
  return p + (s[(v-20)%10] || s[v] || s[0]) + ' Hour';
}

function prCheckedYears(){
  return [...document.querySelectorAll('#prYearsGroup input:checked')].map(cb=>cb.value);
}
function prCheckedPeriods(){
  return [...document.querySelectorAll('#prPeriodsGroup input:checked')].map(cb=>+cb.value);
}
function prChip(container, value, label, checked){
  const lbl = document.createElement('label');
  lbl.style.cssText = 'display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;';
  lbl.innerHTML = `<input type="checkbox" value="${escapeAttr(value)}" style="width:auto;" ${checked?'checked':''}>${escapeHtml(label)}`;
  container.appendChild(lbl);
}
function prPopulateSelectors(){
  const deptSel = document.getElementById('prDept');
  const depts = Object.keys(DATA);
  deptSel.innerHTML = depts.map(d=>`<option value="${escapeAttr(d)}" ${d===currentDept?'selected':''}>${escapeHtml(d)}</option>`).join('');
  const fillYears = ()=>{
    const dept = deptSel.value;
    const years = Object.keys(DATA[dept]||{});
    const yearsEl = document.getElementById('prYearsGroup');
    yearsEl.innerHTML = '';
    // Default: every year except the first (e.g. "2nd Year onward"), since
    // a HOD most often reports on senior years — still fully editable.
    years.forEach((y,i)=>prChip(yearsEl, y, y, i>0));
  };
  fillYears();
  deptSel.onchange = fillYears;
  const periodsEl = document.getElementById('prPeriodsGroup');
  periodsEl.innerHTML = '';
  PERIODS.forEach(p=>prChip(periodsEl, p, ordinalPeriod(p), true));
  document.getElementById('prDate').value = todayStr();
}
document.getElementById('prYearsAllBtn').onclick = ()=>{
  const boxes = [...document.querySelectorAll('#prYearsGroup input')];
  const allChecked = boxes.every(cb=>cb.checked);
  boxes.forEach(cb=>cb.checked = !allChecked);
};
document.getElementById('prPeriodsAllBtn').onclick = ()=>{
  const boxes = [...document.querySelectorAll('#prPeriodsGroup input')];
  const allChecked = boxes.every(cb=>cb.checked);
  boxes.forEach(cb=>cb.checked = !allChecked);
};

document.getElementById('principalReportBtn').onclick = ()=>{
  prPopulateSelectors();
  document.getElementById('prOutput').textContent = 'Choose the scope above and tap Generate Report.';
  document.getElementById('prErr').textContent = '';
  document.getElementById('principalReportOverlay').classList.add('open');
};

// Students on continuous leave: absent on every marked period, for `days`
// consecutive calendar days counting back from (and including) the report
// date, for every day in that window that actually has attendance recorded.
function prContinuousLeave(dept, year, endDate, days){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const d = new Date(endDate);
  const window = [];
  for(let i=0;i<days;i++){
    window.push(d.toISOString().slice(0,10));
    d.setDate(d.getDate()-1);
  }
  const markedDays = window.filter(date=>dateMap[date] && Object.keys(dateMap[date]).length);
  if(markedDays.length < days) return []; // not enough marked history yet
  const list = currentListFor(dept, year);
  return list.filter(s=>{
    return markedDays.every(date=>{
      const periods = dateMap[date];
      const statuses = Object.values(periods).map(rec=>rec.records && rec.records[s._id] && rec.records[s._id].status).filter(Boolean);
      if(!statuses.length) return false; // not marked at all that day — don't count as leave
      return statuses.every(st=>st==='A');
    });
  });
}

// Overall attendance % per student across every recorded date/period for
// that dept+year, counting Present as attended and On-Duty as attended
// (OD counts as on-record, not absent); Absent counts against them.
function prLowAttendance(dept, year, threshold){
  const dateMap = (ATT[dept]&&ATT[dept][year]) || {};
  const list = currentListFor(dept, year);
  const totals = {}; // id -> {present, marked}
  list.forEach(s=>totals[s._id] = {present:0, marked:0});
  Object.values(dateMap).forEach(periods=>{
    Object.values(periods).forEach(rec=>{
      if(!rec || !rec.records) return;
      Object.keys(rec.records).forEach(id=>{
        if(!totals[id]) return;
        const st = rec.records[id].status;
        if(!st) return;
        totals[id].marked++;
        if(st==='P' || st==='OD') totals[id].present++;
      });
    });
  });
  return list
    .map(s=>{
      const t = totals[s._id];
      const pct = t.marked ? (t.present / t.marked * 100) : null;
      return {s, pct, marked:t.marked};
    })
    .filter(r=>r.marked>0 && r.pct < threshold)
    .sort((a,b)=>a.pct-b.pct);
}

function currentListFor(dept, year){
  return (DATA[dept] && DATA[dept][year]) || [];
}

// Tallies one dept+year+date+period against that year's own roster.
function prTallyPeriod(dept, year, date, p){
  const list = currentListFor(dept, year);
  const rec = (ATT[dept]&&ATT[dept][year]&&ATT[dept][year][date]&&ATT[dept][year][date][p]) || null;
  let pP=0,pA=0; const pOd={}; OD_TYPES.forEach(t=>pOd[t]=0);
  list.forEach(s=>{
    const st = rec && rec.records && rec.records[s._id] && rec.records[s._id].status;
    if(st==='P') pP++;
    else if(st==='A') pA++;
    else if(st==='OD'){ const t = rec.records[s._id].od || 'Others'; pOd[t]=(pOd[t]||0)+1; }
  });
  return {pP, pA, pOd, marked: !!rec, total:list.length};
}

function prGenerate(){
  const dept = document.getElementById('prDept').value;
  const years = prCheckedYears();
  const periods = prCheckedPeriods();
  const date = document.getElementById('prDate').value || todayStr();
  const leaveDays = Math.max(1, parseInt(document.getElementById('prLeaveDays').value, 10) || 3);
  const lowPct = Math.max(1, Math.min(100, parseInt(document.getElementById('prLowPct').value, 10) || 75));

  const errEl = document.getElementById('prErr');
  errEl.textContent = '';
  if(!dept){ errEl.textContent = 'Pick a department'; return false; }
  if(!years.length){ errEl.textContent = 'Tick at least one year'; return false; }
  if(!periods.length){ errEl.textContent = 'Tick at least one period'; return false; }

  let grandTotal=0, grandPresent=0, grandAbsent=0;
  const grandOd = {}; OD_TYPES.forEach(t=>grandOd[t]=0);
  const yearBlocks = [];
  let anyMarked = false;
  let allLeave = [], allLow = [];

  years.forEach(year=>{
    const list = currentListFor(dept, year);
    let yPresent=0, yAbsent=0; const yOd={}; OD_TYPES.forEach(t=>yOd[t]=0);
    const periodLines = [];
    periods.forEach(p=>{
      const {pP,pA,pOd,marked} = prTallyPeriod(dept, year, date, p);
      if(marked) anyMarked = true;
      const odTot = Object.values(pOd).reduce((a,b)=>a+b,0);
      yPresent += pP; yAbsent += pA;
      OD_TYPES.forEach(t=>yOd[t]+=pOd[t]);
      periodLines.push(`   ${ordinalPeriod(p)}: P ${pP} · A ${pA} · OD ${odTot}${marked?'':' (not marked)'}`);
    });
    const yOdTotal = Object.values(yOd).reduce((a,b)=>a+b,0);
    grandTotal += list.length; grandPresent += yPresent; grandAbsent += yAbsent;
    OD_TYPES.forEach(t=>grandOd[t]+=yOd[t]);
    yearBlocks.push(`${year} — Total ${list.length} · P ${yPresent} · A ${yAbsent} · OD ${yOdTotal}`, ...periodLines);

    allLeave = allLeave.concat(prContinuousLeave(dept, year, date, leaveDays).map(s=>({...s, year})));
    allLow = allLow.concat(prLowAttendance(dept, year, lowPct).map(r=>({...r, year})));
  });
  allLow.sort((a,b)=>a.pct-b.pct);

  const grandOdTotal = Object.values(grandOd).reduce((a,b)=>a+b,0);
  const periodLabel = periods.length===PERIODS.length ? 'All Periods (Full Day)' : periods.map(ordinalPeriod).join(', ');

  const lines = [
    `📨 PRINCIPAL REPORT`,
    `Department: ${dept}`,
    `Years: ${years.join(', ')}`,
    `Date: ${formatDateLabel(date)}`,
    `Period(s): ${periodLabel}`,
    ``,
    `Total Students: ${grandTotal}`,
    `Present: ${grandPresent}`,
    `Absent: ${grandAbsent}`,
    `On-Duty: ${grandOdTotal}`,
    ...OD_TYPES.filter(t=>grandOd[t]>0).map(t=>`   • ${t}: ${grandOd[t]}`),
  ];
  if(!anyMarked) lines.push(``, `⚠️ Attendance not marked for this scope yet.`);
  lines.push(``, `Year-wise & Period-wise:`, ...yearBlocks);
  lines.push(
    ``,
    `🔴 Continuous Absentees (${leaveDays}+ days): ${allLeave.length}`,
    ...(allLeave.length ? allLeave.map(s=>`   • ${s.name}${s.regno?' ('+s.regno+')':''} — ${s.year}`) : ['   • None']),
    ``,
    `🟠 Below ${lowPct}% Attendance: ${allLow.length}`,
    ...(allLow.length ? allLow.map(r=>`   • ${r.s.name}${r.s.regno?' ('+r.s.regno+')':''} — ${r.year} — ${r.pct.toFixed(1)}%`) : ['   • None']),
  );

  document.getElementById('prOutput').textContent = lines.join('\n');
  return true;
}

document.getElementById('prGenerateBtn').onclick = ()=>{
  const ok = prGenerate();
  if(ok === false) return;
  openShare(document.getElementById('prOutput').textContent);
};

// ================= BACKUP & RESTORE =================
const LAST_BACKUP_KEY = 'student_records_last_backup_v1';
document.getElementById('backupExportBtn').onclick = ()=>{
  const payload = {
    exportedAt: new Date().toISOString(),
    DATA, SUBJECTS, FACULTY, ATT, FAC_ATT, HOD_SCOPE, TIMETABLE, PERIOD_TIMES, TIMINGS, SUBJ_FAC_MAP, ALARM_SETTINGS,
    PROGRAM_OUTCOMES, OD_TYPES, NUM_PERIODS, APP_SETTINGS, DIARY, TASKS, COMBINED_GROUPS, MARKS, MOM, MARK_COMPONENTS, MARKS_CONVERT_MAX,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `campuscore_backup_${todayStr()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  try{ localStorage.setItem(LAST_BACKUP_KEY, Date.now().toString()); }catch(e){}
  toast('Backup downloaded');
  renderDashSettingsBanner();
};
document.getElementById('backupImportBtn').onclick = ()=>{
  // Restoring a backup replaces every store on the device — the single most
  // destructive action in the app — so it's gated behind the same PIN as
  // moving a subject, rather than left open to anyone who can tap the button.
  requireHodLogin(()=>{
    document.getElementById('backupFileInput').click();
  }, 'Restoring a backup replaces ALL data on this device. Enter the HOD PIN/Password to continue.');
};
document.getElementById('backupFileInput').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = evt=>{
    let payload;
    try{ payload = JSON.parse(evt.target.result); }
    catch(err){ toast('That file is not a valid backup'); return; }
    if(!payload || typeof payload !== 'object' || !payload.DATA){
      toast('That file is not a valid backup');
      return;
    }
    if(!confirm('Restoring this backup will replace ALL current data on this device (students, faculty, attendance, timetable, subjects, settings). Continue?')) return;
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload.DATA || {}));
      localStorage.setItem(SUBJECTS_KEY, JSON.stringify(payload.SUBJECTS || {}));
      localStorage.setItem(FACULTY_KEY, JSON.stringify(payload.FACULTY || {}));
      localStorage.setItem(ATT_KEY, JSON.stringify(payload.ATT || {}));
      localStorage.setItem(FAC_ATT_KEY, JSON.stringify(payload.FAC_ATT || {}));
      localStorage.setItem(HOD_SCOPE_KEY, JSON.stringify(payload.HOD_SCOPE || {}));
      localStorage.setItem(TIMETABLE_KEY, JSON.stringify(payload.TIMETABLE || {}));
      localStorage.setItem(PERIOD_TIMES_KEY, JSON.stringify(payload.PERIOD_TIMES || DEFAULT_PERIOD_TIMES));
      localStorage.setItem(TIMINGS_KEY, JSON.stringify(payload.TIMINGS || {general:{periods:payload.PERIOD_TIMES||DEFAULT_PERIOD_TIMES, shortBreak:{...DEFAULT_SHORT_BREAK}, lunch:{...DEFAULT_LUNCH}}, perYear:{}}));
      localStorage.setItem(SUBJ_FAC_KEY, JSON.stringify(payload.SUBJ_FAC_MAP || {}));
      localStorage.setItem(ALARM_KEY, JSON.stringify(payload.ALARM_SETTINGS || {enabled:false,faculty:'',subject:''}));
      if(payload.PROGRAM_OUTCOMES) localStorage.setItem(PROGRAM_OUTCOMES_KEY, JSON.stringify(payload.PROGRAM_OUTCOMES));
      if(payload.OD_TYPES) localStorage.setItem(OD_TYPES_KEY, JSON.stringify(payload.OD_TYPES));
      if(payload.NUM_PERIODS) localStorage.setItem(NUM_PERIODS_KEY, String(payload.NUM_PERIODS));
      if(payload.APP_SETTINGS) localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(payload.APP_SETTINGS));
      if(payload.DIARY) localStorage.setItem(DIARY_KEY, JSON.stringify(payload.DIARY));
      if(payload.TASKS) localStorage.setItem(TASKS_KEY, JSON.stringify(payload.TASKS));
      if(payload.COMBINED_GROUPS) localStorage.setItem(COMBINED_GROUPS_KEY, JSON.stringify(payload.COMBINED_GROUPS));
      if(payload.MARKS) localStorage.setItem(MARKS_KEY, JSON.stringify(payload.MARKS));
      if(payload.MOM) localStorage.setItem(MOM_KEY, JSON.stringify(payload.MOM));
      if(payload.MARK_COMPONENTS) localStorage.setItem(MARK_COMPONENTS_KEY, JSON.stringify(payload.MARK_COMPONENTS));
      if(payload.MARKS_CONVERT_MAX !== undefined) localStorage.setItem(MARKS_CONVERT_KEY, JSON.stringify(payload.MARKS_CONVERT_MAX));
      toast('Backup restored — reloading…');
      setTimeout(()=>location.reload(), 800);
    }catch(err){
      toast('Restore failed — storage error');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});


// ================= ARCHIVE OLD ATTENDANCE =================
// Moves attendance marked before a chosen date out of the live ATT store —
// the one object that grows forever and gets re-synced to the cloud on
// every single edit — into a downloaded JSON backup, then deletes it from
// ATT so the live app stays lighter. Purely a size/performance measure:
// students, faculty, marks, timetable, subjects etc. are never touched, and
// nothing is removed until after the backup file has been generated. Only
// attendance dates strictly before the chosen date are affected; reports,
// the Dashboard and OD Report simply won't see archived dates any more.
function archiveAttPreview(beforeDate){
  let dateCount = 0, recordCount = 0;
  Object.keys(ATT).forEach(dept=>{
    Object.keys(ATT[dept]||{}).forEach(y=>{
      Object.keys(ATT[dept][y]||{}).forEach(date=>{
        if(date < beforeDate){
          dateCount++;
          recordCount += Object.keys(ATT[dept][y][date]||{}).length;
        }
      });
    });
  });
  return {dateCount, recordCount};
}
function updateArchiveAttNote(){
  const before = document.getElementById('archiveAttBeforeDate').value;
  const note = document.getElementById('archiveAttNote');
  if(!before){ note.textContent = ''; return; }
  const {dateCount, recordCount} = archiveAttPreview(before);
  note.textContent = recordCount
    ? `${recordCount} period-record(s) across ${dateCount} date(s) will be archived and removed from the live app.`
    : 'No attendance found before this date — nothing to archive.';
}
document.getElementById('archiveAttBeforeDate').addEventListener('change', updateArchiveAttNote);
document.getElementById('archiveAttBtn').onclick = ()=>{
  const before = document.getElementById('archiveAttBeforeDate').value;
  if(!before){ toast('Pick a date first'); return; }
  const {dateCount, recordCount} = archiveAttPreview(before);
  if(!recordCount){ toast('No attendance found before this date'); return; }
  requireHodLogin(()=>{
    if(!confirm(`This downloads a backup of ${recordCount} period-record(s) across ${dateCount} date(s) marked before ${before}, then removes them from the live app — they'll no longer appear in reports, the Dashboard or OD Report. Keep the downloaded file safe. Continue?`)) return;

    // Collect the matching entries first, in the same dept/year/date shape
    // as the live store, so the file could be manually merged back in later.
    const archive = {};
    Object.keys(ATT).forEach(dept=>{
      Object.keys(ATT[dept]||{}).forEach(y=>{
        Object.keys(ATT[dept][y]||{}).forEach(date=>{
          if(date < before){
            if(!archive[dept]) archive[dept] = {};
            if(!archive[dept][y]) archive[dept][y] = {};
            archive[dept][y][date] = ATT[dept][y][date];
          }
        });
      });
    });

    const blob = new Blob([JSON.stringify({archivedAt:new Date().toISOString(), before, ATT:archive}, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `campuscore_attendance_archive_before_${before}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);

    // Only remove from the live store once the download has been kicked off.
    Object.keys(archive).forEach(dept=>{
      Object.keys(archive[dept]).forEach(y=>{
        Object.keys(archive[dept][y]).forEach(date=>{ delete ATT[dept][y][date]; });
        if(!Object.keys(ATT[dept][y]).length) delete ATT[dept][y];
      });
      if(ATT[dept] && !Object.keys(ATT[dept]).length) delete ATT[dept];
    });
    saveAttendance();

    document.getElementById('archiveAttBeforeDate').value = '';
    updateArchiveAttNote();
    toast(`Archived ${recordCount} period-record(s) — backup downloaded`);
    renderDashboard();
    if(currentView === 'hod') renderHOD();
  }, 'Archiving removes attendance from the live app. Enter the HOD PIN/Password to continue.');
};

switchView('dashboard');
} // end startApp()
