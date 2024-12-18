import { Routes } from '@angular/router';

import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { routes as userRoutes } from './users/users.routes';
// import { TasksComponent } from './tasks/tasks.component';
// import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

// export const routes: Routes = [];
export const routes: Routes = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
    title: 'No task selected',
  },
  {
    path: 'users/:userId', // <your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'hello',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
    // children: [
    //   {
    //     path: '',
    //     // redirectTo: '/users/u1', pathMatch: 'full'
    //     component: NoTaskComponent,
    //   },
    //   {
    //     path: 'tasks', // <your-domain>/users/<uid>/tasks
    //     component: TasksComponent,
    //   },
    //   {
    //     path: 'tasks/new',
    //     component: NewTaskComponent,
    //   },
    // ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
