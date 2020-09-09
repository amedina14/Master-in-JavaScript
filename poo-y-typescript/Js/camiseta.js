var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// export: exporta clases a otros ficheros
// Clase (molde del objeto)
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
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiseta;
}());
// Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Va a recibir parametro obligatoriamente un boolean
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    // Va a devolver obligatoriamente un boolean
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera("blanca", "algodon", "nike", "s", 5);
// De esta manera para acceder a propiedades privadas
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("black");
sudadera_nike.setModelo("seda");
sudadera_nike.setMarca("Adidas");
console.log(sudadera_nike);
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
var camiseta = new Camiseta("yellow", "manga corta", "adidas", "m", 15);
console.log(camiseta);
