// Clase (molde del objeto)
// export: exporta clases a otros ficheros
var Camiseta = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    // constructor: primer metodo que se ejecuta siempre al crear un objct y sirve para dar valor a las propiedades
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        // accede a propiedad/atributo privado
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
/*

var camiseta = new Camiseta("rojo","manga larga","nike","xs",14);

camiseta.setColor("anaranjado");
//camiseta.getColor();

// Propiedades para el acceso publico

camiseta.color = "Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Adidas";
camiseta.talla = "sm";
camiseta.precio = 20;

var playera = new Camiseta("yellow","manga corta","adidas","m",15);
playera.setColor("verde");
//camiseta.getColor();

// Propiedades para el acceso publico

playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Nike";
playera.talla = "s";
playera.precio = 15;

console.log(camiseta.getColor(), playera.getColor());
console.log(camiseta, playera);

*/ 
