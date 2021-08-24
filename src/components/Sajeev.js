import React from 'react';
import './Sajeev.css';
import sajeev from './sajeev.jpg';

const Sajeev = () => {
    return(
        <div className='SajeevPage'>
            <div className='Container'>
                <div className='Sajeev'>
                    Sajeev Menon Financial Analyst
                </div>
                <div className='SajeevDescription'>
                    Researchs/Analyzes attractive stocks through utilization of key financial metrics , business news, and valuation methods to prepare weekly stock reports
                </div>
                <div>
                    <img src={sajeev} alt='Sajeev' className='SajeevImage'/>
                </div>
            </div>
        </div>
    );
}

export default Sajeev
