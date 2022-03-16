import React from 'react';
import './my.css';

const My = () => {
  return (
    <div className='my__container'>
      <div className='my__name'>
        <h1>Hi, my name is</h1>
        <h2>Naruhito Takei.</h2>
        <h3>I build things for the web.</h3>
      </div>
      <div className='my__content'>
        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
      </div>
    </div>
  )
}

export default My