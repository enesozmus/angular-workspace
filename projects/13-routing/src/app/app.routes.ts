import { Routes } from '@angular/router';

import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

// export const routes: Routes = [];
export const routes: Routes = [
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
  },
  {
    path: 'tasks', // <your-domain>/tasks
    component: TasksComponent,
  },
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
];
