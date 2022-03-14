import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__logo' id='home'>
            <a href='#home'><i class="fa-brands fa-scribd"></i></a>  
        </div>
        <div className='navbar__links'>
            <ul>
                <li>
                   <a href='#about'><span>01.</span>About</a> 
                </li>
                <li>
                   <a href='#experience'><span>02.</span>Experience</a> 
                </li>
                <li>
                   <a href='#work'><span>03.</span>Work</a> 
                </li>
                <li>
                   <a href='#contact'><span>04.</span>Contact</a> 
                </li>
            </ul>
            <div className='navbar__button'>
              <button type='button'>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar