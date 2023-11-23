import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkUnLIO5FT0rmVBFbjQIxZ-0KxoNzRl-c",
  authDomain: "linkedin-clone-33ad1.firebaseapp.com",
  projectId: "linkedin-clone-33ad1",
  storageBucket: "linkedin-clone-33ad1.appspot.com",
  messagingSenderId: "107859159843",
  appId: "1:107859159843:web:3ef40f2f36562e2857ba96",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
