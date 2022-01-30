import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbars from "./navbar";
function SearchBox2() {
  const [ journey, setjourney ] = useState({
    fromLoc: "",
    toLoc: "",
    date: "",
  });

  const [ flightList, setflightList ] = useState([]);

  const formSubmit2 = (e) => {
    e.preventDefault();
    // console.log(journey);
    // let list = await axios.post("http://localhost:8080/search", journey);
    // setflightList(list.data);
  };

  return (
    <>
      <Navbars></Navbars>
      <div className="d-flex justify-content-center blueBackground" id="search">
        <div className="bg-white rounded searchBoxInput">
          <ul className="d-flex list-unstyled justify-content-evenly m-0">
            <li>
              <div className="text-start">location</div>
              <input
                type="text"
                className="border-0"
                name=""
                id="inputbox"
                placeholder="Where are you going?"
              ></input>
            </li>
            <li>
              <div className="text-start">Check in</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                className="border-0"
              ></input>
            </li>
            <li>
              <div className="text-start">Check out</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add dates"
                className="border-0"
              ></input>
            </li>
            <li>
              <div className="text-start">Guests</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add Guests"
                className="border-0"
              ></input>
            </li>
            <li>
              <div className="rounded-circle h-100 text-center">
                <a href="">
                  <i className="bi bi-search fs-4 "></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-8">
            <h2> Book flight</h2>
            <form onSubmit={formSubmit2}>
              <div className="flex">
                <input
                  className="my-2"
                  type="text"
                  placeholder="from"
                  id="from"
                  name="fromLoc"
                  value={journey.fromLoc}
                  onChange={(e) => {
                    setjourney({ ...journey, [ e.target.name ]: e.target.value });
                  }}
                ></input>
                <input
                  className="my-2"
                  type="text"
                  placeholder="to "
                  id="to"
                  name="journey.toLoc"
                  value={journey.toLoc}
                  onChange={(e) => {
                    setjourney({ ...journey, toLoc: e.target.value });
                  }}
                ></input>
                <input
                  className="my-2"
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
                  className="btn btn-outline-danger my-2"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBox2;
