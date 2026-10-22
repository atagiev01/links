// Firebase SDK modulları
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase konfiqurasiyanız
const firebaseConfig = {
  apiKey: "AIzaSyCMMGMCp_afJQpTS7fTP9fIpGn_RCHPBkc",
  authDomain: "log-a-67e94.firebaseapp.com",
  projectId: "log-a-67e94",
  storageBucket: "log-a-67e94.firebasestorage.app",
  messagingSenderId: "240649718791",
  appId: "1:240649718791:web:7ebb632e73ea84c0f4eea2",
  measurementId: "G-2BNE5K8HY7"
};

// İnisiallaşdırma
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Digər fayllarda rahat istifadə üçün eksportlar
export { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot 
};