import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-document',
  templateUrl: './manage-document.component.html',
  styleUrls: ['./manage-document.component.css']
})
export class ManageDocumentComponent {
  // response: {dbPath: ''};

  // uploadFinished = (event) => { 
  //   this.response = event; 
  // }

  // onCreate = () => {
  //   this.document = {
  //     documentId: this.documentId,
  //     DocumentType: this.documentType,
  //     DocumentName: this.documentName,
  //     IsActive: this.isActive,
  //     CustomerId: this.customerId,
  //     imgPath: this.response.dbPath
  //   }

  //   public createImgPath = (serverPath: string) => { 
  //     return `https://localhost:7029/${serverPath}`; 
  //   }

}
