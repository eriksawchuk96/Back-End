let temperatura = 9;
if (temperatura < 10 || temperatura > 40) {
  console.log("Usar Abrigo");
} else {
  console.log("Usar Ropa Ligera");
}

let usuario = "admin";
let rol = "usuario";
if (usuario === "admin" && rol === "superusuario") {
  console.log("Panel de Admin");
} else {
  console.log("Faltan permisos");
}

let precio = 80;
if (precio > 0 && precio <= 100) {
  console.log("Oferta");
} else {
  console.log("Paga ra prata");
}
