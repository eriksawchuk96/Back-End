const producto = {
  nombre: "Camiseta",
  precio: 390,
  stock: 100,
  disponible: true,
};
console.log("Precio Original: " + producto.precio);
const precio = producto.precio;
const descuento = precio * 0.2;
console.log("Descuento: " + descuento);
console.log("Precio con Descuento: " + (precio - descuento));
if (producto.stock === 0) {
  producto.disponible = false;
}
console.log("Disponible: " + producto.disponible);
producto.categoria = "Ropa de Hombre";
console.log("Objeto final:", producto);
