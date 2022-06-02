import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModels/userModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FileService } from 'src/app/services/file.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-panel-file-upload',
  templateUrl: './panel-file-upload.component.html',
  styleUrls: ['./panel-file-upload.component.css']
})
export class PanelFileUploadComponent implements OnInit {

  fileUploadForm:FormGroup;
  userModel:UserModel = {id:0,email:'',firstName:'',lastName:'',nickName:'',isApproved:false};
  userId:number;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthenticationService,
    private router:Router,
    private messageService:MessageService,
    private userService:UserService,
    private fileService:FileService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }


  getCurrentUser(){
    this.userService.getByEmail(this.authService.currentUserValue.userEmail).subscribe(response=>{
      this.userModel = response.singleData;
      this.userId = response.singleData.id;
    })
  }

  

  upload2(event:any){
    const selectFile = <File>event.target.files[0];
    console.log(selectFile);
    this.fileService.upload(selectFile,this.userId).subscribe((response)=>{
      this.messageService.show(response.message);
    })
  }
}
