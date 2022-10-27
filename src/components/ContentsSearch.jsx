import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { UserContext } from "../context/UserContext";


const initialValues = () => {
  return {
    documento: "",
    numDocument: "",
  };
};

export const ContentsSearch = () => {
  const [data, setData] = useState("");
  const [valueData, setValueData] = useState(null)

  console.log(valueData);

   

  const {setUser} =useContext(UserContext);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      numDocument: Yup.number().required("El numero es obligatorio"),
      documento: Yup.string().required("seleccione un documento"),
    }),
    onSubmit: (formData) => {
      setData(formData.numDocument);
    },
  });

 
  const dataJson = () => {
    const JSONnamePersona = [
      {
        "12345678912": { 
          name: "Cesar",
          surname: "Moreno" },
      },
      {
        "98765432101": { 
          name: "Axel",
          surName: "Moreno S" },
      },
    ];
    JSONnamePersona.find((value) =>console.log(value[data]));
    
  };

  useEffect(() => {
    dataJson()
    
  }, [data])
  
 
  return (
    <form className="content" onSubmit={formik.handleSubmit}>
      <div className="containerPrima m-3">
        <div className="border d-flex justify-content-center  p-4">
          <div className="row">
            <span>Tipo de documento</span>
            <select
              className="form-select"
              id="inputGroupSelect01"
              name="documento"
              onChange={formik.handleChange}
            >
              <option selected>Seleccione..</option>
              <option value="Cedula de ciudadanía">Cedula de ciudadanía</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <span className="text-danger">{formik.errors.documento}</span>
            <span className="mt-2">Numero de documento</span>
            <input
              maxLength={11}
              minLength={8}
              type="text"
              className="form-control"
              placeholder="1245678987"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="numDocument"
              onChange={formik.handleChange}
            />
            <span className="text-danger">{formik.errors.numDocument}</span>
            <button
              type="submit"
              disabled={false}
              onClick={dataJson}
              className="btn btn-primary mt-2"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};


