import { Component } from '@angular/core';
import { FirstRxJSComponent } from "./first-rxjs/first-rxjs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstRxJSComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
