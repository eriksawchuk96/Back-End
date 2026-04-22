const num1 = 6;
const num2 = 0;
const operacion = "dividir";
if (operacion === "sumar") {
  console.log("El resultado es", num1 + num2);
} else if (operacion === "restar") {
  console.log("El resultado es", num1 - num2);
} else if (operacion === "multiplicar") {
  console.log("El resultado es", num1 * num2);
} else if (operacion === "dividir") {
  if (num2 !== 0) {
    console.log("El resultado es", num1 / num2);
  } else {
    console.log("No se puede dividir por cero");
  }
}
