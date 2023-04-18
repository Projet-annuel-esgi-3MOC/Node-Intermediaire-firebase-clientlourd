// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVrgA8IrmKNFTx4HIppI2ufX2LrXYd9sY",
    authDomain: "cookup-afee1.firebaseapp.com",
    databaseURL: "https://cookup-afee1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cookup-afee1",
    storageBucket: "cookup-afee1.appspot.com",
    messagingSenderId: "667379681746",
    appId: "1:667379681746:web:508f8ccc1c34af7057a00b",
    measurementId: "G-KQXNXZ6745"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const analytics = getAnalytics(app);




