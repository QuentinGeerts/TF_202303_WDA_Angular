import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { GetByIdPipe } from './demos/demo07/pipes/get-by-id.pipe';
import { SommePipe } from './demos/demo07/pipes/somme.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Exo03Component,
    Demo04Component,
    Demo05Component,
    NavbarComponent,
    FourofourComponent,
    Exo05Component,
    Demo06Component,
    Demo07Component,
    FormatDatePipe,
    GetByIdPipe,
    SommePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
