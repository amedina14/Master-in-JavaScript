import { Pipe, PipeTransform } from '@angular/core';

/**
 * indicar en los metadatos del decorador en nombre del pipe.
 * implemento la interface que permite crear la pipe.
 */
@Pipe({
    name:'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    /**
     * Cuando implemento PipeTransform,
     * obligatoriamente tengo que usar 
     * el metododo transform():
     * (param1)dato | (param2)calculadora: otroDato
     */
    transform(value: any, value_two: any){
        let operciones = `
            Suma: ${value+value_two} |
            Resta: ${value-value_two} |
            Multiplicacion: ${value*value_two} |
            Division: ${value/value_two}
        `;
        return operciones;
    }
}