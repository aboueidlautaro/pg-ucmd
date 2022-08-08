import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ButtonBrand(props) {
  return (
    <a
      href={props.href}
      className="transition-all delay-75 bg-white border-2 border-rosa-pastel mx-4 text-4xl px-2 py-1 rounded-lg text-rosa-pastel
       hover:text-[#7c6b6b] hover:bg-blanco-perla"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
}

export default ButtonBrand;
