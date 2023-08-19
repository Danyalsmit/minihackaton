
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTTpC5sHhIP9Bpv_fUEnkgCrqn-MIiZeQ",
  authDomain: "first-project-5918a.firebaseapp.com",
  databaseURL: "https://first-project-5918a-default-rtdb.firebaseio.com",
  projectId: "first-project-5918a",
  storageBucket: "first-project-5918a.appspot.com",
  messagingSenderId: "982868090831",
  appId: "1:982868090831:web:f1a939f8387db1fc1efcba",
  measurementId: "G-SHRFJ8PBX6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


