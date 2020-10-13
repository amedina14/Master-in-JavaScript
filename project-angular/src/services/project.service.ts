import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: String;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url; 
    }

    testService(){
        return 'Metodo de prueba, servicio funcionando';
    }

    /**
     * Variables de la funcion: parametros y headers.
     * 
     * Para guarda un objeto json en la base de datos (mongoDB) debemos retornar las siguientes instrucciones:
     * return: resultado de la funcion.
     * this._http: variable que almacena la libreria HttpClient.
     * post(): metodo de la clase/libreria anterior.
     * this.url: api del backend como parametro de post.
     * save-project: ruta concatenada a la url/api.
     * params: variable de parametros del objeto json.
     * {headers: headers}: json que contiene la variable de las cabeceras del objeto.
     * La funcion devuelve un OBSERVABLE de cualquier tipo.
    */
    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-project', params, {headers: headers});
    }

    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'applicaton/json');

        return this._http.get(this.url+'projects', {headers: headers});
    }
    getDetail(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id, {headers: headers});
    }
}