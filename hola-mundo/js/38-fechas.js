'use strict'

var fecha = new Date();
var year = fecha.getUTCFullYear();
var mes = fecha.getUTCMonth();
var day = fecha.getUTCDate();
var hora = fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dìa es: ${day}
    La hora es: ${hora}
`;
console.log(textoHora);