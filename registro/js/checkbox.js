function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

const checkbox = document.getElementById("terminos");
const label = document.querySelector('label[for="terminos"]');

document.getElementById("regBtn").addEventListener("click", function () {
  if (!checkbox.checked) {
    showAlertError();
  } else {
    showAlertSuccess();
  }
});
