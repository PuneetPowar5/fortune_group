import React from 'react';
import "./TeamPicture.css"

function TeamPicture(props){
    return(
        <div className="container">
            <img  className="picture" src={props.pic} alt={props.name}></img>
            <div className="text">
            <p className="name">{props.name}</p>
            <p className="role">{props.position}</p>
            <p className="education">{props.edu}</p>
            </div>
        </div>
    );
}

export default TeamPicture;