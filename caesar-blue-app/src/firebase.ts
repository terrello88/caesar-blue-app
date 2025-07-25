import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbYqOX5aitCgbYJ-HSuTiBnhTSoZZ3gII",
  authDomain: "caesarblueapp.firebaseapp.com",
  projectId: "caesarblueapp",
  storageBucket: "caesarblueapp.appspot.com",
  messagingSenderId: "992022882957",
  appId: "1:992022882957:web:a50adbfbc5f2cadcf310c4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
