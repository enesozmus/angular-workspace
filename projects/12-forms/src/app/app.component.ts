import { Component } from '@angular/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { LoginComponent } from "./auth/login/login.component";
import { ReactiveLoginComponent } from "./auth/reactive-login/reactive-login.component";
import { RegisterComponent } from "./auth/register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActorFormComponent, LoginComponent, ReactiveLoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
