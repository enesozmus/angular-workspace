import { Component, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { LogDirective } from '../directives/log.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  // 🔻LogDirective must be standalone
  // hostDirectives: [LogDirective],
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
