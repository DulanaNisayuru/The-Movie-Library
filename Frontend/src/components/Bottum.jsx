import React from "react";
import './css/Bottum.css';
import twitterIcon from '../Assets/Icons/Twitter White.svg';
import youtubeIcon from '../Assets/Icons/Youtube White.svg';

const Bottum = () => {
    return ( 
        <div className="bottum">
            <div className="media">
                <div className="address">
                    <h className="com-name"> Amadeus IT Group </h>
                    <p className="preserve-text">
{`C. Salvador de Madariaga, 1
28027 Madrid
Spain`}
                    </p>
                </div>
                <div className="follow">
                    <h className="follow-us">Follow us on</h>
                    <img src={twitterIcon} className="icon-media"/>
                    <img src={youtubeIcon} className="icon-media"/>
                </div>
            </div>

            <div className="hline"> </div>

            <div className="copyRight">
                <p>Copyright © 2022 Amadeus Hotels. All rights reserved.</p>
            </div>
        </div>     
    );
}
 
export default Bottum;