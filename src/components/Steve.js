import React from 'react';
import './Steve.css';
import Picture from './russ.jpeg';

const Steve = () => {
    return(
        <div className='StevePage'>
            <div className='Container'>
                <div className='Steve'>
                    Steve Kang Portfolio Manager
                </div>
                <div className='SteveDescription'>
                    Develops and Implements investment strategies for investment allocations
                </div>
                <div>
                    <img src={Picture} alt='Steve' className='Image'/>
                </div>
            </div>
        </div>
    );
}

export default Steve
