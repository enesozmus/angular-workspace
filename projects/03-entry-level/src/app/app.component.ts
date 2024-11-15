import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'Servers', content: 'first server' },
    { type: 'blueprint', name: 'Blueprints', content: 'first blueprint' },
  ];

  onServerAdded(server: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content,
    });
  }

  onBlueprintAdded(blueprint: { name: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.name,
      content: blueprint.content,
    });
  }
}
