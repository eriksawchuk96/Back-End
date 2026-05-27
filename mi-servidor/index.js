const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hola desde Express!");
});
app.get("/sobre-mi", (req, res) => {
  res.send("Erik");
});
app.get("/estado", (req, res) => {
  res.send("Ok");
});
app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});
app.post("/productos", (req, res) => {
  res.send("Producto creado");
});
app.delete("/productos", (req, res) => {
  res.send("Producto eliminado");
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
