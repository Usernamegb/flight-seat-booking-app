import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function SearchBox() {
  const [ journey, setjourney ] = useState({
    fromD: "",
    toD: "",
    date: "",
  });
  let navigate = useNavigate();

  const [ flightList, setflightList ] = useState([]);

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(journey);
    if (journey.fromD == "" && journey.toD == "") {
      alert("Please fill data");
    }
    else {
      let list = await axios.post(
        "http://localhost:8080/get-flights-results",
        journey
      );
      // setflightList(list.data);
      console.log(list.data);
      let flight = list.data;

      localStorage.setItem("flights", JSON.stringify(list.data));
      navigate("/searchflight");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row my-5 justify-content-center align-items-center ">
          <div className="col-12">
            <h2 className="alert alert-primary text-center bg-warning"> Book flight</h2>

            <form onSubmit={formSubmit}>
              <label className="text-light fs-2" htmlFor="fromD">
                From Location
              </label>
              <input
                className="form-control form-control-lg my-2 fs-2"
                type="text"
                placeholder="from"
                id="from"
                name="fromD"
                value={journey.fromD}
                onChange={(e) => {
                  setjourney({ ...journey, [ e.target.name ]: e.target.value });
                }}
              ></input>
              <label className="text-light">To Destination</label>
              <input
                className="form-control form-control-lg my-2 fs-2"
                type="text"
                placeholder="to "
                id="to"
                name="journey.toD"
                value={journey.toD}
                onChange={(e) => {
                  setjourney({ ...journey, toD: e.target.value });
                }}
              ></input>
              <label className="text-light" htmlFor="">
                Date
              </label>
              <input
                className="form-control form-control-lg my-2 fs-2"
                type="date"
                placeholder="Date"
                id="date"
                name="journey.date"
                value={journey.date}
                onChange={(e) => {
                  setjourney({ ...journey, date: e.target.value });
                }}
              ></input>
              <input
                className="form-control btn btn-lg btn-primary my-2"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBox;
