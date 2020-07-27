'use strict'

/**
 * JSON - JavaScript Object Notation
 */

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2018,
    pais: "USA"
};

var peliculas =[
    {
        titulo: "La verdad duele",
        year: 2016,
        pais: "France"
    },
    pelicula
];

//pelicula.titulo = "superman begins";
//console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");

for(var i in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[i].titulo + " - " + peliculas[i].year);
    caja_peliculas.append(p);
}

/*
for(var pelicula[i]=0; i<pelicula.length;i++){
    document.write(pelicula[i]);    
}

pelicula.forEach(i => {
    document.write(i);    
});
*/
