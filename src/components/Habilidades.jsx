import React from "react";
import { useNavigate } from "react-router-dom";
import { nombre } from "../data/data.js";
import {habilidades} from "../data/data.js";

export const Habilidades = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="habilidades"
        className="mx-auto max-w-6xl px-4"
      >
        <div className="grid gap-8 md:grid-cols-3 md:items-start mx-auto max-w-6xl scroll-mt-[10vh]">
          <h2 className="text-5xl font-bold montserrat-title-bold uppercase">
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
    </>
  );
};
