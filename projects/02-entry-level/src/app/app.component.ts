import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  // 🟦 Outputs & Emitting Data
  // catch the emitting event
  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    console.log('🟢 Clicked!');
  }
}
