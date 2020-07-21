'use strict'

/**
 * Transformacion cadenas de texto
 */

var numero = "40";
var texto1 = "Curso Master JS";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
var dato1 = texto1.toLowerCase();
var dato2 = texto2.toUpperCase();

console.log(dato, dato1, dato2);

// Calcular longitud
var nombre = "adrian";

console.log(nombre.length);

// Concatenar - unir textos
var textoTotal = texto1 + " " + texto2;
textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);