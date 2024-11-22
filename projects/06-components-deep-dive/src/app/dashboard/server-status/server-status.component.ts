import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  // 🟡 Literal Types
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus2 = signal<'online' | 'offline' | 'unknown'>('offline');

  // private interval: NodeJS.Timeout | undefined;
  private interval?: ReturnType<typeof setInterval>;

  // 🟡 DestroyRef | Angular v16 or newer
  // private destroyRef = inject(DestroyRef);

  /**
   * 🟥
   */
  constructor() {
    console.log('🟥 ON constructor');
    console.log('......' + this.currentStatus2());
    /**
     * Registers an "effect" that will be scheduled & executed whenever the signals that it reads changes.
     * Signals are useful because they notify interested consumers when they change.
     * An effect is an operation that runs whenever one or more signal values change.
     * ! When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again
     * You can create an effect with the effect function:
     */
    effect(() => {
      console.log(this.currentStatus2());
      console.log(`The current count is: ${this.currentStatus2()}`);
    });
  }

  /**
   * 🟦
   */
  ngOnInit() {
    console.log('🟦 ON INIT');

    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
        this.currentStatus2.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
        this.currentStatus2.set('offline');
      } else {
        this.currentStatus = 'unknown';
        this.currentStatus2.set('unknown');
      }
    }, 5000);

    // this.destroyRef.onDestroy(() => {
    //   ↑ not this.interval, → const interval
    //   clearInterval(interval);
    // });
  }

  /**
   * ⬛
   */
  ngOnDestroy(): void {
    console.log('⬛ ON Destroy');
    console.log(
      'Now, In our application the relevant component is always there.'
    );
    clearTimeout(this.interval);
  }
}
