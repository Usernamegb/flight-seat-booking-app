import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbars from "./navbar";
import Swal from "sweetalert2";

export default function Login() {
  let navigate = useNavigate();
  let count = true;

  const [formErrors, setFormErrors] = useState({
    email: "",
    userPassword: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const [loginData, setloginData] = useState({
    email: "",
    userPassword: "",
  });

  const authenticate = async (e) => {
    e.preventDefault();

    setFormErrors(validate(loginData));
    console.log("heloo");
    console.log(formErrors);

    if (formErrors.email == "" && formErrors.userPassword == "") {
      count = false;
      const url = "http://localhost:8080/get-logindetails";

      let userData = await axios.post(url, loginData);
      let user = userData.data;
      console.log(user);
      if (user.status) {
        sessionStorage.setItem("user", JSON.stringify(user.rollId));
        sessionStorage.setItem("userId", JSON.stringify(user.userId));

        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Register before login",
          text: "Enter valid details",
        });
      }
    }
  };

  const validate = (values) => {
    const errors = { email: "", userPassword: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.userPassword) {
      errors.userPassword = "userPassword is required!";
    } else if (!values.userPassword.match(regex1)) {
      errors.userPassword =
        "your userPassword should have more than 3 digits and less than 9 digits";
    }
    return errors;
  };

  return (
    <>
      <Navbars />
      <div className="container-fluid">
        <div
          className="row im align-items-center justify-content-center height-100"
          // style={{ backgroundImage: `url(${})`, height: "100vh", backgroundSize: "cover", objectFit: "cover" }}
        >
          <div className="col-12 col-md-4 bg-light p-4 rounded">
            <form onSubmit={authenticate}>
              <div className="alert alert-dark h2 fs-1">
                Application Login Form
              </div>

              <div className="mb-1">
                <input
                  type="text"
                  className="form-control form-control-lg fs-1"
                  placeholder="Enter your email"
                  name="email"
                  value={loginData.email}
                  onChange={(e) => {
                    setloginData({ ...loginData, email: e.target.value });
                  }}
                />
                <div className="alert-danger">{formErrors.email}</div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg fs-1"
                  placeholder="Enter userPassword"
                  name="userPassword"
                  value={loginData.userPassword}
                  onChange={(e) => {
                    setloginData({
                      ...loginData,
                      userPassword: e.target.value,
                    });
                  }}
                />
                <div className="alert-danger">{formErrors.userPassword}</div>
              </div>
              <div>
                <input
                  type="submit"
                  value="Login to App"
                  className="btn btn-lg btn-dark w-100"
                />
              </div>

              <div className="text-center mt-1 fs-2">
                New User?
                <Link to="/register" className="text-info fs-2">
                  Register Here...
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
