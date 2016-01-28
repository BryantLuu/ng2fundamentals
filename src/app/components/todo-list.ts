import {Component, Input} from "angular2/core"
import {TodoService} from "../services/todo-service"
import {TodoItemRenderer} from "./todo-item-renderer"
import {StartedPipe} from "../pipes/started-pipe"

// * means directive gonna change the element itself using internal template
@Component({
  selector: 'todo-list',
  pipes: [StartedPipe],
  directives: [TodoItemRenderer],
  // property of todo is being passed into [todo]
  template: `<div>
    <ul>
      <li *ngFor="#todo of todoService.todos | started : status ">
        <todo-item-renderer 
        [todo]="todo"
        (toggle)="todoService.toggleTodo($event)"
        ></todo-item-renderer>
      </li>
    </ul>
  </div>`
})
export class TodoList{
  @Input() status;
  constructor(public todoService:TodoService){}
}