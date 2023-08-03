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

validateEmail(email: string) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);

}

hideErrorMessage(errorElement) {
  errorElement.style.display = 'none';
}

showErrorMessage(errorElement) {
  errorElement.style.display = 'block';
}

onSubmit() {
  
  const email = this.email;
  const password = this.password;

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const invalidEmailError = document.getElementById('invalidEmailError');

  let isValid = true;

  if (!email) {
    this.showErrorMessage(emailError);
    this.hideErrorMessage(invalidEmailError);
    isValid = false;
  } else if (!this.validateEmail(email)) {
    this.showErrorMessage(invalidEmailError);
    this.hideErrorMessage(emailError);
    isValid = false;  } 
  else {
    this.hideErrorMessage(emailError);
    this.hideErrorMessage(invalidEmailError);
  }

  if (!password) {
    this.showErrorMessage(passwordError);
    isValid = false;
  } else {
    this.hideErrorMessage(passwordError);
  }

  if (isValid) {
    const formElement = document.getElementById('loginForm') as HTMLFormElement;
    formElement.submit();
  }

document.getElementById('email').addEventListener('input', () => this.hideErrorMessage(emailError));
document.getElementById('email').addEventListener('input', () => this.hideErrorMessage(invalidEmailError));
document.getElementById('password').addEventListener('input', () => this.hideErrorMessage(passwordError));
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
