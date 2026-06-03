fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    console.log(response.status); // 200
    console.log(response.ok); // true si el status es 200-299
    return response.json(); // convierte el body a JSON — devuelve
  })
  .then((datos) => {
    console.log(datos); // acá si tenemos el objeto JavaScript
    console.log(datos.name); // "pikachu"
  })
  .catch((error) => {
    console.log("Ocurrió un error:", error);
  });
