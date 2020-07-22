'use strict'

/* MATRICES */

var categorias = ["action", "Horror", "Comedia"];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];

/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

/*
// Insertar elementos en el array
do{
    var elemento = prompt("Insert film: ");
    if (elemento.toLowerCase() != "acabar"){
        peliculas.push(elemento);
    }
}while(elemento.toLowerCase() != "acabar");
*/

// Elimina el ultimo elemento del array
/**
 * peliculas.pop();
 */

/**
 * peliculas[0] = undefined;
 */

//peliculas.push("Batman");

/**
 * // Eliminar elementos dentro un array
 */
var indice = peliculas.indexOf(prompt("Que pelicula quieres eliminar?"));
if(indice > -1){
    // Elimina en base al indice un numero de elementos en adelante.
    peliculas.splice(indice,1);
}

// Convertir array a un string
var peliculas_string = peliculas.join(", ");

// Convertir Cadena String a un Array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log("peliculas originales: ",peliculas);
console.log("peliculas_string:",peliculas_string);
console.log("cadena array:",cadena_array);

// Ordenar un Array: de la A a Z, ascendente
peliculas.sort();
document.write("<h3 style='padding:10px;'>peliculas sort: </h3>",peliculas+"<br>");
console.log("peliculas sort:",peliculas);

// Orden de la Z a la A, despues de haber hecho el orden ascendente, para hacerlo descendente.
peliculas.reverse();
document.write("<h3 style='padding:10px;'>peliculas reverse: </h3>",peliculas+"<br>");
console.log("peliculas reverse:",peliculas);