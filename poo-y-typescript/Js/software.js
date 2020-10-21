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
var Software = /** @class */ (function () {
    function Software() {
        this.name = "";
        this.version = 0;
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
    return Software;
}());
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
editorVideo.setVersion(8);
editorVideo.setTimeline(4000);
console.log(editorVideo.getAllData());
