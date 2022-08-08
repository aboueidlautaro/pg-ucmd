import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ButtonBrand from "./ButtonBrand";

function Footer() {
  return (
    <>
      <div className="w-full absolute text-gray-800">
        <div className="w-full h-40 absolute z-50 text-center bottom-72">
          <div className="flex justify-center items-center">
            <span
              id="grosorLinea"
              className="inline-block w-full border-b-2 border-[#ffe6ef]"
            ></span>
            <h4 className="px-4 inline-block text-grafito-claro text-2xl font-extrabold">
              Contactame
            </h4>
            <span className="inline-block w-full border-b-2 border-[#ffe6ef] "></span>
          </div>

          <div className="flex justify-center items-center mt-5">
            <ButtonBrand href="http://www.google.com" icon={faWhatsapp} />
            <ButtonBrand href="http://www.google.com" icon={faInstagram} />
          </div>
        </div>
        <div
          id="footerPolygon"
          className="text-grafito mt-16 h-24 relative bottom-0 z-0"
        ></div>
        <div className="bg-rosa-pastel">
          <div className="bg-rosa-pastel h-72 items-center sm:w-8/12 flex flex-col sm:flex-row justify-evenly mx-auto text-center">
            <div className="sm:w-1/3">
              <p className="mx-auto w-10/12 font-semibold">
                {" "}
                Copyright &copy; Contadora Pública Nahir M. Aboueid
              </p>
            </div>
            <div className="sm:w-1/3 font-semibold">
              <p>Contacto directo</p>
              <p className="font-medium">aboueidnahir@gmail.com</p>
              <a className="font-bold" href="tel:+543704820411">
                +54(370)4820411
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-rosa-pastel h-16">
          <p className="h-auto mx-auto border-t-2 rounded-lg border-grafito/20 shadow-gray-900/10 shadow-sm border-blanco-perla w-24 text-center bg-rosa-pastel font-roboto">
            Design{" "}
            <a className=" font-bold" href="https://bydizeid.com">
              @ByDizeid
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
