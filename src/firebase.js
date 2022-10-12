// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAh34P8vdVFZJq9mdj6ACgkPURofxGt780",
    authDomain: "easy-chat-43051.firebaseapp.com",
    projectId: "easy-chat-43051",
    storageBucket: "easy-chat-43051.appspot.com",
    messagingSenderId: "727499866816",
    appId: "1:727499866816:web:a2c14fd8bea9a06873e325",
    measurementId: "G-6YSFJP14RR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;