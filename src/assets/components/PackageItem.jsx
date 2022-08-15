import React from "react";

function PackageItem(props) {
  return (
    <div className="flex justify-center h-96 w-64 bg-rosa-pastel rounded-md items-center shadow-lg shadow-zinc-300">
      <h2>{props.title}</h2>
    </div>
  );
}

export default PackageItem;
