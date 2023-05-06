import React from "react";
import './Body.css';
import Typewriter from 'typewriter-effect';

function FirstBodyComponent(){
    const randomWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
    return(
        <>
        <div className="containerFirstBodyComponent">
            <div className="headerholderFirstBodyComponent">
                <div className="TextheaderFirstBodyComponent">
                    <h1 className="headertitleFirstBodyComponent"> Zec Supplies Inc </h1>     
                </div>
                <div className="SubheadingFirstBodyComponent">
                {/* <Typewriter
                    options={{
                    strings: ['Partner to the drilling industry through quality support', 'Leading the way In Predictive maintenance!'],
                    autoStart: true,
                    loop: true,
                    }}
                    /> */}
                </div>

            </div>
            <ul className="bulletPoints">
                <li>YOUR PARTNER IN DRILLING</li>
                <li>GLOBAL SHIPMENT</li>
                <li>HIGH QUALITY PRODUCTS</li>
                {/* <button className="buttonFirstBodyComponent">Learn More</button> */}
            </ul>
        </div>
        </>
    )
}

export default FirstBodyComponent;


// •	YOUR PARTNER IN DRILLING
// •	GLOBAL SHIPMENT
// •	HIGH QUALITY PRODUCTS

