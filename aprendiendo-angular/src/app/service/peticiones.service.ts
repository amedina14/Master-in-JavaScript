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
}