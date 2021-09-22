import React from 'react';
import './Home.css';
import Title from './Title';
import Goals from './Goals';
import Footer from './Footer';
import Question from './Question';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import Picture from './Picture';

const Home = () => {
    return(
        <div>
            <h1 className='Holdings'>
            <Link to='/stocks' className='Pitches'>
                View Our Current Holdings!
            </Link>
            </h1>
            <div>
                <Navbar />
            </div>
            <div>
                <Title />
            </div>
            <div>
                <Goals />
            </div>
            <div>
                <Picture />
            </div>
            <div>
                <Question />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home
