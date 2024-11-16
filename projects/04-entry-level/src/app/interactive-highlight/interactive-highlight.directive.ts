import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInteractiveHighlight]',
})
export class InteractiveHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // 🟥
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'pink'
    // );
    this.backgroundColor = 'pink';
    // this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
    // this.backgroundColor = this.defaultColor;
  }
}

/*
  🟦
  🟦🟦 HostListener

    → Dinlenecek bir DOM olayı bildiren ve bu olay gerçekleştiğinde çalıştırılacak bir işleyici yöntemi sağlayan dekoratör.

    → @HostListener: This decorator binds a class method to an event of the host element.


  🟦
  🟦🟦 HostBinding

    → Bir DOM property'sini veya bir element class'ını , stilini veya attribute'nü bir host-binding property olarak işaretleyen ve yapılandırma meta verileri sağlayan dekoratör.

    → @HostBinding: This decorator binds a class property to a property of the host element.
*/
