//Asigno constantes a los elementos del formulario
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const button = document.getElementById("button");
//creo un evento para el formulario que se activa al enviarlo(escucharlo)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  parrafo.innerHTML = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (usuario.value.length < 6) {
    warnings += `El usuario no es válido<br>`;
    entrar = true;
  }
  //Valido el email con una expresión regular
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es válido<br>`;
    entrar = true;
  }
  if (password.value.length < 8) {
    warnings += `La contraseña no es válida<br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  }
  else{
    parrafo.innerHTML="Enviado"
    parrafo.style.color="green"
  }
});
