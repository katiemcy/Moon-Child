
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBn6_HRVAv_VdmnVIzX2Tu05WlrjD2GSRo",
  authDomain: "moon-child-bd5d6.firebaseapp.com",
  databaseURL: "https://moon-child-bd5d6-default-rtdb.firebaseio.com",
  projectId: "moon-child-bd5d6",
  storageBucket: "moon-child-bd5d6.appspot.com",
  messagingSenderId: "935118099454",
  appId: "1:935118099454:web:a246b38727e2192b8766af"
};


const firebase = initializeApp(firebaseConfig);


export default firebase;