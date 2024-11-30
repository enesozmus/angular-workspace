import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

@Component({
   selector: 'app-counter',
   templateUrl: './counter.component.html',
   styleUrl: './counter.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
   // 🔴 Telling Angular if a Certain Event Does Not Matter for Change Detection
   private zone = inject(NgZone);
   count = signal(0);

   // 🟡 Understanding the Importance of Writing Efficient Template Bindings
   get debugOutput() {
      console.log('🟡 [Counter] "debugOutput" binding re-evaluated.');
      return 'Counter Component Debug Output';
   }

   ngOnInit() {
      setTimeout(() => {
         this.count.set(0);
      }, 4000);

      // 🔴 Telling Angular if a Certain Event Does Not Matter for Change Detection
      this.zone.runOutsideAngular(() => {
         setTimeout(() => {
            console.log('🔴🔴🔴🔴🔴');
         }, 9000);
      });
   }

   onDecrement() {
      this.count.update(prevCount => prevCount - 1);
   }

   onIncrement() {
      this.count.update(prevCount => prevCount + 1);
   }
}
