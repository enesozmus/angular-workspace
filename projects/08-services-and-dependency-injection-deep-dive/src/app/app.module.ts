import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksListComponent } from './tasks/task-lists/task-lists.component';
import { TaskItemComponent } from './tasks/task-lists/task-item/task-item.component';

import { TasksService } from './services/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>(
   'tasks-service-token'
);

@NgModule({
   declarations: [
      AppComponent,
      TasksComponent,
      NewTaskComponent,
      TasksListComponent,
      TaskItemComponent,
   ],
   imports: [BrowserModule, FormsModule],
   providers: [{ provide: TasksServiceToken, useClass: TasksService }],
   bootstrap: [AppComponent],
})
export class AppModule {}
