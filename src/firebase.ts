// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbYqOX5aitCgbYJ-HSuTiBnhTSoZZ3gII",
  authDomain: "caesarblueapp.firebaseapp.com",
  projectId: "caesarblueapp",
  storageBucket: "caesarblueapp.firebasestorage.app",
  messagingSenderId: "992022882957",
  appId: "1:992022882957:web:a50adbfbc5f2cadcf310c4"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);