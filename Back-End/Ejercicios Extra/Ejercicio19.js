const notas = [45, 78, 90, 55, 32, 88, 61, 70, 49, 95];
const aprobados = [];

for (const nota of notas) {
  if (nota >= 60) {
    aprobados.push(nota);
  }
}

console.log("Notas aprobadas:", aprobados);
console.log("Cantidad de aprobados:", aprobados.length);
