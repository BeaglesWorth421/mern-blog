// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b98d4.firebaseapp.com",
  projectId: "mern-blog-b98d4",
  storageBucket: "mern-blog-b98d4.appspot.com",
  messagingSenderId: "53848337954",
  appId: "1:53848337954:web:3f9d2d1530fc6818b3247b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);