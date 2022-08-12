import React, { useState } from "react";
import { render } from "react-dom";

import InputField from "./InputField";
import LabelField from "./LabelField";

function FormMonotributoCalc() {
  const actividades = [
    { actividad: "Seleccione su actividad" },
    { actividad: "Servicios" },
    { actividad: "Venta de cosas muebles" },
  ];

  const [sended, setSended] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [ingreso, setIngreso] = useState(0);
  const [alquilerr, setAlquiler] = useState(0);
  const [energia, setEnergia] = useState(0);
  const [superficie, setSuperficie] = useState(0);
  const [actividad, setActividad] = useState("");

  const alquiler = alquilerr * 12;

  const [valor, setValor] = useState("");
  const [valorImpuesto, setValorImpuesto] = useState("");
  const [valorJub, setValorJub] = useState("");
  const [valorObso, setValorObso] = useState("");

  const ingresoA = 748382;
  const ingresoB = 1112459;
  const ingresoC = 1557443;
  const ingresoD = 1934273;
  const ingresoE = 2277684;
  const ingresoF = 2847105;
  const ingresoG = 3416526;
  const ingresoH = 4229985;
  const ingresoI = 4734330;
  const ingresoJ = 5425770;
  const ingresoK = 6019594;

  const energiaA = 3330;
  const energiaB = 5000;
  const energiaC = 5000;
  const energiaD = 6700;
  const energiaE = 10000;
  const energiaF = 13000;
  const energiaG = 16500;
  const energiaH = 20000;
  const energiaI = 20000;
  const energiaJ = 20000;
  const energiaK = 20000;

  const superficieA = 30;
  const superficieB = 45;
  const superficieC = 60;
  const superficieD = 85;
  const superficieE = 110;
  const superficieF = 150;
  const superficieG = 200;
  const superficieH = 200;
  const superficieI = 200;
  const superficieJ = 200;
  const superficieK = 200;

  const alquilerA = 133455;
  const alquilerB = 133455;
  const alquilerC = 266911;
  const alquilerD = 266911;
  const alquilerE = 332579;
  const alquilerF = 333638;
  const alquilerG = 400366;
  const alquilerH = 533822;
  const alquilerI = 533822;
  const alquilerJ = 533822;
  const alquilerK = 533822;

  const servicio = "Servicios";
  const muebles = "Venta de cosas muebles";

  const onSubmit = (e) => {
    e.preventDefault();

    setAlquiler(e.target.elements.alquiler.value);

    setEnergia(e.target.elements.energia.value);

    setSuperficie(e.target.elements.superficie.value);

    setIngreso(e.target.ingresos.value);

    setActividad(e.target.elements.actividad.value);

    setSended(true);

    //validacion para introducir un valor
    if (ingreso != null && ingreso === 1) {
      setValor("Por favor, introduzca un valor");
    } //validacion por confirmación de form
    else if (ingreso === 0) {
      setValor("Por favor, confirme nuevamente su consulta");
      setValorImpuesto("Cargando valor...");
      setValorJub("Cargando valor...");
      setValorObso("Cargando valor...");
    } //validacion por si no se ingresó un tipo de actividad
    else if (ingreso > 0 && actividad === "Seleccione su actividad") {
      setCategoria("Seleccione una actividad");
      setValor("Seleccione una actividad");
      setValorImpuesto("Seleccione una actividad");
      setValorJub("Seleccione una actividad");
      setValorObso("Seleccione una actividad");
    } //validacion para categoría A
    else if (
      (ingreso < ingresoA &&
        superficie <= superficieA &&
        energia <= energiaA &&
        alquiler <= alquilerA &&
        actividad === servicio) ||
      (ingreso < ingresoA &&
        superficie <= superficieA &&
        energia <= energiaA &&
        alquiler <= alquilerA)
    ) {
      setCategoria("A");
      setValor("$ 3.334,24");
      setValorImpuesto("$ 288,07");
      setValorJub("$ 1.270,99");
      setValorObso("$ 1.775,18");
    } //validacion para categoría B en SERVICIO
    else if (
      ingreso < ingresoB &&
      alquiler <= alquilerB &&
      energia <= energiaB &&
      superficie <= superficieB
    ) {
      setCategoria("B");
      setValor("$ 3.728,29");
      setValorImpuesto("$ 555,02");
      setValorJub("$ 1.398,09");
      setValorObso("$ 1.775,18");
    } //validacion para categoría B en MUEBLES
    else if (
      ingreso < ingresoB &&
      alquiler <= alquilerB &&
      energia <= energiaB &&
      superficie <= superficieB
    ) {
      setCategoria("B");
      setValor("$ 3.728,29");
      setValorImpuesto("$ 555,02");
      setValorJub("$ 1.398,09");
      setValorObso("$ 1.775,18");
    } //validacion para categoría C en SERVICIO
    else if (
      ingreso < ingresoC &&
      alquiler <= alquilerC &&
      energia <= energiaC &&
      superficie <= superficieC
    ) {
      setCategoria("C");

      {
        actividad === servicio
          ? setValorImpuesto("$ 949,02")
          : setValorImpuesto("$ 876,97");
      }
      {
        actividad === servicio
          ? setValorImpuesto("$ 949,02")
          : setValorImpuesto("$ 876,97");
      }

      setValorJub("$ 1.537,91");
      setValorObso("$ 1.775,18");
    } //validacion para categoría C en MUEBLES
    else if (
      ingreso < ingresoC &&
      superficie <= superficieC &&
      energia <= energiaC &&
      alquiler <= alquilerC
    ) {
      setCategoria("C");
      setValor("$ 4.190,06");
      setValorImpuesto("$ 876,97");
      setValorJub("$ 1.537,91");
      setValorObso("$ 1.775,18");
    } //validacion para categoría D en SERVICIO
    else if (
      ingreso < ingresoD &&
      superficie <= superficieD &&
      energia <= energiaD &&
      alquiler <= alquilerD
    ) {
      setCategoria("D");
      setValor("$ 5.025,96");
      setValorImpuesto("$ 1.559,09");
      setValorJub("$ 1.691,69");
      setValorObso("$ 1.775,18");
    } //validacion para categoría D en MUEBLES
    else if (
      ingreso > ingresoC &&
      ingreso < ingresoD &&
      superficie > superficieC &&
      superficie <= superficieD &&
      energia > energiaC &&
      energia <= energiaD &&
      alquiler > alquilerC &&
      alquiler <= alquilerD
    ) {
      setCategoria("D");
      setValor("$ 4.907,34");
      setValorImpuesto("$ 1.440,47");
      setValorJub("$ 1.691,69");
      setValorObso("$ 1.775,18");
    } //validacion para cuando no se cumplan las condiciones de arriba
    else {
      setCategoria("Entró al else");
      setValor("Entró al else");
      setValorImpuesto("Entró al else");
      setValorJub("Entró al else");
      setValorObso("Entró al else");
    }
  };

  return (
    <>
      {sended ? (
        <div className="text-grafito font-semibold mx-auto w-11/12 max-w-[420px]">
          <div className="flex justify-between text-grafito mt-8 mx-auto w-full text-center">
            <p>Categoría: </p>
            <p className="font-bold">{categoria}</p>
          </div>
          <div className="flex justify-between text-grafito mt-8 mx-auto w-full text-center">
            <p>Cuota mensual: </p>
            <p className="font-bold">{valor}</p>
          </div>
          <p className="my-4 font-extrabold text-center">
            Composición de la cuota
          </p>
          <div className="flex justify-between text-grafito mt-8 mx-auto w-full text-center">
            <p>Impuestos: </p>
            <p className="font-bold">{valorImpuesto}</p>
          </div>
          <div className="flex justify-between text-grafito mt-3 mx-auto w-full text-center">
            <p>Aportes jubilatorios: </p>
            <p className="font-bold">{valorJub}</p>
          </div>
          <div className="flex justify-between text-grafito mt-3 mx-auto w-full text-center">
            <p>Obra Social: </p>
            <p className="font-bold">{valorObso}</p>
          </div>
        </div>
      ) : null}
      <div className="text-grafito mt-8 mx-auto w-10/12 sm:w-6/12 lg:w-4/12 text-center">
        <form
          method="POST"
          className="flex flex-col"
          id="form"
          onSubmit={onSubmit}
        >
          <LabelField text="¿Cuánto ganás por mes?" />
          <InputField
            required
            id="ingresos"
            type="number"
            name="ingresos"
            placeholder="Ingresos mensuales"
          />
          <LabelField text="¿Cuenta con local comercial u oficina?" />
          <label className="text-md">
            Dejar en blanco si la respuesta es no.
          </label>

          <div className="mt-3 text-center flex flex-col mx-auto">
            <div>
              <LabelField text="Costo alquiler mensual en pesos" />
              <InputField
                id="alquiler"
                type="number"
                name="alquiler"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <LabelField text="Consumo energía mensual (KWs)" />
              <InputField
                id="energia"
                type="number"
                name="energia"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <LabelField text="Superficie en m2" />
              <InputField
                id="superficie"
                type="number"
                name="superficie"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <select
            className="focus:ring-0 mb-4  border-none rounded-lg shadow-sm shadow-grafito/30"
            name="actividades"
            id="actividad"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
            required
          >
            {actividades.map((value, index) => {
              return (
                <option
                  value={value.actividad}
                  className="focus:ring-0 mb-4  border-none rounded-lg shadow-sm shadow-grafito/30"
                  key={index}
                >
                  {value.actividad}
                </option>
              );
            })}
          </select>
          <input
            className="hover:cursor-pointer bg-grafito-claro w-48 mx-auto rounded-lg text-blanco-perla px-2 py-2 hover:bg-grafito"
            type="submit"
            value="Simular mi categoría"
          />
        </form>
      </div>
    </>
  );
}

export default FormMonotributoCalc;
