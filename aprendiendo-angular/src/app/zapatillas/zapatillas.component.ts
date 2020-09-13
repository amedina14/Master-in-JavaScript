import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillaComponent implements OnInit {

    public indice: number;
    public mi_marca: string;
    public color: string = "brown";
    public titulo: string;
    public zapatillas: Array<Zapatilla>; // Decl. arr. zap.
    public marcas: String[]; // Declaracion array string

    constructor() {
        this.titulo = "Componente Zapatillas";

        this.zapatillas = [
            new Zapatilla("Gazzelle", 40, "Adidas", "blue", false),
            new Zapatilla("Chancletality", 100, "Nike", "red", true),
            new Zapatilla("Gazzelle", 90, "Adidas", "green", true),
            new Zapatilla("Boots Cowboy", 39, "Mr Jones", "brown", true),
        ];

        // Se inicializa el array vacio
        this.marcas = new Array();
    }

    // Muestro por consola apenas inicia
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas(); // invoco metd.
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {

            /**
             * indexOf: busqueda dentro array.
             * x < 0: no existe.
             * Del array de marcas busca si la marca
             * no existe y la agrega en el array.
             *  */
            if (this.marcas.indexOf(zapatilla.marca) < 0) { //push marca solo si no existe ya
                this.marcas.push(zapatilla.marca);
            }

            //console.log(index);
        });
        console.log(this.marcas); // array en consola
    }

    getMarca(){
        if (this.mi_marca) alert(this.mi_marca);
    }

    addMarca() {
        if (this.mi_marca) {
            this.marcas.push(this.mi_marca);
        }
    }

    deleteById() {
        //No es buena practica.
        if (this.indice) {
            // elimina 1 elemente con indice
            this.marcas.splice(this.indice, 1);
        }
    }

    //Es buena practica.
    deleteMarca(i){
        // delete this.marcas[i];
        this.marcas.splice(i,1);
    }
}