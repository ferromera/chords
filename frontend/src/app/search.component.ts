import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'search.component.html',
  styleUrls: [ 'search.component.css'],
  directives: [CORE_DIRECTIVES]
})
export class SearchComponent {


  public input:String;

  public searchAll(){
      console.log(this.input);
  }


}
