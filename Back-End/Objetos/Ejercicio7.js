const peliculas = [
  { titulo: "Toy Story", anio: 1995, puntaje: 9.0 },
  { titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
  { titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
  { titulo: "Parasite", anio: 2019, puntaje: 8.6 },
  { titulo: "El lobo de Wall Street", anio: 2013, puntaje: 8.2 },
];
console.log("Películas con puntaje >= 8.5:");
for (const pelicula of peliculas) {
  if (pelicula.puntaje >= 8.5) {
    console.log(`${pelicula.titulo}: ${pelicula.puntaje}`);
  }
}
let sumaPuntajes = 0;
for (const pelicula of peliculas) {
  sumaPuntajes += pelicula.puntaje;
}
const promedio = sumaPuntajes / peliculas.length;
console.log(`\nPromedio de puntaje: ${promedio.toFixed(2)}`);
let contadorSigloXXI = 0;
for (const pelicula of peliculas) {
  if (pelicula.anio >= 2000) {
    contadorSigloXXI++;
  }
}
console.log(`Películas del siglo XXI: ${contadorSigloXXI}`);
