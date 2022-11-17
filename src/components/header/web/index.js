import React from "react";
import {GrProjects,GrTechnology,GrCertificate} from 'react-icons/gr'
import {IoMdContact} from 'react-icons/io'
import "./web.css";
function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
          <GrProjects className="icon" style={{fontSize: '1.7rem'}}/>   Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
         < GrTechnology className="icon" style={{fontSize: '1.7rem'}} />  Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
        <GrCertificate  className="icon" style={{fontSize: '1.7rem'}}/>   Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
         <IoMdContact className="icon" style={{color : 'black',fontSize: '1.7rem'}}/>  Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
