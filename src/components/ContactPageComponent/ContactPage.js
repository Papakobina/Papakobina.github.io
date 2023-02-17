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
        	<div class="formContainer">
                <div class="nameInputContact">
                    <input type="text" required placeholder="Name"/>
                </div>
                <div className="emailandphone">
                    <div classname="emailInputContact">
                        <input type="text" required placeholder="Email"/>
                    </div>
                    <div class="phoneInput" >
                        <input type="text" required placeholder="Phone Number"/>
                    </div>
                </div>
                <div class="messageInput">
                    <textarea required placeholder="Message"></textarea>
                </div>
                <div classname="sendButtonContactdiv">
                    <button classname="sendButtonContact" type="submit" ><span class="text">Send</span></button>
                </div>
	        </div>
        </>
    );
};

export default ContactPageComponent;