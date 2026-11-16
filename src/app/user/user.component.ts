import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  standalone: false,
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
