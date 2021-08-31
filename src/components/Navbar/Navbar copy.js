import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar copy.css';
import logo from './output-onlinepngtools.png'

const NavbarCopy = () => {
    const [isMobile, setIsMobile] = useState(false);
    return(
        <nav className='NavbarCopy'>
            <h1>
                <Link to='/' className='HomeCopy'>
                    <img src={logo} alt='Logo' className='LogoCopy'></img>
                </Link>
            </h1>
            <ul className={isMobile ? 'MobileLinksCopy' : 'LinksCopy'}
            onClick={() => setIsMobile(false)}
            >
                <Link to='/team' className='TeamCopy'>
                    <li>
                        Team
                    </li>
                </Link>
                <Link to='/portfolio' className='PortfolioCopy'>
                    <li>
                        Portfolio
                    </li>
                </Link>
                <Link to='/stocks' className='StocksCopy'>
                    <li>
                        Pitches
                    </li>
                </Link>
                <Link to='/about' className='AboutCopy'>
                    <li>
                        About Us
                    </li>
                </Link>
                <Link to='/contact' className='ContactCopy'>
                    <li>
                        Contact Us
                    </li>
                </Link>
            </ul>
            <button className='MobileIconCopy'
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

export default NavbarCopy
