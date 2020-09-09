class Coche{
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }
}

var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor("Rojo");
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color de coche 1 es: "+ coche.getColor());
console.log("El color de coche 2 es: "+ coche_dos.getColor());
console.log("El color de coche 3 es: "+ coche_tres.getColor());