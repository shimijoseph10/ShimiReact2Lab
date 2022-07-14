// Import the functions you need from the SDKs you need
import  firebase from "firebase";
import "firebase/firestore";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBJ17W_-sySf8oLMcL0fN0QFclReZH4cjQ",
//   authDomain: "fir-auth4-8df2e.firebaseapp.com",
//   projectId: "fir-auth4-8df2e",
//   storageBucket: "fir-auth4-8df2e.appspot.com",
//   messagingSenderId: "1006750522645",
//   appId: "1:1006750522645:web:49c08efd8a3304b59a5d1c"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBJ17W_-sySf8oLMcL0fN0QFclReZH4cjQ",
  authDomain: "fir-auth4-8df2e.firebaseapp.com",
  projectId: "fir-auth4-8df2e",
  storageBucket: "fir-auth4-8df2e.appspot.com",
  messagingSenderId: "1006750522645",
  appId: "1:1006750522645:web:49c08efd8a3304b59a5d1c"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const fireDB = app.firestore();

export { auth, fireDB };