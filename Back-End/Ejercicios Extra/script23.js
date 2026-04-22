const paises = ["Argentina", "Uruguay", "Brasil", "Chile", "Paraguay"];
paises[2] = "Bolivia";
paises.push("Perú");
paises.unshift("Venezuela");
const eliminado = paises.pop();
console.log("El elemento eliminado fue:", eliminado);

console.log(paises);
