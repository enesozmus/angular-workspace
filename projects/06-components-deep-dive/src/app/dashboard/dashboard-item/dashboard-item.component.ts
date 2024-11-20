import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class: 'dashboard-item',
  // },
})
export class DashboardItemComponent {
  @Input({ required: true }) image!: { src: string; alt: string };
  @Input({ required: true }) title!: string;

  // 🔺 Angular 17
  // image = input.required<{ src: string; alt: string }>();
  // title = input.required<string>();

  /*
      <img [src]="image().src" [alt]="image().alt" />
      <h2>{{ title() }}</h2>
  */
}
