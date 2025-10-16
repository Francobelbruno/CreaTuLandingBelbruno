// Firebase initialization for Vite + React
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm-pfo2vvlkm0faOO4V0yrGQgl-9QzmIc",
  authDomain: "coder-flex-belbruno.firebaseapp.com",
  projectId: "coder-flex-belbruno",
  storageBucket: "coder-flex-belbruno.firebasestorage.app",
  messagingSenderId: "83517247557",
  appId: "1:83517247557:web:7717b40be0d3a4e57a132c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Export Firestore DB instance for app usage
