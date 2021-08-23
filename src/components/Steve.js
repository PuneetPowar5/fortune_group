import React from 'react';
import './Steve.css';
import Picture from './Picture1.png';

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
                <div className='Image'>
                    <img src={Picture}/>
                </div>
            </div>
        </div>
    );
}

export default Steve
