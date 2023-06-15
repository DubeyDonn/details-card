import React from "react";
import niraj from "../images/Niraj.jpg";
import linkedIn from "../images/linkedIn.png";
import gmail from "../images/gmail.png";

export default function Main() {
  return (
    <div className="main">
      <img src={niraj} alt="Niraj Shrestha" className="header--img" />
      <h1 className="header--name">Niraj Shrestha</h1>
      <h2 className="header--role">Frontend Developer</h2>
      <p className="header--gmail">nirajshrstha539@gmail.com</p>
      <div className="media">
        <button
          className="media-btn gmail"
          onClick={() =>
            window.open("mailto: nirajshrestha539@gmail.com", "_blank")
          }
        >
          <img src={gmail} alt="gmail" className="media-icon" />
          <p>Gmail</p>
        </button>
        <button
          className="media-btn linkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/niraj-shrestha-25b615187/",
              "_blank"
            )
          }
        >
          <img src={linkedIn} alt="linkedIn" className="media-icon" />
          <p>LinkedIn</p>
        </button>
      </div>
      <div className="main-body">
        <div>
          <h3 className="main-body-title">About</h3>
          <p className="main-body-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h3 className="main-body-title">Interests</h3>
          <p className="main-body-text">
            Football. Music. Travel. Online Games. Movies.
          </p>
        </div>
      </div>
    </div>
  );
}
