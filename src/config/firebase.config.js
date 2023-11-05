// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYt0DiZd2dX4Vz978KwYjiMNG4Ej-XLdM",
  authDomain: "micro-donation-40d62.firebaseapp.com",
  projectId: "micro-donation-40d62",
  storageBucket: "micro-donation-40d62.appspot.com",
  messagingSenderId: "664247467823",
  appId: "1:664247467823:web:97e8afe73261b9ed52ebda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
