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
        <div className="stocksBody">
            <h2>
                Stock Pitches
            </h2>
            <div className="buy">
                <p className="title">Buy Decisions</p>
                <p className="pitch"><a href={airCanada} target="blank">Air Canada</a></p>
                <p className="pitch"><a href={cineplex} target="blank">Cineplex</a></p>
                <p className="pitch"><a href={doman} target="blank">Doman</a></p>
            </div>
            <div className="hold">
                <p className="title">Hold Decisions</p>
                <p className="pitch"><a href={enbridge} target="blank">Enbride</a></p>
                <p className="pitch"><a href={td} target="blank">TD Bank</a></p>
                <p className="pitch"><a href={wsp} target="blank">WSP</a></p>
            </div>
            
        </div>
    );
}

export default Stocks


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
