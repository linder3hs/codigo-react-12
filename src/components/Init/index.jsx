import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Init() {
  const [nombre, setNombre] = useState("Juan");

  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };
  return (
    <div>
      <Header nombre="Linder" apellido="Hassinger" dni="8888888" />
      <h1>{nombre}</h1>
      <input type="text" value={nombre} onChange={handleInputChange} />
      <div>
        <Header nombre="Lucas" dni="7777777" />
        <Header nombre="Juan" />
      </div>
      <Footer
        celular="9999999"
        direccion="av mi casa 123"
        referencia="al costado del vecino"
        correo="linder@gmail.com"
        linkedin="https://linkedin.com/in/linderhassinger3"
      />
    </div>
  );
}
