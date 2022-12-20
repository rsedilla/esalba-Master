import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3-KNNhml5YoFbaAF1d2cjaUiJCwQ09ss",
  authDomain: "esalba-286f0.firebaseapp.com",
  projectId: "esalba-286f0",
  storageBucket: "esalba-286f0.appspot.com",
  messagingSenderId: "477177887141",
  appId: "1:477177887141:web:112c7cb45e71689c89904c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
