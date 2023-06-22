import { Component } from '@angular/core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  baricon = faBars;
  showDemo = false;
  showLogin = false;
  navActive ={'active':false};


  constructor(){

  }
  
toggleIcon(){
  if(this.baricon === faBars)
  {
    this.baricon = faX;
    this.navActive ={'active':true};
  }else{
   this.baricon = faBars; 
   this.navActive ={'active':false};
  }
}

removeAction(){
  this.baricon = faBars;
  this.navActive = {'active':false};
}




}
