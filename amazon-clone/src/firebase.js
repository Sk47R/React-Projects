// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVJNFg52h73Ij7KMA_BkZIdFl3u5zT7C0",
  authDomain: "e-clone-afeb1.firebaseapp.com",
  projectId: "e-clone-afeb1",
  storageBucket: "e-clone-afeb1.appspot.com",
  messagingSenderId: "8831345887",
  appId: "1:8831345887:web:afee31736d696cc0d7356a",
  measurementId: "G-W4F45LML8T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
