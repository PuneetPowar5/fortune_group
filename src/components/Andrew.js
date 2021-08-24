import React from 'react';
import './Andrew.css';
import andrew from './andrew.jpg';

const Andrew = () => {
    return(
        <div className='AndrewPage'>
            <div className='Container'>
                <div className='Andrew'>
                    Andrew Xu Software Engineer
                </div>
                <div className='AndrewDescription'>
                    Utilizes React JS to create a web development for the company
                </div>
                <div>
                    <img src={andrew} alt='Andrew' className='AndrewImage'/>
                </div>
            </div>
        </div>
    );
}

export default Andrew
