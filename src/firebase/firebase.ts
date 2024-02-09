import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDrYHlxOsBk89HNhopE7Kd9NMj9GskRsoI",
  authDomain: "leetcode-b1b0c.firebaseapp.com",
  projectId: "leetcode-b1b0c",
  storageBucket: "leetcode-b1b0c.appspot.com",
  messagingSenderId: "90631931966",
  appId: "1:90631931966:web:0741728258cd07d111296f",
  measurementId: "G-3XV73584RR"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
