import React from "react";

export const ContensInfo = () => {
  return (
    <div className="content">
      <div className="containerPrima  m-3">
        <div className="border d-flex justify-content-center  p-4">
          <div className="row">
            <span>Prímer apellido</span>
            <div className="bg-light">aqui va el apellido</div>
            <span className="mt-2">Primer nombre</span>
            <div className="bg-light">aqui va el Nombre</div>
            <button disabled type="button" className="btn btn-primary mt-2">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
