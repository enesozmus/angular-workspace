import {
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterStateSnapshot } from '@angular/router';

import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
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
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
  // userId = input.required<string>();
  // order = input<'asc' | 'desc'>();
  // userTasks = computed(() =>
  //   this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  // );
  // userTasks = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((task) => task.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'desc') {
  //         return a.dueDate > b.dueDate ? -1 : 1;
  //       } else {
  //         return a.dueDate > b.dueDate ? 1 : -1;
  //       }
  //     })
  // );

  // 🔵
  // userTasks: Task[] = [];
  // order?: 'asc' | 'desc';
  // order = signal<'asc' | 'desc'>('desc');
  // private activatedRoute = inject(ActivatedRoute);
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

    // const subscription = this.activatedRoute.queryParams.subscribe({
    //   next: (params) => (this.order = params['order']),
    // });
    // const subscription2 = this.activatedRoute.queryParamMap.subscribe({
    //   next: (paramMap) => this.order.set(paramMap.get('order') as any),
    // });
    // this.destroyRef.onDestroy(() => subscription2.unsubscribe());
  // }
}

// modern way
export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerStateSnapshot: RouterStateSnapshot
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};