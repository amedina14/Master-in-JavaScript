import { Component, OnInit, Input } from '@angular/core';

declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() ampiezza: number;
  @Input('caption') didascalia: boolean;

//  const colors = ['rgba(9, 148, 0, 0.8)','rgba(145, 30, 10, 0.8)','rgba(10, 30, 145, 0.8)']; 
//  const letters = '0123456789ABCDEF';
//  const color = '#';

  constructor() {
    this.ampiezza = 0;
   }

  ngOnInit(): void {

    //let letters = '0123456789ABCDEF';
    //let color = '#';

    /**
     * Cambia colore con jquery.
     * bisogna declarare le variabili globali.
    */ 
   $("#logo").click(function(e){
    e.preventDefault();


//    function getRandomColor() {
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

  /*
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  */

}
