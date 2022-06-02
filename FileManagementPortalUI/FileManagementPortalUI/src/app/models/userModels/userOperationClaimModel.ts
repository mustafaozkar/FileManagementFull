export interface UserOperationClaimModel{
    id:number;
    userId:number
    operationClaimId:number
    userFirstName:string;
    userLastName:string;
    userEmail:string;
    operationClaimName:string;
    operationClaimIsApproved:boolean;
    userOperationClaimIsApproved:boolean;
}
