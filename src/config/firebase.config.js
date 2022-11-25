// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVsUBHm1_Zxrf3heLQCArdPmTisWtRnfU",
  authDomain: "laptop-mart-388bb.firebaseapp.com",
  projectId: "laptop-mart-388bb",
  storageBucket: "laptop-mart-388bb.appspot.com",
  messagingSenderId: "105365781",
  appId: "1:105365781:web:296bfa80aa8e8f95b5691c",

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
