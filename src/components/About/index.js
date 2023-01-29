import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";

export default function About() {
    return (
        <div class="aboutMePage">
            <div class="aboutMeContiner">
                <div class="aboutMeIconContainer">
                    <FaUniversity class="aboutMeIcon" />
                    <FaMouse class="aboutMeIcon" />
                    <FaHiking class="aboutMeIcon" />
                </div>
                <div class="paraContainer">
                    <p class="aboutMeText">Completed <span class="bold">Full Stack Development</span> coding boot camp from Berkeley University in 2023
                        and have developed a strong set of technical skills in various programming languages
                        and technologies including <span class="bold">JavaScript ES6+, CSS, HTML, SQL, GitHub, MongoDB, MySQL, Express,
                            React, Node, jQuery, and Bootstrap.</span>
                    </p>
                </div>

                <div class="paraContainer">
                    <p class="aboutMeText">Currently working with Varite, Inc as a <span class="bold">Quality Engineer</span> on a Salesforce Project.
                        With my experience and knowledge of quality assurance and testing, I ensure that the Salesforce project is of
                        high quality and meets the needs of the end users.
                        My skill helps in identifying and addressing any issues, bugs, or defects in the system,
                        ensuring that the project is delivered on time and within budget.
                    </p>
                </div>
                <div class="paraContainer">
                    <p class="aboutMeText">I am adaptable means that I can adjust to new situations, tasks, or environments quickly and effectively,
                        also have a strong desire to achieve goals and succeed.
                    </p>
                </div>
                <div class="paraContainer">
                    <p class="aboutMeText">I like to <span class="bold">Travel, Read, Do Photography and Gardening.</span>
                        Traveling allows me to explore new places, meet new people, and experience different cultures.
                        Reading helps me to expand my knowledge and improve my communication skills,
                        Photography helps me to capture memories and express my creative side.
                        Gardening helps me to connect with nature and create beautiful outdoor spaces.
                    </p>
                </div>
            </div>
        </div>
    )
}

