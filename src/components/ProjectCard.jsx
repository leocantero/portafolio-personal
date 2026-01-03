import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer">Ver Proyecto</a>
        <a href={project.github} target="_blank" rel="noreferrer">
          Ver en GitHub <img src="/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}