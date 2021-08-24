import React from 'react';
import './Muhammed.css';
import muhammed from './muhammed.jpg';

const Muhammed = () => {
  return (
    <div className='MuhammedPage'>
      <div className='Container'>
        <div className='Muhammed'>Muhammad Zaidi Software Engineer</div>
        <div className='MuhammedDescription'>
          Utilizes React JS to create a web development for the company
        </div>
        <div>
          <img src={muhammed} alt='Muhammed' className='MuhammedImage' />
        </div>
      </div>
    </div>
  );
};

export default Muhammed;
