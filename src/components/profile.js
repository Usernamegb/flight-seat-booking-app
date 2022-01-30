import { Link } from "react-router-dom";

//import { Button, Navbar, Nav, Container, NavLink } from 'react-bootstrap';
//import Header from "./MyNavbar";
import views from '../images/propic.jpg';
//import views from "./plane1.jpg";
//import { FcConferenceCall,FcAcceptDatabase } from "react-icons/fc";

function Profile() {
    return (
        <div className="container-fluid" id="home">
            <div className="row bg-dark text-light" style={{ height: "100px" }}>
                <div className="col-10 col-md-10 mt-3">
                    <div href="#home" className='fw-bold fs-1'>Flight details </div>
                </div>
                <div className="col-2 col-md-2 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/login" className='text-decoration-none text-light fs-4'>Admin Logged in</Link>
                    </div>
                </div>
            </div>
            <div className="row bg-success">
                <div className="col-12 col-md-3" style={{ height: "100vh", backgroundColor: "#DDC5E7" }} >
                    <div className="row">
                        <img src={views} className="pro-img rounded-circle mt-5 me-5" />
                    </div>
                </div>
                <div className="col-12 col-md-9" style={{ backgroundColor: "#E9EAEC" }}>


                    <div className="row mt-5">
                        <div className="col-12 col-md-6">
                            <div className="card p-4 mycard">
                                <div className="card-body bg-danger bg-opacity-10">
                                    <h5 className="card-title">
                                        {/* <FcConferenceCall className="gly"/> */}
                                    </h5>
                                    <h1 className="card-text">
                                        Show all flights
                                    </h1>
                                    <button className="btn btn-warning mt-3">
                                        view
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card p-4 mycard">
                                <div className="card-body bg-danger bg-opacity-10">
                                    <h5 className="card-title">
                                        {/* <FcAcceptDatabase className="gly"/> */}
                                    </h5>
                                    <h1 className="card-text">
                                        Update flights details
                                    </h1>
                                    <Link to="/add-emp-by-admin" className="text-info ">
                                        <button className="btn btn-warning mt-3">
                                            Add
                                        </button>
                                    </Link>

                                    <Link to="/edit-emp-by-admin" className="text-info ">
                                        <button className="btn btn-warning mt-3 ms-3">
                                            update
                                        </button>
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;