import React from 'react';
import './About.css';
import Footer from './Footer';
import Toronto from '../pics/toronto_about.jpeg';

const About = () => {
  return (
    <div className='background'>
      <div className='about'>
        <h2 className='aboutTitle'>About Us</h2>

        <div className='space'></div>
        <div className='space'></div>
        <div className='space'></div>

        <h4 className='aboutDesc'>
          The Fortune Group is an investment management company, encompassing
          investments pooled by a group of investors. The firm’s primary mandate
          is to focus on capital gains by following a strategic value investing
          strategy, targeting undervalued stocks classified by investing
          fundamental characteristics. The Fortune Group is made possible with
          weekly analyst meetings encompassing presentations of stock reports.
          By actively managing $5,000+ diversified funds within the Canadian
          equities market, a value investing philosophy is utilized to optimize
          learning and portfolio growth.
        </h4>

        <img className='pic1' src={Toronto} alt='toronto' />

        <div className='containerAbout'></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
