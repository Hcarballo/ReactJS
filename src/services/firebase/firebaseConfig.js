import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "morewine-2c2d6.firebaseapp.com",
  projectId: "morewine-2c2d6",
  storageBucket: "morewine-2c2d6.appspot.com",
  messagingSenderId: "600226182913",
  appId: "1:600226182913:web:3a2bd8e0bcb25a3da04d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbmorewine = getFirestore(app);

// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();