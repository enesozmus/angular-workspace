import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

import { SafeLinkDirective } from './directives/safe-link.directive';
import { AuthDirective } from './directives/auth.directive';
import { LogDirective } from './directives/log.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LearningResourcesComponent,
    SafeLinkDirective,
    AuthDirective,
    LogDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
