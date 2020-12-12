import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD32vx7W06Zh8Rs5yA_GTGuP4g20OqZZQc",
    authDomain: "wireless-library-c763c.firebaseapp.com",
    projectId: "wireless-library-c763c",
    storageBucket: "wireless-library-c763c.appspot.com",
    messagingSenderId: "87571919755",
    appId: "1:87571919755:web:6f9819ac83ca26fd2e358e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();