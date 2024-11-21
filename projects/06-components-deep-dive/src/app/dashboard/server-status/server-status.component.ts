import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  // 🟡 Literal Types
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  // private interval: NodeJS.Timeout | undefined;
  private interval?: ReturnType<typeof setInterval>;

  /**
   * 🟥
   */
  constructor() {
    console.log('🟥 ON constructor');
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
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  /**
   * ⬛
   */
  ngOnDestroy(): void {
    console.log('⬛ ON Destroy');
    console.log('Now, In our application the relevant component is always there.');
    clearTimeout(this.interval);
  }
}
