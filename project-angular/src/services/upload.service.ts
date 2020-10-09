import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService {

    /**
     * Propiedades del servicio:
     * url
     */
    public url: String;
    public files: any;

    /**
     * Constructor:
     * Buena practica declarar el servicio externo 
     * en los parametros del contructor.
    */
    constructor() {
        this.url = Global.url;
    }

    /**
     * Peticion ajax clasica que junta un file para subir.
     * Recibe 4 parametros: 
     * url para consultar, 
     * params, array de string, 
     * array de files, 
     * nombre del parametro (campo de la imagen) del backend.
     * El tipo variable del parametro url debe ser "string" con s minuscola
     * para que no de error en el metodo open(). 
     */
    makeFileRequest(url: string, params: Array<String>, files: Array<any>, name: String) {

        /**
         * Crear Promise para peticion asincrona.
        */
        return new Promise((resolve, reject) => {
            /**
             * Definir peticion ajax, simular form clasico con un objeto form para llenar con el file.
             * xhr = sinonimo de ajax, se instacia un objeto con los metodos para usar las peticiones.
            */
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();

            /**
             * Recorre el array de los files que llega.
            */
            for (let i = 0; i < files.length; i++) {
                /**
                 * Al objeto form adjunto el file o campo de interes.
                 * En este caso le paso el campo en la BD, el los files y el nombre de los files.
                */
                formData.append(name, files[i], files[i].name);
            }

            /**
             * XHR:
             * - onreadystatechange: Cuando haya algun cambio, la peticion ajax (xhr) comprueba:
             * - readyState: El estado del cliente con readyState y
             * - status: que se haya hecho la petcion con exito.
             * Si es asì delvuelve el resolve de la promesa y convierte el response de la peticion a json dentro de los parametros.
             * Si la peticion falla la promesa devuelve response en el reject.  
             */
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4){
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            /**
             * Hacer la peticion con open por post a la url con parametro true.
             * Definir que envie xhr con send pasandole todo el form.
             * Para solucionar el error menor de la url, 
             * el tipo variable del parametro debe ser "string" con s minuscola. 
            */
            xhr.open('POST', url, true);
            xhr.send(formData);

        });
    }
}