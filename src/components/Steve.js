import React from 'react';
import './Steve.css';
import steve from './steve.jpg';

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
                    <img src={steve} alt='Steve' className='SteveImage'/>
                </div>
            </div>
        </div>
    );
}

export default Steve
