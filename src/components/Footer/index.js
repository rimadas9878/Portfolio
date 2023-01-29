import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

export default function footer() {
    return (

        <footer class="footerContainer">
            <p><a class="footerLink" href="https://github.com/rimadas9878"><FaGithub className="githubIcon" /></a></p>
            <p><a class="footerLink" href="https://www.linkedin.com/in/rima-das-538a4b6a/"><FaLinkedin className="githubIcon" /></a></p>
            <p><a class="footerLink" href="https://stackoverflow.co/"><FaStackOverflow className="githubIcon" /></a></p>
        </footer>
    );


}


