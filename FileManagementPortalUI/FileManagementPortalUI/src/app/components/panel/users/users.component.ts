import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModels/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:UserModel[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe( (response) =>{
      this.users = response.listData;
    })
  }
}
