import { Component } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HeaderComponent} from './header.component';
import {HomeComponent} from './home/home.component';
import {TopComponent} from './top/top.component';
import {SearchComponent} from './search.component'
@Component({
  moduleId: module.id,
  selector: 'chords-app',
  templateUrl: 'chords.component.html',
  styleUrls: ['chords.component.css'],
  directives: [CORE_DIRECTIVES, HeaderComponent,ROUTER_DIRECTIVES,SearchComponent],
  providers: [
    ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/top',
    name: 'Top',
    component: TopComponent,
  }
  ])
export class ChordsAppComponent {

}
