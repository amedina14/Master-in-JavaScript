'use strict'

/**
 * Transformacion cadenas de texto
 */

// Metodos de busqueda

var numero = "40";
//var texto1 = "Curso Master JS";
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "Es muy buen curso";
var busqueda = texto1.indexOf("curso");
busqueda = texto1.lastIndexOf("de");
busqueda = texto1.search("JavaScript");
busqueda = texto1.match(/de/gi);
busqueda = texto1.substr(14, 5);
busqueda = texto1.charAt(44);
busqueda = texto1.startsWith("Bienvenido");
busqueda = texto1.endsWith("Robles");
busqueda = texto1.includes("JavaScript");

console.log(busqueda);

/*
// Metodos para procesar texto

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
*/

