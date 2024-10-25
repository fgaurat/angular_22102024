import { Component } from '@angular/core';
import { TodoListComponent } from "../../features/todo/components/todo-list/todo-list.component";
import { TodoFormComponent } from "../../features/todo/components/todo-form/todo-form.component";
import { TodoReactiveFormComponent } from "../../features/todo/components/todo-reactive-form/todo-reactive-form.component";

@Component({
  selector: 'app-dashboard-todo',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent, TodoReactiveFormComponent],
  templateUrl: './dashboard-todo.component.html',
  styleUrl: './dashboard-todo.component.css'
})
export class DashboardTodoComponent {

}
