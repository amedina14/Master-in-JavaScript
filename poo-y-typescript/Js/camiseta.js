// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        // accede a propiedad/atributo privado
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.setColor("anaranjado");
//camiseta.getColor();
/*
// Propiedades para el acceso publico

camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Adidas";
camiseta.talla = "sm";
camiseta.precio = 20;
*/
var playera = new Camiseta();
playera.setColor("verde");
//camiseta.getColor();
/*
// Propiedades para el acceso publico

playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Nike";
playera.talla = "s";
playera.precio = 15;
*/
console.log(camiseta.getColor(), playera.getColor());
