// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0TUDAYdtIYUgySnY2Bm_6O4p_ChM6wU",
  authDomain: "ecomerce-coderhouse-5b489.firebaseapp.com",
  projectId: "ecomerce-coderhouse-5b489",
  storageBucket: "ecomerce-coderhouse-5b489.appspot.com",
  messagingSenderId: "569570056849",
  appId: "1:569570056849:web:7404438b5be1510a647d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the database
export const db = getFirestore(app)
