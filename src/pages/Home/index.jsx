import { useState, useEffect } from "react";
import Swal from "sweetalert2";
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

  return (
    <div className="container">
      <div className="mt-5">
        <h1>Lista de usuarios</h1>
        <div className="mt-5 table-reponsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Avatar</th>
                <th>Passowrd</th>
                <th>Teminos</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img className="rounded-circle" width={40} alt="" src={user.avatar} />
                    </td>
                    <td>{user.password}</td>
                    <th>{user.terms ? "✅" : "❌"}  </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
