import React from 'react';
import "./Stocks.css"
import airCanada from "../stock_pitches/air_canada.pdf";
import cineplex from "../stock_pitches/cineplex.pdf"
import doman from "../stock_pitches/doman_building_materials_group.pdf"
import enbridge from "../stock_pitches/enbridge.pdf"
import td from "../stock_pitches/td_bank_stock_pitch.pdf"
import wsp from "../stock_pitches/wsp_global_inc.pdf"
import Slideshow from "./Slideshow.js"

const Stocks = () => {
    return(
        <div>
            <h2>
                Stocks
            </h2>
            <div className="presentations">
            <Slideshow title="Air Canada" stock={airCanada}/>
            <Slideshow title="Cineplex" stock={cineplex}/>
            <Slideshow title="Doman Building Materials" stock={doman}/>
            <Slideshow title="Enbridge" stock={enbridge}/>
            <Slideshow title="TD Bank" stock={td}/>
            <Slideshow title="WSP" stock={wsp}/>
            </div>
            
        </div>
    );
}

export default Stocks
