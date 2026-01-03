import React from 'react'
import { Hero } from '../components/Hero.jsx'
import { AboutPreview } from '../components/AboutPreview.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { proyectos } from '../data/data.js'

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <section className="projects">
        {proyectos.map((project, idx) => (
          <ProjectCard key={project.title ?? idx} project={project} />
        ))}
      </section>
    </>
  )
}