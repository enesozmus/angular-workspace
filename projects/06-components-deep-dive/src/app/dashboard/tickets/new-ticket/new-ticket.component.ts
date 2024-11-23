import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
// export class NewTicketComponent implements OnInit, AfterViewInit {
export class NewTicketComponent {
  // add = output<{ title: string; text: string }>();
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  enteredTitle = '';
  enteredText = '';

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }

  /**
   * İlgili component'in tüm @Input'ları initialize edildikten sonra bir kez çalışır.
   * Bu adım, şablon başlatılmadan önce gerçekleşir.
   */
  // ngOnInit(): void {
  //   console.log('AFTER ngOnInit');
  //   console.log('⚫');
  //   console.log(this.formElement?.nativeElement); // → undefined
  //   console.log('⚫');
  // }

  /**
   * İlgili component'in view'ı initialize edildikten sonra bir kez çalışır.
   * Şablon tarafındaki ögeler ulaşılabilir/tanımlı hale gelir.
   */
  // ngAfterViewInit(): void {
  //   console.log('AFTER VIEW INIT');
  //   console.log('🟧');
  //   console.log(this.formElement?.nativeElement);
  //   console.log('🟧');
  // }

  // 🟡 Handling Form Submission
  // onSubmit(titleInputElement: HTMLInputElement) {
  //   console.log('Hi form');
  //   console.log(titleInputElement);
  //   🟡 JavaScript Object
  //   console.dir(titleInputElement);

  //   const enteredTitle = titleInputElement.value;
  //   console.log(enteredTitle);
  // }

  // 🟡 Getting Access to Template Elements via ViewChild
  // @ViewChild('ourForm', { static: false }) private formElement?: ElementRef<HTMLFormElement>;
  // 🔺 Multiple 🔺 → @ViewChildren(ButtonComponent) buttons

  // 🟡 Angular 17
  // private formElement2 = viewChild<ElementRef<HTMLFormElement>>('ourForm');
  // private formElement2 = viewChild.required<ElementRef<HTMLFormElement>>('ourForm');

  onSubmit2(title: string, ticketText: string, formElement: HTMLFormElement) {
    // console.log('🟧🟧🟧onSubmit2');
    // console.log(title);
    // console.log(ticketText);
    // console.log(formElement);

    // formElement.reset();
    // this.formElement?.nativeElement.reset();
    // this.formElement2()?.nativeElement.reset();
    // this.formElement2().nativeElement.reset();
  }
}
