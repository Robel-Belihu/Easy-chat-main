import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWPH6Oxzc0kt0A1obtGJScZDGJibcfNyY",
  authDomain: "tryout-66924.firebaseapp.com",
  projectId: "tryout-66924",
  storageBucket: "tryout-66924.appspot.com",
  messagingSenderId: "543992358091",
  appId: "1:543992358091:web:6d7f6c8221717142d1274e",
  measurementId: "G-NMYV2XGLNX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
