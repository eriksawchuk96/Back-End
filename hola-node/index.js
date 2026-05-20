const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hola Erik!");
});
server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
