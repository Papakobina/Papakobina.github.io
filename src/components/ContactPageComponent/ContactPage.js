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
                <div className="formContainer">
                    <h1 className="titleforcontact"> Contact Us</h1>
                    <div className="nameInputContact">
                        <input className="inputContactUs" type="text" required placeholder="Name"/>
                    </div>
                    <div className="emailandphone">
                        <div classname="emailInputContact">
                            <input className="emailinputContactUs" type="text" required placeholder="Email"/>
                        </div>
                        <div className="phoneInput" >
                            <input className="phoneinputContactUs" type="text" required placeholder="Phone Number"/>
                        </div>
                    </div>
                    <div className="messageInput">
                        <textarea className="textareaContactUs" required placeholder="Message"></textarea>
                    </div>
                    <div classname="pleasework">
                        <button class="plusbuttonSpice"><span class="text">send</span></button>

                        {/* <button classname="sendButtonContact" type="submit" ><span class="text">Send</span></button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPageComponent;