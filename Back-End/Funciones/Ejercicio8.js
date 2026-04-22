function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
for (let i = 1; i <= 10; i++) {
  const resultado = tirarDado();
  console.log(`Lanzamiento ${i}: ${resultado}`);

  if (resultado < 1 || resultado > 6) {
    console.error("Error! El número está fuera de rango.");
  }
}
