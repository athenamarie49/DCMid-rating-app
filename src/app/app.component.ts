import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating-app';
  myimage:string = "assets/koream.jpg";

  currentRate = 0;
}
