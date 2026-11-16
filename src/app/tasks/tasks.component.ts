import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}
