import React from 'react';
import './Footer.css';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
    return(
        <div className='Footer'>
                <div className='Icons'>
                    <a href='https://www.instagram.com/thefortunegroup_/' className='Instagram'>
                        <AiFillInstagram></AiFillInstagram>
                    </a>
                    <a href="https://www.linkedin.com/company/thefortunegroup/" className='Linkedin'>
                        <AiFillLinkedin></AiFillLinkedin>
                    </a>
                </div>
                <div className='Trademark'>
                    The Fortune Group © 2021
                </div>
        </div>
    );
}

export default Footer
