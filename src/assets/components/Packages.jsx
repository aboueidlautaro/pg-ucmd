import React from "react";
import PackageItem from "./PackageItem";

function Packages() {
  return (
    <>
      <div className="text-center">
        <p className="text-xl font-bold text-grafito">Paquetes</p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-8 items-center">
          <PackageItem title="Paquete 1" />
          <PackageItem title="Paquete 2" />
          <PackageItem title="Paquete 3" />
        </div>
      </div>
    </>
  );
}

export default Packages;
