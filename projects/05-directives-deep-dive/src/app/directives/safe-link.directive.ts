import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  //standalone: true
})
export class SafeLinkDirective {
  // queryParam = input();
  queryParam = input('myapp', { alias: 'appSafeLink' });
  
  // 🟨🟨 Directives & Dependency Injection 🟨
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  // 🟥
  constructor() {
    console.log('🟥 SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    // console.log(this.hostElementRef.nativeElement.href);
    // console.log(this.queryParam());

    if (wantsToLeave) {
      // const address = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();

      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + this.queryParam();

      // this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
