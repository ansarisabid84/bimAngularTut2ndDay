import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  constructor(private router: Router) {
    console.log("my component is called");
  }
  
  navigateToComponent2() {
    //business login.....
    this.router.navigate(["/component2"]);
  }


}
