import React from 'react';
import './Rhys.css';
import vacant from './vacant image.png';

const Rhys = () => {
    return(
        <div className='RhysPage'>
            <div className='Container'>
                <div className='Rhys'>
                    Rhys Collings Software Engineer
                </div>
                <div className='RhysDescription'>
                    Utilizes React JS to create a web development for the company
                </div>
                <div>
                    <img src={vacant} alt='Rhys' className='RhysImage'/>
                </div>
            </div>
        </div>
    );
}

export default Rhys
