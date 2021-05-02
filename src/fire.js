import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCbPiKtr1YHIAqX7R1VPbEO-DaSITat0Kk",
  authDomain: "geo-bot-13214345436.firebaseapp.com",
  projectId: "geo-bot-13214345436",
  storageBucket: "geo-bot-13214345436.appspot.com",
  messagingSenderId: "846162857790",
  appId: "1:846162857790:web:99b55fcdb3abb2b2bfe66f",
  measurementId: "G-V9JF82ESRN"
};

var database = firebase.initializeApp(firebaseConfig);

export default database;