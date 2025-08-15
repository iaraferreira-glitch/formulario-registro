function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

// Acá empieza la validación de contraseña

document.getElementById("regBtn").addEventListener("click", function () {
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;

  if (pass1 === pass2) {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});
