import { Component, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { BasicPostModel } from '../models/basic_post.model';
import { PostFilterModel } from '../models/post_filter.model';

@Injectable()
@Component({})
export class PostRequestService 
{
    // ========================= DATA ========================
    // Path in which we interact with our api
    private mPath = 'http://localhost:8000/api/main-post/basic-post';

    // Array of the posts that we retrieve from the server
    mPosts: Array< BasicPostModel > = [];
    
    // ======================== FUNCTIONS =====================

    // Retrieve the HTTP dependencies here
    constructor( private http: Http ) {}

    // Post retrieval methods

    // Load the posts with a filter applied
    loadPostsWithFilter( aFilter : PostFilterModel = null ) 
    {
        // get the url for the read endpoint
        var theUrl = this.mPath;

        // make the request
        return this.http.get(theUrl).map( res => res.json() );
    }

    // Add the new post to the server
    addNewPost( aNewPost: BasicPostModel )
    {
        var theUrl = this.mPath;

        // put the post into the correct format to the body
        
        // make the request
        return this.http.post( theUrl );            
    }
}