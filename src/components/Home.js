import React from 'react';
import './Home.css';
import Title from './Title';
import Quote from './Quote';
import Goals from './Goals';

const Home = () => {
    return(
        <div className='HomePage'>
            <Title />
            <Quote />
            <Goals />
        </div>
    );
}

export default Home
