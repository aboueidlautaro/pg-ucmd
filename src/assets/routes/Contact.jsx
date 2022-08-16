import React from "react";
import InputField from "../components/InputField";
import LabelField from "../components/LabelField";
import emailjs from "emailjs-com";
import { useState } from "react";
import BtnLoading from "../components/BtnLoading";

function Contact() {
  const [mensajeError, setMensajeError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_j0h608a",
        "template_j6s6woj",
        e.target,
        "-jZIn74Ia4Xju8owE"
      );
      setMensaje("Correo enviado satisfactoriamente");
    } catch (error) {
      console.log(error.code);
      setMensajeError("El correo no pudo ser enviado, intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto my-16">
        <h2 className="mx-auto text-xl text-center font-extrabold text-grafito-claro w-10/12">
          Asesoramiento contable integral para tu actividad económica.
        </h2>
      </div>

      <div className="text-grafito mt-8 mx-auto w-11/12 sm:w-9/12 text-center">
        {mensaje ? (
          <p className="py-2 my-2 text-grafito bg-green-200 rounded-md max-w-[400px] mx-auto">
            {mensaje}
          </p>
        ) : (
          <p className=" my-2 text-grafito bg-red-200 rounded-md max-w-[400px] mx-auto">
            {mensajeError}
          </p>
        )}
        <form id="form" onSubmit={onSubmit} className="flex flex-col">
          <LabelField text="Nombre" />

          <InputField
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            required
            minLength="4"
          />

          <LabelField text="Asunto" />

          <InputField
            type="text"
            name="asunto"
            placeholder="Ingrese un asunto"
            required
            minLength="10"
          />

          <LabelField text="Consulta" />

          <input
            className="focus:ring-0 border-none text-center placeholder:text-center rounded-lg shadow-sm shadow-grafito/30 h-64 w-full"
            name="consulta"
            type="text"
            placeholder="Ingrese su consulta"
            required
            minLength="40"
          />

          <div className="text-center mt-5">
            {loading ? (
              <BtnLoading />
            ) : (
              <button
                className="bg-rosa-pastel text-white rounded-md px-2 py-1 hover:bg-rosa-pastel/70"
                type="submit"
              >
                Enviar consulta
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
