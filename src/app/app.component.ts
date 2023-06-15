import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymMaster';


  isSideNavcollapsed = false;
  screenWidth = 0;
  isLoggedIn = false;

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidth = data.screenWidth;
    this.isSideNavcollapsed = data.collapsed;
  }


  ngOnInit(): void {
    // Retrieve login status from localStorage
    const isLoggedInString = localStorage.getItem('isLoggedIn');
    if (isLoggedInString && isLoggedInString === 'true') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  
}
