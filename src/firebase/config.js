// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80EuBbzh073v9_VtgD5nj4qxviMHq3cw",
  authDomain: "redux-login-8b36c.firebaseapp.com",
  projectId: "redux-login-8b36c",
  storageBucket: "redux-login-8b36c.appspot.com",
  messagingSenderId: "491904506108",
  appId: "1:491904506108:web:5e842e78d6a855ba6b5f79"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);