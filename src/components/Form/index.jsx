import { useState } from "react";
import { post } from "../../services";

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

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
    const data = await post(inputData);
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit}>
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
