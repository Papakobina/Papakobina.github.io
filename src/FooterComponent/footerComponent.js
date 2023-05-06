import React from "react";
import tiktok from './tiktok.png';
import  instagram  from './instagram.png';
import logo from './Logo.png';
import linkedin from './linkedin.png';
import './footerComponent.css';



function FooterCompoenet(){
    return(
        <>
        <div className="footer">
            {/* <div className="subscribeContainer">
                <form action="#" class="card-content">
                    <div className="containerSubscribe">
                    <h1>Subscribe</h1>
                    <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                    <div className="forminput">
                        <form className="form">
                            <input type="email" className="inputforsubcription" placeholder="Your E-Mail Address" />
                            <button type="button" className="btn">Send</button>
                        </form>
                        <input className="emailinputforSubscription" type="email" placeholder="Enter Email"/>
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </form>

            </div> */}
            <div className="footerContainer">
                <div className="headerwithdetails">
                    {/* <div className="logoimagefooter">
                        <img src={logo} alt='logo'  height='45' width='100'/>
                    </div> */}
                    <div className="logoTitlefooter">
                        <h1>Zec-Supplies</h1>
                    </div>
                </div>
                <div className="Contacts">
                    <h2>Contacts</h2>
                    <h3><a href="nquiry@voltaenergy.ca" target='_blank'>customercare@zec-supplies.com</a></h3>
                    <h3>(587) -834-3499</h3>
                    <h3>7 Citadel Meadow Crescent NW,<br></br>Calgary, Alberta
T3G 4Z1   Canada
 </h3>
                </div>
               

            </div>

        </div>
           
        </>
    );
};

export default FooterCompoenet;