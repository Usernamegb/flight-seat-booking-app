import { React, useState } from "react";
import axios from "axios";
function Search() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setdate] = useState("");

  const [flightList, setflightList] = useState([]);

  const formSubmit = async (e) => {
    e.preventDefault();
    const journey = { from, to };
    console.log(journey);
    let list = await axios.post("http://localhost:8080/search", journey);

    console.log(list);
    setflightList(list.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form onSubmit={formSubmit}>
              <input
                className="form-control my-2"
                type="date"
                placeholder="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              ></input>
              <input
                className="form-control my-2"
                type="text"
                placeholder="from"
                id="from"
                name="from"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              ></input>
              <input
                className="form-control my-2"
                type="text"
                placeholder="to "
                id="to"
                name="to"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <input
                className="btn btn-outline-primary my-2"
                type="submit"
                value="submit"
              />
            </form>
          </div>
          <div className="container">
            {flightList.map((flight, index) => {
              return (
                <>
                  <div>
                    <h1>
                      {flight.name} {flight.price}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
