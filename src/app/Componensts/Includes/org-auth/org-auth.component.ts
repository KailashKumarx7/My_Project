import { Component } from '@angular/core';

@Component({
  selector: 'app-org-auth',
  templateUrl: './org-auth.component.html',
  styleUrls: ['./org-auth.component.css']
})
export class OrgAuthComponent {
  showLogin: boolean = true;



  signUp(){

  }

  openLogin(){
    this.showLogin = true;
  }

  login(){

  }
openSignUp(){
  this.showLogin = false;
}
}
