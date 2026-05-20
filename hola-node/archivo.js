const fs = require("fs");
fs.readFile("datos.txt", "utf8", (error, contenido) => {
  if (error) {
    console.log("Error al leer el archivo:", error);
    return;
  }
  console.log(contenido);
});
