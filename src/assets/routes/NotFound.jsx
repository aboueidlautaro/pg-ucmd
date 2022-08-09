import React from "react";
import BtnPrimary from "../components/BtnPrimary";

function NotFound() {
  return (
    <div className="flex flex-col justify-center mx-auto text-center  sm:w-2/4 h-72 w-11/12">
      <div>
        <h2 className="text-5xl font-bold text-grafito">Error 404</h2>
        <p className="text-grafito text-lg mb-2 ">
          Página no encontrada. Intente nuevamente <br /> o vuelva a
        </p>
        <div className="my-4">
          <BtnPrimary to="/" text="INICIO" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
