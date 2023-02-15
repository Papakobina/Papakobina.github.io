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
        <div className="contactsPageContainer">
            <div className="contactDisplaySection">
                <div className="contactDisplaySectionTitle">
                    <h1 className="textheadercontact">Contact us</h1>
                </div>
                <div className="subsection">
                    <div className="ContactPageSocials">
                        <a href="https://www.linkedin.com/company/volta-energy/mycompany/" target="_blank"><img src={linkedin} alt='linkedin' height='45' width='45'/></a>
                        <a href="https://www.instagram.com/voltanrg/?hl=en" target='_blank'><img src={instagram} alt='Instagram'/></a>
                        <a href="https://www.tiktok.com/@voltanrg" target='_blank'><img src={tiktok} alt='tiktok'/></a>
                    </div>
                    <div className="emailsection">
                        <h3>Email: <a href="nquiry@voltaenergy.ca" target='_blank'>enquiry@voltaenergy.ca</a></h3>
                    </div>
                    <div className="phoneSection">
                        <h3>Phone: 416.282.8658</h3>
                    </div>
                </div>
            </div>
            <div className="formSection">
            <form>
    
                <div class="group">      
                    <input className="inputs" type="text" required placeholder="Name"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                </div>
                <div className="inputArea">

                    <div class="group">      
                        <input className="inputs"type="text" required placeholder="Email"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                    </div>
                    <div className="MessageArea">
                        <textarea classname="messageboxcontact" placeholder="Enter Message"/>
                    </div>
                    <div>
                        <button class="sendbutton" type="submit" ><span class="text">Send</span></button>

                    </div>
                </div>
                
            </form>
                {/* <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <input className="form-control" type="text" id="name" required placeholder="Enter Name here..."/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" type="email" id="email" required placeholder="Enter Email here..."/>
                    </div>
                        <div className="mb-3">
                        <textarea className="form-control" id="message" required placeholder="Enter message here.."/>
                    </div>
                        <div className='learnmorebuttonSpice'>
                            <button class="sendbutton" type="submit" ><span class="text">Send</span></button>
                        </div>
            </form> */}

            </div>

        </div>
        </>
    );
};

export default ContactPageComponent;