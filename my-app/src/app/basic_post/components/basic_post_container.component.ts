// Component that holds the posts

import { Component } from '@angular/core';

import { PostFilterModel } from '../models/post_filter.model'
import { BasicPostModel } from '../models/basic_post.model'

import { PostRequestService } from '../services/post_retrieval.service';

@Component({
  selector: 'post-container',
  templateUrl: '../views/html/post-container.html',
  styleUrls: ['../views/css/post-container.css']
})
export class BasicPostContainerComponent 
{
    // ===================== DATA ========================
    
    // Todo: pass the filter type to the component
    // @Input mPostFilter : PostFilter Model
    
    // list of posts that the UI binds to for display
    mPosts: Array< BasicPostModel >;

    // =============== LIFECYCLE METHODS =================

    // Declare IOC dependencies here
    constructor( mPostRequestService : PostRequestService ) {}

    ngOnInit() 
    {
        // TODO: retrieve the posts here
    }
}
