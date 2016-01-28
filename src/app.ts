import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
// this is a component
import {TodoInput} from "./app/components/todo-input";
// this is a service
import {TodoService} from "./app/services/todo-service";
// another component
import {TodoList} from "./app/components/todo-list";

import {StatusSelector} from "./app/components/status-selector"

import {SearchBox} from "./app/components/search-box"



@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, StatusSelector, SearchBox],
  template: `<div>
  Searchbox<search-box (update)="term = $event"></search-box>
  AddBox<todo-input></todo-input>
  <status-selector (select)="status= $event"></status-selector>
  <todo-list
    [status]="status"
    [term]="term"
    ></todo-list>
  </div>`
})
class App{}

// we inject TodoService which tells angular any component inside app can use this service
bootstrap(App, [TodoService])
  .catch(err => console.error(err));