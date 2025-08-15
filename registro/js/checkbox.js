function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

const checkbox = document.getElementById("terminos");
const label = document.getElementById("terminos");

label.addEventListener("click", function (e) {
  if (!checkbox.checked) {
    e.preventDefault();
    showAlertError();
  } else {
    showAlertSuccess();
  }
});
