import React, { useEffect, useState } from "react";
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import call from "./call.svg";
import whatsapp from "./whatsapp.svg";

import { useAuthState } from "react-firebase-hooks/auth";
import BloodIcon from "./BloodIcon";

function ListView() {
  const auth = app.auth();
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(`logged`);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="App">
      {user ? (
        <List />
      ) : (
        <div id="form-div">
          <h1>DYFI Puliyancheri</h1>
          <h3>View Donors</h3>
          <form className="form">
            <p className="name">
              <input
                type="email"
                value={email}
                className="feedback-input"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </p>
            <p className="name">
              <input
                type="password"
                value={password}
                className="feedback-input"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </p>
            <div className="submit">
              <input
                type="submit"
                value="Login"
                id="button-blue"
                onClick={(e) => {
                  e.preventDefault();
                  validate();
                }}
              />
              <div className="ease" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

function List() {
  const firestore = app.firestore();
  const donorsRef = firestore.collection("users");
  const [blood, setBlood] = useState("");
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    if (blood) {
      donorsRef
        .where("blood", "==", blood)
        .get()
        .then((querySnapshot) => {
          let array = [];
          querySnapshot.forEach((doc) => {
            array.push(doc.data());
          });
          setDonors(array);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } else {
      donorsRef
        .get()
        .then((querySnapshot) => {
          let array = [];
          querySnapshot.forEach((doc) => {
            array.push(doc.data());
          });
          setDonors(array);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blood]);

  return (
    <>
      <div id="form-div">
        <h1>DYFI Puliyancheri</h1>
        <h3>Blood Donors</h3>
        <form className="form">
          <select
            id="name"
            className="feedback-input"
            onChange={(e) => {
              setBlood(e.target.value);
            }}
          >
            <option value="Blood Group">Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </form>
      </div>
      <div className="scrollView">
        {donors.map((donor) => (
          <div className="donor" key={`${donor.name}-${donor.mobile}`}>
            <BloodIcon blood={donor.blood} />
            <div className="name">
              <div className="uname">{donor.name}</div>
              <div className="addr">{donor.adress}</div>
            </div>
            <a className="call" href={`http://wa.me/+91${donor.mobile}`}>
              <img src={whatsapp} alt="" />
            </a>
            <a className="call" href={`tel:+91${donor.mobile}`}>
              <img src={call} alt="" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListView;
