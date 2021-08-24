import React from 'react';
import './Brady.css';
import tempbrady from './tempbrady.jpg';

const Brady = () => {
    return(
        <div className='BradyPage'>
            <div className='Container'>
                <div className='Brady'>
                    Brady Alfelskie Social Media Manager
                </div>
                <div className='BradyDescription'>
                    Promotes The Fortune Group through multiple platforms and communicates company operations and findings
                </div>
                <div>
                    <img src={tempbrady} alt='Brady' className='BradyImage'/>
                </div>
            </div>
        </div>
    );
}

export default Brady
