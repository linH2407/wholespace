import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact__container'>
      <div className='contact__name'>

        <span>04. What's Next</span>
        <h2>Get In Touch</h2>
        <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <button className='btn'>Say Hello</button>
        <div className='contact__icon'>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-discord"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-codepen"></i>
        </div>
      </div>
    </div>
  )
}

export default Contact