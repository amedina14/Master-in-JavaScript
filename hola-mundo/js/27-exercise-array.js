'use stict'

/**
 * Programa que: 
 * 1. pide 6 numeros por pantalla y los meta en un array.
 * 2. tiene que mostrar todos sus elementos en la page y consola.
 * 3. ordenarlo y mostrarlo
 * 4. invertir su orden y mostrarlo.
 * 5. mostrar cuantos elementos tiene el array.
 * 6. Busqueda de un valor introducido por el user
 *    que diga si lo encuentra y su indice.
 *    (Usar funciones).
 */

// funciones
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + index + ": " + elemento + "</li>")
    })
    document.write("</ul>");
};

/**
 * var numeros = new Array(6);
 */

//Metodo con Push()
var numeros = [];

for (var i = 0; i <= 5; i++) {

    let numero = parseInt(prompt("ingresa numero: ", 0));
    numeros.push(numero);

    /*
    numeros[i] = parseInt(prompt("ingresa numero: ",0));
    */
}

// mostrar elementos

//numeros.forEach((numero, index) => { document.write(index + ": " + numero + "<br/>") });

mostrarArray(numeros, "Numeros");
console.log("numeros: "+ numeros);

// Orden ALFABETICO

// para numeros descendentes es b-a
var ascendente = numeros.sort((a, b) => a - b);

mostrarArray(ascendente, "Ascendente");
console.log("Orden Ascendente: ", ascendente);

// Invertir y mostrar

var contrario = ascendente.reverse();

mostrarArray(contrario, "Revertido");
console.log("Orden Revertido: ", contrario);

// Cuantos elementos tiene el array

document.write("<br><h3>El array tiene : " + numeros.length + " elementos </h3><br>");

// Busqueda
var busqueda = parseInt(prompt("Busca ingresa numero: ", 0));

// find index va usado con fx de callback
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1><hr/>");
} else {
    document.write("<hr/><h1>No encontrado</h1><hr/>");
}

