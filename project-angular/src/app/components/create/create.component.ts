import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService] //Aggiunge servizio al decoratore
})
export class CreateComponent implements OnInit {

  public title: String;
  public project: Project;

  /**
   * Dentro de los parametros del constructor se crean las propiedades del servicio
   * @param _projectService Propiedades del servicio
   */
  constructor(
    private _projectService: ProjectService
  ) { 
    this.title = "Aggiungere nuovo progetto";
    this.project = new Project('','','','',2020,'','');
  }

  ngOnInit(): void {
  }

  /**
   * Llena el objeto proyecto con los datos.
   * @param form Datos del formulrio.
   */
  onSubmit(form){
    console.log(this.project);
  }

}
