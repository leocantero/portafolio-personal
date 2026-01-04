import React from "react";
import { useNavigate } from "react-router-dom";
import { info_personal } from "../data/data.js";
import { links_contacto } from "../data/data.js";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import heroImage from "../assets/about-image.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-(--fondo-color) text-(--texto-color) montserrat-title-light">
      {/* MODIFICACIÓN 1: 
        - Mantenemos 'grid-cols-2' para PC.
        - Agregamos 'max-md:grid-cols-1' para que en móvil sea una sola columna.
        - Cambiamos 'h-screen' por 'max-md:h-auto' y 'max-md:py-12' para que el contenido no se corte en móviles.
      */}
      <div className="mx-auto max-w-6xl px-6 h-screen grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:h-auto max-md:py-12 max-md:gap-8">

        {/* COLUMNA TEXTO 
            MODIFICACIÓN 2:
            - Agregamos 'max-md:order-2' para que el texto aparezca DEBAJO de la foto en móvil.
            - Agregamos 'max-md:text-center' para mejorar la lectura axial en celulares.
        */}
        <div className="max-md:order-2 max-md:text-center">
          <h2 className="text-5xl font-bold mb-4 uppercase max-md:text-3xl">
            Hola, soy {info_personal.nombre_completo}.
          </h2>

          <p className="max-md:text-base opacity-80">
            Pequeña introducción sobre mí y lo que hago.
          </p>

          {/* Centramos los botones en mobile con 'max-md:justify-center' */}
          <div className="mt-8 flex items-center gap-4 max-md:justify-center">
            <button
              className="bg-(--acento-color) text-black uppercase px-6 py-3 rounded-full hover:bg-(--acento-color-hover) transition-all duration-300 ease-in-out cursor-pointer font-bold"
              onClick={() => {
                const seccion = document.getElementById("contacto");
                seccion?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contactame
            </button>

            <a
              href={links_contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-(--background-color-secondary) transition-all duration-300 hover:scale-110"
            >
              <img src={linkedinIcon} alt="linkedin" className="w-8 h-8" />
            </a>

            <a
              href={links_contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-(--background-color-secondary) transition-all duration-300 hover:scale-110"
            >
              <img src={githubIcon} alt="github" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* COLUMNA IMAGEN 
            MODIFICACIÓN 3:
            - Agregamos 'max-md:order-1' para que la foto aparezca ARRIBA en el celular.
            - Ajustamos 'max-md:h-[40vh]' para que la imagen no ocupe toda la pantalla del móvil.
        */}
        <div className="flex justify-center max-md:order-1">
          <div className="rounded-[48px] overflow-hidden w-auto h-[80vh] flex items-end justify-center bg-(--background-color-secondary) max-md:h-[40vh] max-md:w-full max-md:rounded-[32px]">
            <img src={heroImage} alt="me" className="h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};