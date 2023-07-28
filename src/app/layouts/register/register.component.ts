import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  fname: string = '';
  lname: string = '';
  mobileNo: number = 0;
  remail: string = '';
  rpassword: string = '';
  cpassword: string = '';

  constructor(public userService: UserService, private router: Router){} 
  
  register() {
    this.userService.register(this.fname, this.lname, this.mobileNo, this.remail, this.rpassword, this.cpassword);
  }

  onSubmit() {
  
    const email = this.remail;
    const password = this.rpassword;
    const fname = this.fname;
    const lname = this.lname;
    const mobileNo = this.mobileNo;
    const cpassword = this.cpassword;
  
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const contactNoError = document.getElementById('contactNoError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    let isValid = true;

    if (!fname) {
      fnameError.style.display = 'block';
      isValid = false;
    } else {
      fnameError.style.display = 'none';
    }

    if (!lname) {
      lnameError.style.display = 'block';
      isValid = false;
    } else {
      lnameError.style.display = 'none';
    }

    if (!mobileNo) {
      contactNoError.style.display = 'block';
      isValid = false;
    } else {
      contactNoError.style.display = 'none';
    }
  
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

    if (!cpassword) {
      confirmPasswordError.style.display = 'block';
      isValid = false;
    } else {
      confirmPasswordError.style.display = 'none';
    }

    if (password !== cpassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      confirmPasswordError.style.display = 'block';
      isValid = false;
    } else {
      confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
      
      const formElement = document.getElementById('registerForm') as HTMLFormElement;
      formElement.submit();
    }
  }
  
}

export interface LoginData {
  firstName: string;
  lastName: string;
  mobileNo: number;
  email: string;
  password: string;
  confirmPassword: string;
}
