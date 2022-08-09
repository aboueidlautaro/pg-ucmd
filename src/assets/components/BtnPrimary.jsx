import React from "react";
import { Link } from "react-router-dom";

function BtnPrimary(props) {
  return (
    <Link
      className="bg-grafito text-white px-4 py-1 rounded-lg mx-2"
      to={props.to}
    >
      {props.text}
    </Link>
  );
}

export default BtnPrimary;
