import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(public userService: UserService) { }


//   onSubmit(loginform: NgForm) {
//     console.log(loginform.value);  // { first: '', last: '' }
//     console.log(loginform.valid);  // false

// }

login() {
  this.userService.login(this.email, this.password);
} 
}

export interface UserData {
  email: string;
  password: string;
}

export interface JwtResponse {
  token: string;
}
