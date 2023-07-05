import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: './dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: './user-profile', title: 'User Profile',  icon:'person', class: '' },
    //{ path: './table-list', title: 'Medicine Counter',  icon:'content_paste', class: '' },
    { path: './typography', title: 'Medicine Finder',  icon:'library_books', class: '' },
    { path: './icons', title: 'View Location',  icon:'location_on', class: '' },
    //{ path: './maps', title: 'View Location',  icon:'location_on', class: '' },
    //{ path: './notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: './upgrade', title: 'Settings',  icon:'settings', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar-customer',
  templateUrl: './sidebar-customer.component.html',
  styleUrls: ['./sidebar-customer.component.scss']
})
export class SidebarCustomerComponent implements OnInit {

  
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
