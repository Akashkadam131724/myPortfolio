import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Experience & Education</label>
      <div className="work-list">
        {data.map((item,indx) => {
          return <WorkCard key={indx} item={item}  />;
        })}
      </div>
    </div>
  );
}

export default Work;
