import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import LoadingAnimation from "./LoadingAnimation/LoadingAnimation";
import app from "firebase/app";
import "firebase/firestore";

function App() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [mobile, setMobile] = useState("");
  const [blood, setBlood] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const mobileValidator = (e) => {
    const re = new RegExp(/^\d*$/);
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobile(e.target.value.slice(0, 10));
    }
  };

  const addusers = () => {
    setLoading(true);
    app
      .firestore()
      .collection("users")
      .add({
        adress: adress,
        blood: blood,
        date:
          (date.getMonth() > 8
            ? date.getMonth() + 1
            : "0" + (date.getMonth() + 1)) +
          "/" +
          (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
          "/" +
          (date.getFullYear() + "").slice(2, 4),
        mobile: mobile,
        name: name,
      })
      .then((ref) => {
        setSuccess(true);
      });
  };

  const validate = () => {
    if (
      date === "" ||
      name === "" ||
      adress === "" ||
      mobile.length !== 10 ||
      blood === "" ||
      blood === "Blood Group"
    ) {
      console.log(
        date === "",
        name === "",
        adress === "",
        mobile.length !== 0,
        blood === "",
        blood === "Blood Group"
      );
      setError("All Fields Are Required");
    } else {
      addusers();
    }
  };

  return (
    <div classname="App">
      <div id="form-main">
        <div id="form-div">
          {loading ? (
            <LoadingAnimation success={success} />
          ) : (
            <>
              <h1>DYFI Puliyancheri</h1>
              <h3>Blood Donor Form</h3>
              <form className="form" id="form1">
                <p className="name">
                  <input
                    name="name"
                    type="text"
                    value={name}
                    className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                    placeholder="Name"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </p>
                <p className="name">
                  <input
                    name="address"
                    type="text"
                    className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                    placeholder="Address"
                    id="name"
                    value={adress}
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                </p>
                <p className="name">
                  <input
                    name="mobile"
                    type="text"
                    className="feedback-input"
                    placeholder="Mobile"
                    id="name"
                    value={mobile}
                    onChange={mobileValidator}
                  />
                </p>
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
                <p className="name">
                  <DatePicker
                    className="feedback-input"
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholderText="Last Donated Date"
                    dateFormat="MM/dd/yy"
                  />
                </p>
                <div className="submit">
                  <input
                    type="submit"
                    defaultValue="SEND"
                    id="button-blue"
                    onClick={(e) => {
                      e.preventDefault();
                      validate();
                    }}
                  />
                  <div className="ease" />
                </div>
              </form>
            </>
          )}
          <h4 className="text-danger text-center">{error}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
