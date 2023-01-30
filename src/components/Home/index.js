import React from "react";
import myPic from '../../assets/me.jpeg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

function Home() {
    return (


        <div class='homepackBackground'>
            <div class="welcomePage">
                <h1 class='nameTitle'>RIMA DAS</h1>
            </div>
            <div class="meImageContainer">
                <img
                    class='myImage'
                    src={myPic} alt='mypic'
                />
            </div>
            <div class="personalContactInfo">
                <div class="personalDetails">
                    <div class="address">
                        <FaMapMarkerAlt class="icon" />
                        <p class="personalDetailsFont">Fremont, CA</p>
                    </div>
                    <div class="phoneNo">
                        <FaMobileAlt class="icon" />
                        <p class="personalDetailsFont">(510)206-7172</p>
                    </div>
                    <div class="emailAddress">
                        <FaMailBulk class="icon" />
                        <p class="personalDetailsFont">dasrima476@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;

