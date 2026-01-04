import React from "react";
import { getTechIconV1 } from "../utils/icons";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card grid grid-cols-2 gap-4 p-4 bg-(--background-color-tertiary) rounded-xl shadow-md hover:shadow-lg ease-in-out transition-duration-300 my-10 mx-15">
      <div className="project-img bg-background-color-secondary rounded-md overflow-hidden aspect-video flex items-center justify-center mx-5 ">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-body mx-10 my-5 flex flex-col">
        <h3 className="font-semibold text-textHigh text-4xl font-light mb-2">
          {project.title}
        </h3>
        <p className="text-textLow text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="border-t border-white/10 pt-4">
        <h3 className="montserrat-title-bold text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-color-secondary)' }}>
          Información del proyecto
        </h3>
        
        <div className="flex justify-between py-3 border-b border-white/5">
          <span className="monserrat-title-light text-xs" style={{ color: 'var(--text-color)' }}>Año</span>
          <span className="montserrat-title text-xs" style={{ color: 'var(--text-color)' }}>{project.anio}</span>
        </div>
        
        <div className="flex justify-between py-3 border-b border-white/5">
          <span className="monserrat-title-light text-xs" style={{ color: 'var(--text-color)' }}>Rol</span>
          <span className="montserrat-title text-xs" style={{ color: 'var(--text-color)' }}>{project.rol}</span>
        </div>
        </div>


        <div className="tech-icons grid grid-cols-8 mb-5">
          {project.tecnologies.map((tech, index) => (
            <img
              key={index}
              src={getTechIconV1(tech)}
              alt={tech}
              className="h-10 hover:scale-110 ease-in-out duration-500 hover:bg-(--background-color-tertiary) rounded-md p-1 rounded-xl"
            />
          ))}
        </div>

        <div className="mt-auto flex items-center gap-6">
          
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="
              group inline-flex items-center gap-2
              text-sm font-medium uppercase tracking-wide
              text-[var(--acento-color)]
              hover:text-[var(--acento-color-hover)]
              transition-colors duration-300"
          >
            Ver proyecto
            <span className="inline-block transition-transform duration-300
                              group-hover:translate-x-1">
              ↗
            </span>
            <span
              className="absolute bottom-0 left-0 h-px w-0
                          bg-[var(--acento-color)] transition-all duration-300 group-hover:w-full"
            />
          </a>

            <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              group inline-flex items-center gap-2
              text-sm font-medium uppercase tracking-wide
              text-[var(--acento-color)]
              hover:text-[var(--acento-color-hover)]
              transition-colors duration-300"
          >
            Ver en Github
            <span className="inline-block transition-transform duration-300
                              group-hover:translate-x-1">
              ↗
            </span>
            <span
              className="absolute bottom-0 left-0 h-px w-0
                          bg-[var(--acento-color)] transition-all duration-300 group-hover:w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
