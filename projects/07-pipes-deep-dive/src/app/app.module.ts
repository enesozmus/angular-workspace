import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [AppComponent, TemperaturePipe, SortPipe, ShortenPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
