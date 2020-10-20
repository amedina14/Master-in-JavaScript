import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomizable]'
})
export class CustomizableDirective {

  constructor(public el:ElementRef) {
//    let element = el.nativeElement;

   }

  ngOnInit(){
    let element = this.el.nativeElement;

    console.log(element);
    console.log(element.innerText);
    
    element.innerText = element.innerText.toUpperCase();
    element.style.border = "1px solid navy";
    element.style.background = "#ADD8E6";
    element.style.borderRadius = "5px";
    element.style.padding = "10px";
    element.style.color = "#555";
    element.style.margin = "15px 0px";

    //element.innerText = element.innerText.replace({1:"QUALSIASI",2:"DUBBIO"},{1:"UNA",2:"CONSULENZA"});
    element.innerText = element.innerText.replace("QUALSIASI","UNA");
    element.innerText = element.innerText.replace("DUBBIO","CONSULENZA");
    
  }

}
