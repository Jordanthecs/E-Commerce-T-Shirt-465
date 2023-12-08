// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjS8LTJ-8g68lt8ggLK76b63Q87Mv1Bxw",
  authDomain: "computercodewars.firebaseapp.com",
  projectId: "computercodewars",
  storageBucket: "computercodewars.appspot.com",
  messagingSenderId: "439371850988",
  appId: "1:439371850988:web:49827f72cc40809a11f1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);