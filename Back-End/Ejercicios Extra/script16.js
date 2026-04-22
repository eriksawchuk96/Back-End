const precio = 300;
const tieneTarjetaSocio = true;
if (precio > 200 && tieneTarjetaSocio) {
  console.log("30% de descuento");
} else if (precio > 500 || tieneTarjetaSocio) {
  console.log("20% de descuento");
} else {
  console.log("No hay descuento");
}
