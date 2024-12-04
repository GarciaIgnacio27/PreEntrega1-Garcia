alert("Es necesario que ingrese con su nombre de Usuario y Contraseña para poder enviar un comentario");

const nombreUsuario = prompt("Nombre de Usuario");
const contraseña = prompt("Contraseña")

if ((nombreUsuario != "") && (contraseña !== "")) {
    alert("Procura completar todos los campos solicitados y dale a enviar una vez terminada tu consulta/critica");
} else {
    alert("ERROR: Se necesita estar registrado para poder enviar comentarios");
}