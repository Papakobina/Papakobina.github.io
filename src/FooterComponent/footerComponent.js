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
            <div className="subscribeContainer">
                <form action="#" class="card-content">
                    <div class="containerSubscribe">
                    <h1>Subscribe</h1>
                    <p>Subscribe to our newsletter and stay updated.</p>
                    </div>
                    <div class="form-input">
                    <form class="form">
                        <input type="email" className="form__field" placeholder="Your E-Mail Address" />
                        <button type="button" className="btn">Send</button>
                    </form>
                        {/* <input className="emailinputforSubscription" type="email" placeholder="Enter Email"/>
                        <button className="subscribe-btn">Subscribe</button> */}
                    </div>
                </form>

            </div>
            <div className="footerContainer">
                <div className="headerwithdetails">
                    <div className="logoimagefooter">
                        <img src={logo} alt='logo'  height='45' width='100'/>
                    </div>
                    <div className="logoTitlefooter">
                        <h1>Volta Energy</h1>
                    </div>
                </div>
                <div className="Contacts">
                    <h2>Contacts</h2>
                    <h3><a href="nquiry@voltaenergy.ca" target='_blank'>enquiry@voltaenergy.ca</a></h3>
                    <h3>(416)-282-8658</h3>
                    <h3> 87 Thornmount Drive, Unit 16 Toronto,<br></br> Ontario M1B 5S5 </h3>
                </div>
                <div className="Socials">
                    <h2>Socials</h2>
                    <a href="https://www.linkedin.com/company/volta-energy/mycompany/" target="_blank"><img src={linkedin} alt='linkedin' height='45' width='45'/></a>
                    <a href="https://www.instagram.com/voltanrg/?hl=en" target='_blank'><img src={instagram} alt='Instagram'/></a>
                    <a href="https://www.tiktok.com/@voltanrg" target='_blank'><img src={tiktok} alt='tiktok'/></a>
                </div>

            </div>

        </div>
           
        </>
    );
};

export default FooterCompoenet;