import React from "react";
import linkedIn from "../images/linkedIn.png";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";

export default function Footer(){
    return(
    <div className="footer">
        <div className="footer-media">
            <a target="_blank" href="https://twitter.com/DubeyDonn">
                <img src={twitter} target="_blank" className="footer-icon"/>
            </a>
            <a  target="_blank" href="https://www.facebook.com/nirajshrestha539">
                <img src={facebook} className="footer-icon"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/_niraj_stha_/">
                <img src={insta}  className="footer-icon"/>
            </a>
            <a target="_blank" href="https://github.com/DubeyDonn">
                <img src={github} className="footer-icon footer-last-icon"/>
            </a>            
        </div>
    </div>
    )
}