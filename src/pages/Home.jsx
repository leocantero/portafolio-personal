import React from 'react'
import { Hero } from '../components/Hero.jsx'
import { AboutPreview } from '../components/AboutPreview.jsx'
import { Habilidades } from '../components/Habilidades.jsx'
import { Experiencia } from '../components/Experiencia.jsx'
import { Divisor } from '../components/Divisor.jsx'

import { ContactForm } from '../components/ContactForm.jsx'
import { Projects } from '../components/Projects.jsx'

export const Home = () => {
  return (
    <>
      <Hero />
      <Divisor />
      <AboutPreview />
      <Divisor />
      <Experiencia />
      <Divisor />
      <Projects />
      <Divisor />
      <Habilidades />
      <Divisor />
      <ContactForm />
    </>
  )
}