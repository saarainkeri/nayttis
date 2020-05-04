import * as firebase from "firebase/app";
import "firebase/firestore";

  var config = {
    apiKey: "AIzaSyBpPikTf_HwrPYj5e4AMLHUeUUOsMB5ZEM",
    authDomain: "babyyoda-fe27c.firebaseapp.com",
    databaseURL: "https://babyyoda-fe27c.firebaseio.com",
    projectId: "babyyoda-fe27c",
    storageBucket: "babyyoda-fe27c.appspot.com",
    messagingSenderId: "473415848882",
   
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export default firebase;
