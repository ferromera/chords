import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {  ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'chords-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.css'],
  directives: [CORE_DIRECTIVES, DROPDOWN_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class HeaderComponent{

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
