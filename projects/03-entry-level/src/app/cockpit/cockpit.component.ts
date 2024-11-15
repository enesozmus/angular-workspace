import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newName = '';
  newContent = '';

  onAddServer() {
    this.serverCreated.emit({
      name: this.newName,
      content: this.newContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newName,
      content: this.newContent,
    });
  }
}
/*
  🟦
  🟦🟦 → Assigning an Alias to Input Properties

    @Input({ required: true, alias:'falanca' })
*/