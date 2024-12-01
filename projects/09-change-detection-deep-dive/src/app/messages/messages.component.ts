import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
   selector: 'app-messages',
   templateUrl: './messages.component.html',
   styleUrl: './messages.component.css',
   standalone: false,
   // Yalnızda kendisi ve child component'lerindeki değişikliklere duyarlı hale gelir.
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
   // messages = signal<string[]>([]);

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [Messages] "debugOutput" binding re-evaluated.');
      return 'Messages Component Debug Output';
   }

   // onAddMessage(message: string) {
   //    this.messages.update(oldMessages => [...oldMessages, message]);
   // }
}
