'use strict'

/*
Programa que pida 2 numeros y nos diga cual es mayor,
el menor y si son iguales.
*/

var numero1 = 0;
var numero2 = 0;

var numero1 = parseInt(prompt("Insert number one: ", numero1));
var numero2 = parseInt(prompt("Insert number two: ", numero2));

if (numero2 > numero1) {
    console.log(numero2 + " es mayor que "+ numero1);
} else if (numero1 > numero2) {
    console.log(numero1 + " es mayor que "+ numero2)
} else if (numero2 == numero1) {
    console.log(numero1 + " es igual a "+ numero2)
} else {
    alert("Insert a correct value (numbrer).")
}