
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGXaJFNQi_itSVd_oHCF6hLfCm7uX_fIw",
    authDomain: "portfolio-b8118.firebaseapp.com",
    projectId: "portfolio-b8118",
    storageBucket: "portfolio-b8118.appspot.com",
    messagingSenderId: "718748624403",
    appId: "1:718748624403:web:58df9580a5a38557ba41e6",
    measurementId: "G-QT53V9GWPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;