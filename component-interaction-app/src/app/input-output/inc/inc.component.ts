import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inc',
  standalone: true,
  imports: [],
  templateUrl: './inc.component.html',
  styleUrl: './inc.component.css'
})
export class IncComponent {
  @Input()
  countValue!:number

  @Output()
  increment = new EventEmitter<number>()
  
  
  inc(){
    this.countValue++
    this.increment.emit(this.countValue)
  }


}
