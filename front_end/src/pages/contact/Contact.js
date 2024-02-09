import React from "react";
import '../../pages/style/Contact.css'


const Contact = () => {
  return (
    <div className="heroContactUs">
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
        <form className="contactForm">
          <div className='row'>
             <div className='input-group'>
            <input type="text" id="name" required className="inputContactUs"/>
            <label for="name" className="labelContactUs"><i class="fa-solid fa-user"></i> Your Name</label>
          </div>
          <div className='input-group'>
            <input type="text" id="phone" required className="inputContactUs"/>
            <label for="phone" className="labelContactUs"><i class="fa-solid fa-phone"></i> Phone Number</label>
          </div>
          </div>
          <div className='input-group'>
            <input type="email" id="email" required className="inputContactUs"/>
            <label for="email" className="labelContactUs"><i class="fa-solid fa-envelope"></i> Email</label>
          </div>
          <div className='input-group'>
            <textarea id="message" required rows="10" className="textareaContactUs"></textarea>
            <label for="message" className="labelContactUs"><i class="fa-solid fa-message"></i> Your Message</label>
          </div>
          <button type="submit" className="send-button">Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>
  )
};

export default Contact;