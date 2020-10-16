import { Component, OnInit } from '@angular/core';
//import { $ } from 'protractor';

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

  constructor() { }

  ngOnInit(): void {

//    $("header").css("background", "green");
    


    /**
     * Cambia colore con jquery.
     * bisogna declarare le variabili globali.
     */
    $("#logo").click(function(e){
      e.preventDefault();

        $("header").css("background", "green")
                 .css("height","50px");
    });
    

  }

}
