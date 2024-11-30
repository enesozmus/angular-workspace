import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
})
export class AppComponent {
   // 🟡 Understanding the Importance of Writing Efficient Template Binding
   get debugOutput() {
      console.log('🟡 [AppComponent] "debugOutput" binding re-evaluated.');
      return 'AppComponent Component Debug Output';
   }
}
