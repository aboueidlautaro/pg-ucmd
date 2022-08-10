import React from "react";

function LabelField(props) {
  return (
    <label className="text-grafito-claro font-semibold text-center mr-2">
      {props.text}
    </label>
  );
}

export default LabelField;
