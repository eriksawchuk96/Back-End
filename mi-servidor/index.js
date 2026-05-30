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
app.get("/articulos/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Artículo con id: ${id}`);
});
app.get("/usuarios/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});
app.get("/articulos", (req, res) => {
  const categoria = req.query.categoria;
  const orden = req.query.orden;
  res.json({ categoria, orden });
});
app.get("/buscar", (req, res) => {
  const queryBusqueda = req.query.q;
  if (!queryBusqueda) {
    return res.send("Ingresá un término de búsqueda.");
  }
  res.send(`Buscaste: ${queryBusqueda}`);
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
