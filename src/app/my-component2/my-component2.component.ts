import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrl: './my-component2.component.css'
})
export class MyComponent2Component {
  constructor() {
    console.log("my component 2 is called");
  }
}
