// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9NS5hE0F-zViFJEL2nYS7UjLnpei3W_A",
  authDomain: "maktabatussalam-450a8.firebaseapp.com",
  projectId: "maktabatussalam-450a8",
  storageBucket: "maktabatussalam-450a8.appspot.com",
  messagingSenderId: "329054134745",
  appId: "1:329054134745:web:4bc3de3d1723027b61f9c8",
  measurementId: "G-T924MYGXK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

