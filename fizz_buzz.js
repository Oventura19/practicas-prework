function fizz_buzz (number)
{

if (number%3 == 0 && number%5 == 0) {
  console.log("fizzbuzz");
  return number;
}

if (number%3 == 0) {
  console.log("fizz");
  return number;
}

if (number%5 == 0) {
  console.log("buzz");
  return number;
}

if (number%3 != 0 && number%5 != 0) {
  console.log("El Número no es múltiplo ni de 3 ni de 5");
  return number;
}

}

console.log("El Número es: "+fizz_buzz(30));
