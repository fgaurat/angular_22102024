import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardTodoComponent } from "./pages/dashboard-todo/dashboard-todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todos-app';
}
