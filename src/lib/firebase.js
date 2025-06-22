import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ⚠️ Replace these values with your Firebase project's config
const firebaseConfig = {
 apiKey: "AIzaSyBeeg0cgcQyU52xHPkeujRJHyCyfQTR9G8",
  authDomain: "road-21115.firebaseapp.com",
  projectId: "road-21115",
  storageBucket: "road-21115.appspot.com",
  messagingSenderId: "981078402640",
  appId: "1:981078402640:web:ba1f2d3823262cf9085355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth instances
export const db = getFirestore(app);
export const auth = getAuth(app);