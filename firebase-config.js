// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-WQKa-8ExuTC3oBgGMIc7v_BbLhxWwbg",
  authDomain: "maireabomey.firebaseapp.com",
  databaseURL: "https://maireabomey-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maireabomey",
  storageBucket: "maireabomey.firebasestorage.app",
  messagingSenderId: "1836378114",
  appId: "1:1836378114:web:ede0f4cd347100c9091f1b"
};

const app = initializeApp(firebaseConfig);
export { app };