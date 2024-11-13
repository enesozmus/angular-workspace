import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  //
  // selectedUserId = 'u1';
  selectedUserId: string | undefined;

  // 🟦 Outputs & Emitting Data
  // catch the emitting event
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;

    // {
    //   id: string;
    //   name: string;
    //   avatar: string;
    // }
  }
}
