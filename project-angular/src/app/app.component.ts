import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';

  myFunction() {
    const navPhone = document.getElementById('nav-phone');
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    if(navPhone.style.display === "block"){
      header.style.minHeight = '90px';
      content.style.paddingTop = '100px';
      navPhone.style.display = "none";
    } else {
      navPhone.style.display = "block";
      content.style.paddingTop = '270px';
      header.style.minHeight = '260px';
    }
  }
}