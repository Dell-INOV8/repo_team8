// module for the post list

// MODULES
import { NgModule, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { BasicPostContainerComponent } from './components/basic_post_container.component';
import { BasicPostComponent } from './components/basic_post.component';
import { PostFormComponent } from './components/post_form.component';

// SERVICES
import { PostRequestService } from './services/post_retrieval.service';

@NgModule({
  declarations: [
    BasicPostContainerComponent,
    BasicPostComponent,
    PostFormComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    PostRequestService
  ],
  exports: [
    BasicPostContainerComponent,
    BasicPostComponent
    PostFormComponent
  ],
})
export class BasicPostModule { 
  gifLink : String = "";
  postDescription : String = "";
}
