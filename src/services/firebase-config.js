import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCou2-LztarmUTiSrHCsl8_2BOq5q9IZbs",
  authDomain: "app-scoop-32223.firebaseapp.com",
  databaseURL: "https://app-scoop-32223-default-rtdb.firebaseio.com",
  projectId: "app-scoop-32223",
  storageBucket: "app-scoop-32223.appspot.com",
  messagingSenderId: "818653950952",
  appId: "1:818653950952:web:e96fd1463d3d20e13a6a5d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);