import React from 'react';
import './Quote.css';

const Quote = () => {
    return(
        <div className='QuotePage'>
            <div className='Container'>
                <div className='Row'>
                    <div className='Col'>
                        <div className='TextWrapper'>
                            <div className='Quote'>
                                "The intelligent investor is a realist who sells to optimists and buys from pessimists" - Benjamin Graham
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote