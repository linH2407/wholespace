import React from 'react';
import { Navbar, My, About, Experience, Work, Contact, SocialLeft, SocialRight } from './components';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div>
        <Navbar/>
      </div>
      <SocialLeft/>
      <div className='main'>
        <My/>
        <About/>
        <Experience/>
        <Work/>
        <Contact/>
      </div>
      <SocialRight/>
    </div>
  );
}

export default App;
