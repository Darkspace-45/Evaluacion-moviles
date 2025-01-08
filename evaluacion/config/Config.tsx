import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAGMV1nFEMxQ3hTAEYe-W4V4g0_EX6mZ_s",
    authDomain: "ejercicio-firebase-56211.firebaseapp.com",
    databaseURL: "https://ejercicio-firebase-56211-default-rtdb.firebaseio.com",
    projectId: "ejercicio-firebase-56211",
    storageBucket: "ejercicio-firebase-56211.firebasestorage.app",
    messagingSenderId: "543904236940",
    appId: "1:543904236940:web:d38b66ddd27ffd327a42a9",
    measurementId: "G-FTHSMLRZ04"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();