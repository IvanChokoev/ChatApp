// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// My web app's Firebase configuration

//If you run the project like this you will be using my Firebase DB

// If anyone wants to use their own firebase DB they need to  change the code below with your own firebase DB
// located in the App Project information in FireBase

export const environment = {
  firebase:{
  apiKey: "AIzaSyBq5Ycxuj6ZD5peACUja5Jq94ph_nmW1xo",
  authDomain: "firechatapp-804f2.firebaseapp.com",
  databaseURL: "https://firechatapp-804f2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firechatapp-804f2",
  storageBucket: "firechatapp-804f2.appspot.com",
  messagingSenderId: "867968632264",
  appId: "1:867968632264:web:0f44550813676382822cfd"
},
  production: false
};

