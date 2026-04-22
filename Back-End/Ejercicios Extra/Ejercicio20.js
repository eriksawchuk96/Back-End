const palabras = ["sol", "luna", "sol", "mar", "luna", "sol", "viento"];
const unicas = [];

for (const palabra of palabras) {
  if (!unicas.includes(palabra)) {
    unicas.push(palabra);
  }
}

console.log(unicas);
