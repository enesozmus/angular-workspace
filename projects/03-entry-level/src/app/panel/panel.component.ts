import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
})
export class PanelComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input({ required: true }) element!: {
    type: string;
    name: string;
    content: string;
  };

  /**
   * 🟦
   * 🟦🟦
   * 🟦🟦🟦
   * 🟦🟦🟦🟦
   * 🟦🟦🟦🟦🟦
   * Understanding the Component Lifecycle
   */
  @ViewChild('heading', { static: true }) header: ElementRef | any;

  constructor() {
    console.log('🟥🟥🟥constructor called! 🟥');
    console.log('...out...');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('🟣🟣ngOnChanges called!');
    console.log(changes);
    console.log('...out...');
  }

  ngOnInit() {
    console.log('🟧🟧ngOnInit called!');
    console.log('Text Content: ❌ ' + this.header.nativeElement.textContent);
    console.log('...out...');
  }

  ngDoCheck() {
    console.log('⚫⚫⚫ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('1️⃣ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    console.log('⚫⚫ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: 💚💚 ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('⚫ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('❌❌❌ngOnDestroy called!❌❌❌');
  }
}
/*
  🟦
  🟦🟦 → Assigning an Alias to Input Properties

    @Input({ required: true, alias:'falanca' })
*/

/*
  🟦
  🟦🟦 → Component Lifecycle
  
    → Bir bileşenin yaşam döngüsü, bileşenin oluşturulması ve yok edilmesi arasında gerçekleşen adım dizisidir.
    → Her adım, Angular'ın bileşenleri oluşturma ve zaman içinde güncellemeleri kontrol etme sürecinin farklı bir bölümünü temsil eder.
    → Component'lerinizde bu adımlar sırasında kodu çalıştırmak için yaşam döngüsü kancalarınılifecycle hooks fonksiyonlar() üzerinden uygulayabilirsiniz.
*/
