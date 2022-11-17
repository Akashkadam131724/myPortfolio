import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item ,indx) => {
        return (
          <a key={indx} href={item.link} className='border_bottom'>
            <div className="social-icon-div">
              {item.icon} 
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
