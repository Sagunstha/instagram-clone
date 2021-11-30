 import firebase from "firebase/compat";


 const firebaseConfig = {
    apiKey: "AIzaSyD_jqZ4QQs4Lzzjvdwb__Ed3v38so_lgbs",
    authDomain: "instagram-clone-react-4a30b.firebaseapp.com",
    projectId: "instagram-clone-react-4a30b",
    storageBucket: "instagram-clone-react-4a30b.appspot.com",
    messagingSenderId: "22892787254",
    appId: "1:22892787254:web:5fb31cfe33bc3f2bda4a97",
    measurementId: "G-XBCRD5YSLE"
      
 };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();
 export { db, auth, storage};

 // export default db;