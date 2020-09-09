var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("Rojo");
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color de coche 1 es: " + coche.getColor());
console.log("El color de coche 2 es: " + coche_dos.getColor());
console.log("El color de coche 3 es: " + coche_tres.getColor());
