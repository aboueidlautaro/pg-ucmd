import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-rosa-pastel">
        <div className=" mx-auto w-9/12 flex h-20 justify-between items-center ">
          <h2 className="txt-center text-2xl text-grafito font-bold">
            LOGO UCMD
          </h2>
          <ul className="flex justify-center">
            <NavLinks to="/" title="Inicio" />
            <NavLinks to="/simulacion" title="Simular monotributo" />
            <NavLinks to="/faq" title="Dudas/Consultas" />
            <NavLinks to="/inscripcion" title="Inscripción monotributo" />
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
