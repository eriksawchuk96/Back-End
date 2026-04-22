const compras=[];
compras.push("pan", "leche", "azúcar", "cereales");
console.log (compras.length);
console.log(compras);
const eliminado = compras.pop();
console.log("El producto eliminado fue:", eliminado);
console.log("Lista de Compras: " + compras.join(" | "));