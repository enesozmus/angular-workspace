import {
   ChangeDetectionStrategy,
   Component,
   inject,
   input,
} from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
   selector: 'app-messages-list',
   templateUrl: './messages-list.component.html',
   styleUrl: './messages-list.component.css',
   standalone: false,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
   private messagesService = inject(MessagesService);
   // messages = input.required<string[]>();

   get messages() {
      return this.messagesService.allMessages;
   }

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [MessagesList] "debugOutput" binding re-evaluated.');
      return 'MessagesList Component Debug Output';
   }
}
