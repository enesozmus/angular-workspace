import { Component, signal } from '@angular/core';

@Component({
   selector: 'app-messages',
   templateUrl: './messages.component.html',
   styleUrl: './messages.component.css',
})
export class MessagesComponent {
   messages = signal<string[]>([]);

   get debugOutput() {
      console.log('[Messages] "debugOutput" binding re-evaluated.');
      return 'Messages Component Debug Output';
   }

   onAddMessage(message: string) {
      this.messages.update(oldMessages => [...oldMessages, message]);
   }
}
