import React from "react";
import './Body.css';
import Typewriter from 'typewriter-effect';

function FirstBodyComponent(){
    return(
        <>
        <div className="containerFirstBodyComponent">
            <div className="headerholderFirstBodyComponent">
                <div className="TextheaderFirstBodyComponent">
                    <h1 className="headertitleFirstBodyComponent">VOLTA ENERGY </h1>
                   
                </div>
                <div className="SubheadingFirstBodyComponent">
                <Typewriter
                    options={{
                    strings: ['Changing the Way You Think About Electricity!', 'Leading the way In Predictive maintenance!'],
                    autoStart: true,
                    loop: true,
                    }}
                    />
                </div>

            </div>
        </div>
        </>
    )
}

export default FirstBodyComponent;