function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}
const radio5 = 5;
const resultado5 = areaCirculo(radio5);
console.log(`Para un radio de ${radio5}, el área es: ${resultado5.toFixed(2)}`);
const radio10 = 10;
const resultado10 = areaCirculo(radio10);
console.log(
  `Para un radio de ${radio10}, el área es: ${resultado10.toFixed(2)}`,
);
