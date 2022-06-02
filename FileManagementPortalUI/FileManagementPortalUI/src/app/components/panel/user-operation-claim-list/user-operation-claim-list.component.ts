import { Component, OnInit } from '@angular/core';
import { UserOperationClaimModel } from 'src/app/models/userModels/userOperationClaimModel';
import { MessageService } from 'src/app/services/message.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim-list',
  templateUrl: './user-operation-claim-list.component.html',
  styleUrls: ['./user-operation-claim-list.component.css']
})
export class UserOperationClaimListComponent implements OnInit {

  userOperationClaims:UserOperationClaimModel[] = [];
  constructor(private userOperationClaimService:UserOperationClaimService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userOperationClaimService.getAll().subscribe( (response) =>{
      this.userOperationClaims = response.listData;
    })
  }

  delete(userOperationClaim:UserOperationClaimModel){
    this.userOperationClaimService.delete({
      id:userOperationClaim.id,
      userId:userOperationClaim.userId,
      operationClaimId:userOperationClaim.operationClaimId,
      isApproved:userOperationClaim.userOperationClaimIsApproved
    }).subscribe( ( response) =>{
      this.messageService.show(response.message)
      this.getAll();
    })
  }

}
