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

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getModelo(){
        return this.modelo;
    }

    public setMarca(marca: string){
        this.marca = marca;
    }

    public getMarca(){
        return this.marca;
    }
}

// Clase hija
class Sudadera extends Camiseta{
    private capucha: boolean;

    // Va a recibir parametro obligatoriamente un boolean
    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    // Va a devolver obligatoriamente un boolean
    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera("blanca","algodon","nike","s",5);
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