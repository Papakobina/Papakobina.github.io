import React from "react";
import "./about.css"
import { AcademicCapIcon } from "@heroicons/react/solid"


function About(){
    return(
        <div id="about" className="mains">
            <div>
                <h1 className="texts">ABOUT ME!</h1>
            </div>
            <div className="texts2">
                <p> I am currently going into my first of Computer Engineering at the University of Waterloo! I am also currently an intern at Xerris.</p>
                <AcademicCapIcon className="capicon"/>
            </div>
        </div>
    )
}

export default About


