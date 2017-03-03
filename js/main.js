var send = document.getElementsByClassName("btn"),
    title = document.getElementById("form-signin-heading"),
    email = document.getElementById("inputEmail"),
    password = document.getElementById("inputPassword"),
    remember = document.getElementsByTagName("span")[0],
    button = document.getElementsByClassName("btn")[0];

function translate() {
    "use strict";
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar sesión";
}

function data() {
    "use strict";
    document.getElementById("answer").innerHTML = "<center><table><tr><td><h1>Datos de formulario</h1></tr></td>" + "<tr><td>El correo electrónico ingresado es: </tr></td><tr><td>" + document.getElementById("inputEmail").value + "</td></tr>" + "<tr><td>La clave ingresada es: </tr></td><tr><td>" + document.getElementById("inputPassword").value + "</td>" + "</tr></table>" + "</center>";
}
translate();