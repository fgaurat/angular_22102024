import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageQueueService } from '../../../../core/services/message-queue.service';
import { ActionsEnum } from '../../../../core/enums/actions.enum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatCheckboxModule,MatInputModule],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css',
})
export class TodoReactiveFormComponent {
  private formbuild: FormBuilder = inject(FormBuilder);
  private messageQueueService: MessageQueueService =
    inject(MessageQueueService);

  todoForm = this.formbuild.group({
    title: ['', Validators.require],
    completed: [false],
  });

  submitTodo() {
    this.messageQueueService.dispatch({
      type: ActionsEnum.NEW_TODO,
      payload: this.todoForm.value,
    });
  }
}
