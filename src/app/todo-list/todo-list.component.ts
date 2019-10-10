import { Component } from "@angular/core";
import { TodoDataService } from "../todo-data.service";
import { Todo } from "../todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
  providers: [TodoDataService]
})
export class TodoListComponent {
  newTodo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  countTodoDone() {
    let result: number = 0;
    let list: Todo[] = this.todoDataService.getAllTodos();
    // console.log(list);
    list.forEach(item => {
      item.complete ? result++ : result + 0;
    });
    // console.log(result);
    return result;
  }
}
