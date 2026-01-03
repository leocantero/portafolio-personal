import React from "react";
import { getTechIconV1 } from "../utils/icons";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card grid grid-cols-2 gap-4 p-4 bg-(--background-color-tertiary) rounded-xl shadow-md hover:shadow-lg ease-in-out transition-duration-300 my-10 mx-15">
      <div className="project-img project-img bg-background-color-secondary rounded-md overflow-hidden aspect-video flex items-center justify-center mx-5 ">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-body mx-10 my-5 flex flex-col">
        <h3 className="font-semibold text-textHigh text-4xl font-light mb-2">
          {project.title}
        </h3>
        <p className= "text-textLow text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        

        <h3 className="font-semibold uppercase text-base">Tecnologías Usadas</h3>

        <div className="tech-icons grid grid-cols-8">
          {project.tecnologies.map((tech, index) => (
            <img
              key={index}
              src={getTechIconV1(tech)}
              alt={tech}
              className="h-10 hover:scale-110 ease-in-out transition-duration-500 hover:bg-(--background-color-tertiary) rounded-md p-1 rounded-xl"
            />
          ))}
        </div>
      
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-(--text-color) hover:bg-(--acento-color-hover) col-spans-3"
        >
            <img src={getTechIconV1("github")} className="h-10" />
        </a>
        <a href="{project.link}" target="_blank" rel="noreferrer" className="hover:text-color-(--acento-color) ease-in-out transition-duration-300">
            Ver proyecto
        </a>
      </div>
    </div>
  );
};
