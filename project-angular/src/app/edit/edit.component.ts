import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Project } from '../../models/project';
import { UploadService } from 'src/services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

/**
 * '../create/create.component.html'
 * './edit.component.html'
 * './create.component.html'
 */
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: String;
  public project: Project;
  public save_project;
  public status: String;
  public filesToUpload: Array<File>;
  public status_img: boolean;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.title = "Modificar progetto";
    /**
     * Se llama a los datos del proye en getDetail.
     * this.project = new Project('', '', '', '', 2020, '', '');
    */
    this.url = Global.url;
    this.status_img = false;
  }

  /**
   * 1. Recibir los parametros de la url con _route
   * 2. .params.subscribe almacena el parametro en una variable id con fx callback
   * 3. Pasarlos al metodo local getDetail.
   */
  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getDetail(id);
    });
  }

  /**
   * Invoco el metodo del servicio que llena los datos del proyecto.
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

  onSubmit(form) {

    // response.project.image != ''
    if (this.project.image !== null || this.project.image !== '') {
      // Guardar los datos
      this._projectService.updateProject(this.project).subscribe(
        response => {
          if (response.project) {

            if (this.filesToUpload) {

              // Subir la imagen
              this._uploadService.makeFileRequest(this.url + 'uploadImage/' + response.project._id, [], this.filesToUpload, 'image')
                .then((result: any) => {

                  this.save_project = result.project;
                  this.status = 'success';

                });
            } else {

              this.save_project = response.project;
              this.status = 'success';

            }
          } else {
            this.status = 'failed';
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    }

  }

  fileChangeEvent(fileInput: any) {

    if (fileInput !== null) {

      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.status_img = true;
    } else {
      console.log("imagen vacia");
    }
  }

}
