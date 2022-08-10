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

    if (ingreso != null && ingreso === 1) {
      setValor("Por favor, introduzca un valor");
    } else if (ingreso === 0) {
      setValor("Por favor, confirme nuevamente su consulta");
    } else if (ingreso < ingresoA && ingreso > 1) {
      {
        checked ? setValorImpuesto("$ 288,07") : null;
      }
      setValor("$ 3.334,24");
    } else if (ingreso > ingresoA && ingreso < ingresoB) {
      {
        checked ? setValorImpuesto("$ 555,02") : null;
      }
      setValor("$ 3.728,29");
    } else if (
      ingreso > ingresoB &&
      ingreso < ingresoC &&
      actividad === servicio
    ) {
      {
        alquiler > 0
          ? setValorImpuesto("$ 949,02")
          : setValorImpuesto("Introduzca un valor");
      }
      setValor("$ 4.262,11");
    } else if (
      ingreso > ingresoB &&
      ingreso < ingresoC &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 876,97") : null;
      }
      setValor("$ 4.190,06");
    } else if (
      ingreso > ingresoC &&
      ingreso < ingresoD &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("$ 1.559,09") : null;
      }
      setValor("$ 5.025,96");
    } else if (
      ingreso > ingresoC &&
      ingreso < ingresoD &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 1.440,47") : null;
      }
      setValor("$ 4.907,34");
    } else if (
      ingreso > ingresoD &&
      ingreso < ingresoE &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("$ 2.965,66") : null;
      }
      setValor("$ 6.601,71");
    } else if (
      ingreso > ingresoD &&
      ingreso < ingresoE &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 2.300,50") : null;
      }
      setValor("$ 5.936,55");
    } else if (
      ingreso > ingresoE &&
      ingreso < ingresoF &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("$ 4.079,93") : null;
      }
      setValor("$ 7.902,06");
    } else if (
      ingreso > ingresoE &&
      ingreso < ingresoF &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 3.003,79") : null;
      }
      setValor("$ 6.825,92");
    } else if (
      ingreso > ingresoF &&
      ingreso < ingresoG &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("$ 5.189,94") : null;
      }
      setValor("$ 9.216,76");
    } else if (
      ingreso > ingresoF &&
      ingreso < ingresoG &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 3.745,19") : null;
      }
      setValor("$ 7.772,01");
    } else if (
      ingreso > ingresoG &&
      ingreso < ingresoH &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("$ 11.862,69") : null;
      }
      setValor("$ 16.114,67");
    } else if (
      ingreso > ingresoG &&
      ingreso < ingresoH &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 9.193,62") : null;
      }
      setValor("$ 13.445,60");
    } else if (
      ingreso > ingresoH &&
      ingreso < ingresoI &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 14.828,38") : null;
      }
      setValor("$ 19.328,05");
    } else if (
      ingreso > ingresoH &&
      ingreso < ingresoI &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("No corresponde") : null;
      }
      setValor("No corresponde");
    } else if (
      ingreso > ingresoI &&
      ingreso < ingresoJ &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("No corresponde") : null;
      }
      setValor("No corresponde");
    } else if (
      ingreso > ingresoI &&
      ingreso < ingresoJ &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 17.425,48") : null;
      }
      setValor("$ 22.197,62");
    } else if (
      ingreso > ingresoJ &&
      ingreso < ingresoK &&
      actividad === muebles
    ) {
      {
        checked ? setValorImpuesto("$ 20.018,33") : null;
      }
      setValor("$ 25.090,13");
    } else if (
      ingreso > ingresoJ &&
      ingreso < ingresoK &&
      actividad === servicio
    ) {
      {
        checked ? setValorImpuesto("No corresponde") : null;
      }
      setValor("No corresponde");
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
          <p className="my-4 font-extrabold text-center">
            Composición de la cuota
          </p>
          <div className="flex justify-between text-grafito mt-8 mx-auto w-full text-center">
            <p>Impuestos: </p>
            <p>{valorImpuesto}</p>
          </div>
          <div className="flex justify-between text-grafito mt-3 mx-auto w-full text-center">
            <p>Aportes jubilatorios: </p>
            <p>{valorJub}</p>
          </div>
          <div className="flex justify-between text-grafito mt-3 mx-auto w-full text-center">
            <p>Obra Social: </p>
            <p>{valorObso}</p>
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
