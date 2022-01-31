import axios from "axios";
import { Link } from "react-router-dom";
import Slides from "./caurosal";
import SearchBox from "./homesearchflight";
import Navbars from "./navbar";

function Home() {
  return (
    <>
      <Navbars />
      <div className="container-fluid backImage">
        <div className="row justify-content-center align-items-center height-100">
          <div className="col-sm-6 col-md-5 h-100">
            <SearchBox />
          </div>
          <div className="col-sm-6 col-md-7 h-100">
            <Slides />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
