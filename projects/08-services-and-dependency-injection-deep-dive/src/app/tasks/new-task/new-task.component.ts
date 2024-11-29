import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { TasksServiceToken } from '../../app.module';
import { TasksService } from '../../services/tasks.service';

@Component({
   selector: 'app-new-task',
   templateUrl: './new-task.component.html',
   styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
   private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

   /**
    * 🟥
    */
   // constructor(private tasksService: TasksService) {}
   constructor(@Inject(TasksServiceToken) private tasksService: TasksService) {}

   // 🟦
   // 🟦🟦
   // 🟦🟦🟦
   onAddTask(title: string, description: string) {
      this.tasksService.addTask({ title, description });
      this.formEl()?.nativeElement.reset();
   }
}
