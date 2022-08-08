import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
  return (
    <li className="mx-2 hover:scale-105 transition-all font-medium">
      <NavLink to={props.to}>{props.title}</NavLink>
    </li>
  );
}

export default NavLinks;
