import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // label = input.required<string>();
  // label()
}
