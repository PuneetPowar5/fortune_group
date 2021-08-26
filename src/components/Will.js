import React from 'react';
import './Will.css';
import vacant from './vacant image.png';

const Will = () => {
    return(
        <div className='WillPage'>
            <div className='Container'>
                <div className='Will'>
                    William Ho Financial Analyst
                </div>
                <div className='WillDescription'>
                    Researchs/Analyzes attractive stocks through utilization of key financial metrics, business news, and valuation methods to prepare weekly stock reports
                </div>
                <div>
                    <img src={vacant} alt='Will' className='VacantImage'></img>
                </div>
            </div>
        </div>
    );
}

export default Will
