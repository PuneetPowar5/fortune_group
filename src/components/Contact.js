import React from 'react';
import linkedIn from "../pics/linkedIn.jpg";
import instagram from "../pics/Instagram.png";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="background">
            <div className="separator"></div>
            
            <div className="contacts">
            <h2>
                Contact Us
            </h2>
                <h4>If you would like to get in contact or would like more information, please contact us via one of our social media below:</h4>   
                <>
                <a href="https://www.linkedin.com/company/thefortunegroup/" target="_blank" rel="noopener noreferrer">
                    <h4>LinkedIn:</h4>
                    <img src={linkedIn} alt="linkedIn"/>
                
                </a>
                </>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                    <h4>Instagram:</h4>
                    <img src={instagram} alt="instagram"/>
                </a>
            </div>
            
        </div>
    );
}

export default Contact
