import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='Social'>
                <div className='Icons'>
                    <Link to='https://www.instagram.com' className='Instagram'>
                        <AiFillInstagram></AiFillInstagram>
                    </Link>
                    <Link to='https://www.linkedin.com' className='Linkedin'>
                        <AiFillLinkedin></AiFillLinkedin>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer
