import { useNavigate } from "react-router-dom";
import SearchBox2 from "./listsearch";
import Navbars from "./navbar";

function FlightList(props) {
  let navigate = useNavigate();
  let a = [];

  a = JSON.parse(localStorage.getItem("flights"));
  console.log(a);

  const nextPage = (e) => {
    console.log(e.target.id);
    sessionStorage.setItem("flightId", e.target.id);
    navigate("/booking");
  };
  return (
    <>
      <Navbars></Navbars>
      <div className="container height-100">
        <div className="row">
          <div className="col-12">
            <div className="alert bg-warning fs-1 text-center">
              Avilable Flights
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
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
        </div>

        {a.map((item, index) => (
          <div className="row">
            <div className="col-2">
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
            <div className="col-2">
              <div className="alert fs-1 text-center">
                <input
                  className="btn btn-lg btn-primary fs-1"
                  onClick={nextPage}
                  type="button"
                  id={item.flightNo}
                  value="Book"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FlightList;
