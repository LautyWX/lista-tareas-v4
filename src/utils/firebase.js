// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvRubPFnTM0hQejpO4swx7uLVW30o5hxs",
  authDomain: "task-app-2bddc.firebaseapp.com",
  projectId: "task-app-2bddc",
  storageBucket: "task-app-2bddc.appspot.com",
  messagingSenderId: "273786680041",
  appId: "1:273786680041:web:9e4ada8f508af057f1b678",
  measurementId: "G-MKMN5QKHC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore(); //db