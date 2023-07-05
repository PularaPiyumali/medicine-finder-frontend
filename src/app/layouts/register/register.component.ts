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
    this.router.navigate(['/login']); 
  }


  
//   onSubmit(registerUser: NgForm) {
//     console.log(registerUser.value);  // { first: '', last: '' }
//     console.log(registerUser.valid);  // false

// }

}

export interface LoginData {
  firstName: string;
  lastName: string;
  mobileNo: number;
  email: string;
  password: string;
  confirmPassword: string;
}
