import {Component, Input, Output, EventEmitter} from "angular2/core";
// possible to make styles global if encapsulation = ViewEncapsulation.None. ViewEncapsulation.Native = no styles in and no out
@Component({
  selector: 'todo-item-renderer',
  template: `
  <style>
    .completed{
      text-decoration: line-through;
    }
  </style>
  <div>
  <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="toggle.emit(todo)">Toggle</button>
  </div>`
})
export class TodoItemRenderer{
  @Input() todo;
  //custom event and instiate new event emitter
  @Output() toggle = new EventEmitter();
}