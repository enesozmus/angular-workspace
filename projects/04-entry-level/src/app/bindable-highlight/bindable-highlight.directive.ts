import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBindableHighlight]',
})
export class BindableHighlightDirective implements OnInit {
  // 🟨 Input properties
  @Input({ required: true }) defaultColor: string = 'transparent';
  @Input({ required: true }) highlightColor: string = 'transparent';

  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;
  // @HostBinding('style.backgroundColor') bgColor!: string;

  // 🟥
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // 🟥
  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.backgroundColor = 'pink';
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    // this.backgroundColor = 'transparent';
    this.bgColor = this.defaultColor;
  }
}
