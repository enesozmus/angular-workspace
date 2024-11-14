import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  // @Output() add = new EventEmitter<NewTaskData>();

  //
  // 🟦🟦 Services
  constructor(private tasksService: TasksService) {}
  // private tasksService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    // this.cancel.emit();
    this.close.emit();
  }

  onSubmit() {
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // });
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
