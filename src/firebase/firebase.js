import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANfL6BLMXbw6IPPPkE84BWNekEmZUeK0s",
  authDomain: "redux-learning-20b7d.firebaseapp.com",
  projectId: "redux-learning-20b7d",
  storageBucket: "redux-learning-20b7d.appspot.com",
  messagingSenderId: "590026322598",
  appId: "1:590026322598:web:e92af235918205d0affa67",
  measurementId: "G-MCQCJNV94F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
