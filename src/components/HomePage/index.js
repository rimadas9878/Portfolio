import React from "react";
import myPic from '../../assets/me.jpeg';
import NavTabs from "../NavTabs";


function HomePage({currentPage, handlePageChange}) {
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
            <div>
                <NavTabs/>
            </div>
        </div>
    )
}
export default HomePage;

