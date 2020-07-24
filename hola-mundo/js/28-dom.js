'use strict'

// DOM

function cambiaColor(color) {
    caja.style.background = color;
}


// Get elements by specific ID
var caja = document.getElementById("micaja");
var caja2 = document.querySelector("#micaja2");

caja.innerHTML = "Box 1 modded";
caja.style.background = "skyblue";
caja.style.width = "15%";
caja.style.padding = "10px";
caja.style.textAlign = "center";
caja.style.margin = "10px";
caja.style.color = "black";
caja.className = "box box1";

console.log(caja);

var insertBackgroundColor = prompt("Ingresa el color de fondo: ");
cambiaColor(insertBackgroundColor);

caja2.style.border = "1px solid black";
caja2.style.width = "15%";
caja2.textAlign = "center";
caja2.style.margin = "10px";
caja2.style.padding = "10px";



/**
 * Get element by TAGS HTML
 */

var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

var modBox3 = todosLosDivs[2].innerHTML = "box 3 modded";
console.log(modBox3);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//todosLosDivs.forEach((valor, indice)=>{
//});

for (var valor in todosLosDivs) {
    //console.log(todosLosDivs[valor]);
    // Solo los divs que son string
    if (typeof todosLosDivs[valor].textContent == 'string') {
        //crea elemento html <p>
        var parrafo = document.createElement("p");
        //agarra el valor que le llega en el bucle de los divs
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        //mete el texto dentro del parrafo
        parrafo.appendChild(texto);
        //mete el parrafo dentro de otro tag
        seccion.append(parrafo);
    }
}
seccion.append(hr);



/**
 * Get element by CLASS CSS: Vector de elementos rojos
 */

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName("amarillo");
console.log("Vector amarillos:", divsAmarillos);

var div = "";
for (div in divsRojos) {
    //console.log(divsRojos[div]);
    // solo los divs del vector con clase "rojo"
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "violet";
    }
}

//divsRojos.style.background = "violet";
console.log("Vector rojos:", divsRojos);

var amarillo = "";
for (amarillo in divsAmarillos) {
    if (divsAmarillos[amarillo].className == "amarillo") {
        divsAmarillos[amarillo].style.background = "yellow";
    }
}

// Query Selector es mejor con IDs
/**
 * El Query selector no es recomendado para 
 * seleccionar mas de 1 clase o elemento (tag).
 */
var idEncabezado = document.querySelector("#encabezado");
console.log(idEncabezado);

// Mas de una clase - No recomendado porque selecciona solo 1
var claseRojo = document.querySelector("div.rojo"); 
console.log(claseRojo);

// Mas de un tag - No recomendado porque selecciona solo 1
var tags = document.querySelector("div");
console.log(tags);

/**
 * Este ejemplo devuelve una lista de todos los elementos <div> del documento con una clase "nota" o "alerta"
 * 
 * var matches = document.querySelectorAll('div.nota, div.alerta');
 * 
 * 
 * Aquí, se obtiene una lista de elementos <p> cuyo
 * elemento padre inmediato es un div con la clase 
 * "highlighted" y que está ubicado dentro de un 
 * contenedor cuyo ID es "test".
 * 
 * var container = document.querySelector('#test');
 * var matches = container.querySelectorAll('div.highlighted > p');
 * 
 */