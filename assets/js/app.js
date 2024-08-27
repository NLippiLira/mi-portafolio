const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputCorreo = document.querySelector("#correo");
const inputMensaje = document.querySelector("#mensaje");
const inputBoton = document.querySelector("#botonForm");

inputBoton.addEventListener("click", () => {
    console.log({
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        correo: inputCorreo.value,
        mensaje: inputMensaje.value
    })
}) 