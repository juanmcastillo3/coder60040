// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: [import.meta.env.VITE_API_KEY],
  authDomain: "jabar-script.firebaseapp.com",
  projectId: "jabar-script",
  storageBucket: "jabar-script.appspot.com",
  messagingSenderId: [import.meta.env.VITE_MESSAGINGSENDERID],
  appId: [import.meta.env.VITE_APP_ID],
  measurementId: [import.meta.env.VITE_MEASUREMENT_ID]
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);