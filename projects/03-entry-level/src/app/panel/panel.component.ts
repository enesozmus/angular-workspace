import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent {
  @Input({ required: true }) element!: {
    type: string;
    name: string;
    content: string;
  };
}
/*
  🟦
  🟦🟦 → Assigning an Alias to Input Properties

    @Input({ required: true, alias:'falanca' })
*/
