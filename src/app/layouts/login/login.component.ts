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


//   onSubmit(loginform: NgForm) {
//     console.log(loginform.value);  // { first: '', last: '' }
//     console.log(loginform.valid);  // false

// }

now(){
  this.router.navigate(['/register']);
}

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
  role: string;
}
