import { Component, DestroyRef, inject } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-second-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './second-rxjs.component.html',
})
export class SecondRxJSComponent {
  private destroyRef = inject(DestroyRef);
  /**
   * 🟦
   * 🟦🟦
   * 🟦🟦🟦
   */
  ngOnInit(): void {
    // grab button reference
    const button = document.getElementById('myButton');

    if (button != null) {
      /** 🔴 fromEvent(target, eventName, options, resultSelector);
       
         → Creates an Observable that emits events of a specific type coming from the given event target.
         → Creates an Observable from DOM events, or Node.js EventEmitter events or others
      
         → fromEvent() accepts as a first argument event target, which is an object with methods for registering event handler functions.
         → As a second argument it takes string that indicates type of event we want to listen for.
       */

      // 🔴 create an observable of button clicks → At this point we have an observable but it's not doing anything.
      const myObservable$: Observable<Event> = fromEvent(button, 'click');

      // 🟢 for now, let's just log the event on each click
      const subscription1 = myObservable$.subscribe((event: Event) => {
        console.log(event);
      });

      this.destroyRef.onDestroy(() => {
        subscription1.unsubscribe();
      });
    }
  }
}
