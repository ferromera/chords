import { Component } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'chords-app',
  templateUrl: 'chords.component.html',
  styleUrls: ['chords.component.css'],
  directives: [AlertComponent,CORE_DIRECTIVES,DROPDOWN_DIRECTIVES]
})
export class ChordsAppComponent {
  title = 'chords works!';
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
