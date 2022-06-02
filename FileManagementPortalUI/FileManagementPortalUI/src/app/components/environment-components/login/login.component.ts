import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,
    private authService:AuthenticationService,
    private router:Router,
    private messageService:MessageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      const {email,password} = Object.assign({},this.loginForm.value);
      this.authService.login({email:email,password:password}).subscribe( (response) => {
        const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/panel';
        this.messageService.show(response.message)
        this.router.navigate([returnUrl]);
      })
    }
    else{
      this.messageService.show("Lütfen boş geçmeyin")
    }
  }

}
