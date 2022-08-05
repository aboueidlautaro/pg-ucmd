import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-rosa-pastel">
        <div className=" mx-auto w-9/12 flex h-20 justify-between items-center ">
          <h2 className="txt-center text-2xl text-grafito font-bold">
            LOGO UCMD
          </h2>
          <ul className="flex justify-center">
            <li className="mx-2 hover:scale-105 transition-all">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="mx-2 hover:scale-105 transition-all">
              <NavLink to="/simulacion">Simular monotributo</NavLink>
            </li>
            <li className="mx-2 hover:scale-105 transition-all">
              <NavLink to="/faq">Dudas/Consultas</NavLink>
            </li>
            <li className="mx-2 hover:scale-105 transition-all">
              <NavLink to="/inscripcion">Inscripción al monotributo</NavLink>
            </li>
          </ul>
          <button className="bg-blanco-perla px-3 py-1 rounded-md text-grafito font-medium">
            Contacto
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
