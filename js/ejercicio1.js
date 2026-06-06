fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((res) => res.json())
  .then((datos) => {
    console.log("RESULTADOS");
    console.log("a) Nombre:", datos.name);
    console.log("b) Peso:", datos.weight);
    console.log("c) Primer tipo:", datos.types[0].type.name);
  });
