const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Marquez",
  paginas: 471,
  leido: false,
};
console.log(libro.titulo);
console.log("Páginas: " + libro["paginas"]);
console.log(libro["genero"]);
libro.leido = true;
console.log(libro.leido);
