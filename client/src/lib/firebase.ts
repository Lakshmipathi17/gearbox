// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXgshbdjxG67R_gr6JUg_Z8MmRUYC-wHk",
  authDomain: "framo-a2f1f.firebaseapp.com",
  projectId: "framo-a2f1f",
  storageBucket: "framo-a2f1f.appspot.com",
  messagingSenderId: "471229428340",
  appId: "1:471229428340:web:197b563fc5235a0d7b1721"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth();
export const db =getFirestore();
export const storage = getStorage();