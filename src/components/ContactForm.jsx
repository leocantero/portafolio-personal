import React from "react";
import { info_personal } from "../data/data";
import { links_contacto } from "../data/data";

export const ContactForm = () => {
  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

  return (
    <section
      id="contacto"
      className="max-w 9/12 px-4 flex row justify-between items-top gap-4 grid grid-cols-1 md:!grid-cols-2 scroll-mt-[10vh]"
    >
      <div className="order-0">
        <h2 className="text-4xl md:text-5xl font-bold montserrat-title-bold uppercase w-5xl mb-4">
          Contactate
        </h2>
      </div>

      <div className="md:w-1/4 order-2 lg:order-1">
        <h3 className="text-xl md:text-3xl text-(--text-col) font-bold montserrat-title-bold uppercase w-5xl mb-4 mt-4">
          Informacion de contacto
        </h3>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href={links_contacto.mail}
              className="text-gray-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {info_personal.email}
            </a>
          </li>
          <li>
            <a
              href={links_contacto.whatsapp}
              className="text-gray-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {info_personal.telefono}
            </a>
          </li>
          <li>
            <a
              href={links_contacto.github}
              className="text-gray-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={links_contacto.linkedin}
              className="text-gray-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Columna Derecha: El Formulario */}
      <div className="md:w-2/3">
        <form
          action={FORMSPREE_URL}
          method="POST"
          className="flex flex-col gap-4"
        >
          {/* Campo Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Nombre</label>
            <input
              type="text"
              name="name"
              required
              className="bg-[#1a1a1a] border-none p-3 rounded-md focus:ring-2 focus:ring-(--acento-color) outline-none"
            />
          </div>

          {/* Campo Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="bg-[#1a1a1a] border-none p-3 rounded-md focus:ring-2 focus:ring-(--acento-color) outline-none"
            />
          </div>

          {/* Campo Asunto */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Asunto</label>
            <input
              type="text"
              name="subject"
              className="bg-[#1a1a1a] border-none p-3 rounded-md focus:ring-2 focus:ring-(--acento-color) outline-none"
            />
          </div>

          {/* Campo Mensaje */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm">Mensaje</label>
            <textarea
              name="message"
              rows="4"
              required
              className="bg-[#1a1a1a] border-none p-3 rounded-md focus:ring-2 focus:ring-(--acento-color) outline-none resize-none"
            ></textarea>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className=" cursor-pointer bg-(--acento-color) text-black font-bold py-3 px-8 rounded-full w-fit mt-4 hover:bg-(--acento-color-hover) transition-colors uppercase mx-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
