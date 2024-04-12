import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CASPPER';
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
