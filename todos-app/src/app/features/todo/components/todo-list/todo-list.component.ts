import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, filter, merge, Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageQueueService } from '../../../../core/services/message-queue.service';
import { ActionsEnum } from '../../../../core/enums/actions.enum';
import { Action } from '../../../../core/models/action';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit ,AfterViewInit{

  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);




  todos$: Observable<Todos> = EMPTY;
  displayedColumns = ['id', 'title', 'completed', 'chkCompleted', 'actions'];

  ngOnInit(): void {
    // // this.todoService.findAll().subscribe((todos:Todos)=>this.todos = todos)
    // this.messageQueueService.bus$.subscribe(action =>
    //   this.todos$ = this.todoService.findAll()
    // )
    // this.todos$ = this.todoService.findAll();

    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type===ActionsEnum.DELETE_TODO),
      switchMap((action:Action) => this.todoService.delete(action.payload))
    )
    const newTodo$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type===ActionsEnum.NEW_TODO),
      switchMap((action:Action) => this.todoService.save(action.payload))
    )
    const loadTodos$ = this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type===ActionsEnum.LOAD_TODO),
    )

    this.todos$ = merge(delete$,newTodo$,loadTodos$).pipe(
      switchMap(() => this.todoService.findAll())
    )
  }
  
  ngAfterViewInit(): void {
    this.messageQueueService.dispatch({type:ActionsEnum.LOAD_TODO})
  }
  
  delete(todo: Todo) {
    this.messageQueueService.dispatch({type:ActionsEnum.DELETE_TODO,payload:todo})
  }
}
