'use strict'

// Parameters rest and spread.

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas);
}

// Rest: recoge el resto de elementos de una coleccion.
listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

// Spread: propaga los elementos de un array.
var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas, "Sandia","Pera","Melon","Coco"); 