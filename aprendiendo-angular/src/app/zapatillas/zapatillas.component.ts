import { Component } from '@angular/core';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillaComponent {

    public titulo: string;

    constructor(){
        this.titulo = "Componente Zapatillas";
    }
}