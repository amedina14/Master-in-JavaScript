import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIdentificacion(){
    this.identificado = true;
  }

  unsetIdentificacion(){
    this.identificado = false;
  }

}
