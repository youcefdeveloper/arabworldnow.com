// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhoxK1DxcyqFmJoW0jbXmtJcEschewDsw",
  authDomain: "arab-world-now.firebaseapp.com",
  projectId: "arab-world-now",
  storageBucket: "arab-world-now.firebasestorage.app",
  messagingSenderId: "1071839973322",
  appId: "1:1071839973322:web:81ef4eba89b4748355c933",
  measurementId: "G-X2L7KDH002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);