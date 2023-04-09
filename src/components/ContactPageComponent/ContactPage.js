import React from "react";
import "./ContactPage.css";
import tiktok from './tiktok.png';
import  instagram  from './instagram.png';
import linkedin from './linkedin.png';

function ContactPageComponent(){

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }

    return(
        <>
            <div className="contactcontainer">
                <div className="displayContacts">
                    <h1>Contact Us</h1>
                    <div>
                        <a href="https://www.linkedin.com/company/volta-energy/mycompany/" target="_blank"><img src={linkedin} alt='linkedin' height='45' width='45'/></a>
                        <a href="https://www.instagram.com/voltanrg/?hl=en" target='_blank'><img src={instagram} alt='Instagram'/></a>
                        <a href="https://www.tiktok.com/@voltanrg" target='_blank'><img src={tiktok} alt='tiktok'/></a>
                    </div>
                    <div>
                        <h3><a href="nquiry@voltaenergy.ca" target='_blank'>enquiry@voltaenergy.ca</a></h3>
                        <h3>(416)-282-8658</h3>
                        <h3> 87 Thornmount Drive, Unit 16 Toronto,<br></br> Ontario M1B 5S5 </h3>
                    </div>

                </div>
                <div className="formContainer">
                    <h1 className="titleforcontact"> Get in touch</h1>
                    <div className="nameandemaildiv">
                        <div className="nameInputContact">
                            <input className="inputContactUs" type="text" required placeholder="Name"/>
                        </div>
                        <div classname="emailInputContactContainer">
                                <input className="inputContactUs" type="text" required placeholder="Email"/>
                        </div>

                    </div>
                    {/* <div className="emailandphone">
                        <div classname="emailInputContact">
                            <input className="emailinputContactUs" type="text" required placeholder="Email"/>
                        </div> */}
                        {/* <div className="phoneInput" >
                            <input className="phoneinputContactUs" type="text" required placeholder="Phone Number"/>
                        </div> */}
                    {/* </div> */}
                    <div className="messageInput">
                        <textarea className="textareaContactUs" required placeholder="Message"></textarea>
                    </div>
                    <div classname="pleasework">
                        <button class="plusbuttonSpice"><span class="text">send</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPageComponent;