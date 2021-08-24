import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='background'>
      <div className='about'>
        <h2>About Us</h2>
        <div className='separator'></div>
        <div className='space'></div>
        <ul>
          <h2>
            The Fortune Group is an investment management company, encompassing
            investments pooled by a group of investors. The firm’s primary
            mandate is to focus on capital gains by following a strategic value
            investing strategy, targeting undervalued stocks classified by
            investing fundamental characteristics. The Fortune Group is made
            possible with weekly analyst meetings encompassing presentations of
            stock reports. By actively managing $5,000+ diversified funds within
            the Canadian equities market, a value investing philosophy is
            utilized to optimize learning and portfolio growth.
          </h2>
          <h2>
            “Risk comes from not knowing what you are doing” - Warren Buffet
          </h2>
        </ul>
      </div>
    </div>
  );
};

export default About;
