import React from 'react';
import './Trevor.css';
import trevor from './trevor.jpg';

const Trevor = () => {
    return(
        <div className='TrevorPage'>
            <div className='Container'>
                <div className='Trevor'>
                    Trevor Smith Financial Analyst
                </div>
                <div className='TrevorDescription'>
                    Researchs/Analyzes attractive stocks through utilization of key financial metrics , business news, and valuation methods to prepare weekly stock reports
                </div>
                <div>
                    <img src={trevor} alt='Trevor' className='TrevorImage'/>
                </div>
            </div>
        </div>
    );
}

export default Trevor