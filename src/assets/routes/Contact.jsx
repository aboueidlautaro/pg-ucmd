import React from "react";
import InputField from "../components/InputField";
import LabelField from "../components/LabelField";

function Contact() {
  return (
    <>
      <div className="mx-auto my-16">
        <h2 className="mx-auto text-xl text-center font-extrabold text-grafito-claro w-10/12">
          Asesoramiento contable integral para tu actividad económica.
        </h2>
      </div>

      <div className="text-grafito mt-8 mx-auto w-11/12 sm:w-9/12 text-center">
        <form className="flex flex-col">
          <LabelField text="Nombre" />
          <InputField
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
          />
          <LabelField text="Asunto" />
          <InputField
            type="text"
            name="nombre"
            placeholder="Ingrese un asunto"
          />
          <LabelField text="Consulta" />
          <textarea
            className="focus:ring-0 placeholder:text-center border-none rounded-lg shadow-sm shadow-grafito/30"
            name="consulta"
            cols="30"
            rows="10"
            placeholder="Ingrese su consulta"
          ></textarea>
        </form>
      </div>
    </>
  );
}

export default Contact;
