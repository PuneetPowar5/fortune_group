import React from 'react';

function Slideshow(props){
    return(
        <div>
        <h1>{props.title}</h1>
            <iframe title={props.title} src={props.stock + "#toolbar=0"} width="100%"  height="350px">
            </iframe>
        </div>
    );
}
    
export default Slideshow;