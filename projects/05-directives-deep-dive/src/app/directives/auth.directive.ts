import {
  Directive,
  effect,
  inject,
  input
} from '@angular/core';

import { Permission } from '../auth/auth.model';
import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appAuth]',
  //   standalone: true,
})
export class AuthDirective {
  // Input Properties
  userType = input.required<Permission>({ alias: 'appAuth' });


  // 🟨🟨 Directives & Dependency Injection 🟨
  private authService = inject(AuthService);


  // 🟥
  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        console.log('show element');
      } else {
        console.log('do not show element');
      }
    });
  }
}
