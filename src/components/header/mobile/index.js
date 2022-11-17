import React from "react";
import "./mobile.css";
import {GrProjects,GrTechnology,GrCertificate} from 'react-icons/gr'
import {IoIosCloseCircleOutline, IoMdContact} from 'react-icons/io'
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile" >
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
      <IoIosCloseCircleOutline className="icon" style={{color: 'rgba(0, 0, 255, 0.561)'}}/>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
          <GrProjects   />  Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
          < GrTechnology   />   Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work" style={{color : 'rgba(0, 0, 255, 0.561)'}} >
             
            <GrCertificate  />    Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact" style={{color : 'rgba(0, 0, 255, 0.561)'}}>
          <IoMdContact className="icon" style={{color : 'black'}}/> Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
