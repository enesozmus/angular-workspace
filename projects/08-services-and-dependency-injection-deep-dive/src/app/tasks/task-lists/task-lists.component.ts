import { Component, signal } from '@angular/core'

@Component({
   selector: 'app-tasks-list',
   templateUrl: './task-lists.component.html',
   styleUrl: './task-lists.component.css',
})
export class TasksListComponent {
   tasks = []
   selectedFilter = signal<string>('all')

   onChangeTasksFilter(filter: string) {
      this.selectedFilter.set(filter)
   }
}
