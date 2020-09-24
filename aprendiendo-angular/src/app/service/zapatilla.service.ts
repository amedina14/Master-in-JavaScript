import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {

    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla("Gazzelle", 40, "Adidas", "blue", false),
            new Zapatilla("Chancletality", 100, "Nike", "red", true),
            new Zapatilla("Gazzelle", 90, "Adidas", "green", true),
            new Zapatilla("Boots Cowboy", 39, "Mr Jones", "brown", true),
        ];
    }

    getTexto(){
        return "Hola Mundo from a servicio";
    }

    getZapatilla(): Array<Zapatilla>{
        return this.zapatillas;
    }

}