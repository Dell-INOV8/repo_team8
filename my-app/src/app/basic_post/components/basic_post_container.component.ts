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
        // Use dummy data for now
        var data1 : BasicPostModel = new BasicPostModel();
        data1.gifLink = 'https://media.giphy.com/media/qPa9vUYCUrx6w/giphy.gif';
        data1.postDescription = "This is the description for post 1";

        var data2 : BasicPostModel = new BasicPostModel();
        data2.gifLink = 'https://media.giphy.com/media/qPa9vUYCUrx6w/giphy.gif';
        data2.postDescription = "This is the description for post 2";

        var data3 : BasicPostModel = new BasicPostModel();
        data3.gifLink = 'https://media.giphy.com/media/qPa9vUYCUrx6w/giphy.gif';
        data3.postDescription = "This is the description for post 3";

        this.mPosts.push( data1 );
        this.mPosts.push( data2 );
        this.mPosts.push( data3 );
    }
}
