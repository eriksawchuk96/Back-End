const titulo1 = document.querySelector("h1");
titulo1.textContent = "Esto es un título modificado por JavaScript";
const elTitulo = document.getElementById("titulo");
console.log("Elemento h1 seleccionado por ID:", elTitulo);
const titulo2 = document.querySelector("#titulo");
console.log(titulo2);
const primerParrafo = document.querySelector(".texto");
console.log("Primer párrafo encontrado:", primerParrafo);
const todosLosParrafos = document.querySelectorAll(".texto");
console.log("Cantidad de párrafos encontrados:", todosLosParrafos.length);
const parrafo = document.getElementById("resultado");
console.log("Contenido original:", parrafo.textContent);
parrafo.textContent = "Texto modificado con JS";
parrafo.innerHTML = "<strong>Texto modificado</strong>";
const titulo = document.querySelector("h1");
titulo.style.color = "darkblue";
const primerParrafo1 = document.querySelector("p");
primerParrafo1.classList.add("resaltado");
console.log(primerParrafo1);
let tieneClase = primerParrafo1.classList.contains("resaltado");
console.log("¿El párrafo tiene la clase .resaltado?:", tieneClase);
primerParrafo1.classList.remove("resaltado");
tieneClase = primerParrafo1.classList.contains("resaltado");
console.log("¿El párrafo todavía tiene la clase?:", tieneClase);

const peliculas = [
  { titulo: "Toy Story", anio: 1995 },
  { titulo: "Parasite", anio: 2019 },
  { titulo: "El Padrino", anio: 1972 },
  { titulo: "Interstellar", anio: 2014 },
];
const listaPeliculas = document.getElementById("lista-peliculas");
peliculas.forEach((pelicula) => {
  const itemHTML = `<li>${pelicula.titulo} (${pelicula.anio})</li>`;
  listaPeliculas.insertAdjacentHTML("beforeend", itemHTML);
});
