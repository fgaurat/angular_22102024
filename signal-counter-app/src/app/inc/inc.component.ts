import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal.service';

@Component({
  selector: 'app-inc',
  standalone: true,
  imports: [],
  templateUrl: './inc.component.html',
  styleUrl: './inc.component.css'
})
export class IncComponent {
  private countSignalService:CountSignalService = inject(CountSignalService)

  inc(){
    this.countSignalService.inc()
  }
}
