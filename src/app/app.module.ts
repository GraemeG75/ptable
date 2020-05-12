import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TableModule} from 'primeng/table';
import { Test1Component } from './test1/test1.component';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
