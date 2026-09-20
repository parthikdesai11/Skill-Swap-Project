// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWIwvD67sIA7kNhVkKjR908fDloIeghKs",
  authDomain: "skill-swap-6303e.firebaseapp.com",
  projectId: "skill-swap-6303e",
  storageBucket: "skill-swap-6303e.firebasestorage.app",
  messagingSenderId: "617706957124",
  appId: "1:617706957124:web:27501868ebc77fa97f0f11",
  measurementId: "G-2897SMFJGE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);


// Firestore Database
const db = getFirestore(app);


export { auth, db };