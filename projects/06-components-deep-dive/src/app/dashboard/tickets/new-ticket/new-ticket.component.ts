import { Component } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // 🟡 Handling Form Submission
  onSubmit(titleInputElement: HTMLInputElement) {
    console.log('Hi form');
    console.log(titleInputElement);
    // JavaScript Object
    console.dir(titleInputElement);

    const enteredTitle = titleInputElement.value;
    console.log(enteredTitle);
  }
}
