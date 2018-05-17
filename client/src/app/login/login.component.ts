import { Component, OnInit } from '@angular/core';
import {AuthService } from '../services/auth.service';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router }      from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    loginId: new FormControl(),
    password: new FormControl()
  });

  submitted = false;
  
  constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
       this.submitted = true;
        console.log("onSubmit ",this.loginForm)    ;
    }

    login(){
            
      console.log("login()  ",this.loginForm);

      if(this.loginForm.value.loginId && this.loginForm.value.password 
          && this.loginForm.value.loginId == "admin" && this.loginForm.value.password ==="admin"){
        
          if(this.authService.login() && this.authService.getToken() != null && this.authService.isLoggedIn){
              console.log("logged in "+this.authService.getToken())      
              this.router.navigate(['/home'])
                        
          }
        };
    }          
    

  ngOnInit() {
    
  }

}
