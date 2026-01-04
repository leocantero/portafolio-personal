import React from 'react'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { proyectos } from '../data/data.js'

export const Projects = () => {
  return (
    <section id="proyectos" className="projects mx-auto max-w-12/12 scroll-mt-[10vh]">
        <h2 className="text-5xl font-bold montserrat-title-bold uppercase text-center">Proyectos</h2>
        {proyectos.map((project, idx) => (
          <ProjectCard key={project.title ?? idx} project={project} />
        ))}
      </section>
  )
}