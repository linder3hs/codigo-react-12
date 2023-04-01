import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Table from "../../components/Table";
import { get } from "../../services";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await get();

    if (!data) {
      Swal.fire({
        title: "Todo mal",
        text: "Hubo un erro al traer a los usuarios",
        icon: "error",
      });
      return;
    }
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
    // importante: Si no colocan este array vacio la funcion que
    // dentro de useEffect se ejecutura de forma infinita
  }, []);

  const columns = [
    {
      text: "Nombre",
      key: "name",
    },
    {
      text: "Email",
      key: "email",
    },
    {
      text: "Avatar",
      key: "avatar",
    },
    {
      text: "Password",
      key: "password",
    },
    {
      text: "Terminos y Condiciones",
      key: "terms",
    },
  ];

  return (
    <div className="container">
      <div className="mt-5">
        <h1>Lista de usuarios</h1>
        <Table columns={columns} rows={users} />
      </div>
    </div>
  );
}
