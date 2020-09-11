import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html' 
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }

    // Se exe al cargar el componente
    ngOnInit(){
        console.log("OnInit executed!");
    }

    // Se exe a cada cambio del codigo.
    ngDoCheck(){
        console.log("DoCheck executed");
    }

    // cambia nombre con boton + evento en la vista.
    /**
     * Util para una variable que estè siempre
     * actualizada, recoger unos datos cada vez que 
     * haya un cambio en la app.
     */
    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

    /**
     * Permite ejecucion de algo, antes que
     * se BORRE o OCULTE la instancia de un componente
     * en la vista.
     */
    ngOnDestroy(){
        console.log("OnDestroy executed!");
    }
}