import { Component, signal } from '@angular/core';
import { interval } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { FirstRxJSComponent } from './first-rxjs/first-rxjs.component';
import { SecondRxJSComponent } from './second-rxjs/second-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstRxJSComponent, SecondRxJSComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  /**
     🔴 By converting Observables to Signals in appropriate contexts, you can simplify reactivity,
   reduce boilerplate, and make your Angular applications more efficient and expressive.
   */
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
}
