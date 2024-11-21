import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // 🟡 Literal Types
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

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

    setInterval(() => {
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
}
