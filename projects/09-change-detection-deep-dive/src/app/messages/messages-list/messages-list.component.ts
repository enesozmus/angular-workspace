import { Component, input } from '@angular/core';

@Component({
   selector: 'app-messages-list',
   templateUrl: './messages-list.component.html',
   styleUrl: './messages-list.component.css',
})
export class MessagesListComponent {
   messages = input.required<string[]>();

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [MessagesList] "debugOutput" binding re-evaluated.');
      return 'MessagesList Component Debug Output';
   }
}
