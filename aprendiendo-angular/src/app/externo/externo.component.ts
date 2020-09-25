import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  /**
   * Invoco el servicio de "peticiones"
   */
  ngOnInit(): void {

    this.fecha = new Date(); //new Date(2019,5,20)
    this.cargaUsuario();
  }

  /**
   * API reqres.in
   */
  cargaUsuario() {
    this.user = false;
    // para recojer el resultado de la peticion ajax uso subscribe
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result;
        //console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  /**
   * Llamo servicio de peticiones.
   * Invoco el metodo addUser(form),
   * reseteo form.reset().
   * registro data con subscribe:
   * dos fx de callback(resulatdo y error){} 
   * @param form 
   */
  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
