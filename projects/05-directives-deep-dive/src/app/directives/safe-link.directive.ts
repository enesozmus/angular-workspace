import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  //standalone: true
})
export class SafeLinkDirective {
  
  // 🟥
  constructor() {
    console.log('🟥 SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
