import { Component, ViewChild } from '@angular/core';
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
  //   console.log('1 Submitted!');
  //   console.log(form);
  // }

  // onSubmit(form: NgForm) {
  //   console.log('2 Submitted!');
  //   console.log(form);
  // }

  @ViewChild('actorForm') myActorForm: NgForm | any;
  onSubmit() {
    console.log('3 Submitted!');
    console.log(this.myActorForm);
    console.log(this.myActorForm.form);
    console.log(this.myActorForm.form.controls);
    console.log(this.myActorForm.form.controls.name);
    console.log(this.myActorForm.form.controls.studio);

    console.log(this.myActorForm.form.controls.name.value);
    console.log(this.myActorForm.form.controls.studio.value);
  }
}
