import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentDate = new Date();
  longText =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, distinctio.';

  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  constructor() {
    this.historicTemperatures.sort((a, b) => (a > b ? 1 : -1));
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // 🟥 or pure: false
    // const newTemps = [...this.historicTemperatures]
    // newTemps[index] = 18;
    // this.historicTemperatures = newTemps;
  }

  /**
   * 🔺
   * 🔺🔺
   * 🔺🔺🔺
   * Whenever you enter the area of changing behaviors and adding functionality, you want to think twice before using 'a pipe'.
   * 🔺🔺🔺
   * 🔺🔺
   * 🔺
   */
}
