import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowComponent } from "./input-output/show/show.component";
import { ParentComponent } from "./viewchild/parent/parent.component";
import { HostParentComponent } from "./host/host-parent/host-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowComponent, ParentComponent, HostParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-interaction-app';
}
