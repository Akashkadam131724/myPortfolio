import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import {AiOutlineCloudDownload} from 'react-icons/ai'
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a className="download_link" download href='./resume.pdf'>
            <AiOutlineCloudDownload className="download_icon"/>
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
