import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // @ViewChild(ChildComponent)
  // child!:ChildComponent
  
  @ViewChild('child01')
  child01!:ChildComponent
  
  @ViewChild('child02')
  child02!:ChildComponent


  showLog(){
    // this.child.logMessage()
    this.child01.logMessage("child01")
    this.child02.logMessage("child02")
  }
  
}
