import React, { useState } from 'react';
import './experience.css';
import { contents1, contents2, contents3 } from './content';


const Experience = () => {
  const [toggle, setToggle] = useState(1);
  
  const handleToggle = (index) => {
    setToggle(index);
  }
  
  return (
    <div className='experience__container' id='experience'>
      <h2 className='number-heading'><span>02.</span>Where I’ve Worked</h2>
      <div className='ex__content'>
        <div className='ex__name'> 
          <button
            className={toggle === 1 ? "job-btn active-btn" : "job-btn"}
            onClick={() => handleToggle(1)}
          >
            <span>Freelancer</span>
          </button>
          <button
            className={toggle === 2 ? "job-btn active-btn" : "job-btn"}
            onClick={() => handleToggle(2)}
          >
            <span>Win-Win</span>
          </button>
          <button
            className={toggle === 3 ? "job-btn active-btn" : "job-btn"}
            onClick={() => handleToggle(3)}
          >
            <span>Codegram</span>
          </button>
        </div>

        <div className='ex__text'>

          <div>
            <div className={toggle === 1 ? "content  active-content" : "content"}>
              <h3> Full-Stack Developer <span> @ Freelancer</span></h3>
              <p>
                April 2021 - Present
              </p>
              <div>
                <ul className='ex__title'>
                  {contents1.map((content) => 
                    <li key={content.id}>
                    <i class="fa-solid fa-play"></i>{content.title}</li>
                  )}
                </ul>
              </div>
            </div>

            <div className={toggle === 2 ? "content  active-content" : "content"}>
              <h3> Full-Stack Developer <span> @ Win-Win</span></h3>
              <p>
                July 2016 - April 2021
              </p>
              <div>
                <ul>
                  {contents2.map((content) => 
                    <li key={content.id}>
                    <i class="fa-solid fa-play"></i>{content.title}</li>
                  )}
                </ul>
              </div>
            </div>
        
            <div className={toggle === 3 ? "content  active-content" : "content"}>
              <h3> Full-Stack Developer <span> @ Codegram</span></h3>
              <p>
                April 2014 - Jun 2016
              </p>
              <div>
              <ul>
                  {contents3.map((content) => 
                    <li key={content.id}>
                    <i class="fa-solid fa-play"></i>{content.title}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience