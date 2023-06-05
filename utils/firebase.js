
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnSsbB_iQVylQM2otVOWK8iTQjT7ZvkAo",
  authDomain: "ai-image-4df4c.firebaseapp.com",
  projectId: "ai-image-4df4c",
  storageBucket: "ai-image-4df4c.appspot.com",
  messagingSenderId: "145248719954",
  appId: "1:145248719954:web:a0a5a86d3beacd96517b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
