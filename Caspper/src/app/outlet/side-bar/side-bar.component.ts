import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent {
  sideBarDefaultWidth: string = '50px'
  sideBarOpenedWidth: string = '260px'
  sideBarWidth: string = this.sideBarDefaultWidth
  isSideBarOpen: boolean = false
  
  toggleSideBarOut = () =>{
    this.sideBarWidth = this.sideBarDefaultWidth
    this.isSideBarOpen = false
  }
  toggleSideBarIn = () =>{
    this.sideBarWidth = this.sideBarOpenedWidth 
    this.isSideBarOpen = true
  }
}
