// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFvSopqo9pGM0Fev8C_1w7hfEvCDYMRTk",
    authDomain: "reactfirbaseproject.firebaseapp.com",
    databaseURL: "https://reactfirbaseproject-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactfirbaseproject",
    storageBucket: "reactfirbaseproject.firebasestorage.app",
    messagingSenderId: "985525671987",
    appId: "1:985525671987:web:dd819af0f8c4ebc681eb46",
    measurementId: "G-HHB6Z7BD24"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;