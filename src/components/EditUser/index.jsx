import Swal from "sweetalert2";
import { put } from "../../services";

export default function EditUser({ id, fetchUsers }) {
  const showEditModal = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Editar usuario",
      html: `<input id="swal-input1" placeholder="Nombre" class="swal2-input">
        <input id="swal-input2" placeholder="Email" class="swal2-input">
        <input id="swal-input3" placeholder="Password" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-input1").value,
          email: document.getElementById("swal-input2").value,
          password: document.getElementById("swal-input3").value,
        };
      },
    });

    // entendemos que formValues
    const data = await put(id, formValues);

    if (!data) {
      Swal.fire({
        text: "Hubo un error",
        icon: "error",
      });

      return;
    }

    await fetchUsers();
  };

  return (
    <div>
      <button
        className="btn btn-dark"
        data-toggle="modal"
        type="button"
        onClick={showEditModal}
        data-target="#exampleModal"
      >
        ✏️
      </button>
    </div>
  );
}
