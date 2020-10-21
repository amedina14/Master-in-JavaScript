var Coche = /** @class */ (function () {
    function Coche() {
        this.color = "";
        this.modelo = "";
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.apagar = function (velocidad) {
        return this.velocidad = velocidad;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
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
for (var i = 0; i < 3; i++) {
    coche.acelerar();
    console.log("Acelerando. La velocidad del coche es:", coche.getVelocidad());
}
coche.frenar();
console.log("La velocidad del coche es:", coche.getVelocidad());
console.log("Fin de viaje. Coche apagado. Velocidad: ", coche.apagar(0));
