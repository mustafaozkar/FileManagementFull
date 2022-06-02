import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';
import { UserModel } from '../models/userModels/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl:string = environment.baseApiUrl + 'Users';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<ListResponseModel<UserModel>>(this.apiUrl + '/get-all');
  }
  getByEmail(email:string){
    return this.httpClient.get<SingleResponseModel<UserModel>>(this.apiUrl + '/get-by-email/' + email)
  }
}
