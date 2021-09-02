import React from 'react';
import './Stocks.css';
import airCanada from '../stock_pitches/air_canada.pdf';
import cineplex from '../stock_pitches/cineplex.pdf';
import doman from '../stock_pitches/doman_building_materials_group.pdf';
import enbridge from '../stock_pitches/enbridge.pdf';
import td from '../stock_pitches/td_bank_stock_pitch.pdf';
import wsp from '../stock_pitches/wsp_global_inc.pdf';
import stock from '../pics/buyside-stock-pitch-header.png';
import Slideshow from './Slideshow.js';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Stocks = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='stocksBody'>
        <h2 className='headerStock'>Stock Pitches</h2>
        <img className='stocks' src={stock} alt='stock'></img>
        <ul className='buy'>
          <p className='title'>Buy Decisions</p>
          <li className='pitch'>
            <a href={airCanada} target='blank'>
              Air Canada (TSX: AC)
            </a>
          </li>
          <li className='pitch'>
            <a href={cineplex} target='blank'>
              Cineplex (TSX: CGX)
            </a>
          </li>
          <li className='pitch'>
            <a href={doman} target='blank'>
              Doman Building Materials Group (TSX: DBM)
            </a>
          </li>
          <li className='pitch'>
            <a href={td} target='blank'>
              Toronto-Dominion Bank (TSX: TD)
            </a>
          </li>
          <li className='pitch'>
            <a href={wsp} target='blank'>
              WSP Global (TSX: WSP)
            </a>
          </li>
          <li className='pitch'>
            <a href={wsp} target='blank'>
              Intact Financial Corporation (TSX: IFC)
            </a>
          </li>
          <li className='pitch'>
            <a href={wsp} target='blank'>
              Alimentation Couche-Tard Inc (TSX: ATD.B)
            </a>
          </li>
        </ul>
        <ul className='hold'>
          <p className='title'>Hold Decisions</p>
          <li className='pitch'>
            <a href={enbridge} target='blank'>
              Enbridge (TSX: ENB)
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Stocks;

/*
<div className="presentations">
            <Slideshow title="Air Canada" stock={airCanada}/>
            <Slideshow title="Cineplex" stock={cineplex}/>
            <Slideshow title="Doman Building Materials" stock={doman}/>
            <Slideshow title="Enbridge" stock={enbridge}/>
            <Slideshow title="TD Bank" stock={td}/>
            <Slideshow title="WSP" stock={wsp}/>
</div>

*/
