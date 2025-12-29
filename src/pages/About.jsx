import React from "react";
import { ContactForm } from "../components/ContactForm.jsx";
import { habilidades } from "../data/data.js";
import { experiencia } from "../data/data.js";
import aboutImage from "../assets/about-image.jpg";

export const About = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 border-b-2 border-white/10 mb-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold montserrat-title-bold uppercase">
              Acerca de mí
            </h2>
            <p className="text-xl">
              Soy un desarrollador web apasionado por crear experiencias
              digitales atractivas y funcionales.
            </p>
            <p className="text-sm text-(--text-color-secondary)">
              Con varios años de experiencia en el desarrollo front-end y
              back-end, me especializo en construir aplicaciones web escalables
              y eficientes utilizando las últimas tecnologías. Mi objetivo es
              combinar diseño y funcionalidad para ofrecer soluciones que no
              solo cumplan con los requisitos del cliente, sino que también
              proporcionen una experiencia de usuario excepcional. Siempre estoy
              buscando aprender nuevas habilidades y mantenerme actualizado con
              las tendencias de la industria.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImage}
              alt="Imagen personal"
              className="w-full max-w-md rounded-lg shadow-lg ring-1 ring-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="mx-auto max-w-6xl px-4 py-16 border-b-2 border-white/10 mb-8"
      >
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <h2 className="text-4xl font-bold montserrat-title-bold uppercase">
            Habilidades
          </h2>
          <div className="md:col-span-2">
            <p className="text-sm text-(--text-color-secondary) mb-4">
              Siempre estoy buscando aprender nuevas habilidades y mantenerme
              actualizado con las tendencias de la industria. Algunas de mis
              habilidades incluyen:
            </p>
            <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {habilidades.map((habilidad, index) => (
                <li key={`${habilidad}-${index}`}>
                  <div className="group flex items-center justify-center gap-2 rounded-xl border border-white/5 ring-1 ring-white/10 px-3 py-2 md:px-4 md:py-3 transition-all duration-200 hover:bg-white/10 hover:ring-(--acento-color) hover:-translate-y-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-(--acento-color)"
                      aria-hidden="true"
                    >
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span className="text-sm md:text-base">{habilidad}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-9/12 mx-auto px-4 py-16 flex row justify-between items-top gap-16 border-b-2 border-white/10 mb-8">
        <h2 className="text-4xl font-bold montserrat-title-bold uppercase w-5xl">
          Experiencia
        </h2>
        <div>
          <ol>
            {experiencia.map((exp, index) => (
              <li key={index} className="mb-8">
                <h3 className="text-2xl font-semibold montserrat-title-bold">
                  {exp.puesto} {exp.empresa && "en"}{" "}
                  <span className="text-(--acento-color)">{exp.empresa}</span>
                </h3>
                <p className="text-(--text-color-secondary) italic mb-2">
                  {exp.periodo}
                </p>
                <p className="text-(--text-color-secondary) text-sm">
                  {exp.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};
