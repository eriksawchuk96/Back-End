async function obtenerPokemon() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!res.ok) {
      throw new Error(`Error en la petición: ${res.status} ${res.statusText}`);
    }
    const datos = await res.json();
    console.log("DATOS DEL POKÉMON");
    console.log("a) Nombre:", datos.name);
    console.log("b) Peso:", datos.weight);
    console.log("c) Primer tipo:", datos.types[0].type.name);
  } catch (error) {
    console.error("❌ ¡Ups! Algo salió mal:", error.message);
  }
}
obtenerPokemon();
