import React from 'react';
import './Home.css';
import Title from './Title';
import Quote from './Quote';
import Goals from './Goals';
import Footer from './Footer';
import Goal1 from './Goal1';
import Goal2 from './Goal2';
import Goal3 from './Goal3';

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
                <Goal1 />
            </div>
            <div>
                <Goal2 />
            </div>
            <div>
                <Goal3 />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home
