/* Interface: Define que propiedades y metodos 
obligatorios va a tener una clase y debe cumplir 
ese contrato y deben existir esos metodos definidos 
en la interface*/
interface CamisetaBase {
    setColor(color);
    getColor();

}

// export: exporta clases a otros ficheros

// Clase (molde del objeto)
class Camiseta implements CamisetaBase {
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones del objeto)

    // constructor: primer metodo que se ejecuta siempre al crear un objct y sirve para dar valor a las propiedades
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        // accede a propiedad/atributo privado
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

}



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