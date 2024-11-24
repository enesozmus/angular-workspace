import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
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
  /**
   * 🟦
   * 🟦🟦
   * 🟦🟦🟦
   * 🟦🟦🟦🟦
   * 🟦🟦🟦🟦🟦
   *  Bir component'in yaşam döngüsü, ilgili component'in oluşturulması ve yok edilmesi arasında gerçekleşen adım dizisidir.
   *  Her adım, Angular'ın component'leri oluşturma ve zaman içinde güncellemeleri kontrol etme sürecinin farklı bir bölümünü temsil eder.
   *  Component'lerinizde, bu adımlar sırasında kodu çalıştırmak için yaşam döngüsü kancaları uygulayabilirsiniz.
   *  Belirli bir component instance'ıyla ilgili yaşam döngüsü kancaları, ilgili component class'ınızda fonksiyonlar olarak uygulanır.
   */
  @Input() text?: string;

  // 1
  constructor() {
    console.log('1️⃣ 🟥🟥🟥constructor called! 🟥');
    console.log(this.text); // → undefined
  }

  // 2
  ngOnChanges(changes: SimpleChanges) {
    console.log('🟣⚫⚫ngOnChanges called!');
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
    console.log('');
    console.log(this.text); 
    console.log(changes);
  }

  // 3
  ngOnInit() {
    console.log('1️⃣ 🟦🟦🟦ngOnInit called! 🟦');
    console.log(this.text);
  }

  // 4
  ngDoCheck() {
    console.log('⚫⚫⚫ngDoCheck called!');
  }

  // 5
  ngAfterContentInit() {
    console.log('1️⃣ ngAfterContentInit called!');
  }

  // 6
  ngAfterContentChecked() {
    console.log('⚫⚫⚫ngAfterContentChecked called!');
  }

  // 7
  ngAfterViewInit() {
    console.log('1️⃣ ngAfterViewInit');
  }

  // 8
  ngAfterViewChecked() {
    console.log('⚫⚫⚫ngAfterViewChecked');
  }

  // 9
  ngOnDestroy() {
    console.log('1️⃣ ❌❌❌ngOnDestroy called!❌❌❌');
  }
}
