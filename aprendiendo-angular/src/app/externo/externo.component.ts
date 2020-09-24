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

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId = 1;
  }

  /**
   * Invico el servicio de "peticiones"
   */
  ngOnInit(): void {
    this.cargaUsuario();
  }

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

}
