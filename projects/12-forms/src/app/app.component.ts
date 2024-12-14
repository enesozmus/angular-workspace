import { Component } from '@angular/core';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActorFormComponent, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
