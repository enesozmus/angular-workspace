import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-login.component.html',
  styleUrl: './reactive-login.component.css',
})
export class ReactiveLoginComponent {
  // myReactiveForm = new FormGroup({});
  myReactiveForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    // this.myReactiveForm.value.email
  }
}
