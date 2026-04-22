const temperaturas = [22, -3, 15, -8, 30, -1, 18, 7];
let resultado = "";

for (const temp of temperaturas) {
  if (temp < 0) {
    resultado += temp + "  ";
  }
}
console.log("Temperaturas por debajo de cero: " + resultado);
