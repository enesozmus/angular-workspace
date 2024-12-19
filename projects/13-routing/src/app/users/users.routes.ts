import { Routes } from '@angular/router';

import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    // 🔻 aşağıdaki resolveUserName aktarmasından dolayı burada lazy-loading çok da anlamlı değildir.
    // 🔻 burada lazy-loading yüklemeye çalıştığınız şeyin başka yerlerde hevesle çağrılmadığından emin olmanız gerekir.
    // loadComponent: () => import('./tasks/tasks.component').then(c => c.TasksComponent),

    // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    runGuardsAndResolvers: 'always',
    resolve: {
      // 🔻 Bir sorgu (query) parametresi çalıştığında tekrar-tekrar çalışmaz.
      userTasks: resolveUserTasks,
    },
    // title: 'Task Bileseni'
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
