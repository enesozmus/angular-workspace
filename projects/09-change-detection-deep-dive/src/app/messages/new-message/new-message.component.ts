import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
   selector: 'app-new-message',
   templateUrl: './new-message.component.html',
   styleUrl: './new-message.component.css',
   standalone: false,
   changeDetection: ChangeDetectionStrategy.OnPush

})
export class NewMessageComponent {
   private messagesService = inject(MessagesService);
   enteredText = '';
   // add = output<string>();
   // enteredText = signal('');

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [NewMessage] "debugOutput" binding re-evaluated.');
      return 'NewMessage Component Debug Output';
   }

   onSubmit() {
      this.messagesService.addMessage(this.enteredText);
      this.enteredText = '';
      // this.add.emit(this.enteredText());
      // this.enteredText.set('');
   }
}
