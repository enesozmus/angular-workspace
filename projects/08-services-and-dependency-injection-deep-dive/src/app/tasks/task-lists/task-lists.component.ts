import { Component, computed, inject, signal } from '@angular/core';
// import { TasksService } from '../../services/tasks.service';
import { TasksServiceToken } from '../../app.module';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
   selector: 'app-tasks-list',
   templateUrl: './task-lists.component.html',
   styleUrl: './task-lists.component.css',
   // providers: [{ provide: TASK_STATUS_OPTIONS, useValue: TaskStatusOptions }],
   // 🟢
   providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {
   // private tasksService = inject(TasksService);
   private tasksService = inject(TasksServiceToken);
   // tasks = [];
   // 🟡 read-only
   // tasks = this.tasksService.allTasks;

   // selectedFilter = signal<string>('all');
   private selectedFilter = 'all';

   // 🟢
   taskStatusOptions = inject(TASK_STATUS_OPTIONS);

   // tasks = computed(() => {
   //    switch (this.selectedFilter()) {
   //       case 'open':
   //          return this.tasksService
   //             .allTasks()
   //             .filter(task => task.status === 'OPEN');
   //       case 'in-progress':
   //          return this.tasksService
   //             .allTasks()
   //             .filter(task => task.status === 'IN_PROGRESS');
   //       case 'done':
   //          return this.tasksService
   //             .allTasks()
   //             .filter(task => task.status === 'DONE');
   //       default:
   //          return this.tasksService.allTasks();
   //    }
   // });

   get tasks() {
      switch (this.selectedFilter) {
         case 'open':
            return this.tasksService.allTasks.filter(
               task => task.status === 'OPEN'
            );
         case 'in-progress':
            return this.tasksService.allTasks.filter(
               task => task.status === 'IN_PROGRESS'
            );
         case 'done':
            return this.tasksService.allTasks.filter(
               task => task.status === 'DONE'
            );
         default:
            return this.tasksService.allTasks;
      }
   }

   onChangeTasksFilter(filter: string) {
      // this.selectedFilter.set(filter);
      this.selectedFilter = filter;
   }
}
