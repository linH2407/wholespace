import React from 'react';
import { Navbar, My, About, Experience, Work, Contact } from './components';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div>
        <Navbar/>
      </div>
      <div className='main'>
        <My/>
        <About/>
        <Experience/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
