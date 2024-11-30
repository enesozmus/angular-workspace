import { Component } from '@angular/core';

@Component({
   selector: 'app-info-message',
   templateUrl: './info-message.component.html',
   styleUrl: './info-message.component.css',
})
export class InfoMessageComponent {
   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [InfoMessages] "debugOutput" binding re-evaluated.');
      return 'InfoMessage Component Debug Output';
   }

   onLog() {
      console.log('Clicked!');
   }
}
