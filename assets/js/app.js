const inputNombre = document.querySelector("#validationServer01");
const inputApellido = document.querySelector("#validationServer02");
const inputCorreo = document.querySelector("#validationServerUsername");
const inputCiudad = document.querySelector("#validationServer03");
const inputMotivo = document.querySelector("#validationServer04");
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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
   