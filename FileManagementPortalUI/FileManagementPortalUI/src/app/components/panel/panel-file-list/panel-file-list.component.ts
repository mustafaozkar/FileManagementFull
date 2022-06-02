import { Component, OnInit } from '@angular/core';
import { FileDto } from 'src/app/models/fileDto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FileService } from 'src/app/services/file.service';
import {DomSanitizer} from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import {Clipboard} from '@angular/cdk/clipboard';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-panel-file-list',
  templateUrl: './panel-file-list.component.html',
  styleUrls: ['./panel-file-list.component.css']
})
export class PanelFileListComponent implements OnInit {

  apiUrl:string = "/https://localhost:44398/";
  files:FileDto[];
  constructor(private authService:AuthenticationService,
    private fileService:FileService,
    private sanitizer:DomSanitizer,
    private clipboard: Clipboard,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getCurrentUserFiles(this.authService.currentUserValue.userEmail);
  }

  getCurrentUserFiles(email:string){
    this.fileService.getByUserEmail(email).subscribe(response=>{
      this.files = response.listData;
    })
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

copyUrl(url:string){
  this.clipboard.copy(url);
  this.messageService.show('Url Bşarıyla kopyalandı')
}
}
