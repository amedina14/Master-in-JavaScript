class Software{
    public name: String;
    public version: Number;

    constructor(){
        this.name = "";
        this.version = 0;
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
    public setVersion(version:number){
        this.version = version;
    }
}

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
editorVideo.setVersion(8);
editorVideo.setTimeline(4000);

console.log(editorVideo.getAllData());