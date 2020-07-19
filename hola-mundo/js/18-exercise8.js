'use strict'

/**
 * Calculadora:
 * Pida dos numero por pantalla.
 * Que lo valide correctamente y vuelva a pedir.
 * En el cuerpo de la pagina, en una alerta y por la
 * consola el resultado de sumar, restar, multiplicar,
 * dividir esas dos cifras.
 */

var operation = "";
var resultado = 0;
var numero1 = parseInt(prompt("Insert number one: ", 0));
var numero2 = parseInt(prompt("Insert number two: ", 0));

while (isNaN(numero1) || isNaN(numero2)) {
    alert("incorrect numbers")
    var numero1 = parseInt(prompt("Insert number one: ", 0));
    var numero2 = parseInt(prompt("Insert number two: ", 0));
}

/*
while(operation != "+" || operation != "-" || operation != "*" || operation != "/"){
    operation = prompt("Insert operation: ");
}
*/

do {
    var Cumple = true;

    operation = prompt("Insert operation: ");

    switch (operation) {
        case "+":
            resultado = numero1 + numero2;
            break;

        case "-":
            resultado = numero1 - numero2;
            break;

        case "*":
            resultado = numero1 * numero2;
            break;

        case "/":
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "operacion incorrecta";
            Cumple = false;
    }
}while (Cumple == false) 

document.write("<p>Resultado: " + resultado + "</p>");
alert("Resultado: " + resultado);
console.log("Resultado: " + resultado);
