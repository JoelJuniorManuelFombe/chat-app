// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import App from "./pages/_app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKzWnLfB9xwcYBDVPHDAQitTsYdzjv_dc",
  authDomain: "chat-app-728ed.firebaseapp.com",
  projectId: "chat-app-728ed",
  storageBucket: "chat-app-728ed.appspot.com",
  messagingSenderId: "778206304428",
  appId: "1:778206304428:web:e8243d3d56616e68796709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();