'use strict'

/**
 * Transformacion cadenas de texto
 */

var numero = "40";
//var texto1 = "Curso Master JS";
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "Es muy buen curso";
var busqueda = texto1.indexOf("curso"); //la primera posicion en que sale la palabra

// Metodos de busqueda

busqueda = texto1.lastIndexOf("de"); //la ultima posicion en que sale la palabra
busqueda = texto1.search("JavaScript"); //dice el punto de donde inicia la palabra
busqueda = texto1.match(/de/gi); //busca las veces que sale la palabra con RegEx
busqueda = texto1.substr(14, 5); //busca desde un punto el numero de caracteres indicados
busqueda = texto1.charAt(44); //el caracter en tal posicion
busqueda = texto1.startsWith("Bienvenido"); //si la cadena inicia con la palabra
busqueda = texto1.endsWith("Robles"); //si la cadena termina con la palabra
busqueda = texto1.includes("JavaScript"); //si la cadena contiene la palabra

// Funciones de reemplazo

busqueda = texto1.replace("JavaScript","JS"); //remplaza elemento por otro
busqueda = texto1.slice(14, 22); //corta cadena desde la posicion
busqueda = texto1.split(" "); //mete en array y se puede indicar separador
busqueda = texto1.trim(); //Recorta los espacion por delante y detras. Ej. Util para user y password
/**
 * elimina 1 elemento a partir del indice "this.indice" 
 * this.palabras.splice(this.indice, 1);
 */
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

