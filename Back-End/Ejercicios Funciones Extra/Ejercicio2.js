function validarContrasena(contrasena) {
  if (contrasena !== "" && contrasena.length >= 8) {
    return true;
  } else {
    return false;
  }
}
console.log(validarContrasena(""));
console.log(validarContrasena("1234567"));
console.log(validarContrasena("12345678"));
