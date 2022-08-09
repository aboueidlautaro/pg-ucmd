import React from "react";

const data = [
  {
    title: "Cómo me puedo inscribir al monotributo?",
    paragraph: "Contactate conmigo",
  },
  {
    title: "Qué hago si me cobraron de más?",
    paragraph: "La próxima mira bien",
  },
  {
    title: "Cómo no volverme pobre?",
    paragraph: "Deja de comprar alcohol",
  },
  {
    title:
      "Si no tengo un contador que me lleve las cuentas, puedo hacerlo yo mismo?",
    paragraph: "Si pudieras yo no estudiaría 5 años",
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
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}
