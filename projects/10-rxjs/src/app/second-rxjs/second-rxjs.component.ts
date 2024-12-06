import { Component, DestroyRef, inject } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

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
      const myObservable2$: Observable<Number> = fromEvent<PointerEvent>(
        button,
        'click'
      ).pipe(map((x) => x.clientX));

      // 🟢 for now, let's just log the event on each click
      const subscription1 = myObservable$.subscribe((event: Event) => {
        console.log(event);
      });
      const subscription2 = myObservable2$.subscribe((number: Number) => {
        console.log(number);
      });

      this.destroyRef.onDestroy(() => {
        subscription1.unsubscribe();
        subscription2.unsubscribe();
      });
    }
  }
}

/** 🔴 RxJS Operators
 * Operators are functions.
 * RxJS is mostly useful for its operators, even though the Observable is the foundation.
 * Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.
 * 
 * There are two kinds of operators:
    1-) Creation Operators
    2-) Pipeable Operators
      - A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
      - It is a pure operation: the previous Observable stays unmodified.
 */

/** 🔴 pipe()
 * pipe() can be called on one or more functions, each of which can take one argument ("UnaryFunction") and uses it to return a value.
 * It returns a function that takes one argument, passes it to the first UnaryFunction, and then passes the result to the next one, passes that result to the next one, and so on.
 * The pipe() function is an assembly line with operators on an observable data source.
 * obs$.pipe(op1(), op2(), op3(), op4());
 */
