import React from 'react';
import "./Contact.css";
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import NavbarCopy from './Navbar/Navbar copy';

const Contact = () => {
    return(
        <div className="ContactPage">
            <NavbarCopy />
            <div className='TopLine'>
                Get In Touch
            </div>
            <div className='BottomLine'>
                If you would like to get in contact or would like more information, please contact us via Linkdln or Instagram
            </div>
            <div className='BottomLinks'>
                <a href='https://www.instagram.com/thefortunegroup_/' target='blank' className='Insta'>
                        <AiFillInstagram></AiFillInstagram>
                </a>
                <a href="https://www.linkedin.com/company/thefortunegroup/" target='blank' className='Link'>
                        <AiFillLinkedin></AiFillLinkedin>
                </a>

            </div>
        </div>
    );
}

export default Contact
