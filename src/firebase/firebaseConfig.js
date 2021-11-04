import { firebase } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDzBVuhfiNDVXaCCoYqrpjG-LxPvAnibmg",
    authDomain: "appreact-ccd3d.firebaseapp.com",
    projectId: "appreact-ccd3d",
    storageBucket: "appreact-ccd3d.appspot.com",
    messagingSenderId: "210213125707",
    appId: "1:210213125707:web:ea97a6ac2e1b3dad8d57ce",
    measurementId: "G-XMBMKZ7CL6"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);  //base de datos
  const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);


//grbar información y google auth provider
const db = firebase.firestore();  //referencia a firestore
const googleAuthProvider = new firebase.auth().GoogleAuthProvider(); //poder hacer autenticación con google

export {
    app,
    analytics,
    db,
    googleAuthProvider
}