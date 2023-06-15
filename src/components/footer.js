import React from "react";
import github from "../images/github.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-media">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/DubeyDonn"
        >
          <img src={twitter} alt="twitter" className="footer-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/nirajshrestha539"
        >
          <img src={facebook} alt="facebook" className="footer-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/_niraj_stha_/"
        >
          <img src={insta} alt="insta" className="footer-icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/DubeyDonn">
          <img
            src={github}
            alt="github"
            className="footer-icon footer-last-icon"
          />
        </a>
      </div>
    </div>
  );
}
