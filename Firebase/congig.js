import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCY9CWVRZ_4Hi6CThakbBw_dO3DOriJMmE",
    authDomain: "moviesearch-19550.firebaseapp.com",
    databaseURL: "https://moviesearch-19550-default-rtdb.firebaseio.com/",
    projectId: "moviesearch-19550",
    storageBucket: "moviesearch-19550.appspot.com",
    messagingSenderId: "264010916867",
    appId: "1:264010916867:web:d156296c0fbe395bef5a36",
    measurementId: "G-ERYBQW5LP3"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export {firebase}