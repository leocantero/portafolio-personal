import React from 'react'
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();
    
    const nombre = "Nombre";
    
    return (
      <header className="w-full flex row justify-between items-center cointainer mx-auto px-4 py-4">
          <h1 className="text-xl font-bold montserrat-title-light uppercase">{nombre}</h1>
          <ul className="flex row gap-8">
            <li className="cursor-pointer hover: transition-colors" onClick={() => navigate("/about")}>Acerca de mí</li>
            <li className="cursor-pointer hover:text-[var(--acento-color)] transition-colors">Proyectos</li>
            <li className="cursor-pointer hover:text-[var(--acento-color)] transition-colors">Contacto</li>
          </ul>
      </header>
    )
}
