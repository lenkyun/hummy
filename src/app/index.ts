/// src/app/index.ts
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api';         // ./services/api/index.ts
import {EntriesService} from './services/entries-service/entries-service.service';
import {Home} from './components/home';     // ./components/home/index.ts
import {ErrorComponent} from './components/error/error.component';
import {EntryViewComponent} from './components/entry-view/entry-view.component';
import {CreateEntryComponent} from './components/create-entry/create-entry.component';
//import {About} from "./components/about"; // About is an async route configured via @RouteConfig

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api, EntriesService],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/page/:page', component: Home, name: 'Page'},
    {path: '/entry/:id', component: EntryViewComponent, name: 'Entry'},
    // Async load a component using Webpack's require with es6-promise-loader
    {path: '/about', loader: () => require('./components/about')('About'), name: 'About' },
    {path: '/createstory', component: CreateEntryComponent, name:'CreateEntryName'},
    {path: '/**', component: ErrorComponent, name: 'Error'}
])
export class App {
  url: string = 'https://github.com/ocombe/ng2-webpack';

  constructor(public api: Api) {
  }
}
