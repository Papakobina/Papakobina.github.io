import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

function Contact (){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kjm44kt', 'template_1vbawbr', form.current, 'dpyH9kFWKkGYfEBRc')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div id="contact"className='contacts'>
            <h1 className='header'> Contact Me!</h1>
             <form classname="contacts1" ref={form} onSubmit={sendEmail}>
                <input className='name' type="text" name="user_name" placeholder='Name...' />
                <input className='email' type="email" name="user_email" placeholder='Email...' />
                <textarea className='text' name="message" placeholder='Type your message here..' />
                <input className='button' type="submit" value="      Send" />
            </form>
        </div>
    )

}

export default Contact

