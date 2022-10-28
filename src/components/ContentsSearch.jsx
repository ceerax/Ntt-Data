import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [data, setData] = useState(null);
  const [error, setError] = useState(true);

  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      numDocument: Yup.number().required("El numero es obligatorio"),
      documento: Yup.string().required("seleccione un documento"),
    }),
    onSubmit: (formData) => {
      if (!formData.numDocument || !formData.documento) return;
      setError(false);
      setData(formData.numDocument);
    },
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.currentTarget.value.length < 6) {
      setError(true);
      return;
    }
    formik.handleChange(e);
    setError(false);
  };
  const dataJson = useCallback(() => {
    const PERSONS = [
      {
        12345678912: {
          name: "Cesar",
          surname: "Moreno",
        },
      },
      {
        98765432101: {
          name: "Axel",
          surname: "Moreno S",
        },
      },
    ];
    return PERSONS.find((value) => value[data]);
  }, [data]);

  useEffect(() => {
    const findedValue = dataJson();
    setUser(findedValue);
  }, [data, dataJson]);

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
              onChange={handleOnChange}
            />
            <span className="text-danger">{formik.errors.numDocument}</span>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                disabled={error}
                onClick={dataJson}
                className="btn btn-primary mt-2 col col-md-2 col-lg-1"
              >
                <Link to={"/info"} className="text-white">
                  Buscar
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
