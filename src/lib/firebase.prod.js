import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyB4nj6A7dzQJWlM6ZCeRCvk-gdYv0freGw",
  authDomain: "netflix-c388e.firebaseapp.com",
  databaseURL: "https://netflix-c388e.firebaseio.com",
  projectId: "netflix-c388e",
  storageBucket: "netflix-c388e.appspot.com",
  messagingSenderId: "502585151716",
  appId: "1:502585151716:web:caff792e3facbd6ae61cf1",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
