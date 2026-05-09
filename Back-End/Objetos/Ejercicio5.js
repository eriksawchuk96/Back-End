const peliculas = [
  { titulo: "Toy Story", anio: 1995, puntaje: 8.3 },
  { titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
  { titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
  { titulo: "Parasite", anio: 2019, puntaje: 8.6 },
];
console.log(peliculas[0].titulo);
console.log(peliculas[peliculas.length - 1].puntaje);
peliculas[0].puntaje = 9.0;
peliculas.push({ titulo: "El lobo de Wall Street", anio: 2013, puntaje: 8.2 });
console.log(peliculas);
