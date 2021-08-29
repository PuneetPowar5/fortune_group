import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='background'>
      <div className='portfolio'>
        <h2>The Fund</h2>
        <div className='space'></div>
        <h4>
          The Fortune Group holds a bottom-up investment approach to align our
          value investing philosophy with our company goals. Through the
          utilization of a stock screener, we aim to find stocks that are
          heavily undervalued within the Canadian market. We believe that with a
          thorough research process, we can challenge public views of what is
          considered the “good” and “bad” stocks and invest accordingly.
        </h4>
        <div className='space'></div>
        <div className='space'></div>
        <div className='space'></div>
        <div className='container'>
          <div className='child'>
            <h1>5</h1>
            <h3>Stock Holdings</h3>
          </div>
          <div className='child'>
            <h1>$5k</h1>
            <h3>Asset Under Management</h3>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
