alert("Es necesario que ingrese con su nombre de Usuario y Contraseña para poder enviar un comentario");

const nombreUsuario = prompt("Nombre de Usuario");
const contraseña = prompt("Contraseña")

if ((nombreUsuario != "") && (contraseña !== "")) {
    alert("Procura completar todos los campos solicitados y dale a enviar una vez terminada tu consulta/critica");
} else {
    alert("ERROR: Se necesita estar registrado para poder enviar comentarios");
}

alert("Por ultimo, para demostrar que no es un bot, ingrese la palabra clave, la cuel es la anterior a FIAMBRE esta.")

const real_password = "FIAMBRE";

let password = prompt("Ingrese la palabra clave");

while (password !== real_password) {
    password = prompt("Ingrese la palabra clave");
}