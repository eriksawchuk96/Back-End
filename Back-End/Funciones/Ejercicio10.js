const precios = [19.99, 4.5, 13.75, 8.2, 99.49];

for (const precio of precios) {
  console.log(`Precio original: ${precio}`);
  console.log(`  - Redondeado hacia arriba (ceil): ${Math.ceil(precio)}`);
  console.log(`  - Redondeado hacia abajo (floor): ${Math.floor(precio)}`);
  console.log("-----------------------------------");
}
