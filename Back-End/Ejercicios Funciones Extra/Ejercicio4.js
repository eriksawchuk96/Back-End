function mayorDeTres(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(mayorDeTres(5, 10, 3));
console.log(mayorDeTres(2, 4, 8));
console.log(mayorDeTres(5, 7, 6));
