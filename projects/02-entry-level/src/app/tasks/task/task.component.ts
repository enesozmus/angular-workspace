import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model';
import { TasksService } from '../tasks.service';

// interface Task {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {}
  // private tasksService = inject(TasksService);

  // @Output() complete = new EventEmitter<string>();
  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
