import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
