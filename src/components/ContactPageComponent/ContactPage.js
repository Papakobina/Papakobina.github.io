import React from "react";
import "./ContactPage.css";
import tiktok from './tiktok.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';

function ContactPageComponent(){

  const [formStatus, setFormStatus] = React.useState('Send');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, message } = e.target.elements;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        setFormStatus('Sent!');
        e.target.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was an error sending the email:', error);
      setFormStatus('Error :(');
    }
  };

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
            <h3><a href="papakobina2004@gmail.com" target='_blank'>customercare@zec-supplies.com</a></h3>
            <h3>(587) -834-3499</h3>
            <h3> 7 Citadel Meadow Crescent NW,<br></br>Calgary, Alberta
T3G 4Z1
 </h3>
          </div>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="nameandemaildiv">
              <div className="nameInputContact">
                <input className="inputContactUs" type="text" required placeholder="Name" name="name"/>
              </div>
              <div className="emailInputContactContainer">
                <input className="inputContactUs" type="email" required placeholder="Email" name="email"/>
              </div>
            </div>
            <div className="messageInput">
              <textarea className="textareaContactUs" required placeholder="Message" name="message"></textarea>
            </div>
            <div classname="pleasework">
              <button className="plusbuttonSpice" type="submit"><span className="text">{formStatus}</span></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPageComponent;
