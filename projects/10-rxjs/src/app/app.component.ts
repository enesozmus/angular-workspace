import { Component } from '@angular/core';

import { FirstRxJSComponent } from "./first-rxjs/first-rxjs.component";
import { SecondRxJSComponent } from "./second-rxjs/second-rxjs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstRxJSComponent, SecondRxJSComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
