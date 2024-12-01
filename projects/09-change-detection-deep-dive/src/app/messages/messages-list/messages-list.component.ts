import {
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   DestroyRef,
   inject,
   input,
   OnInit,
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
   /**
    * So how can we get change detection to run again for the MessagesListComponent?
    * Well, we in the end need to trigger it manually, and Angular gives you the tools for triggering it manually.
    * It gives you an object you can inject into your components to trigger change detection in those components.
    * And you can call a method on that service to trigger change detection.
    */
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
   // messages = input.required<string[]>();
   private messagesService = inject(MessagesService);
   // private cdRef = inject(ChangeDetectorRef);
   // private destroyRef = inject(DestroyRef);
   messages$ = this.messagesService.messages$;

   // get messages() {
   //    return this.messagesService.allMessages;
   // }

   // messages: string[] = [];

   // ngOnInit() {
   //    const subscription = this.messagesService.messages$.subscribe((messages) => {
   //      this.messages = messages;
   //      this.cdRef.markForCheck();
   //    });
         // 🟡 clean subscription
   //    this.destroyRef.onDestroy(() => {
   //      subscription.unsubscribe();
   //    });
   //  }

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [MessagesList] "debugOutput" binding re-evaluated.');
      return 'MessagesList Component Debug Output';
   }
}
