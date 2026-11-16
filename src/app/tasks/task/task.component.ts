import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  styleUrl: './task.component.css',
  templateUrl: './task.component.html',
  standalone: false,
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
