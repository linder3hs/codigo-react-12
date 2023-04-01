import Swal from "sweetalert2";

export default function EditUser() {
  const showEditModal = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Editar usuario",
      html: `<input id="swal-input1" placeholder="Nombre" class="swal2-input">
        <input id="swal-input2" placeholder="Email" class="swal2-input">
        <input id="swal-input3" placeholder="Password" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
        ];
      },
    });

    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
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
