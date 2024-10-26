// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBn73lsiE9w_gpLFv4MS70iIrGe4b1gBbQ",
    authDomain: "kamalrealworld.firebaseapp.com",
    projectId: "kamalrealworld",
    storageBucket: "kamalrealworld.appspot.com",
    messagingSenderId: "694838098638",
    appId: "1:694838098638:web:466765fbe1888a73632e9f",
    measurementId: "G-TD29YBP18H"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
