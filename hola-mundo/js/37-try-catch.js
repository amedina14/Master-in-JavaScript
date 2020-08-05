'use strict'

try {
    var year = 2020;
    alert(year);
    /* Si està mal la url escupe error. */
    console.log(decodeURIComponent("https://arandom.000webhostapp.com"));
    /* Si el indice array es muy grande escupe error. */
    var vector = new Array(9999999999999999); //fix: Array(9999999999999999n)

} catch (error) {
    console.log(error);
    alert("Ha ocurrido un error");
}