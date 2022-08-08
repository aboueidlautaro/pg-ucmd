import React from "react";

function InputField(props) {
  return (
    <input
      className="placeholder:text-center focus:ring-0 mb-4  border-none rounded-lg shadow-sm shadow-grafito/30"
      type="text"
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
