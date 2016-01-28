import {Component} from 'angular2/core';
import {TodoService} from "../services/todo-service";

@Component({
  selector: 'todo-input',
  template: `<div>
  I'm a todo input
  <input type="text" #myInput>
  <button (mouseover)="onClick($event, myInput.value)">Click me</button>
  </div>
  `
})

export class TodoInput{
  // equal to this.todoService = todoService
  constructor(public todoService:TodoService){
    
  }
  onClick(event, value){
    this.todoService.todos.push(value);
    console.log(this.todoService.todos);
  }
}