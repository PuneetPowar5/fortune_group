import React from 'react';
import './Home.css';
import Title from './Title';
import Goals from './Goals';
import Footer from './Footer';
import Question from './Question';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return(
        <div>
            <h1 className='Holdings'>
                View Our Current Holdings!
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
                <Question />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home
