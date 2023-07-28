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
    //{ path: './user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: './medicine-finder', title: 'Medicine Finder',  icon:'library_books', class: '' },
    { path: './find-pharmacy', title: 'Find Pharmacy',  icon:'location_on', class: '' },
    { path: './settings', title: 'Settings',  icon:'settings', class: 'active-pro' },
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
