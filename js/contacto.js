$(document).ready(function () {
}
);

function esEmailValido(correo) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

$("#formContacto").on('submit',
  function (event) {
    event.preventDefault();
    let nombre = $("#inputNombre").val();
    let email = $("#inputEmail").val();
    let mensaje = $("#inputTextArea").val().length;
    let validacionCompleta = true;

    if (nombre.length <= 0) {
      validacionCompleta = false;
      document.getElementById("msjValNombre").innerText = "Por favor, ingrese un nombre";
      $("#msjValNombre").css('color', 'red');
      $("#msjValNombre").css('display', 'block');
    } else {
      $("#msjValNombre").css('display', 'none');
    }

    if (!(esEmailValido(email))) {

      validacionCompleta = false;
      document.getElementById("msjValEmail").innerText = "Correo electrónico inválido";
      $("#msjValEmail").css('color', 'red');
      $("#msjValEmail").css('display', 'block');
    } else {
      $("#msjValEmail").css('display', 'none');
    }

    if (mensaje <= 0) {
      validacionCompleta = false;
      $("#msjValMensaje").css('color', 'red');
      $("#msjValMensaje").css('display', 'block');
      document.getElementById("msjValMensaje").innerText = "Por favor, ingrese un mensaje";
    } else {
      $("#msjValMensaje").css('display', 'none');
    }

    if (validacionCompleta) {
      document.getElementById("formContacto").reset();
      $("#mjValNombre").css('display', 'none');
      $("#mjValEmail").css('display', 'none');
      $("#msjValMensaje").css('display', 'none');
      alert("Gracias por su contacto" + " " + nombre + "." + "A la brevedad le estaremos respondiendo.");
    }

  }
);



