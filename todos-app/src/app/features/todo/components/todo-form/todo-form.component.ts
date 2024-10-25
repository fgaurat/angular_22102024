import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MessageQueueService } from '../../../../core/services/message-queue.service';
import { Action } from '../../../../core/models/action';
import { ActionsEnum } from '../../../../core/enums/actions.enum';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [MatInputModule,MatCheckboxModule,MatButtonModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);

  todoFormModel:Todo={
    title:"",
    completed:true
  }

  submitTodo(){
    this.messageQueueService.dispatch({
      type:ActionsEnum.NEW_TODO,payload:this.todoFormModel
    })

    // this.todoService.save(this.todoFormModel).subscribe(
    //   ()=>{
    //     const action:Action = {
    //       type:ActionsEnum.NEW_TODO
    //     }
    //     this.messageQueueService.dispatch(action)
    //   }
    // )
    
  }
}
