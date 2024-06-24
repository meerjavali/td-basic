import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';

 // @ViewChild('f') form:NgForm;

  onSubmit(f:NgForm){
    console.log("the form is ", f);
    console.log("form submitted");
  }
}
