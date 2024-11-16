import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {

  // 🟥
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    /**
     * Implement this callback to set a CSS style for an element in the DOM.
     * @param el — The element.
     * @param style — The name of the style.
     * @param value — The new value.
     * @param flags — Flags for style variations. No flags are set by default.
     */
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
    // this.renderer.addClass(this.elRef.nativeElement, 'on');
    // this.renderer.removeClass(this.elRef.nativeElement, 'off');
  }
}

/*
  🟦
  🟦🟦 Renderer2

    → Renderer2 class'ı, Angular tarafından DOM'a doğrudan dokunmadan uygulamanızın elementlerini düzenlemenize izin veren bir hizmet biçiminde sağlanan bir soyutlamadır.
*/
