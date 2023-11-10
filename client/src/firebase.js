import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_iRi3XUunPeuCDJb2pAHF6DK06EKzR2Y",
  authDomain: "bar-games-43938.firebaseapp.com",
  projectId: "bar-games-43938",
  storageBucket: "bar-games-43938.appspot.com",
  messagingSenderId: "300599756247",
  appId: "1:300599756247:web:371766c892e8544e49f792",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
