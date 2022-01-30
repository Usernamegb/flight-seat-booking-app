import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";
import { Ref } from "react";
import Login from "./login";
import Register from "./register";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbars() {
  const myCon = useRef("");
  const [login, setlogin] = useState("Login");
  const [register, setregister] = useState("Register");
  const checkRoll = () => {
    if (sessionStorage.getItem("user") == 1) {
      console.log(sessionStorage.getItem("user"));
      const contaneradd = document.getElementById("add");
      const contanerupd = document.getElementById("update");

      if (!contaneradd.classList.contains("d-none")) {
        contaneradd.classList.add("d-none");
      }
      if (!contanerupd.classList.contains("d-none")) {
        contanerupd.classList.add("d-none");
      }
      setlogin("logout");
      setregister("");
    } else if (sessionStorage.getItem("user") == 0) {
      const contaneradd = document.getElementById("add");
      const contanerupd = document.getElementById("update");

      contaneradd.classList.add("d-block");
      contanerupd.classList.add("d-block");
      setlogin("logout");
      setregister("");
    } else {
      const contaneradd = document.getElementById("add");
      const contanerupd = document.getElementById("update");
      if (!contaneradd.classList.contains("d-none")) {
        contaneradd.classList.add("d-none");
      }
      if (!contanerupd.classList.contains("d-none")) {
        contanerupd.classList.add("d-none");
      }

      setlogin("Login");
      setregister("Register");
    }
  };
  const logout = () => {
    sessionStorage.removeItem("user");
  };
  useEffect(() => {
    checkRoll();
  }, []);

  const getFlights = async () => {
    let allFlight = await axios.post(
      "http://localhost:8080/get-all-flights",
      ""
    );

    console.log(allFlight);
    localStorage.setItem("allflights", JSON.stringify(allFlight.data));
  };

  return (
    <>
      <Navbar
        className="blueBackground height-5 sticky-top"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Container fluid className="mx-0 mx-md-5">
          <Navbar.Brand href="#">
            <Link
              to="/home"
              className="text-decoration-none text-light mx-2 fs-2"
            >
              {" "}
              Book<span className="bg-danger rounded p-1">My</span>Trip
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 ms-auto" navbarScroll></Nav>
            <Link
              className="text-decoration-none text-light mx-2 fs-2"
              id="add"
              ref={myCon}
              to="/addflight"
            >
              <span className="bg-primary rounded-pill p-2"> Add Flights </span>
            </Link>
            <Link
              id="update"
              className="text-decoration-none text-light mx-2 fs-2"
              onClick={getFlights}
              to="/updateflight"
            >
              <span className="bg-primary rounded-pill p-2">
                {" "}
                Update Flights{" "}
              </span>
            </Link>
            <Link
              className="text-decoration-none text-light mx-2 fs-2"
              onClick={logout}
              to="/login"
            >
              <span className="bg-primary rounded-pill p-2"> {login}</span>
            </Link>

            <Link
              className="text-decoration-none text-light mx-2 fs-2"
              to="/register"
            >
              {register}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbars;
