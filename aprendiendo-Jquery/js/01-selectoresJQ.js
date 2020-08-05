
// $ == JQuery (objeto), selector (document), metodo (ready).

$(document).ready(function () {
    console.log("estamos listos");

    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    console.log(rojo);

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");

    var verde = $("#verde").css("background", "green")
        .css("color", "yellow");
})