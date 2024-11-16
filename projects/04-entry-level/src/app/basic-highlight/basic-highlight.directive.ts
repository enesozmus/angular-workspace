import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // 🔺Accessing elements directly like this is not a good practice.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
