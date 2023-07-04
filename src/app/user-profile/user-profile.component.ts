import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'app/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  // onSubmit(f: NgForm) {
  //   console.log(f.value);  // { first: '', last: '' }
  //   console.log(f.valid);  // false
  // }
  fname: string = '';
  lname: string = '';
  mobileNo: number = 0;
  remail: string = '';
  rpassword: string = '';
  cpassword: string = '';

  constructor(public userService: UserService){} 
  
  register() {
    this.userService.register(this.fname, this.lname, this.mobileNo, this.remail, this.rpassword, this.cpassword);
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

