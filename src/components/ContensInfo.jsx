import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const ContensInfo = () => {
  const { user } = useContext(UserContext);
  const arr = Object.entries(user);

  console.log(arr);

  const name = arr[0][1].name;
  const surName = arr[0][1].surname;
  

  return (
    <div className="content">
      <div className="containerPrima  m-3">
        <div className="border d-flex justify-content-center  p-4">
          <div className="row">
            <span>Prímer apellido</span>
            <div className="bg-light"> {surName}</div>
            <span className="mt-2">Primer nomre</span>
            <div className="bg-light">{name}</div>
            <Link className="d-flex justify-content-center" to={"/"}>
              <button className="btn btn-primary">regresar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
