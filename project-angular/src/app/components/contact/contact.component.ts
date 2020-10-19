import { Component, OnInit } from '@angular/core';
//import { Global } from '../../../services/global';

/**
 * Variabili globali.
 */
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSliderInput: number;
  public ampiezzaToSlider: number;
  public caption: boolean;
  public author: any;

  constructor() {
    this.ampiezzaToSlider= 1000;
    this.caption = true;
   }

  ngOnInit(): void {

  }

  cargarSlider(){
    //this.ampiezzaToSlider = this.widthSlider;
    let amp = this.ampiezzaToSlider;
    //window.location.reload();
    if(amp != null){
      console.log("ampiezza piena si svuota");
      this.ampiezzaToSlider = 0;
      console.log(this.ampiezzaToSlider);
      if(this.ampiezzaToSlider == 0){
        console.log("ampiezza vuota si riempie");
        this.ampiezzaToSlider = this.widthSliderInput;
        console.log(this.ampiezzaToSlider);
      }
    } else{
      this.ampiezzaToSlider = this.widthSliderInput;
    }
  }

  resetWidth(){
    this.ampiezzaToSlider = null;
  }

  /**
   * Flusso 4
   * 
   * @param event 
   */
  getAuthor(event){
    console.log(event);
    this.author = event;
  }

  /*
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
  */

}
