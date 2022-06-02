import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileDto } from '../models/fileDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { UserForDisplayFile } from '../models/userModels/userForDisplayFile';
import { UserForFile } from '../models/userModels/userForFile';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly apiUrl:string = environment.baseApiUrl +'SystemFiles/';
  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + 'get-all';
    return this.httpClient.get<ListResponseModel<UserForDisplayFile>>(getListUrl);
  }

  getByOperationClaimId(userId:number){
    const getByIdUrl = this.apiUrl + 'get-by-user-id/' + userId;
    return this.httpClient.get<ListResponseModel<UserForDisplayFile>>(getByIdUrl);
  }

  upload(file:File,userId:number){    
    const sendForm = new FormData();
    const addUrl = this.apiUrl + 'upload';

    sendForm.append('userId',JSON.stringify(userId));
    sendForm.append('file',file,file.name);

    return this.httpClient.post<ResponseModel>(addUrl,sendForm);
  }

  update(userForDisplayFile:UserForDisplayFile){
    const updateUrl = this.apiUrl + 'update';
    return this.httpClient.put<ResponseModel>(updateUrl,userForDisplayFile);
  }

  delete(userForDisplayFile:UserForDisplayFile){    
    const deleteUrl = this.apiUrl + 'delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:userForDisplayFile});
  }

  getByUserEmail(email:string){
    return this.httpClient.get<ListResponseModel<FileDto>>(this.apiUrl + "get-by-user-email/" + email);
  }
}
