import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TasksComponent } from './tasks/tasks.component'
import { NewTaskComponent } from './tasks/new-task/new-task.component'
import { TasksListComponent } from './tasks/task-lists/task-lists.component'
import { TaskItemComponent } from './tasks/task-lists/task-item/task-item.component'

@NgModule({
   declarations: [AppComponent, TasksComponent, NewTaskComponent, TasksListComponent, TaskItemComponent],
   imports: [BrowserModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
