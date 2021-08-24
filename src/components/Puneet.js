import React from 'react';
import './Puneet.css';
import puneet from './puneet.jpg';

const Puneet = () => {
    return(
        <div className='PuneetPage'>
            <div className='Container'>
                <div className='Puneet'>
                    Puneetpal Powar Lead Software Engineer
                </div>
                <div className='PuneetDescription'>
                    Utilizes React JS to create a web development for the company
                </div>
                <div>
                    <img src={puneet} alt='Puneet' className='PuneetImage'/>
                </div>
            </div>
        </div>
    );
}

export default Puneet
