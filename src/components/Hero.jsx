import React from "react";
import { useNavigate } from "react-router-dom";
import { nombre } from "../data/data.js";
import { links_contacto } from "../data/data.js";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import heroImage from "../assets/about-image.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-(--fondo-color) text-(--texto-color) montserrat-title-light">
      <div className="mx-auto max-w-6xl px-6 h-screen grid grid-cols-2 items-center gap-16">

        {/* TEXTO */}
        <div>
          <h2 className="text-5xl font-bold mb-4 uppercase">
            Hola, soy {nombre}.
          </h2>

          <p className="">
            Pequeña introducción sobre mí y lo que hago.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              className="bg-(--acento-color) text-black uppercase px-6 py-3 rounded-full hover:bg-(--acento-color-hover) transition-all duration-300 ease-in-out"
              onClick={() => navigate("/contact")}
            >
              Contactame
            </button>

            <a
              href={links_contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-(--background-color-secondary) transition-all duration-300 ease-in-out"
            >
              <img src={linkedinIcon} alt="linkedin" className="w-10 h-10" />
            </a>

            <a
              href={links_contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-(--background-color-secondary) transition-all duration-300 ease-in-out"
            >
              <img src={githubIcon} alt="github" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="rounded-[48px] overflow-hidden w-auto h-[80vh] flex items-end justify-center">
            <img src={heroImage} alt="me" className="h-full object-cover" />
          </div>
        </div>

      </div>
    </section>

  );
}