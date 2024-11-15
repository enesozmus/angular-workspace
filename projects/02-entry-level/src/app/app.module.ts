import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

// import { TasksComponent } from './tasks/tasks.component';
// import { TaskComponent } from './tasks/task/task.component';
// import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
  ],
  // 🔻🔻 standalone components 🔻
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
