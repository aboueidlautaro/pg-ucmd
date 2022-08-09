import React from "react";
import Accordion from "../components/AccordionItem";

function Faq() {
  return (
    <>
      <h2 className="w-10/12 sm:w-full mx-auto text-center mt-12 text-2xl font-bold text-grafito">
        Tenés dudas? Acá te respondo algunas
      </h2>
      <div className="w-10/12 mx-auto bg-rosa-pastel rounded-lg">
        <div className="w-[98%] py-2 mx-auto mt-12">
          <Accordion />
        </div>
      </div>
    </>
  );
}

export default Faq;
