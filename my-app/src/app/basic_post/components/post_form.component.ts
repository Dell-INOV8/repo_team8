// Component representin a single basic post (gif + description)

import { Component, NgModule } from '@angular/core';
import { BasicPostModel } from '../models/basic_post.model';
import { CommonModule } from '@angular/common';


import { PostRequestService } from '../services/post_retrieval.service';

@Component({
  selector: 'basic-post',
  templateUrl: '../views/html/post-form.html',
  styleUrls: ['../views/css/post-form.css']
})
export class BasicPostComponent 
{
    // ===================== DATA ========================

    // The information that the user enters (binds to these variables)
    mPostDescription: String = "";
    mGifLink: String = ""; 

    // =============== LIFECYCLE METHODS =================

    // Declare IOC dependencies here
    constructor( mPostRequestService : PostRequestService ) {}
    

    // ================= EVENT METHODS ===================

    // Whenever the user submits a form, it should get the data and send
    // to the server
    formSubmit()
    {
        /*
        theNewPost : BasicPostModel = 
        {
            postDescription : this.mPostDescription
            gifLink: this.mGifLink
        }
        */
    }
}
