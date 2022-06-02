import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-add',
  templateUrl: './operation-claim-add.component.html',
  styleUrls: ['./operation-claim-add.component.css']
})
export class OperationClaimAddComponent implements OnInit {

  
  operationClaimForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private operationClaimService:OperationClaimService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.operationClaimForm = this.formBuilder.group({
      name:['',Validators.required],
      isApproved:[false]
    })
  }

  add(){
    if (this.operationClaimForm.valid) {
      const {name,isApproved} = Object.assign({},this.operationClaimForm.value);
      this.operationClaimService.add({
        id:0,
        name:name,
        isApproved:isApproved
      }).subscribe( (response) =>{
        this.messageService.show(response.message)
      })
    } else {
      this.messageService.show("eksik")
    }
  }
}
