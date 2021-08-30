import React from 'react';
import './Home.css';
import Title from './Title';
import Goals from './Goals';
import Footer from './Footer';
import Question from './Question';

const Home = () => {
    return(
        <div>
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
