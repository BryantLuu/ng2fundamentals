import {Injectable} from "angular2/core"
import {TodoModel} from "../models/todo-model"

@Injectable()
export class TodoService{
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("dance", "completed"),
    new TodoModel("party"),
    new TodoModel("work"),
    new TodoModel("play"),
    new TodoModel("record", "completed"),
    new TodoModel("earn"),
    new TodoModel("charm", "completed"),
    new TodoModel("swim", "completed"),
    new TodoModel("code")
  ];

  addToDo(todo:TodoModel){
    this.todos = [...this.todos, todo]
  }

  toggleTodo(todo:TodoModel){
    todo.toggle();
    const i = this.todos.indexOf(todo);

    //rebuild array, spread operator
    this.todos = [
      ...this.todos.slice(0,i),
      todo,
      ...this.todos.slice(i+1)
    ]
  }
}