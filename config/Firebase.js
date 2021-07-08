import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBP7JN8gJkdLwUk108uovH4J4qiBiIEk78",
    authDomain: "fir-afdcf.firebaseapp.com",
    databaseURL: "https://fir-afdcf.firebaseio.com",
    projectId: "fir-afdcf",
    storageBucket: "fir-afdcf.appspot.com",
    messagingSenderId: "687958996505",
    appId: "1:687958996505:web:adef039902fb61dd4e5c88",
    measurementId: "G-DCW1YF24GG"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;