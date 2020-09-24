import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre: String;
  public followers: number;

  constructor(
    private _route: ActivatedRoute, // eschucha la ruta
    private _router: Router // redireccionador
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      // Es obligatorio pasarle followers
      // el "+" covierte a number
      this.followers = +params.followers; 

      //this.nombre = params['nombre'];
      //console.log(this.nombre);
      //console.log(typeof +params.followers);

      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }

    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
