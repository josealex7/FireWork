import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArJXEMz4DOOPiKEYdy0UUQVcX82k9K434",
  authDomain: "firework-78c98.firebaseapp.com",
  projectId: "firework-78c98",
  storageBucket: "firework-78c98.appspot.com",
  messagingSenderId: "241201879415",
  appId: "1:241201879415:web:2f2f4a87839c483c542972"
};

const app = initializeApp(firebaseConfig);
const google  = new GoogleAuthProvider();

export {
    app,
    google
}