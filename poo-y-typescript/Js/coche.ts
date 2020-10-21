class Coche{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(){
        this.color = "";
        this.modelo = "";
        this.velocidad = 0;
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }
    public frenar(){
        this.velocidad--;
    }
    public apagar(velocidad: number){
        return this.velocidad = velocidad;
    }
    public getVelocidad():number{
        return this.velocidad;
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

for(let i = 0; i<3; i++){
    coche.acelerar();
    console.log("Acelerando. La velocidad del coche es:", coche.getVelocidad());
}

coche.frenar();
console.log("La velocidad del coche es:", coche.getVelocidad());

console.log("Fin de viaje. Coche apagado. Velocidad: ", coche.apagar(0));
