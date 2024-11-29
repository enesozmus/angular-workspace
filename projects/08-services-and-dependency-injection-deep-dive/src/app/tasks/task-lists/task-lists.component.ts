import { Component, computed, inject, signal } from '@angular/core';
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
   // tasks = this.tasksService.allTasks;          // Signal<Task[]>
   selectedFilter = signal<string>('all');
   tasks = computed(() => {
      switch (this.selectedFilter()) {
         case 'open':
            return this.tasksService
               .allTasks()
               .filter(task => task.status === 'OPEN');
         case 'in-progress':
            return this.tasksService
               .allTasks()
               .filter(task => task.status === 'IN_PROGRESS');
         case 'done':
            return this.tasksService
               .allTasks()
               .filter(task => task.status === 'DONE');
         default:
            return this.tasksService.allTasks();
      }
   });

   onChangeTasksFilter(filter: string) {
      this.selectedFilter.set(filter);
   }
}
