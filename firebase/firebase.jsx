// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDTExhBna-c7ZRx_Ch3UADriiUYC1C1TcE",
//   authDomain: "finworld-c2ac7.firebaseapp.com",
//   projectId: "finworld-c2ac7",
//   storageBucket: "finworld-c2ac7.appspot.com",
//   messagingSenderId: "683031987127",
//   appId: "1:683031987127:web:8fe9a736156ec3530f1e32",
//   measurementId: "G-G82HPNYBF7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);

// export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



// Your web app's Firebase configuration (Replace with your actual config values)

const firebaseConfig = {
  apiKey: "AIzaSyBn73lsiE9w_gpLFv4MS70iIrGe4b1gBbQ",
  authDomain: "kamalrealworld.firebaseapp.com",
  projectId: "kamalrealworld",
  storageBucket: "kamalrealworld.appspot.com",
  messagingSenderId: "694838098638",
  appId: "1:694838098638:web:466765fbe1888a73632e9f",
  measurementId: "G-TD29YBP18H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export const auth = getAuth(app);
