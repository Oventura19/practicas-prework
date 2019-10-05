//Ciclo con while
var i = 10;       // el inicializador
while (i <= 20) { // la condición
  console.log(i);
  i = i + 2;      // el incrementador
}

//Ciclo con for
for (var i = 10; i <= 20; i = i + 2) {
  console.log(i);
}

//Ciclo con while descendiente
var i = 100;
while (i > 0) {
  console.log(i);
  i = i - 10;
}

//Ciclo con for descendiente
for (var i = 100; i > 0; i = i - 2) {
  console.log(i);
}
