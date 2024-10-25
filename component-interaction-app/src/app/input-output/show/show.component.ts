import { Component } from '@angular/core';
import { IncComponent } from "../inc/inc.component";

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [IncComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  count:number = 0
  onInc(newValue:number){
    this.count = newValue
  }
}
