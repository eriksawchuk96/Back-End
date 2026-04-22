function saludo(hora) {
  if (hora >= 6 && hora <= 11) {
    return "Buenos días";
  } else if (hora >= 12 && hora <= 19) {
    return "Buenas tardes";
  } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
    return "Buenas noches";
  } else {
    return "No es una hora válida";
  }
}
console.log("Hora 8: " + saludo(8));
console.log("Hora 14: " + saludo(14));
console.log("Hora 22: " + saludo(22));
console.log("Hora 27: " + saludo(27));
