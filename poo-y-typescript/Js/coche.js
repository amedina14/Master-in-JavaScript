var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "White";
        this.velocidad = 0;
        if (this.modelo = null) {
            this.modelo = "Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.color = modelo;
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
var coche = new Coche("Alfa Mito");
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("Rojo");
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color de coche 1 es: " + coche.getColor());
console.log("El color de coche 2 es: " + coche_dos.getColor());
console.log("El color de coche 3 es: " + coche_tres.getColor());
console.log("Modelo del coche 1 es:", coche.getModelo());
for (var i = 0; i < 3; i++) {
    coche.acelerar();
    console.log("Acelerando. La velocidad del coche es:", coche.getVelocidad());
}
coche.frenar();
console.log("Frenando. La velocidad del coche es:", coche.getVelocidad());
console.log("Fin de viaje. Coche apagado. Velocidad: ", coche.apagar(0));
