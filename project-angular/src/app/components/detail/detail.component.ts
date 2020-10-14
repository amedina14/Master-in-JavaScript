import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Global } from '../../../services/global';
import { Project } from '../../../models/project';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
  }

  /**
   * 1. Recibir los parametros de la url con _route
   * 2. .params.subscribe almacena el parametro en una variable id con fx callback
   * 3. Pasarlos al metodo local.
   */
  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getDetail(id);
    });
  }

  /**
   * Invoco el metodo del servicio y hago peticion al backend.
   */
  getDetail(id) {
    this._projectService.getDetail(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  /**
   * Invoco el metodo del servicio deleteProject y hago peticion al backend.
   */
  deleteProject(id) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/projects']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  cons(){
    console.log("Hola");
  }

}
