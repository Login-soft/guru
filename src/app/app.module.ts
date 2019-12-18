import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorejavaComponent } from './corejava/corejava.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { ServletComponent } from './servlet/servlet.component';
import { JspComponent } from './jsp/jsp.component';
import { HibernateComponent } from './hibernate/hibernate.component';
import { SpringComponent } from './spring/spring.component';
import { SpringbootComponent } from './springboot/springboot.component';
import { InterviewquestionComponent } from './interviewquestion/interviewquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorejavaComponent,
    JdbcComponent,
    ServletComponent,
    JspComponent,
    HibernateComponent,
    SpringComponent,
    SpringbootComponent,
    InterviewquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
