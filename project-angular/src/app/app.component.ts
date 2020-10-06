import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  //public windowWidth: any = window.innerWidth;
  //public navPhone: any = document.getElementById('nav-phone');

  ngOnInit() {
    const navPhone = document.getElementById('nav-phone');
    const headerOnInit = document.getElementById('header');
    const contentOnInit = document.getElementById('content');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 623) {
      navPhone.style.display = 'block';
    }
    if(windowWidth > 623){
      navPhone.style.display = 'block';
      //headerOnInit.style.minHeight = ;
    }
  }

  myFunction() {
    const navPhone2 = document.getElementById('nav-phone');
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    //const links = document.getElementsByClassName('linkPhone');
    const windowWidth2 = window.innerWidth;
    if (windowWidth2 <= 623) {
      if (navPhone2.style.display === "block") {
        header.style.minHeight = '90px';
        content.style.paddingTop = '100px';
        navPhone2.style.display = "none";
      } else {
        navPhone2.style.display = "block";
        content.style.paddingTop = '270px';
        header.style.minHeight = '260px';
      }
    }
  }
}