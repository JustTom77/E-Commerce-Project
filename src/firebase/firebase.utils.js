import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvhCS01GssQZXHglLW9Arg0L4728uUm6A",
  authDomain: "crwn-db-23b8d.firebaseapp.com",
  projectId: "crwn-db-23b8d",
  storageBucket: "crwn-db-23b8d.appspot.com",
  messagingSenderId: "131902240882",
  appId: "1:131902240882:web:447ac658a8e62c0f4e6aeb",
  measurementId: "G-0VSDVJS2YE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
