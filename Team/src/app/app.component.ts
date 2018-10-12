import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dell Application';
  selectedFile: File = null;
constructor(private http:HttpClient){}

  
onFileSelected(event){

  this.selectedFile = <File>event.target.files[0];
}

onUpload(){
  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);
  this.http.post('https://giphy.com/reactions/featured/waiting', fd)
  .subscribe(res =>{
    console.log(res);
  });
}

}