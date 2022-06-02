import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Authenticated} from '../models/authenticationModels/Authenticated';
import {UserForLogin} from '../models/authenticationModels/userForLogin';
import {UserForRegister} from '../models/authenticationModels/userForRegister';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject:BehaviorSubject<Authenticated>;
  public currentUser: Observable<Authenticated>;

  private readonly apiUrl:string = environment.baseApiUrl +'Authentication';

  constructor(private httpClient:HttpClient,private router:Router) {
    this.currentUserSubject = new BehaviorSubject<Authenticated>(JSON.parse(localStorage.getItem(environment.currentUserKey)));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  register(userForRegister:UserForRegister){
    const registerUrl = this.apiUrl + '/register';
    return this.httpClient.post<DataResponseModel<Authenticated>>(registerUrl,userForRegister);
  }

  login(userForLogin:UserForLogin){
    const loginUrl = this.apiUrl + '/login';
    return this.httpClient.post<DataResponseModel<Authenticated>>(loginUrl,userForLogin).pipe(map(user => {     
      localStorage.setItem(environment.currentUserKey,JSON.stringify(user.data));
      this.currentUserSubject.next(user.data);
      return user;
    }));
  }

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }

  logout() {
    this.router.navigate([environment.loginPageUrl]);
    localStorage.removeItem(environment.currentUserKey);
    this.currentUserSubject.next(null);
  }
}
