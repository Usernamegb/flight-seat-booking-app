import React, { useState } from "react";
import axios from "axios";
import Navbars from "./navbar";
import Swal from "sweetalert2";
function UpdateFlightInfo() {
    let a = JSON.parse(localStorage.getItem("oneflight"));
    console.log(a)


    const [ flightNo, setFlightNo ] = useState("");
    const [ flightName, setFlightName ] = useState(a.flightName);
    const [ sourceStation, setSourceStation ] = useState(a.fromD);
    const [ destStation, setDestStation ] = useState(a.toD);
    const [ deptTime, setDeptTime ] = useState(a.deptTime);
    const [ destTime, setDestTime ] = useState(a.destTime);
    const [ noSeats, setNoSeats ] = useState(a.noSeats);
    const [ ticketPrice, setTicketPrice ] = useState(a.ticketPrice);
    let nos = JSON.parse(sessionStorage.getItem("updateId"));
    const changeFlightName = (event) => {
        setFlightName(event.target.value);
    };

    const changeFlightNo = (event) => {
        setFlightNo(event.target.value);
    };

    const changeSourceStation = (event) => {
        setSourceStation(event.target.value);
    };

    const changeDestStation = (event) => {
        setDestStation(event.target.value);
    };

    const changeDeptTime = (event) => {
        setDeptTime(event.target.value);
    };

    const changeDestTime = (event) => {
        setDestTime(event.target.value);
    };

    const changeNoSeats = (event) => {
        setNoSeats(event.target.value);
    };

    const changeTicketPrice = (event) => {
        setTicketPrice(event.target.value);
    };

    const transferValue = async () => {
        if (
            flightName == "" ||
            sourceStation == "" ||
            destStation == "" ||
            deptTime == "" ||
            destTime == "" ||
            noSeats == "" ||
            ticketPrice == ""
        ) {
            Swal.fire({
                icon: "error",
                title: "Enter all feilds",
                text: "fail",
            });
        } else {
            let flight = {
                flightNo: nos,
                flightName: flightName,
                fromD: sourceStation,
                toD: destStation,
                deptTime: deptTime,
                destTime: destTime,
                noSeats: noSeats,
                ticketPrice: ticketPrice,
            };

            let status = await axios.post("http://localhost:8080/add-flight", flight);

            if (status) {
                Swal.fire({
                    icon: "success",
                    title: "Flight Updated",
                    text: "Success",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oh No!!",
                    text: "Server is down",
                });
            }
        }
        setFlightName("");
        setSourceStation("");
        setDestStation("");
        setDeptTime("");
        setDestTime("");
        setNoSeats("");
        setTicketPrice("");
    };

    return (
        <>
            <Navbars />
            <div className="container bg-primary height-100 p-5 rounded">
                <div className="row mb-5">
                    <div className="col alert alert-primary fs-1 text-center">
                        Update Flight Details
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div className="col-6">
                        <input
                            className="form-control form-control-lg fs-2"
                            type="text"
                            placeholder="enter flight name"
                            value={flightName}
                            onChange={changeFlightName}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="text"
                            placeholder="enter flight sourceStation"
                            value={sourceStation}
                            onChange={changeSourceStation}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="text"
                            placeholder="enter flight DestinationStation"
                            value={destStation}
                            onChange={changeDestStation}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="time"
                            placeholder="enter flight Departure Time"
                            value={deptTime}
                            onChange={changeDeptTime}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="time"
                            placeholder="enter flight Destination Time"
                            value={destTime}
                            onChange={changeDestTime}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="text"
                            placeholder="enter Number of seats "
                            value={noSeats}
                            onChange={changeNoSeats}
                        />
                        <br />
                        <input
                            className="form-control form-control-lg fs-2"
                            type="text"
                            placeholder="enter Ticket Price"
                            value={ticketPrice}
                            onChange={changeTicketPrice}
                        />
                        <br />

                        <button
                            className="form-control form-control-lg fs-2"
                            onClick={transferValue}
                        >
                            Update Flight
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateFlightInfo;
