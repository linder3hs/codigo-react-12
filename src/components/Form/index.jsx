import { useState } from "react";

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2>Formulario</h2>
          <form>
            <div>
              <input
                value={inputData.name}
                className="form-control mt-3"
                placeholder="Write your name"
                type="text"
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div>
              <input
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
                value={inputData.password}
                className="form-control mt-3"
                placeholder="Write your password"
                type="password"
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div>
              <input
                className="mt-3"
                checked={inputData.terms}
                value={inputData.terms}
                type="checkbox"
                onChange={handleInputChange}
                name="terms"
              />{" "}
              Acepta los terminos y condiciones?
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
