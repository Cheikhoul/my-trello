// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlZUi9TAWEggqB5JNKYnFHGMx1F91nSew",
  authDomain: "my-trello-83728.firebaseapp.com",
  projectId: "my-trello-83728",
  storageBucket: "my-trello-83728.appspot.com",
  messagingSenderId: "175789499106",
  appId: "1:175789499106:web:993b16ece73c97e9deb4bb",
  measurementId: "G-QH8MLHS6RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);