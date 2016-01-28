import {Component} from "angular2/core"
import {TodoService} from "../services/todo-service"

// * means directive gonna change the element itself using internal template
@Component({
  selector: 'todo-list',
  template: `<div>
    <ul>
      <li *ngFor="#todo of todoService.todos">
        {{todo}}
      </li>
    </ul>
  </div>`
})
export class TodoList{
  constructor(public todoService:TodoService){}
}