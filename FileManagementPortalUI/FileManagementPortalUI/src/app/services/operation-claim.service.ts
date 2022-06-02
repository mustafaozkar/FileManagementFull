import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperationClaim } from '../models/operationClaim/operationClaim';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  private readonly apiUrl:string = environment.baseApiUrl + 'OperationClaims';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + '/getoperationclaims';
    return this.httpClient.get<ListResponseModel<OperationClaim>>(getListUrl);
  }

  getByOperationClaimId(operationClaimId:number){
    const getByIdUrl = this.apiUrl + '/getbyoperationclaimid/' + operationClaimId;
    return this.httpClient.get<SingleResponseModel<OperationClaim>>(getByIdUrl);
  }

  add(operationClaim:OperationClaim){    
    const addUrl = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(addUrl,operationClaim);
  }

  update(operationClaim:OperationClaim){
    const updateUrl = this.apiUrl + '/update';
    return this.httpClient.put<ResponseModel>(updateUrl,operationClaim);
  }

  delete(operationClaim:OperationClaim){    
    const deleteUrl = this.apiUrl + '/delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:operationClaim});
  }
}
