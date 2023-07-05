import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  fname: string = '';
  lname: string = '';
  mobileNo: number = 0;
  remail: string = '';
  rpassword: string = '';
  cpassword: string = '';


  constructor() { }
  
  ngOnInit() {
  }

  register(){}

}
