
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD4LYBmkrxuUMu8gUG6V7d_LBJ6gkFyGE8",
  authDomain: "meal-c5f39.firebaseapp.com",
  projectId: "meal-c5f39",
  storageBucket: "meal-c5f39.appspot.com",
  messagingSenderId: "803235921803",
  appId: "1:803235921803:web:2284336747a007f945798e",
  measurementId: "G-5HX9RW8NHP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);