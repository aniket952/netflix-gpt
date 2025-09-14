// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6KpjURgs_mSupculV_fuXdvDiYQY0k6s",
  authDomain: "netflixgpt-bf19c.firebaseapp.com",
  projectId: "netflixgpt-bf19c",
  storageBucket: "netflixgpt-bf19c.firebasestorage.app",
  messagingSenderId: "285962700128",
  appId: "1:285962700128:web:c684699d8af32f64af0a05",
  measurementId: "G-SCYH8EH40H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)