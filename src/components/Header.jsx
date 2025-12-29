import React from "react";
import { useNavigate } from "react-router-dom";
import { nombre } from "../data/data.js";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex row justify-between items-center cointainer mx-auto px-4 py-4">
      <h1
        className="cursor-pointer text-xl font-bold montserrat-title-light uppercase"
        onClick={() => navigate("/")}
      >
        {nombre}
      </h1>
      <ul className="flex row gap-8">
        <li
          className="cursor-pointer hover:text-(--acento-color) transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          onClick={() => navigate("/about")}
        >
          Acerca de mí
        </li>
        <li className="cursor-pointer hover:text-(--acento-color) transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Proyectos
        </li>
        <li className="cursor-pointer hover:text-(--acento-color) transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Contacto
        </li>
      </ul>
    </header>
  );
};
