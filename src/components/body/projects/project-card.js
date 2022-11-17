import React from "react";
import "./project-card.css";
import {BsCodeSlash,BsGlobe} from 'react-icons/bs'
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                 <BsGlobe/> 
                Hosted url
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <BsCodeSlash />  GIthub code
              </div>
            </a>
          )}
        </div>
        <ul className="project-info">{project.about.map((item,index) =>{
            return <li key={index}>{item}</li>
        })}</ul>
        <div className="project-tags"> 
          {project.tags.map((tag, indx) => {
            return <label key={indx} className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
