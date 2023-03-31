import { useState } from "react";
import { post } from "../../services";
import Swal from "sweetalert2";

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [showValidation, setShowValidation] = useState("");

  const handleInputChange = (event) => {
    // event.target = <input name="email" value="linder@gmail.com" type="email" />
    const { name, type, checked, value } = event.target;

    setInputData({
      ...inputData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setShowValidation("was-validated");

    const data = await post(inputData);

    if (!data) {
      Swal.fire({
        title: "Todo Mal",
        text: "Hubo un error",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Todo ok",
      text: "Usuario creado correctamente",
      icon: "success",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2>Formulario</h2>
          <form
            className={`needs-validation ${showValidation}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <input
                required
                value={inputData.name}
                className="form-control mt-3"
                placeholder="Write your name"
                type="text"
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="valid-feedback">Bien hecho</div>
            <div>
              <input
                required
                value={inputData.email}
                className="form-control mt-3"
                placeholder="Write your email"
                type="email"
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div>
              <input
                required
                value={inputData.password}
                className="form-control mt-3"
                placeholder="Write your password"
                type="password"
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div className="mt-3">
              <input
                id="invalidCheck"
                required
                className="form-check-input"
                checked={inputData.terms}
                value={inputData.terms}
                type="checkbox"
                onChange={handleInputChange}
                name="terms"
              />{" "}
              <label className="form-check-label" htmlFor="invalidCheck">
                Acepta los terminos y condiciones?
              </label>
            </div>
            <div>
              <button className="mt-3 btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
