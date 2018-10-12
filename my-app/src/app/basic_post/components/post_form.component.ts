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
    mPostDescription : String = "This is the post description";
    mGifId : String = "README";

    mFile: File;

    // =============== LIFECYCLE METHODS =================

    // Declare IOC dependencies here

    constructor( mPostRequestService : PostRequestService ) {}

    // ================= EVENT METHODS ===================

    onFileChange(event) {
        var reader = new FileReader();
        if( event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          this. mFile = file;
        }
      }

    uploadFile( event ) {
        event.preventDefault();

        var formData: FormData = new FormData();
        formData.append('upload', this.mFile, this.mFile.name);

        var headers = new Headers();
        headers.append('Accept', 'application/json');

        var options = new RequestOptions({ headers: headers });

        this.http.post('http://localhost:8000/api/main-post/upload-gif', formData, options)
            .subscribe(( data ) => { 
                console.log(data); 
                var theJSON = data.json();
                this.mGifId = theJSON.gifId;

                console.log("Receiving: " + this.mGifId);
             });
        
    }

    // Whenever the user submits a form, it should get the data and send
    // to the server
    formSubmit()
    {
        console.log("Submitting form");

        if( this.mGifId == "") {
            console.log("The Gif ID has not been set");
            return;
        }

        // attach the body parameters
        var body = 
        {
            postDescription: this.mPostDescription,
            gifId: this.mGifId
        }

        this.http.post("http://localhost:8000/api/main-post/basic-post", body).subscribe((data) => { console.log(data) } );
    }
}
