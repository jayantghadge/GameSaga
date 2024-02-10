import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username="";
  password="";

  constructor(private auth: AuthService, private router: Router){}

  login(){
    if(this.username.trim().length===0){
      alert("Username is Required");
    }else if(this.password.trim().length===0){
      alert("Password is Required");
  }else{
    const res = this.auth.login(this.username, this.password);
    if(res === 200){
      this.router.navigate(['home'])
    }
    else if(res == 403){
      alert("Invalid Credentials");
    }
  }
}
}
