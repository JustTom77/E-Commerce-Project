import firebase from "firebase/app";
// um zugriff auf die unten aufgeführten Importe zu haben, muss der oben aufgeführte Firebase Import stattfinden
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
  // Diese Konfiguration ist in den Projekteinstellungen auf Firebase zu finden
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  //Wenn kein userAuth objekt vorhanden ist beende diese Funktion
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch ({ error }) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

// um die authentication als auch den Firestore außerhalb dieser Datei nutzen zu können werden sie exportiert
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
// 1. zugriff auf die "GoogleAuthProvider()" Methode ermöglichen, die uns die auth-library zur verfügung stellt
const provider = new firebase.auth.GoogleAuthProvider();
// 2. durch die "setCustomParameters()" Methode festlegen, das jedesmal beim nutzen der "GoogleAuthProvider()-Methode" das "google Anmeldefenster" öffnet
provider.setCustomParameters({ prompt: "select_account" });
// 3. exportieren der "signInWithGoogle" Methode welche wiederum die "signInWithPopup()" Methode nutzt welche als Parameter die zuvor erstellte provider-authentication nutzt
export const signInWithGoogle = () => auth.signInWithPopup(provider);
// jetzt in der Firebase-Konsole dieses Projektes unter Authentication google Sign In Methode aktivieren
// und dann "signInWithGoogle" in die "sign-in.component" importieren
export default firebase;
