import React from 'react';
import './Home.css';

const Home = () => {
    return(
        <div className='HomePage'>
            <div className='CompName'>
                THE FORTUNE GROUP
            </div>
            <div className='Intro'>
                The Fortune Group, established by a team of 10 university students aims to maximize capital gains through value investing philosophy
            </div>
            <div className='Quote'>
                "The intelligent investor is a realist who sells to optimists and buys from pessimists" - Benjamin Graham
            </div>
            <div className='Goals'>
                Our 3 Goals:
                    Capital Gains:
                        Maximizing profits with thorough analysis of stocks
                    Acquire Useful Skills:
                        Understand and Interpret business news while building financial models
                    Network:
                        Connect with like-minded individuals who are finance/engineer oriented 
            </div>
        </div>
    );
}

export default Home
