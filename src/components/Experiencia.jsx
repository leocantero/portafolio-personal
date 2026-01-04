import React from "react";
import { useNavigate } from "react-router-dom";
import { experiencia } from "../data/data.js";

export const Experiencia = () => {
  const navigate = useNavigate();
  return (
    <>
     <section id="experiencia" className="max-w-11/12 mx-auto px-4  flex row justify-between items-top gap-16 scroll-mt-[10vh]">
            <h2 className="text-5xl font-bold montserrat-title-bold uppercase w-5xl">
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