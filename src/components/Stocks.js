import React from 'react';
import airCanada from "../stock_pitches/air_canada.pdf";

const Stocks = () => {
    return(
        <div>
            <h2>
                Stocks
            </h2>
            <h1>Air Canada</h1>
            <iframe title="airCanada" src={airCanada + "#toolbar=0"} width="40%" height="350px">
            </iframe>
            <iframe title="airCanada" src={airCanada + "#toolbar=0"} width="40%" height="350px">
            </iframe>
        </div>
    );
}

export default Stocks
