import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor() { }


  onSubmit(loginform: NgForm) {
    console.log(loginform.value);  // { first: '', last: '' }
    console.log(loginform.valid);  // false

}}
