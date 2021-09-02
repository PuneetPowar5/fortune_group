import React from 'react';
import "./TeamPicture.css"

function TeamPicture(props){
    var pres = false;
    if(props.position==="President"){
        pres=true;
    }

    return(
        <div className={"container-" + pres}>
            <img  className="picture" src={props.pic} alt={props.name}></img>
            <div className="text">
            <p className="name">{props.name}</p>
            <p className="role">{props.position}</p>
            <p className="major">{props.major},</p>
            <p className="school">{props.school}</p>
            </div>
        </div>
    );
}

export default TeamPicture;