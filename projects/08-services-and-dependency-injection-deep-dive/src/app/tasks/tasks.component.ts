import { Component } from '@angular/core';
// import { TasksService } from '../services/tasks.service';

@Component({
   selector: 'app-tasks',
   templateUrl: './tasks.component.html',
   styleUrl: './tasks.component.css',
   /**
    * 🟡 Providing Services via the Element Injector
    * → remove @Injectable({providedIn: 'root',})
    * Sadece ilgili componenet ve onun bütün alt component'leri için ulaşılabilir.
    * Her TasksComponent instance'ı için tamamen yalıtılmış ve ayrılmış ayrı bir service intanse'ı oluşturur. (<app-tasks />)
    */
   // providers: [TasksService],
})
export class TasksComponent {}
