// MAIN APP MODULE
// Top level in the view hierarchy

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BasicPostModule } from './basic_post/basic_post.module'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './main_container/components/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BasicPostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ] // Starting point
})
export class AppModule { }
