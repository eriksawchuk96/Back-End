function calcularPropina(totalCuenta, porcentaje) {
  return totalCuenta * (porcentaje / 100);
}

function totalConPropina(totalCuenta, porcentaje) {
  const propina = calcularPropina(totalCuenta, porcentaje);
  return totalCuenta + propina;
}
const cuenta = 150;
const porc = 15;
console.log("Monto de la propina: " + calcularPropina(cuenta, porc));
console.log("Total a pagar: " + totalConPropina(cuenta, porc));
