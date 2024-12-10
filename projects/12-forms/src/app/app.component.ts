import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
