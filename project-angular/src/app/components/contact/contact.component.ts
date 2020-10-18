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

  //public url: string;

  constructor() {
    //this.url= Global.url;
   }

  ngOnInit(): void {
    
    /**
     * Cambia colore con jquery.
     * bisogna declarare le variabili globali.
    */ 
    $("#logo").click(function(e){
      e.preventDefault();

        $("header").css("background", "rgba(9, 148, 0, 0.8)")
                 .css("height","90px");
    });
    
    /**
     * Slider
     */
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    })


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
