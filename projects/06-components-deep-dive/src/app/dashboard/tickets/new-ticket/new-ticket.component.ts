import {
  Component,
  ElementRef,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  
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
  @ViewChild('ourForm', { static: false }) private formElement?: ElementRef<HTMLFormElement>;
  // Multiple → @ViewChildren(ButtonComponent) buttons

  // 🟡 Angular 17
  // private formElement2 = viewChild<ElementRef<HTMLFormElement>>('ourForm');
  private formElement2 = viewChild.required<ElementRef<HTMLFormElement>>('ourForm');

  onSubmit2(title: string, ticketText: string, formElement: HTMLFormElement) {
    console.log('🟧🟧🟧onSubmit2');
    console.log(title);
    console.log(ticketText);
    console.log(formElement);

    // formElement.reset();
    // this.formElement?.nativeElement.reset();
    // this.formElement2()?.nativeElement.reset();
    this.formElement2().nativeElement.reset();
  }
}
