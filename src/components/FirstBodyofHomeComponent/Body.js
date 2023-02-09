import React from "react";
import './Body.css';
import Typewriter from 'typewriter-effect';

import MainImage from './VoltaColoured.png'

function FirstBodyComponent(){
    return(
        <>
        <div className="container">
            <div className="headerholder">
                <div className="Textheader">
                    <h1 className="headertitle">Volta Energy </h1>
                   
                </div>
                <div className="Subheading">
                <Typewriter
                    options={{
                    strings: ['Changing the Way You Think About Electricity!', 'Leading the way In Predictive maintenance!'],
                    autoStart: true,
                    loop: true,
                    }}
                    />
                </div>

            </div>
            <div className="MainPageImage">
                <img src={MainImage} alt='images'/>

            </div>
        </div>
        </>
    )
}

export default FirstBodyComponent;