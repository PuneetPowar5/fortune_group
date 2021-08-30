import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineStock} from 'react-icons/ai';
import './Navbar.css';
import logo from './output-onlinepngtools.png'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return(
        <nav className='Navbar'>
            <h1>
                <Link to='/' className='Home'>
                    <img src={logo} alt='Logo' className='Logo'></img>
                </Link>
            </h1>
            <ul className={isMobile ? 'MobileLinks' : 'Links'}
            onClick={() => setIsMobile(false)}
            >
                <Link to='/team' className='Team'>
                    <li>
                        Team
                    </li>
                </Link>
                <Link to='/portfolio' className='Portfolio'>
                    <li>
                        Portfolio
                    </li>
                </Link>
                <Link to='/stocks' className='Stocks'>
                    <li>
                        Pitches
                    </li>
                </Link>
                <Link to='/about' className='About'>
                    <li>
                        About Us
                    </li>
                </Link>
                <Link to='/contact' className='Contact'>
                    <li>
                        Contact Us
                    </li>
                </Link>
            </ul>
            <button className='MobileIcon'
            onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className='fas fa-times'></i>
                ) : (
                    <i className='fas fa-bars'></i>
                )}
            </button>
        </nav>
    );
}

export default Navbar
