import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  // templateUrl: './second.component.html',
  // template: '<h1>🟦 Second component!</h1>',
  template: `
    <h1>🟦 Second component!</h1>
    <h2>🟦 Second component!</h2>
  `,
  // styleUrl: './second.component.css'
  // styles: 'h1 { color: red; }',
  styles: `
    h1 { color: red; }
    h2 { 
      font-style: italic;
      padding: 20px;
      background-color: palegreen;
      border: 1px solid green;,
    }
    `,
})
export class SecondComponent {

}
