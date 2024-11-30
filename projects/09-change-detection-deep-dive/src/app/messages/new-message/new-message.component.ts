import { Component, output, signal } from '@angular/core';

@Component({
   selector: 'app-new-message',
   templateUrl: './new-message.component.html',
   styleUrl: './new-message.component.css',
})
export class NewMessageComponent {
   add = output<string>();
   enteredText = signal('');

   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [NewMessage] "debugOutput" binding re-evaluated.');
      return 'NewMessage Component Debug Output';
   }

   onSubmit() {
      this.add.emit(this.enteredText());
      this.enteredText.set('');
   }
}
