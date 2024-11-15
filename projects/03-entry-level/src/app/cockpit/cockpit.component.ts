import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newName = '';
  newContent = '';

  onAddServer() {
    this.serverCreated.emit({
      name: this.newName,
      content: this.newContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newName,
      content: this.newContent,
    });
  }

  // 🟦 Declaring a Template Reference Variable
  onAddServer2(test: HTMLInputElement) {
    console.log(test.value);
    console.log('🟥');
    console.log(this.newName2);
    console.log(this.newName2.nativeElement);
    console.log(this.newName2.nativeElement.value);

  }

  // 🟦 Getting Access to the Template & DOM with @ViewChild
  @ViewChild('newName2', { static: true }) newName2: ElementRef | any;
}
/*
  🟦
  🟦🟦 → Assigning an Alias to Input Properties

    @Input({ required: true, alias:'falanca' })
*/

/*
  🟦
  🟦🟦 @ViewChild
  
    → Bildiğimiz gibi, Angular'da düz HTML öğelerini diğer Angular bileşenleriyle birleştirerek bir bileşen şablonu tanımlarız.

    → Çoğu zaman, ilgili .ts sınıfını kullanmadan sadece şablon referanslarını kullanarak birden fazla bileşeni ve HTML elementini doğrudan şablonda koordine edebiliriz. Ancak durum her zaman böyle değildir!

    → Bazen ilgili elementlere veya bileşene .ts class'ından erişmemiz gerekir.

  🟦
  🟦🟦 ElementRef
    → A wrapper around a native element inside of a View.
*/