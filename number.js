/************************
            CONDICIONALES
            ***************************/

//Condicional básica if con varible var definida
var num = 8;
if (num < 10) {
  console.log("El número es menor a 10\n\n");
}

//Condicional básica if con varible var definida
var num = 11;
if (num < 10) {
  console.log("El número es menor a 10\n");
}

//Condicional básica if con valor definido
if (num == 10) {
  console.log("El número es igual a 10\n");
}

//Condicional básica if con valor definido
if (num > 10) {
  console.log("El número es mayor a 10\n");
}

//Condicional De lo contrario (else)
var num = 11;
if (num < 10) {
  console.log("El número es menor a 10");
} else {
  console.log("El número es igual o mayor a 10");
}

//Condicional anidadas
var num = 8;
if (num < 10) {
  console.log("El número es menor a 10");
} else {
  if (num > 10) {
    console.log("El número es mayor a 10");
  } else {
    console.log("El número es igual a 10");
  }
}

//Condicional De lo contrario, si (else if)
var num = 11;
if (num < 10) {
  console.log("El número es menor a 10");
} else if (num > 10) {
  console.log("El número es mayor a 10");
} else {
  console.log("El número es igual a 10");
}

//Condicional Compuesto
//Anidada
var num = 15;
if (num >= 10) {
  if (num <= 20) {
    console.log("El número está entre 10 y 20");
  }
}

//Operadores lógicos
var num = 15;
if (num >= 10 && num <= 20) {
  console.log("El número está entre 10 y 20");
}

//Condicional Compuesto, uno || (o) el contrario
var color = "negro";
if (color === "rojo" || color === "negro") {
  console.log("Excelente elección");
}

//Operador condicional (ternario)
var num = 10;
num >= 15 ? console.log('Es Mayor o Igual a 15') : console.log('Es Menor a 15');
