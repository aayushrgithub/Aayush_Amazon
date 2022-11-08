import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2cg7aHyj2jAoDmj4PSU2f6UrRdjT_W2c",
  authDomain: "challenge-57d84.firebaseapp.com",
  projectId: "challenge-57d84",
  storageBucket: "challenge-57d84.appspot.com",
  messagingSenderId: "435603087225",
  appId: "1:435603087225:web:7a916022f838566dc519a8",
  measurementId: "G-V2TNM891YX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();  // firestore is real time database in firebase;
const auth = firebase.auth();

export { db, auth };
