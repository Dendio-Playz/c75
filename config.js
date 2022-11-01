import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD_Cvzn5y7FhzPp7niqty6iywwD-6u27n0",
  authDomain: "elibrary-1d21d.firebaseapp.com",
  projectId: "elibrary-1d21d",
  storageBucket: "elibrary-1d21d.appspot.com",
  messagingSenderId: "707335099318",
  appId: "1:707335099318:web:d708bafa7e541ec9402717"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
