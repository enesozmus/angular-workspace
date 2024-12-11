import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  // onSubmit(form: HTMLFormElement) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    console.log('Submitted!');
    console.log(form);
  }
}
