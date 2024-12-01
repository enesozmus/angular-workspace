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
   /**
    * 🔴
    * 🔴 Change Detection for this component runs if an input property changes and here, We have no inputs.
    * If we trigger it manually, and that's not happening here.
    * If we have an event in this component or a child component.
    * And that's also not the case here.
    * Or if a Signal changes here in this component.
    * And that's also not the case.
    * And that's why this component is never checked for changes and why the new message doesn't show up here.
    * So what can you do in situations like this?
    * 🟢 That's exactly what we'll take a look at!
    */
   //
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
