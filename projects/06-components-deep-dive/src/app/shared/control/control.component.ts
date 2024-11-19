import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // label = input.required<string>();
  // label()
}
