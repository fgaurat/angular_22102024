import { Component } from '@angular/core';
import { HostChildComponent } from "../host-child/host-child.component";

@Component({
  selector: 'app-host-parent',
  standalone: true,
  imports: [HostChildComponent],
  templateUrl: './host-parent.component.html',
  styleUrl: './host-parent.component.css'
})
export class HostParentComponent {
  message ="message from parent"
}
