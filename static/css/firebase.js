// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyCz3ucV1yOTLNrUM00Fob6gXMPlsdVB0",
  authDomain: "loginauthentication-5ab4b.firebaseapp.com",
  projectId: "loginauthentication-5ab4b",
  storageBucket: "loginauthentication-5ab4b.appspot.com",
  messagingSenderId: "364851649374",
  appId: "1:364851649374:web:22036cbbb278e0888d4dcf"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);