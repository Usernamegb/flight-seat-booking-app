import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";
import Navbars from "./navbar";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function Booking() {
  const [flightNo, setFlightNo] = useState("");
  const [passName, setPassName] = useState("");
  const [passAge, setPassAge] = useState("");
  const [passGender, setPassGender] = useState("");
  let navigate = useNavigate();
  const changePassName = (event) => {
    setPassName(event.target.value);
  };

  const changePassAge = (event) => {
    setPassAge(event.target.value);
  };

  const changePassGender = (event) => {
    setPassGender(event.target.value);
  };

  const transferValue = async () => {
    if (
      passName == "" ||
      passAge == "" ||
      passGender == "" ||
      passGender == "Female" ||
      passGender == "Male" ||
      passGender == "Other"
    ) {
      alert("Enter all Feilds");
    } else {
      let uId = JSON.parse(sessionStorage.getItem("userId"));
      let fId = JSON.parse(sessionStorage.getItem("flightId"));
      let body = {
        passangerName: passName,
        passangerAge: passAge,
        passangerGender: passGender,
        userInfo: {
          userId: uId,
        },
        flightInfo: {
          flightNo: fId,
        },
      };

      if (await axios.post("http://localhost:8080/add-passenger", body)) {
        alert("success");
        Swal.fire({
          icon: "success",
          title: "Booking Successfull!!!",
          text: "You have been successfully booked you ticket",
        });
      } else {
        alert("fail");
      }
    }

    setFlightNo("");
    setPassName("");
    setPassAge("");
    setPassGender("");
    // setTicketPrice("");
  };

  const call = () => {
    navigate("/searchflight");
  };

  return (
    <>
      <Navbars></Navbars>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <div className="alert alert-warning fs-1 text-center">
              Enter Booking details...
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          class="row justify-content-center"
          style={{
            backgroundColor: "lightblue",
            paddingBottom: "60px",
            marginLeft: "300px",
            marginRight: "300px",
          }}
        >
          <div className="col-6">
            {/* <label>enter flight number</label> */}
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="enter passanger name"
              value={passName}
              onChange={changePassName}
            />
            <br />
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="enter passanger age"
              value={passAge}
              onChange={changePassAge}
            />
            <br />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="enter passanger gender"
              value={passGender}
              onChange={changePassGender}
            />
            <br />
            <div className="d-flex">
              <button
                className="form-control form-control-lg bg-warning form-control-lg mx-2"
                onClick={transferValue}
              >
                Add Passanger
              </button>

              <button
                className="form-control form-control-lg bg-warning form-control-lg mx-2"
                onClick={call}
              >
                Previouse page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
