import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

//import { Button, Navbar, Nav, Container, NavLink } from 'react-bootstrap';
//import Header from "./MyNavbar";
import views from "../images/propic.jpg";
import Navbars from "./navbar";
//import views from "./plane1.jpg";
//import { FcConferenceCall,FcAcceptDatabase } from "react-icons/fc";

function Profile() {
  let a = [];
  a = JSON.parse(localStorage.getItem("allpass"));

  if (a == null || a == []) {
    a = [
      {
        flightInfo: {
          deptTime: "",
          destTime: "",
          flightName: "",
          flightNo: 0,
          fromD: "",
          noSeats: 0,
          ticketPrice: 0,
          toD: "",
        },
        passangerAge: 0,
        passangerGender: "",
        passangerId: 0,
        passangerName: "",
        userInfo: {
          email: "",
          mobileNumber: "",
          rollId: 1,
          userFirstName: "",
          userId: 0,
          userLastName: "",
          userPassword: "",
          profilePic: "propic.jpg",
        },
      },
    ];
  }

  let navigate = useNavigate();

  console.log(a);

  if (a == []) {
    console.log("hoooooo");
    navigate("/booking");
  }

  let roll = "";
  if (a[0].userInfo.rollId == 0) {
    roll = "Admin";
  }
  let image = a[0].userInfo.profilePic;
  return (
    <div className="container-fluid backImage" id="home">
      <Navbars></Navbars>

      <div className="row bg-success back">
        <div
          className="col-12 col-md-3 back"
          style={{ height: "100vh", backgroundColor: "#DDC5E7" }}
        >
          <div className="row mb-5">
            <img
              src={require("../images/" + image)}
              className="pro-img bg-danger rounded-circle mt-5 me-5"
            />
          </div>
          <div className="row">
            <div className="card">
              <div className="card-header fs-3 bg-primary bg-opacity-50">
                {" "}
                Username : {a[0].userInfo.userFirstName} {}
                {a[0].userInfo.userLastName}
                <br></br>
                User Id : {a[0].userInfo.userId}
              </div>

              <div className="card-body fs-4">
                <p className="fs-2">{roll}</p>
                Email : {a[0].userInfo.email}
                <br></br>
                Mobile Number : {a[0].userInfo.mobileNumber}
                {}
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-9 back"
          style={{ backgroundColor: "#E9EAEC" }}
        >
          <div className="row  justify-content-center">
            {" "}
            <div className="col-6  alert alert-warning text-center font-weight-bold fs-1">
              Booked Tickets
            </div>
          </div>
          <div className="row mt-5">
            {a.map((item, index) => (
              <div className="col-12 col-md-5 mx-2">
                <div className="card p-4 mycard">
                  <div className="card-body bg-warning bg-opacity-10">
                    <h5 className="card-title">
                      Passenger Name : {item.passangerName} <br></br>
                      Id:
                      {item.passangerId}
                      <br></br>
                      Age : {item.passangerAge}
                      <br></br>
                    </h5>
                    <h1 className="card-text">
                      Flight name: {item.flightInfo.flightName}
                      <br></br>
                      Flight no : {item.flightInfo.flightNo}
                      <br></br>
                      From : {item.flightInfo.fromD}
                      <br></br>
                      To : {item.flightInfo.toD}
                      <br></br>
                      Time : {item.flightInfo.deptTime} -
                      {item.flightInfo.destTime}
                      <br></br>
                      Ticket Price : {item.flightInfo.ticketPrice}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
