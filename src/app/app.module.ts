import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { FormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, App1Component, App2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
