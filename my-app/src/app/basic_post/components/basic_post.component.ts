// Component representin a single basic post (gif + description)

import { Component } from '@angular/core';

import { BasicPostModel } from '../models/basic_post.model';

@Component({
  selector: 'basic-post',
  templateUrl: '../views/html/basic-post.html',
  styleUrls: ['../views/css/basic-post.css']
})
export class BasicPostComponent 
{
    // ===================== DATA ========================
    
    // The post to be displayed
    // @Input mCurrentPost : BasicPostModel;

    // =============== LIFECYCLE METHODS =================

    // Declare IOC dependencies here
    constructor() {}
}
