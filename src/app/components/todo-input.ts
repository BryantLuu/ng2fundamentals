import {Component} from 'angular2/core';
import {TodoService} from "../services/todo-service";
import {TodoModel} from "../models/todo-model"

@Component({
  selector: 'todo-input',
  template: `<div>
  <form (submit)="onSubmit()">
  <input type="text" [(ngModel)]="todoModel.title">
  </form>
  </div>
  `
})

export class TodoInput{
  todoModel:TodoModel = new TodoModel;
  // equal to this.todoService = todoService
  constructor(public todoService:TodoService){
    
  }
  onSubmit(){
    this.todoService.addToDo(this.todoModel);
    console.log(this.todoService.todos);
    this.todoModel = new TodoModel();
  }
}