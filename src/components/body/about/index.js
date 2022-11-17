import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Akash B. kadam</span>.<br /> I am Fresher. I love
          experimenting with the web-design.
        </div>
        <div className="about-photo">
          <img
            src='https://media-exp1.licdn.com/dms/image/C5603AQGIe1KlIdDjmw/profile-displayphoto-shrink_800_800/0/1637602616947?e=1652918400&v=beta&t=Ezt2xAJWpoiX7PZkpNO7fPKiVI5dvQzvK74drnrSmo8'
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
