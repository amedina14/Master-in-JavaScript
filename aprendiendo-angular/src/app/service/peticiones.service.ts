import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// Con esto se recoje info de apirest
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {

    // propiedades
    public url: String;

    // constructor
    constructor(
        public _http: HttpClient
    ) {
        this.url = "https://reqres.in/";
    }

    // metodos
    getUser(userId): Observable<any> {
        return this._http.get(this.url + 'api/users/' + userId);
    }

    /**
     * Peticion AJAX usando POST:
     * -Enviar json string addUser(x)
     * -convertir objt js puro a json string => stringify(x)
     * -Indicarles las cabeceras new HttpHeaders().
     * -Con set('') indicarle el tipo de peticion.
     * -Enviar peticon por post: 
     * parametro 1: (api)url.
     * parametro 2: (json a guardar) 'param'.
     * parametro 3: (json)cabeceras con => 
     * propiedad: headers,
     * variable: headers,
    */
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'Application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }

}