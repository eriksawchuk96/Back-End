const cancionFavorita = {
  titulo: "Given Up",
  artista: "Linkin Park",
  anio: 2008,
  duracion: 192,
  favorita: true,
  describir: function () {
    return `La canción "${this.titulo}" de ${this.artista} fue lanzada en el año ${this.anio}. `;
  },
  duracionEnMinutos: function () {
    return Math.floor(this.duracion / 60);
  },
};

console.log("Descripción:", cancionFavorita.describir());
console.log(
  "Duración aproximada:",
  cancionFavorita.duracionEnMinutos(),
  "minutos",
);
