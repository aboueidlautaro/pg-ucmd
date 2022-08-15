import React from "react";

function InputField(props) {
  return (
    <input
      className="text-center placeholder:text-center w-auto focus:ring-0 border-none rounded-lg shadow-sm shadow-grafito/30"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
}

export default InputField;
