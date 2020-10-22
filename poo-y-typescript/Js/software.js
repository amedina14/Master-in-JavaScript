var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Modules */
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(title) {
            this.title = title;
            alert(title);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(title) {
            this.title = title;
            alert(title);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var tienda_informatica = new Informatica("Supertienda");
/** Decorators
 * Aggiunge nuove funzionalità alla classe.
*/
function launch(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = new function () {
            alert(lanzar);
        };
    };
}
var Software = /** @class */ (function () {
    function Software() {
        this.name = "Software TypeScript";
        this.version = "1.0.1";
    }
    Software.prototype.getName = function () {
        return this.name;
    };
    Software.prototype.setName = function (name) {
        this.name = name;
    };
    Software.prototype.getVersion = function () {
        return this.version;
    };
    Software.prototype.setVersion = function (version) {
        this.version = version;
    };
    Software = __decorate([
        launch("Decorator of Software Ts")
    ], Software);
    return Software;
}());
var software = new Software();
//software.lanzamiento();
/** Eredità */
var VideoEditor = /** @class */ (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    constructor(){
        this.name = "";
        this.version = 0;
        this.timeline = 0;
    }*/
    VideoEditor.prototype.getTimeline = function () {
        return this.timeline;
    };
    VideoEditor.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    VideoEditor.prototype.getAllData = function () {
        return this.getName() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return VideoEditor;
}(Software));
var editorVideo = new VideoEditor();
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
var programas = [];
function test() {
    var software = new Software();
    /*
    let nameValue = (<HTMLInputElement>document.getElementById('name')).value;
    let versionValue = (<HTMLInputElement>document.getElementById('version')).value;
    nameValue = software.getName();
    versionValue = software.getVersion();
    */
    /**
     * Llena los inputs y los colora de rosado.
     */
    document.getElementById('name').value = software.getName();
    document.getElementById('version').value = software.getVersion();
    document.getElementById('name').style.background = 'rgb(255, 153, 239)';
    document.getElementById('version').style.background = 'rgb(255, 153, 239)';
}
function guardar() {
    document.getElementById('name').style.background = 'rgb(255, 255, 255)';
    document.getElementById('version').style.background = 'rgb(255, 255, 255)';
    var nameSoft = document.getElementById('name').value.toString();
    var versionSoft = document.getElementById('version').value.toString();
    var software = new Software();
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
    var soft = "";
    programas.forEach(function (element) {
        soft = soft + ("\n       <div>\n       <li><b>Name:</b> " + element.getName() + "; <b>Version:</b> " + element.getVersion() + "</li>\n       </div>\n       ");
    });
    var listado = document.getElementById('lista');
    listado.innerHTML = soft;
    document.getElementById('name').value = "";
    document.getElementById('version').value = "";
}
