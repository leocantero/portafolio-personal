import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nombre } from "../data/data.js";

const sections = [
  { label: "Acerca de mi", id: "aboutPreview" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Habilidades", id: "habilidades" },
  { label: "Contacto", id: "contacto" },
];

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const seccion = document.getElementById(id);
    seccion?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* HEADER SUPERIOR */}
      <header className="fixed top-0 left-0 z-[9998] w-full bg-(--background-color-secondary)">
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-4 flex items-center justify-between">
          {/* Mobile button */}
          <button
            className={`md:hidden text-2xl ${
              open ? "opacity-0 pointer-events-none" : ""
            }`}
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            type="button"
          >
            ☰
          </button>

          {/* Ocultamos el nombre cuando el menú está abierto en mobile para evitar duplicado visual */}
          <h2
            className="cursor-pointer text-xl font-bold montserrat-title-bold uppercase"
            onClick={() => navigate("/")}
          >
            {nombre}
          </h2>

          {/* Desktop nav */}
          <nav className="hidden md:!flex items-center justify-end gap-8"> 
            <ul className="flex gap-8 list-none">
              {sections.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer text-white hover:text-(--acento-color) transition-all duration-300 uppercase text-sm"
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* SIDEBAR MOBILE (wrapper fijo) */}
      <div
        className={`fixed inset-0 md:hidden z-[9999] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay abajo */}
        <button
          type="button"
          aria-label="Cerrar menú (overlay)"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 z-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer arriba */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 z-10
          bg-(--background-color-secondary) text-white px-6 py-6
          transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold uppercase">{nombre}</span>
          </div>

          <nav className="flex flex-col gap-6">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg hover:text-(--acento-color) transition"
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
};
