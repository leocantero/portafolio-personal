import React from 'react'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { proyectos } from '../data/data.js'

export const Projects = () => {
  return (
    <section id="proyectos" className="projects mx-auto max-w-11/12 scroll-mt-[10vh]">
        <h2 className="text-4xl lg:text-5xl font-bold montserrat-title-bold uppercase text-left md:!text-center ml-5">Proyectos</h2>
        {proyectos.map((project, idx) => (
          <ProjectCard key={project.title ?? idx} project={project} />
        ))}
      </section>
  )
}