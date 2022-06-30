import React from "react";
import {HomeIcon} from "@heroicons/react/outline";
import { CodeIcon } from "@heroicons/react/solid";
import "./header.css";
import "./About"
import "./Home"



function Header(){
    return(
        <div className="container sticky">
            <div className="box sticky shrink-0">
                <CodeIcon className="icon"/>
                <p className="website">PAPA'S WEBSITE </p>
                <div className="list">
                    <li onClick={
                        () => window.location.replace("/#home")
                    }className="home">HOME</li>
                    <li onClick={
                        () => window.location.replace("/#about")
                    } className="about">ABOUT</li>
                    <li onClick={
                        () => window.location.replace("/#contact")
                    }className="contact">CONTACT</li>
                </div>
            </div>
        </div>
    )
}

export default Header