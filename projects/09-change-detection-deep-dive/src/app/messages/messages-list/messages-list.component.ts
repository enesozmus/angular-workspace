import { Component, input } from '@angular/core';

@Component({
   selector: 'app-messages-list',
   templateUrl: './messages-list.component.html',
   styleUrl: './messages-list.component.css',
})
export class MessagesListComponent {
   messages = input.required<string[]>();

   get debugOutput() {
      console.log('[MessagesList] "debugOutput" binding re-evaluated.');
      return 'MessagesList Component Debug Output';
   }
}
