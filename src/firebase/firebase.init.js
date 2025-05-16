// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEc_Mxuaixi-UnE1S069VDYM3kAPmZflo",
  authDomain: "coffee-store-app-c2cf8.firebaseapp.com",
  projectId: "coffee-store-app-c2cf8",
  storageBucket: "coffee-store-app-c2cf8.firebasestorage.app",
  messagingSenderId: "907249323476",
  appId: "1:907249323476:web:ab9a6ad7ebed92973c1a41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
