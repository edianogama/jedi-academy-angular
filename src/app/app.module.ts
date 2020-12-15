import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { MastersComponent } from './masters/masters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    MastersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
