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

  const [ingreso, setIngreso] = useState(0);
  const [alquiler, setAlquiler] = useState(0);
  const [energia, setEnergia] = useState(0);
  const [superficie, setSuperficie] = useState(0);
  const [actividad, setActividad] = useState("");

  const [checked, setChecked] = useState(false);

  const checkYes = () => {
    setChecked(true);
  };

  const checkNo = () => {
    setChecked(false);
  };

  const [valor, setValor] = useState("");
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

  const servicio = "Servicios";
  const muebles = "Venta de cosas muebles";

  const onSubmit = (e) => {
    e.preventDefault();

    {
      if (checked === true) {
        setAlquiler(e.target.elements.alquiler.value),
          setEnergia(e.target.elements.energia.value),
          setSuperficie(e.target.elements.superficie.value);
      } else {
        null;
      }
    }
    setIngreso(e.target.ingresos.value);
    setActividad(e.target.elements.actividad.value);
    setSended(true);

    if (ingreso === 0) {
      setValor("Por favor, confirme nuevamente su consulta");
    } else if (ingreso < ingresoA) {
      setValor("$ 3.334,24");
    } else if (ingreso > ingresoA && ingreso < ingresoB) {
      setValor("$ 3.728,29");
    }
  };

  return (
    <>
      {sended ? (
        <div className="text-grafito font-semibold mx-auto w-11/12 max-w-[420px]">
          <div className="flex justify-between text-grafito mt-8 mx-auto w-full text-center">
            <p>Cuota mensual: </p>
            <p>{valor}</p>
          </div>
          <p className="my-4 text-center">Composición de la cuota</p>
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
          <div className="my-3 flex justify-evenly w-12 mx-auto items-center">
            <input
              className="text-rosa-pastel focus:ring-0 mx-1"
              type="radio"
              name="check"
              value="yes"
              onClick={checkYes}
            />
            <LabelField text="Si" />

            <input
              required
              className="text-rosa-pastel focus:ring-0 mx-1"
              type="radio"
              name="check"
              value="no"
              onClick={checkNo}
            />
            <LabelField text="No" />
          </div>
          {checked ? (
            <div className="text-right">
              <LabelField text="Costo alquiler mensual en pesos" />
              <InputField
                id="alquiler"
                type="number"
                name="alquiler"
                placeholder="0.00"
                required
              />
              <LabelField text="Consumo energía mensual (KWs)" />
              <InputField
                id="energia"
                type="number"
                name="energia"
                placeholder="0.00"
                required
              />
              <LabelField text="Superficie en m2" />
              <InputField
                id="superficie"
                type="number"
                name="superficie"
                placeholder="0.00"
                required
              />
            </div>
          ) : null}

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
