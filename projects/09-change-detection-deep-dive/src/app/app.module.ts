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

import { provideExperimentalZonelessChangeDetection } from "@angular/core";

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
   /**
    * 🔴 In angular 18, Zoneless is experimental. But when it's stable, it will be the preferred approach.
    * Now it really comes down to 'signals' telling Angular that something changed and that's it.
    */
   providers: [provideExperimentalZonelessChangeDetection()],
   bootstrap: [AppComponent],
})
export class AppModule {}
