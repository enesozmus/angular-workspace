import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './messages/new-message/new-message.component';
import { InfoMessageComponent } from './info-message/info-message.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';

@NgModule({
   declarations: [
      AppComponent,
      CounterComponent,
      MessagesComponent,
      NewMessageComponent,
      InfoMessageComponent,
      MessagesListComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
