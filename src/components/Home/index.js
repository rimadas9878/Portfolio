import React from "react";
import myPic from '../../assets/me.jpeg';

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
        </div>
    )
}
export default Home;

