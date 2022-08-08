import React, { useState } from "react";

import NavLinks from "./NavLinks";

import Logo from "../static/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isActive, setActive] = useState("false");

  const visible =
    "h-40 sm:h40 bg-rosa-pastel text-lg flex flex-col justify-center items-center";
  const visible2 =
    "h-40 sm:h-40 w-full bg-rosa-pastel md:h-40 lg:hidden transition-all delay-150 ease-in-out text-white";
  const invisible2 = "hidden";

  const hPrimary = "sm:h-20 w-full bg-rosa-pastel";
  const hSecondary = "h-20 w-full bg-rosa-pastel";

  const headerActive = "sticky top-0 h-80 sm:h-60 lg:h-20 z-[100000]";
  const headerInactive = "sticky top-0 z-[100000]";

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className={isActive ? headerInactive : headerActive}>
        <div className={isActive ? hPrimary : hSecondary}>
          <div className="mx-auto w-full sm:w-9/12 flex h-40 flex-col sm:flex-row justify-center sm:h-20 sm:justify-between items-center bg-rosa-pastel">
            <Link to="/">
              <img
                className="w-40 hover:scale-105 transition-all linear"
                src={Logo}
                alt=""
              />
            </Link>

            <ul
              id="ul-1"
              className="hidden lg:flex justify-center text-white items-center text-center"
            >
              <NavLinks to="/" title="Inicio" />
              <NavLinks to="/simulacion" title="Simular monotributo" />
              <NavLinks to="/faq" title="Dudas/Consultas" />
              <NavLinks to="/inscripcion" title="Inscripción monotributo" />
            </ul>

            <div className="mt-4 sm:mt-0 flex justify-center items-center">
              <button className="active:scale-95 hover:bg-blanco-perla/80 mx-2 bg-blanco-perla px-3 py-1 rounded-md text-[#776868] font-bold">
                <Link to="/contacto">Contacto</Link>
              </button>
              <button
                onClick={handleToggle}
                className="lg:hidden hover:bg-blanco-perla/80 flex items-center mx-2 bg-blanco-perla px-3 py-2 rounded-md"
              >
                <FontAwesomeIcon
                  className="text-grafito text-xl"
                  icon={isActive ? faBars : faBarsStaggered}
                />
              </button>
            </div>
          </div>
          <div className={isActive ? invisible2 : visible2}>
            <ul id="ul-2" className={visible}>
              <NavLinks to="/" title="Inicio" />
              <NavLinks to="/simulacion" title="Simular monotributo" />
              <NavLinks to="/faq" title="Dudas/Consultas" />
              <NavLinks to="/inscripcion" title="Inscripción monotributo" />
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
