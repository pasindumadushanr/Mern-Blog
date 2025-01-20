// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e7584.firebaseapp.com",
  projectId: "mern-blog-e7584",
  storageBucket: "mern-blog-e7584.firebasestorage.app",
  messagingSenderId: "556001236009",
  appId: "1:556001236009:web:770b7d0c35f03e7ff0b838"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

