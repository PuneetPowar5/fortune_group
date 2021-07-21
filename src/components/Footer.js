import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return(
        <div className='Bottom'>
            <div className='SocialIcons'>
                <AiFillInstagram></AiFillInstagram>
                <AiFillLinkedin></AiFillLinkedin>
            </div>
            <div className='CopyRight'>
                Copyright &copy; 2021. The Fortune Group
            </div>
        </div>
    );
}

export default Footer
