import { Routes } from '@angular/router';

import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      // 🔺 Bir sorgu (query) parametresi çalıştığında tekrar-tekrar çalışmaz.
      userTasks: resolveUserTasks,
    },
    // title: 'Task Bileseni'
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
  },
];
