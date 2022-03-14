import React from 'react';
import './about.css';

const listSubjects = [
  {
    id: 1,
    name: 'JavaScript (ES6+)',
  },
  {
    id: 2,
    name: 'React',
  },
  {
    id: 3,
    name: 'Note.js',
  },
  {
    id: 4,
    name: 'Vue.js',
  },
  {
    id: 5,
    name: 'Next.js',
  },
  {
    id: 6,
    name: 'TypeScript',
  },
  {
    id: 7,
    name: 'Electron',
  },
  {
    id: 8,
    name: 'BlockChain',
  },
  {
    id: 9,
    name: 'Angular',
  },
  {
    id: 10,
    name: 'Figma',
  },
]
const About = () => {
  return (
    <div className='about__container'>
      <div>
        <h2 className='number-heading'><span>01.</span>About Me</h2>
        <div>
          <div>
            <p>
              Hello! My name is Naruhito and Full Stack developer.
              <br/>
              REACT | Angular | Node.js | MEAN stack | REACT Native | PHP | Laravel | MongoDB | Android | WordPress plugins Development, Social media API expert with and 9+ years of web application development experience.
            </p>
            <p>
              I believe in client satisfaction. I need an opportunity to prove my skills. Just a talk and we can have a better understanding and can work together for a long time.
            </p>
            <p>
              I have also working experience with Model View Controller (MVC) and have been involved in maintaining versions of source code using GIT. I have also designed and developed web user controls, pages, validation controls, CSS files using technologies like AJAX Toolkit, jQuery, JavaScript, Bootstrap UI controls, XML, HTML, and DHTML.
            </p>
            <br></br>
            <p>
              Qualifications and experience:
            </p>
          </div>
          <div>
            <ul>
              {listSubjects.map((subject) => 
                <li key={subject.id}>{subject.name}</li>
              )}
            </ul>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default About