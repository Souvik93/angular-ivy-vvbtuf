import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  dateToday = new Date();

  myObj = {
    name: 'Souvik',
    age: 27
  };

  myTextBox = '';
}
