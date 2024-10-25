import { Component, inject } from '@angular/core';
import { CountSignalService } from '../count-signal.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  private countSignalService:CountSignalService = inject(CountSignalService)
  count = this.countSignalService.count

  // count = inject(CountSignalService).count
}
