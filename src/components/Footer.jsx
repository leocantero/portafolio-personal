import React from "react";
import { nombre } from "../data/data.js";
import { info_personal } from "../data/data.js";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-6 flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-1 ">
          <h2 className="text-base font-semibold montserrat-title-bold text-white uppercase tracking-wider">
            {info_personal.nombre_completo}
          </h2>
          <p className="text-sm text-(--text-color-secondary) opacity-70 montserrat-title">
            © {year} {info_personal.nombre_completo}. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-5 justify-center">
          <a
            href="https://github.com/leocantero"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white/90 group-hover:text-(--acento-color)"
            >
              <path
                fillRule="evenodd"
                d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.06.66-3.71-1.3-3.71-1.3-.5-1.26-1.23-1.6-1.23-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.69-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.17 1.12-2.94-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.06 1.12.89-.25 1.85-.38 2.8-.38.95 0 1.91.13 2.8.38 2.13-1.42 3.06-1.12 3.06-1.12.6 1.53.22 2.66.11 2.94.69.77 1.12 1.74 1.12 2.94 0 4.23-2.58 5.16-5.03 5.43.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53 4.36-1.46 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white/90 group-hover:text-(--acento-color)"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.11V23h-4v-6.47c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41V23h-4V8.5z" />
            </svg>
          </a>
          <a
            href="mailto:hola@gmail.com"
            aria-label="Email"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white/90 group-hover:text-(--acento-color)"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
