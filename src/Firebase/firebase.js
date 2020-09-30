import app from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDuNtxU1T9kzQzWgvmdqBzfW7RQJO2K0Xk",
  authDomain: "dyfi-manusham.firebaseapp.com",
  databaseURL: "https://dyfi-manusham.firebaseio.com",
  projectId: "dyfi-manusham",
  storageBucket: "dyfi-manusham.appspot.com",
  messagingSenderId: "382257477258",
  appId: "1:382257477258:web:d266582721554d797b1f73",
  measurementId: "G-VCKKYH4J2D"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
  }

  addusers = () =>
    this.db.doc("users").set({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
}
export default Firebase;
