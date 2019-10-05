function hello() {
  console.log("Hola Mundo");
}

hello(); // acá la estamos invocamos


function hello(name) {
  console.log("Hola " + name);
}

hello("Germán");
hello("David");


function hello(name) {
  return "Hola " + name;
}

var g1 = hello("Germán"); // podemos asignar el valor de retorno a una variable
console.log(g1);

// podemos llamar la función directamente en el parámetro de otra función.
console.log(hello("David"));


function hello(name) {
  return "Hola " + name;
  console.log("Esto nunca se va a imprimir");
}

console.log(hello("Pedro"));
