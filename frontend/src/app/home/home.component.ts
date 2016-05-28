import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  directives: [CORE_DIRECTIVES]
})
export class HomeComponent{

public title="Home Page"
}
