// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtMMwFUzCQSllP1vc0TX40VdgnnBc0JmI",
  authDomain: "tech-fleet-b7d86.firebaseapp.com",
  projectId: "tech-fleet-b7d86",
  storageBucket: "tech-fleet-b7d86.appspot.com",
  messagingSenderId: "642081568462",
  appId: "1:642081568462:web:e9a7fd162e41b76f9a829f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;