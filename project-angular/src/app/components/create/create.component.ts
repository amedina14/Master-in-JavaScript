import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project';
import { ProjectService } from '../../../services/project.service';
import { UploadService } from 'src/services/upload.service';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService] //Aggiunge servizio al decoratore
})
export class CreateComponent implements OnInit {

  public title: String;
  public project: Project;
  public save_project;
  public status: String;
  public status_img: boolean;
  public filesToUpload: Array<File>;

  /**
   * Dentro de los parametros del constructor se crean las propiedades del servicio
   * @param _projectService Propiedades del servicio
   */
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Aggiungere nuovo progetto";
    this.status_img = false;
    this.project = new Project('', '', '', '', 2020, '', '');
  }

  ngOnInit(): void {
  }

  /**
   * Llena el objeto proyecto con los datos del form.
   * 
   * Se usa metodo subscribe que contiene funcon de callback
   * para guardar las peticones como resultado.
   * 
   * @param form Datos del formulario.
   */
  onSubmit(form) {

    // response.project.image != ''
    if (this.project.image !== null || this.project.image !== '') {
      // Guardar los datos
      this._projectService.saveProject(this.project).subscribe(
        response => {
          if (response.project) {

            if (this.filesToUpload) {
              // Subir la imagen
              this._uploadService.makeFileRequest(Global.url + 'uploadImage/' + response.project._id, [], this.filesToUpload, 'image')
                .then((result: any) => {

                  this.save_project = result.project;
                  console.log(result);

                  this.status = 'success';
                  form.reset();
                });
            } else {
              this.save_project = response.project;
              this.status = 'success';
              form.reset();

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

  /**
   * Captura todos los datos relativos al file.
   * 
   * @param fileInput file cargado desde la vista.
   */
  fileChangeEvent(fileInput: any) {
    /**
     * console.log(fileInput); sirve para encontrar el file en
     * propiedad target.
     * Convierto obligatoriamente los datos a un array.
     * Ya tengo en la propiedad los datos que quiero subir.
     */
    if (fileInput !== null) {

      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.status_img = true;
    } else {
      console.log("imagen vacia");
    }
  }

}
