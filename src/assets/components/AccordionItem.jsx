import React from "react";
import { Markup } from "interweave";

const data = [
  {
    title: "¿Qué es el monotributo?",
    paragraph:
      "El Monotributo es un impuesto simplificado para los pequeños contribuyentes. A diferencia de otros impuestos, (como por ejemplo el IVA, que se determina a partir de lo facturado), el Monotributo se paga mediante una cuota fija mensual.  El valor de la misma varía según la categoría (a mayores ingresos anuales, más elevada será la categoría). Dentro de la cuota de Monotributo se incluyen dos aspectos: el impuesto en sí mismo; y los aportes previsionales (obra social y jubilación).",
  },
  {
    title: "Beneficios de ser Monotributista",
    paragraph: `<p>-El Monotributo te habilita para facturar de una forma simple (si vendés productos o servicios, estás obligado por AFIP a emitir una factura)</p><br/>
    <p>
    -Ser monotributista te permite tener tus ingresos declarados de forma correcta, y evitar retenciones o multas por parte de AFIP.
    </p><br/>
    <p>
    -Implica una menor carga impositiva en relación a otros impuestos. Independientemente de lo que factures, pagarás tu cuota de Monotributo con un monto fijo.
    </p><br/>
    <p>
    -Al trabajar como monotributista, tenés menos obligaciones administrativas que los Responsables Inscriptos, ya que no necesitás presentar declaraciones juradas en AFIP.
    </p><br/>
    <p>
    -Tenés acceso a una obra social, y a los aportes jubilatorios.</p>`,
  },
  {
    title: "¿Quiénes pueden darse de alta en Monotributo?",
    paragraph: `<p>Puede ser monotributista cualquier persona que esté realizando una actividad económica, tanto de servicios como de venta de productos, siempre y cuando su facturación anual no sea mayor a lo permitido por las categorías de Monotributo.</p>
    <p><br/>
    En caso de poseer un local comercial, el mismo no podrá superar determinadas magnitudes físicas, ni implicar un costo de alquiler anual por encima de lo establecido por el Monotributo.
    </p>
    `,
  },
  {
    title: "¿Qué debo tener en cuenta al hacerme monotributista?",
    paragraph: `<p>El régimen de monotributistas es simple, y no presenta mayores complicaciones. Sin embargo, es importante prestar atención a ciertas cuestiones luego de hacer el tramite para monotributo:</p>
    <p><br/>
    -Como monotributista, deberás emitir factura por cada venta que realices.
    </p><br/>
    <p><br/>
    -Tendrás que estar atento a tu facturación. Si superás lo establecido por tu categoría, será necesaria una recategorización.
    </p><br/>
    <p>
    -La inscripción en Monotributo implica, también, darte de alta en Ingresos Brutos de tu provincia.
    </p>
    `,
  },
  {
    title: "¿Cómo inscribirme en el Monotributo de forma online?",
    paragraph: `<p>¿Cómo hago para ser monotributista? Es muy simple! Necesitás contar con DNI vigente, y un celular con cámara. Podés completar el formulario con tus datos para comenzar la inscripción y hacer el Monotributo por primera vez.</p>
    
    `,
  },
  {
    title: "¿Puedo darme de baja del Monotributo cuando lo desee?",
    paragraph: `<p>¡Sí! Luego de hacerte monotributista, podrás realizar la baja en cualquier momento. Es un trámite simple, que se realiza desde la web de AFIP. ¡Tené en cuenta que si dejás de abonar tu cuota de Monotributo porque ya no lo utilizás, pero no registrás la baja, comenzarás a acumular deuda en AFIP!</p>
    
    `,
  },
];

export default class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
          <span {...{ className: "accordion-item__icon" }} />
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <span {...{ className: "accordion-item__paragraph" }}>
              <Markup content={paragraph} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
