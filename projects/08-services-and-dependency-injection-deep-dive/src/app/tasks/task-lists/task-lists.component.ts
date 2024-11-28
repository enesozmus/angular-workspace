import { Component, inject, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
   selector: 'app-tasks-list',
   templateUrl: './task-lists.component.html',
   styleUrl: './task-lists.component.css',
})
export class TasksListComponent {
   private tasksService = inject(TasksService);
   // tasks = [];
   // 🟡 read-only
   tasks = this.tasksService.allTasks;          // Signal<Task[]>
   selectedFilter = signal<string>('all');

   onChangeTasksFilter(filter: string) {
      this.selectedFilter.set(filter);
   }
}
