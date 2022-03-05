import 'bootstrap/dist/css/bootstrap.min.css';
import captchaImg from '../images/captcha.png';
import studentIMG from '../images/3.jpg';
import React, { useState, useEffect } from 'react';
function Captcha() {
    const [ user, setUser ] = useState({
        username: ""
    });
    const characters = 'abc123';
    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const captcha = generateString(6) // Function called here and save in captcha variable
    let handleChang = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        user[ name ] = value;
        setUser(user);
    }
    const onSubmit = e => {
        var element = document.getElementById("succesBTN");
        var inputData = document.getElementById("inputType");

        element.style.cursor = "wait";
        element.innerHTML = "Checking...";
        inputData.disabled = true;
        element.disabled = true;
        var myFunctions = function () {
            if (captcha == user.username) {
                element.style.backgroundColor = "green";
                element.innerHTML = "Captcha Verified";
                element.disabled = true;
                element.style.cursor = "not-allowed";
                inputData.style.display = "none";
                sessionStorage.setItem("ok", "ok");

            }
            else {
                element.style.backgroundColor = "red";
                element.style.cursor = "not-allowed";
                element.innerHTML = "Not Matched";
                element.disabled = true;
                //  element.disabled = true;
                var myFunction = function () {
                    element.style.backgroundColor = "#007bff";
                    element.style.cursor = "pointer";
                    element.innerHTML = "Verify Captcha";
                    element.disabled = false;
                    inputData.disabled = false;
                    inputData.value = 'sssss';
                };
                setTimeout(myFunction, 5000);
            }
        }
        setTimeout(myFunctions, 5000);
    };

    return (
        <div class="container-fluid">

            <div class="row">
                <div class="col">
                </div>

                <div class="">
                    <h4 id="captcha" style={{ marginTop: "25px", marginLeft: "390px", position: "absolute" }}>{captcha}</h4>


                    <div class="">
                        <img src={captchaImg} className="mt-3 mb-3" height="50" />
                    </div>
                    <div class="text-center" >
                        <input type="text" style={{ marginLeft: "390px" }} id="inputType" className="btn ml-5 mb-3 mx-3" placeholder="Enter Captcha"
                            name="username" onChange={handleChang} autocomplete="off" style={{ width: "20%" }}
                        />
                        <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1 mb-3">Verify Captcha</button>

                    </div>

                </div>
            </div>
        </div>
    );
}
export default Captcha;


