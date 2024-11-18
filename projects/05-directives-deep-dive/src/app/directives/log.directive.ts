import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  host: {
    '(click)': 'onLog()',
  },
  //standalone: true
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  onLog() {
    console.log('CLICKED');
    console.log(this.elementRef.nativeElement);
  }
}
