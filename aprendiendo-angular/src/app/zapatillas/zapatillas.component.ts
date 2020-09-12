import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillaComponent implements OnInit {

    public titulo: string;
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.titulo = "Componente Zapatillas";

        this.zapatillas = [
            new Zapatilla("Chancletality", 100, "Meme", "red", true),
            new Zapatilla("Gazzelle", 90, "Adidas", "green", true),
            new Zapatilla("Boots Cowboy", 39, "Mr Jones", "brown", true),
        ]
    }

    // Muestro por consola apenas inicia
    ngOnInit(){
        console.log(this.zapatillas);
    }
}