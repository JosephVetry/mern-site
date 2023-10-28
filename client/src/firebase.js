// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-57067.firebaseapp.com",
  projectId: "mern-estate-57067",
  storageBucket: "mern-estate-57067.appspot.com",
  messagingSenderId: "521002522279",
  appId: "1:521002522279:web:f5bb725628f0e5aa872d82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);