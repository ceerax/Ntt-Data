import {useContext} from "react";
import { UserContext } from "../context/UserContext";

export const ContensInfo = () => {

const {user} =useContext(UserContext);
console.log(user)  

  return (
    <div className="content">
      <div className="containerPrima  m-3">
        <div className="border d-flex justify-content-center  p-4">
          <div className="row">
            <span>Prímer apellido</span>
            <div className="bg-light">{" surname"}</div>
            <span className="mt-2">Primer nombre</span>
            <div className="bg-light">{"name"}</div>
            <button disabled type="button" className="btn btn-primary mt-2">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
