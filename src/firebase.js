
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJIaeLdwqbCa9oQC7kGSpCJ-P6edW3MXM",
    authDomain: "auth-3c07c.firebaseapp.com",
    projectId: "auth-3c07c",
    storageBucket: "auth-3c07c.appspot.com",
    messagingSenderId: "208702557215",
    appId: "1:208702557215:web:9b8c3d7872c042ee43992a",
    measurementId: "G-52RBMHG9W1"
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };