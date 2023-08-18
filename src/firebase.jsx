import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAINsm-Ka1lDd0NjdHjNS6rFG2dhdMyiUY",
  authDomain: "chatapp-5a937.firebaseapp.com",
  projectId: "chatapp-5a937",
  storageBucket: "chatapp-5a937.appspot.com",
  messagingSenderId: "915671325655",
  appId: "1:915671325655:web:d217d0ea305e2dacb20992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);