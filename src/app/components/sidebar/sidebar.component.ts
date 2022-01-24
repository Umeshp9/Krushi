import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: "", class: '' },
    { path: '/user-profile', title: 'खते',  icon:'', class: '' },
    { path: '/table-list', title: 'बिबियाणे',  icon:'', class: '' },
    { path: '/typography', title: 'संपर्क',  icon:'', class: '' },
    { path: '/icons', title: 'आमच्याबद्दल माहिती',  icon:'', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
