import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillaComponent implements OnInit {

    public indice: number;
    public mi_marca: string;
    public color: string = "brown";
    public titulo: string;
    public zapatillas: Array<Zapatilla>; // Decl. arr. zap.
    public marcas: String[]; // Declaracion array string

    constructor(
        // injectar servicio como dependencia dentro de propiedad
        private _zapatillaService: ZapatillaService
    ) {
        this.titulo = "Componente Zapatillas";
        this.color = '';
        this.mi_marca = "";

        // Se inicializa el array vacio
        this.marcas = new Array();
    }

    // Muestro por consola apenas inicia
    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatilla();

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

    getMarca() {
        if (this.mi_marca) alert(this.mi_marca);
    }

    addMarca() {
        // Si hay un valor
        if (this.mi_marca) {
            // Si no està reperido
            if (this.marcas.indexOf(this.mi_marca) < 0) {
                // Lo agrega
                this.marcas.push(this.mi_marca);
            }
        }
    }

    deleteById() {
        //No es buena practica sin parametro.
        if (this.indice >= 0) {
            // elimina 1 elemento con indice x
            this.marcas.splice(this.indice, 1);
        }
    }

    //Es buena practica.
    deleteMarca(i) {
        // delete this.marcas[i];
        this.marcas.splice(i, 1);
    }

    onBlur(){
        console.log("Has salido del input");
    }

    mostrarPalabra(){
        alert(this.mi_marca);        
    }



}