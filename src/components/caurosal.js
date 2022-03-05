//import React from "react";
import { Carousel } from "react-bootstrap";
//import images from "./1.jpg";
export default function Slides() {
    return (
        <div className="" >
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../images/61.png")}
                        alt="First Image" style={{ height: "80vh" }} />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={require("../images/71.jpg")}
                        alt="First Image" style={{ height: "80vh" }} />

                </Carousel.Item>
                <Carousel.Item>

                    <img className="d-block w-100" src={require("../images/111.jpg")}
                        alt="First Image" style={{ height: "80vh" }} />

                </Carousel.Item>
                <Carousel.Item>

                    <img className="d-block w-100" src={require("../images/121.jpg")}
                        alt="First Image" style={{ height: "80vh" }} />

                </Carousel.Item>
                <Carousel.Item>

                    <img className="d-block w-100" src={require("../images/141.jpg")}
                        alt="First Image" style={{ height: "80vh" }} />

                </Carousel.Item>
            </Carousel>
        </div>
    );
}