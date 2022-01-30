import Navbars from "./navbar";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import { useEffect, useState } from "react";
function UpdateFlight() {
  const [b, setb] = useState(JSON.parse(localStorage.getItem("allflights")));

  let navigate = useNavigate();

  const updateFlight = (e) => {
    sessionStorage.setItem("updateId", e.target.id);
    navigate("/update");
  };
  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`).then(
      (response) => {},
      (error) => {
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  const getFlights = async () => {
    let allFlight = await axios.post(
      "http://localhost:8080/get-all-flights",
      ""
    );

    setb(allFlight.data);
    localStorage.setItem("allflights", JSON.stringify(allFlight.data));
  };

  const deleteFlight = (e) => {
    let fid = e.target.id;
    swal
      .fire({
        title: "Are you sure you want to delete this user?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser(fid);
          swal
            .fire("Deleted!", "User has been Deleted", "success")
            .then(function () {
              getFlights();
              setb(JSON.parse(localStorage.getItem("allflights")));
              navigate("/updateflight");
            });
        }
      });
  };

  return (
    <>
      <Navbars></Navbars>
      <div className="container-fluid height-100">
        <div className="row">
          <div className="col-12">
            <div className="alert bg-warning fs-1 text-center">All Flights</div>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <div className="alert alert-primary fs-1 text-center">No</div>
          </div>
          <div className="col-2">
            <div className="alert alert-primary fs-1 text-center">Name</div>
          </div>
          <div className="col-2">
            <div className="alert alert-primary fs-1 text-center">DTime</div>
          </div>
          <div className="col-2">
            <div className="alert alert-primary fs-1 text-center">ATime</div>
          </div>
          <div className="col-2">
            <div className="alert alert-primary fs-1 text-center">Price</div>
          </div>
          <div className="col-1">
            <div className="alert alert-primary fs-1 text-center">Seats</div>
          </div>
        </div>

        {b.map((item, index) => (
          <div className="row">
            <div className="col-1">
              <div className="alert alert-primary fs-1 text-center">
                {item.flightNo}
              </div>
            </div>
            <div className="col-2">
              <div className="alert alert-primary fs-1 text-center">
                {item.flightName}
              </div>
            </div>
            <div className="col-2">
              <div className="alert alert-primary fs-1 text-center">
                {item.deptTime}
              </div>
            </div>
            <div className="col-2">
              <div className="alert alert-primary fs-1 text-center">
                {item.destTime}
              </div>
            </div>
            <div className="col-2">
              <div className="alert alert-primary fs-1 text-center">
                {item.ticketPrice}
              </div>
            </div>
            <div className="col-1">
              <div className="alert alert-primary fs-1 text-center">
                {item.noSeats}
              </div>
            </div>
            <div className="col-1">
              <div className="alert fs-1 text-center">
                <input
                  className="btn btn-lg btn-primary fs-1"
                  onClick={updateFlight}
                  type="button"
                  id={item.flightNo}
                  value="Update"
                />
              </div>
            </div>
            <div className="col-1">
              <div className="alert fs-1 text-center">
                <input
                  className="btn btn-lg btn-primary fs-1"
                  onClick={deleteFlight}
                  type="button"
                  id={item.flightNo}
                  value="Delete"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UpdateFlight;
