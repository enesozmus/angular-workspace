import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class MessagesService {
   private messages = signal<string[]>([]);
   allMessages = this.messages.asReadonly();

   // 🔴 I'll start here because it's here where the change happens.
   // In its core, this indeed is a thing that allows you to create a wrapper around a value and it then also allows you to set up subscriptions to changes to that value.
   // messages$ = new BehaviorSubject<string[]>([]);
   // private messages: string[] = [];
   // get allMessages() {
   //    return [...this.messages];
   // }


   addMessage(message: string) {
      this.messages.update(prevMessages => [...prevMessages, message]);
      // this.messages = [...this.messages, message];
      // 🔴 updated messages
      // this.messages$.next([...this.messages]);
   }
}
