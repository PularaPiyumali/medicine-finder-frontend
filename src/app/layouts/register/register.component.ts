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

  validateEmail(email: string) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  
  }

  validateContactNumber(contactNumber) {

    const contactNumberRegex = /^\d{10}$/; 
    return contactNumberRegex.test(contactNumber);

  }

  hideErrorMessage(errorElement) {
    errorElement.style.display = 'none';
  }
  
  showErrorMessage(errorElement) {
    errorElement.style.display = 'block';
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
    const invalidEmailError = document.getElementById('invalidEmailError');
    const invalidContactError = document.getElementById('invalidContactError');
  
    let isValid = true;

    if (!fname) {
      this.showErrorMessage(fnameError);
      isValid = false;
    } else {
      this.hideErrorMessage(fnameError);
    }

    if (!lname) {
      this.showErrorMessage(lnameError);
      isValid = false;
    } else {
      this.hideErrorMessage(lnameError);
    }

    if (!mobileNo) {
      this.showErrorMessage(contactNoError);
      this.hideErrorMessage(invalidContactError);
      isValid = false;
    } else {
      this.hideErrorMessage(contactNoError);
    }

    if (!this.validateContactNumber(mobileNo)) {
      this.showErrorMessage(invalidContactError);
      this.hideErrorMessage(contactNoError);
      isValid = false;
    } else {
      this.hideErrorMessage(invalidContactError);
    }
  
    if (!email) {
      this.showErrorMessage(emailError);
      this.hideErrorMessage(invalidEmailError);
      isValid = false;
    } else {
      this.hideErrorMessage(emailError);
    }

     if (!this.validateEmail(email)) {
      this.showErrorMessage(invalidEmailError);
      this.hideErrorMessage(emailError);
      isValid = false;  
    }  else {
      this.hideErrorMessage(invalidEmailError);
    }
  
    if (!password) {
      this.showErrorMessage(passwordError);
      isValid = false;
    } else {
      this.hideErrorMessage(passwordError);
    }

    if (!cpassword) {
      this.showErrorMessage(confirmPasswordError);
      isValid = false;
    } else if (password !== cpassword) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      this.showErrorMessage(confirmPasswordError);
      isValid = false;
    } else {
      this.hideErrorMessage(confirmPasswordError);
    }

    

    if (isValid) {
    
      this.register();
    }

    document.getElementById('fname').addEventListener('input', () => this.hideErrorMessage(fnameError));
    document.getElementById('lname').addEventListener('input', () => this.hideErrorMessage(lnameError));
    document.getElementById('email').addEventListener('input', () => this.hideErrorMessage(emailError));
    document.getElementById('email').addEventListener('input', () => this.hideErrorMessage(invalidEmailError));
    document.getElementById('mobileNo').addEventListener('input', () => this.hideErrorMessage(contactNoError));
    document.getElementById('mobileNo').addEventListener('input', () => this.hideErrorMessage(invalidContactError));
    document.getElementById('password').addEventListener('input', () => this.hideErrorMessage(passwordError));
    document.getElementById('confirmPassword').addEventListener('input', () => this.hideErrorMessage(confirmPasswordError));
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
