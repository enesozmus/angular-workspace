import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

@Component({
  selector: 'app-reactive-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-login.component.html',
  styleUrl: './reactive-login.component.css',
})
export class ReactiveLoginComponent {
  // myReactiveForm = new FormGroup({});
  // myReactiveForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  myReactiveForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  get emailIsInvalid() {
    return (
      this.myReactiveForm.controls.email.touched &&
      this.myReactiveForm.controls.email.dirty &&
      this.myReactiveForm.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.myReactiveForm.controls.password.touched &&
      this.myReactiveForm.controls.password.dirty &&
      this.myReactiveForm.controls.password.invalid
    );
  }

  onSubmit() {
    console.log(this.myReactiveForm);

    const enteredEmail = this.myReactiveForm.value.email;
    const enteredPassword = this.myReactiveForm.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
