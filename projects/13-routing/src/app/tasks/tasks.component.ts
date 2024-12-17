import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
// import { Task } from './task/task.model';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  // 🔺 Because by default 'child routes' do not receive those path parameters as input.
  // Parent component'in rota bilgilerini kullanmak istiyorsanız, router paramsInheritanceStrategy seçeneğini ayarlamanız gerekir: withRouterConfig({paramsInheritanceStrategy: 'always'})
  userId = input.required<string>();
  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );

  // 🔵
  // userTasks: Task[] = [];
  // private activatedRoute = inject(ActivatedRoute);
  // private tasksService = inject(TasksService);
  // private destroyRef = inject(DestroyRef);

  // ngOnInit() {
  //   const paramMapSubscription = this.activatedRoute.parent?.paramMap.subscribe(
  //     {
  //       next: (paramMap) => {
  //         console.log(paramMap.get('userId'));
  //         this.userTasks = this.tasksService
  //           .allTasks()
  //           .filter((task) => task.userId === paramMap.get('userId'));
  //       },
  //     }
  //   );
  //   this.destroyRef.onDestroy(() => paramMapSubscription?.unsubscribe());
  // }
}
