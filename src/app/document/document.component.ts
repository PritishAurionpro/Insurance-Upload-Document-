import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter,Output } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
    progress: number = 0;
    message: string ='';
    @Output() public onUploadFinished = new EventEmitter();

  // Inject service  
  constructor(private http: HttpClient) { } 

  ngOnInit() { 
  } 

  uploadFile = (files:any) => {
    if (files.length == 0) {
        return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:7029/api/Document', formData, {reportProgress: true, observe:'events'})
    .subscribe({
        next: (event) => {
            if(event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / (event.total ?? 1));
            else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success';
                this.onUploadFinished.emit(event.body);
            }
        },
        error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}


 