import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// 🔴
import { FirstComponent } from './first/first.component';
// 🟦
import { SecondComponent } from './second/second.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // 🔴
    FirstComponent,
    // 🟦
    SecondComponent,
    DatabindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 🟢 Databinding - Two-Way Binding
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
