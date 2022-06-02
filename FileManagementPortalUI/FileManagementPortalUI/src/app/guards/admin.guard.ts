import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild,CanLoad {
  
  constructor(private authenticationService:AuthenticationService,private router:Router) {
    
  }

  baseGuard(){
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token != null && currentUser.userEmail === environment.manager) {      
      return true;
    }
    else{
      return false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const guard = this.baseGuard();
     if (guard) {
       return true;
     }
      this.router.navigate([environment.loginPageUrl],{queryParams:{returnUrl:state.url}});
      return false;
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const guard = this.baseGuard();
      if (guard) {
        return true;
      }
       this.router.navigate([environment.loginPageUrl],{queryParams:{returnUrl:state.url}});
       return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const guard = this.baseGuard();
      if (guard) {
        return true;
      }
       this.router.navigate([environment.loginPageUrl]);
       return false;
  }
}
