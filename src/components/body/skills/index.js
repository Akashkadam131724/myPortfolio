import React from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills";
import SkillCard from "./skill-card";
import Separator from "../../common/separator";
function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item, indx) => {
          return (
            <div key={indx} className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, indx) => {
                  return <SkillCard key={indx} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
