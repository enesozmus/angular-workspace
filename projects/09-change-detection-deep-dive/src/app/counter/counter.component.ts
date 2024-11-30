import { Component, signal } from '@angular/core';

@Component({
   selector: 'app-counter',
   templateUrl: './counter.component.html',
   styleUrl: './counter.component.css',
})
export class CounterComponent {
   count = signal(0);

   // 🟡 Understanding the Importance of Writing Efficient Template Bindings
   get debugOutput() {
      console.log('🟡 [Counter] "debugOutput" binding re-evaluated.');
      return 'Counter Component Debug Output';
   }

   onDecrement() {
      this.count.update(prevCount => prevCount - 1);
   }

   onIncrement() {
      this.count.update(prevCount => prevCount + 1);
   }
}
