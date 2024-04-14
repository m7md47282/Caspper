import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {
  sideBarDefaultWidth: string = '50px'
  sideBarOpenedWidth: string = '260px'
  sideBarWidth: string = this.sideBarDefaultWidth
  isSideBarOpen: boolean = false
  menu: Menu[]  

  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        title: 'Settings',
        icon: 'engineering'
      },
      {
        title: 'Support',
        icon: 'support_agentw'
      }
    ]
  }

  ngOnInit(){
  }

  toggleSideBarOut = () =>{
    this.sideBarWidth = this.sideBarDefaultWidth
    this.isSideBarOpen = false
  }

  toggleSideBarIn = () =>{
    this.sideBarWidth = this.sideBarOpenedWidth 
    this.isSideBarOpen = true
  }



}
