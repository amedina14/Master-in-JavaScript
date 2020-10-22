/** Modules */
module Tienda{
    export class Ropa{
        constructor(public title: string){
            alert(title);
        }
    }
    export class Informatica{
        constructor(public title: string){
            alert(title);
        }
    }
}

import Informatica = Tienda.Informatica;
const tienda_informatica = new Informatica("Supertienda");


/** Decorators 
 * Aggiunge nuove funzionalità alla classe.
*/
function launch(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = new function(): void{
            alert(lanzar);
        }
    }
}

@launch("Decorator of Software Ts")
class Software{
    public name: string;
    public version: string;

    constructor(){
        this.name = "Software TypeScript";
        this.version = "1.0.1";
    }

    public getName(){
        return this.name;
    }
    public setName(name:string){
        this.name = name;
    }
    public getVersion(){
        return this.version;
    }
    public setVersion(version:string){
        this.version = version;
    }
}

const software = new Software();
//software.lanzamiento();

/** Eredità */
class VideoEditor extends Software{
    public timeline: number;
    
    /*
    constructor(){
        this.name = "";
        this.version = 0;
        this.timeline = 0;
    }*/

    public getTimeline(){
        return this.timeline;
    }
    public setTimeline(timeline:number){
        this.timeline = timeline;
    }

    public getAllData():string{
        return this.getName()+" - "+this.getVersion()+" - "+this.getTimeline(); 
    }
}

const editorVideo = new VideoEditor();
editorVideo.setName("Camtasia Studio");
editorVideo.setVersion("8");
editorVideo.setTimeline(4000);

console.log(editorVideo.getAllData());

/**
 * Stampa sul Input HTML
*/



/**
 * Logica del form: guardar programa
 */
const programas: Array<Software> = [];


function test(){

    const software = new Software();

    /*
    let nameValue = (<HTMLInputElement>document.getElementById('name')).value;
    let versionValue = (<HTMLInputElement>document.getElementById('version')).value;
    nameValue = software.getName();
    versionValue = software.getVersion();
    */

    /**
     * Llena los inputs y los colora de rosado. 
     */
    (<HTMLInputElement>document.getElementById('name')).value = software.getName();
    (<HTMLInputElement>document.getElementById('version')).value = software.getVersion();
    (<HTMLElement>document.getElementById('name')).style.background = 'rgb(255, 153, 239)';
    (<HTMLElement>document.getElementById('version')).style.background = 'rgb(255, 153, 239)';
    
}

function guardar(){

    (<HTMLElement>document.getElementById('name')).style.background = 'rgb(255, 255, 255)';
    (<HTMLElement>document.getElementById('version')).style.background = 'rgb(255, 255, 255)';

    const nameSoft = (<HTMLInputElement>document.getElementById('name')).value.toString();
    const versionSoft = (<HTMLInputElement>document.getElementById('version')).value.toString();

    const software = new Software();

    software.setName(nameSoft);
    software.setVersion(versionSoft);

    programas.push(software);

    /*
    let list = "";
    for(let i = 0; i < programas.length; i++){
        list = list+"<p>"+programas[i].getName()+"</p>";
    }
    let listado = <HTMLElement>document.getElementById('list');
    listado.innerHTML = list;
   */

   /*
   */
   let soft = "";
   programas.forEach(element => {
       soft = soft + `
       <div>
       <li><b>Name:</b> ${element.getName()}; <b>Version:</b> ${element.getVersion()}</li>
       </div>
       `;
    });
    let listado = <HTMLElement> document.getElementById('lista');
    listado.innerHTML = soft;
    
    (<HTMLInputElement>document.getElementById('name')).value = "";
    (<HTMLInputElement>document.getElementById('version')).value = "";

}
