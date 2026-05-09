const peliculas = [
  { titulo: "Toy Story", anio: 1995, puntaje: 9.0 },
  { titulo: "El Rey Leon", anio: 1994, puntaje: 8.5 },
  { titulo: "Eterno Resplandor", anio: 2004, puntaje: 8.3 },
  { titulo: "Parasite", anio: 2019, puntaje: 8.6 },
  { titulo: "El lobo de Wall Street", anio: 2013, puntaje: 8.2 },
];

for (const pelicula of peliculas) {
  console.log(
    `${pelicula.titulo} (${pelicula.anio}) — Puntaje: ${pelicula.puntaje}`,
  );
}
