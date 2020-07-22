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

// Convertir a un string
var peliculas_string = peliculas.join(", ");

console.log(peliculas);
console.log(peliculas_string);
