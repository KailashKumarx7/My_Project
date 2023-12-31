import { Component, HostListener, Input } from '@angular/core';
import { faSearch,faExpand,faBell, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import{languages, notifications, userItems} from './header-dummy-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-d-header',
  templateUrl: './d-header.component.html',
  styleUrls: ['./d-header.component.scss']
})
export class DHeaderComponent {

  searchicon = faSearch;
  expandedicon = faExpand;
  bellicon = faBell;
  commentalticon = faCommentAlt;
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage:any;
  languages = languages;
  notifications = notifications;
  userItems = userItems;

  constructor(){

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    
  }

  ngOnInit():void{
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }


  getHeadClass():string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    }else{
      styleClass = 'head-md-screen';
    }
    return styleClass;

  }




  checkCanShowSearchAsOverlay(innerWidth:number):void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    }else{
      this.canShowSearchAsOverlay = false;
    }
  }
}
