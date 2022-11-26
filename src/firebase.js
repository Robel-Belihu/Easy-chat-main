import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh34P8vdVFZJq9mdj6ACgkPURofxGt780",
  authDomain: "easy-chat-43051.firebaseapp.com",
  projectId: "easy-chat-43051",
  storageBucket: "easy-chat-43051.appspot.com",
  messagingSenderId: "727499866816",
  appId: "1:727499866816:web:a2c14fd8bea9a06873e325",
  measurementId: "G-6YSFJP14RR",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
