const edades = [14, 32, 19, 45, 27, 8, 61, 23];
let mayor = 0;

for (const edad of edades) {
  if (edad > mayor) {
    mayor = edad;
  }
}

console.log("La edad más alta es:", mayor);
