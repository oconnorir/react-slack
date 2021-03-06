import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCUG0_VNskVphZYb-Bf_EQ6f5KcghvsuAI",
    authDomain: "react-slack-56d3d.firebaseapp.com",
    projectId: "react-slack-56d3d",
    storageBucket: "react-slack-56d3d.appspot.com",
    messagingSenderId: "727305501288",
    appId: "1:727305501288:web:6d144615667905bad659dd",
    measurementId: "G-C1HVNZ5Z42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


export default firebase;
