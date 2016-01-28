import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
// this is a component
import {TodoInput} from "./app/components/todo-input";

// this is a service
import {TodoService} from "./app/services/todo-service";


@Component({
  selector: 'app',
  directives: [TodoInput],
  template: `<div><todo-input></todo-input></div>`
})
class App{}

// we inject TodoService which tells angular any component inside app can use this service
bootstrap(App, [TodoService])
  .catch(err => console.error(err));