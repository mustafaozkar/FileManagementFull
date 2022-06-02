import { Component, OnInit } from '@angular/core';
import { OperationClaim } from 'src/app/models/operationClaim/operationClaim';
import { MessageService } from 'src/app/services/message.service';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-list',
  templateUrl: './operation-claim-list.component.html',
  styleUrls: ['./operation-claim-list.component.css']
})
export class OperationClaimListComponent implements OnInit {

  operationClaims:OperationClaim[] = [];
  constructor(private operationClaimService:OperationClaimService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.operationClaimService.getAll().subscribe( (response) =>{
      this.operationClaims = response.listData; 
    })
  }

  delete(operationClaim:OperationClaim){
    this.operationClaimService.delete(operationClaim).subscribe( (response) =>{
      this.messageService.show(response.message)
      this.getAll();
    })
  }
}
