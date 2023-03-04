// import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

import { FIREBASE_API_KEY, FIREBASE_APP_ID } from "@env";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "bitebuddies-38265.firebaseapp.com",
  projectId: "bitebuddies-38265",
  storageBucket: "bitebuddies-38265.appspot.com",
  messagingSenderId: "593368800511",
  appId: FIREBASE_APP_ID,
  measurementId: "G-NXWW1QT3WY",
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
