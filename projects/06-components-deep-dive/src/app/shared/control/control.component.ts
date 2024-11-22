import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'control',
    '(click)': 'onClick3()',
  },
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // label = input.required<string>();
  // label()

  // 🟦🟦Interacting with Host Elements via HostListener & HostBinding🟦

  // @HostBinding('class') cssClassName = 'control';
  // @HostBinding('class') cssClassName = 'london';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  // private el = inject(ElementRef);
  // onClick2() {
  //   console.log('Clicked!');
  //   console.log(this.el);
  // }

  // 🟡 ContentChild
  @ContentChild('vhagar') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // private control2 = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('vhagar');

  onClick3() {
    console.log('❤ Clicked! ControlComponent Host Element');
    console.log(this.control);
  }
}
