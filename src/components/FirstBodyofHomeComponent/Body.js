import React from "react";
import './Body.css';
import arrow from './arrow-down.svg'

function FirstBodyComponent(){
    return(
        <>
        <div className="container">
            <div className="headerholder">
                <div className="Textheader">
                    <h1 className="headertitle">Volta Energy </h1>
                    {/* <ul className="dynamiclist">
                        <li><span>Changing the Way You Think About Electricity!</span></li>
                    </ul> */}
                </div>
                <div className="Subheading">
                    <p>Changing the Way You Think About Electricity!</p>
                </div>

            </div>
            <div>
            {/* <div className="parallax1"></div>
                <div className="height:0px">
                </div>

                <div className="parallax2"></div> */}
            </div>
        <div className="holder">
        <button className="button"> 
            <div className="buttoncontent">
            Explore More
            </div>
        </button>
            <img src={arrow} alt='arrow' height={45} width={45}/>
        </div>
            


        </div>
        </>
    )
}

export default FirstBodyComponent;