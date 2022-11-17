import React from "react";
import Separator from "../../common/separator";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <p className="work-logo" >{item.percentage} </p>
      <div className="work-info">

        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="type-training">
          {item.mode}
        </div>
        <ul className="newton-info">{item.keyPoints?.map((item,index) =>{
            return <li key={index}>{item}</li>
        })}</ul>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
        <div className="divider-parent">
          <div className="divider">

          </div>
        </div>
      </div>
    
    </div>
  );
}

export default WorkCard;
