// Recorriendo un arreglo
var array = [1, "Pedro", true, false, "Juan"];

for (var i = 0; i < array.length; i ++) {
  console.log(array[i]);
}

//Reemplazo de un arreglo
var array = [1, "Pedro", true, false, "Juan"];
array[1] = "Germán"; // reemplazamos el elemento en la posición 1
// [1, "Germán", true, false, "Juan"]

//Reemplazo de un arreglo
var array = [1, "Pedro", true, false, "Juan"];
array[4] = "Oscar"; // reemplazamos el elemento en la posición 1
// [4, "Oscar", true, false, "Juan"]

var array = [1, "Pedro", true, false, "Juan"];
array[array.length - 1] = "Oscar"; // reemplazamos el elemento en la posición 1
// [4, "Oscar", true, false, "Juan"]
