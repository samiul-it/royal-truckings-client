// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPu9hsLpyKWcqT1IgUadT7PN5GgLcxBDQ",
  authDomain: "royal-truckings.firebaseapp.com",
  projectId: "royal-truckings",
  storageBucket: "royal-truckings.appspot.com",
  messagingSenderId: "485619204534",
  appId: "1:485619204534:web:677b969b9845085c7c4117",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

export default auth;
