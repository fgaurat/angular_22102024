import { Component, Host, inject } from '@angular/core';
import { HostParentComponent } from '../host-parent/host-parent.component';

@Component({
  selector: 'app-host-child',
  standalone: true,
  imports: [],
  templateUrl: './host-child.component.html',
  styleUrl: './host-child.component.css'
})
export class HostChildComponent {
  @Host() 
  public parentComponent:HostParentComponent = inject(HostParentComponent)
  
  // constructor(@Host() public parentComponent:HostParentComponent){}
}
