import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private router:Router,
    private messageService:MessageService) { }
  

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      nickName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  register(){
    this.authService.logout();
    if (this.registerForm.valid) {
      const {firstName,lastName,email,password,nickName} = Object.assign({},this.registerForm.value);
      this.authService.register({
        email:email,
        firstName:firstName,
        lastName:lastName,
        nickName:nickName,
        password:password
      }).subscribe( (response) =>{
        this.messageService.show(response.message);
        this.router.navigate(['/'])
      })
    } else {
      this.messageService.show("boş geçmeyin")
    }
  }
}
