import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'top',
  templateUrl: 'top.component.html',
  directives: [CORE_DIRECTIVES]
})
export class TopComponent{

public title="Top Page"
}
