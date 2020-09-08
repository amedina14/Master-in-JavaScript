// Clase (molde del objeto)
class Camiseta{
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones del objeto)

    public setColor(color){
        // accede a propiedad/atributo privado
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

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
