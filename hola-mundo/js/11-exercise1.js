'use strict'

/*
Programa que pida 2 numeros y nos diga cual es mayor,
el menor y si son iguales.
Plus: si los valores no son numeros o son <= 0, que 
vuelva a pedir los datos.
*/

/*
var numero1 = 0;
var numero2 = 0;

do {
    var numero1 = parseInt(prompt("Insert number one: ", 0));
    var numero2 = parseInt(prompt("Insert number two: ", 0));
    console.log(numero1, numero2);
} while ((numero1 <= 0 || numero2 <= 0) || isNaN(numero1) || isNaN(numero2));

*/

var numero1 = parseInt(prompt("Insert number one: ", 0));
var numero2 = parseInt(prompt("Insert number two: ", 0));


while((numero1 <= 0 || numero2 <= 0) || isNaN(numero1) || isNaN(numero2)){
    alert("Insert a correct numbrer.");
    numero1 = parseInt(prompt("Insert number one: ", 0));
    numero2 = parseInt(prompt("Insert number two: ", 0));
}


if (numero2 > numero1) {
    console.log(numero2 + " es mayor que " + numero1);
    alert("El numero mayor es: " + numero2);
} else if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2)
    alert("El numero mayor es: " + numero1);
} else if (numero2 == numero1) {
    console.log(numero1 + " es igual a " + numero2)
    alert("Los numeros son iguales");
} else {
    alert("Insert a correct numbrer.");
}