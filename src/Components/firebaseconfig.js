import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyD1ZmK-UnL83DJNQ7NLFOlR_MgygBBS3KI",
  authDomain: "technicalkrish-cadab.firebaseapp.com",
  databaseURL: "https://technicalkrish-cadab-default-rtdb.firebaseio.com",
  projectId: "technicalkrish-cadab",
  storageBucket: "technicalkrish-cadab.appspot.com",
  messagingSenderId: "531745204106",
  appId: "1:531745204106:web:31d4ecdf7702f44557ca73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {database,ref,set,getDatabase,auth,createUserWithEmailAndPassword}