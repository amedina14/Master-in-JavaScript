'use strict'

// DOM

function cambiaColor(color){
    caja.style.background = color;
}

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