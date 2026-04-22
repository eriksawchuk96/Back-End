const usuario = "Juan";
const pass = "1234";
if (usuario === "admin" && pass === "1234"){
        console.log("Acceso Concedido");
    } else if (pass !=="1234") {
        console.log ("Contraseña Incorrecta");
    } else {
        console.log ("Usuario Incorrecto");
    }