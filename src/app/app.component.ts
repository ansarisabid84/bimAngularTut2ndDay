import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myTitle: string = "Title is changed"
  myJSON = {
    "k1": "v1"
  }

  clickMe() {
    // window.location = "/mycomponent";
  }
}
