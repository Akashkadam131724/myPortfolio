import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <br />
          <span className="info-name">Akash B. kadam</span>.<br />
          <br /> I am Full stack MERN Developer.
          <br />
          <br />
        </div>
        <div className="about-photo">
          <img
            src="https://media.istockphoto.com/id/1798502174/photo/smiling-businessman-holding-digital-tablet-and-looking-over-shoulder-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=Dmpu_lAqlkK5X3CCXf5BS86n91EMOI2st8MRjKTsR7k="
            className="picture"
            alt=""
          />
        </div>
      </div>
      <br></br>
      <SocialContact />
    </div>
  );
}

export default About;
