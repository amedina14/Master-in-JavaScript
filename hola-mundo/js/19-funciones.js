'use strict'

/**
 * Funciones
 * Insieme d'istruzioni reutilizzabili 
 */

// var numero1 =;

// Defino la function
function calculadora(numero1, numero2) {
    // Conjunto de instrucciones a ejecutar
    console.log("Hola soy la calculadora!!");
    console.log("Suma:" + (numero1 + numero2));
    console.log("Resta:" + (numero1 - numero2));
    console.log("Mult:" + (numero1 * numero2));
    console.log("Div:" + (numero1 / numero2));
    console.log("****************************");
    return "retornooo";
}

// Invocar o llamar la funcion
/**
 * var resultado = calculadora();
 * console.log(resultado);
 */

for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 8);
}