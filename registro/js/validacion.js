function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function showAlertError() { const password = document.getElementById("password").value; 
if (password.length < 6) { document.getElementById("alert-danger").classList.add("show");

 } else { document.getElementById("alert-danger").classList.remove("show"); 
  } 
}


//Acá empieza la validación de que ningún campo esté vacío y de contraseña, uní ambas para que no se repita el addEventListener

document.getElementById("regBtn").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass1 = document.getElementById("password1").value.trim();
    let pass2 = document.getElementById("password2").value.trim();

    if (nombre === "" || apellido === "" || email === "" || pass1 === "" || pass2 === "") {
        showAlertError();
    } else if (pass1 !== pass2) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});

