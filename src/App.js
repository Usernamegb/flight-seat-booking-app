import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddFlight from "./components/adminaddflight";
import Booking from "./components/booking";
import DemoNavbar from "./components/demonavbar";
import FlightList from "./components/flightlist";
import Home from "./components/home";
import SearchBox2 from "./components/listsearch";
import Login from "./components/login";
import Navbars from "./components/navbar";
import Register from "./components/register";
import Search from "./components/search";
import "./App.css";
import UpdateFlight from "./components/adminupdateflight";
import UpdateFlightInfo from "./components/updateflight";
import AdminPage from "./components/profile";
import Captcha from "./components/captch";
export default function App() {
  return (
    <>
      {" "}
      <Router>

        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/search" element={<Search />}></Route>

            <Route path="/navbar" element={<DemoNavbar />}></Route>
            <Route path="/searchflight" element={<FlightList />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/addflight" element={<AddFlight />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/updateflight" element={<UpdateFlight />}></Route>
            <Route path="/update" element={<UpdateFlightInfo />}></Route>
            <Route path="/profile" element={<AdminPage />}></Route>
            <Route path="/captcha" element={<Captcha />}></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
