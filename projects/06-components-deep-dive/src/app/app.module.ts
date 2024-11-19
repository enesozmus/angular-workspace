import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TrafficComponent,
    TicketsComponent,
    ServerStatusComponent,
    DashboardItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
