import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(public userService: UserService, private router: Router) { }

now(){
  this.router.navigate(['/register']);
}

login() {
  this.userService.login(this.email, this.password);
} 

onSubmit() {
  
  const email = this.email;
  const password = this.password;

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  let isValid = true;

  if (!email) {
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  if (!password) {
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  if (isValid) {
    // Submit the form if all fields are filled
    const formElement = document.getElementById('loginForm') as HTMLFormElement;
    formElement.submit();
  }
}

}




export interface UserData {
  email: string;
  password: string;
}

export interface JwtResponse {
  token: string;
  role: string;
}
