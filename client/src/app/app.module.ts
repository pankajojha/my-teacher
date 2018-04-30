import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
