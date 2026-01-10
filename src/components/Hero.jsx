import React from "react";
import { useNavigate } from "react-router-dom";
import { info_personal, links_contacto } from "../data/data.js";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import heroImage from "../assets/about-image.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-(--fondo-color) text-(--texto-color) montserrat-title-light">
      <div className="
        mx-auto max-w-6xl px-6
        pt-10 pb-14
        lg:pt-0 lg:pb-0 lg:min-h-[100svh]
        items-center gap-10 lg:gap-16
        grid grid-cols-1 md:!grid-cols-2
      ">
        {/* TEXTO + BOTONES (izquierda en desktop) */}
        <div className="order-1 lg:order-1 text-left">
          <h2 className="uppercase font-bold mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Hola, soy {info_personal.nombre_completo}.
          </h2>

          <p className="opacity-80 text-base sm:text-lg max-w-xl">
            {info_personal.introduccion}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              className="bg-(--acento-color) text-black uppercase px-6 py-3 rounded-full hover:bg-(--acento-color-hover) transition-all duration-300 ease-in-out cursor-pointer font-bold"
              onClick={() => {
                const seccion = document.getElementById("contacto");
                seccion?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contactame
            </button>

            <div className="flex items-center justify-start gap-4">
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
        </div>

        {/* IMAGEN (derecha en desktop) */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
          <div className="
            rounded-[32px] lg:rounded-[48px]
            overflow-hidden
            w-full max-w-[520px]
            h-full
            h-[38vh] sm:h-[44vh] lg:h-[80vh]
            bg-(--background-color-secondary)
          ">
            <img src={heroImage} alt="me" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
