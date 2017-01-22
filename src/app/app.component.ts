import { Component } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[];

  constructor(private todosService: TodosService) {
    this.todos = todosService.getTodos();
  }

  public addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  public removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
