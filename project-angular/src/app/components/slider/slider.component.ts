import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() ampiezza: number;
  @Input('caption') didascalia: boolean;
  /**
   * Istanza di questo oggetto EventEmitter() che permette di creare nuovi eventi.
   * Lo passa al metodo locale.
  */
  @Output() authorEvent: any = new EventEmitter();

  public author: any;

//  const colors = ['rgba(9, 148, 0, 0.8)','rgba(145, 30, 10, 0.8)','rgba(10, 30, 145, 0.8)']; 
//  const letters = '0123456789ABCDEF';
//  const color = '#';

  constructor() {
    this.ampiezza = 0;
    this.author = {
      name: "Adrian Medina",
      website: "arandom.000webhostapp.com",
      social: ["@adrian.mee","Adrian Medina", "arandom"],
      email: "medinalarry96@gmail.com"
    }
   }

  ngOnInit(): void {

    /**
     * Cambia colore con jquery.
    */ 
   $("#logo").click(function(e){
    e.preventDefault();

    /**
     * Colori random
     */
    function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // "rgba(9, 148, 0, 0.8)"
    $("header").css("background", getRandomColor()).css("height","90px").css("opacity", "0.8");

  });
  
  /**
   * Slider
   */
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: this.ampiezza
  })

  }

  /**
   * Lanciare evento.
   * Invia l'oggetto al componente padre contact.
   * Si pouo passare una proprieta json o oggetto.
   * 
   * Flusso 2
   */
  launch(event){
    console.log(event);
    this.authorEvent.emit(this.author);
  }

}
