import React from 'react';
import './Karnik.css';
import vacant from './vacant image.png';

const Karnik = () => {
    return(
        <div className='KarnikPage'>
            <div className='Container'>
                <div className='Karnik'>
                    Karnik Gupta Financial Analyst
                </div>
                <div className='KarnikDescription'>
                    Researchs/Analyzes attractive stocks through utilization of key financial metrics , business news, and valuation methods to prepare weekly stock reports
                </div>
                <div>
                    <img src={vacant} alt='Karnik' className='VacantImage'/>
                </div>
            </div>
        </div>
    );
}

export default Karnik
