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

// Get element by tags
var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);

var modBox3 = todosLosDivs[2].innerHTML = "box 3 modded";
console.log(modBox3);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//todosLosDivs.forEach((valor, indice)=>{
for (var valor in todosLosDivs) {
    //console.log(todosLosDivs[valor]);
    if (typeof todosLosDivs[valor].textContent == 'string' ) {
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
//});
seccion.append(hr);

// Get element by class css
var todasLasClases = document.getElementsByClassName('');