import { initializeApp } from "@firebase/app";
import { Firestore } from "@firebase/firestore";
import { GoogleAuthProvider } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAV9_bcqDdOKR24HGgV9ygXnCIj_6Jj9cs",
  authDomain: "tuprofe-277d1.firebaseapp.com",
  projectId: "tuprofe-277d1",
  storageBucket: "tuprofe-277d1.appspot.com",
  messagingSenderId: "820110673139",
  appId: "1:820110673139:web:ea7ac0fa4c3f591863a386",
  measurementId: "G-4CNX7P8ZS5"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export {
  provider,
  app
}




export default firebaseConfig;