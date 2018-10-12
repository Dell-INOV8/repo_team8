// MAIN APP MODULE
// Top level in the view hierarchy

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicPostModule } from './basic_post/basic_post.module'

import { AppComponent } from './main_container/components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicPostModule
  ],
  providers: [],
  bootstrap: [ AppComponent ] // Starting point
})
export class AppModule { }
