import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWCrMh97dz12OgRJNzJLvPid3e-a4lQQM",
    authDomain: "smartcampus-92eba.firebaseapp.com",
    projectId: "smartcampus-92eba",
    storageBucket: "smartcampus-92eba.firebasestorage.app",
    messagingSenderId: "112518567132",
    appId: "1:112518567132:web:853fe430420e2c5bcc1019",
    measurementId: "G-LY2K9092ER"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
