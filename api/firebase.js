// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmDsjwftrg3srHEg8mMDJp7STHlWfo4aE",
  authDomain: "edu-11-26eb3.firebaseapp.com",
  projectId: "edu-11-26eb3",
  storageBucket: "edu-11-26eb3.firebasestorage.app",
  messagingSenderId: "95142567242",
  appId: "1:95142567242:web:24bc4ae9844e9085f075b3",
  measurementId: "G-WD67MMFQ0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);