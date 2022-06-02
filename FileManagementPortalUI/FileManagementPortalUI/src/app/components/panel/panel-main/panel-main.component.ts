import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {

  currentUserEmail = '';
  isAdmin = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getCurrentUserValue();
    this.getIsAdmin();
  }

  getCurrentUserValue(){
    this.currentUserEmail = this.authService.currentUserValue.userEmail;
  }

  logout(){
    this.authService.logout();
  }

  getIsAdmin(){
    const isAdmin = this.authService.currentUserValue.userEmail === environment.manager;
    if (isAdmin) {
      this.isAdmin = true;
    } else {      
      this.isAdmin = false;
    } 
  }
}
