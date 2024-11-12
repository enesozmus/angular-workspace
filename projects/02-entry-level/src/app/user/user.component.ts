import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  // 🟦 Using Getters For Computed Values
  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }

  // 🟦 Listening to Events with Event Binding
  onGetARandomUser() {
    console.log('Clicked!');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }

  // 🟦 Signals v16
  selectedUser2 = signal(DUMMY_USERS[randomIndex]);
  imagePath2 = computed(() => 'users/' + this.selectedUser2().avatar); // → Create a computed `Signal` which derives a reactive value from an expression.

  onGetARandomUser2() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser2.set(DUMMY_USERS[randomIndex]);
  }

  // Inputs
  @Input({ required: true }) avatar!: string; // Decorator that marks a class field as an input property and supplies configuration metadata.
  @Input({ required: true }) name!: string;

  get imagePath3() {
    return 'users/' + this.avatar;
  }

  // 🟦 Signal Inputs v16
  // avatar2 = input.required<string>();
  // name2 = input.required<string>();
  // template → → name2(), avatar2()
  // parent template → → same approach
  // imagePath4 = computed(() => {
  //   return 'users/' + this.avatar;
  // });

  // Inputs - Get ID
  @Input({ required: true }) id!: string;

  // 🟦 Outputs & Emitting Data
  @Output() select = new EventEmitter();

  // location = 'fransa';
  onEmitTheIdOfTheSelectedUser() {
    // this.select.emit();
    // this.select.emit(this.location);
    this.select.emit(this.id);
  }

  // onEmitTheIdOfTheSelectedUser(param: any) {
  //    this.select.emit(this.param);
  // }

  // 🟦 Signal Outputs v16
}
