import { Component, ViewChild } from '@angular/core';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from "./multi-slot/multi-slot.component";
import { ConditionalComponent } from "./conditional/conditional.component";
import { ToggleComponentDirective } from './toggle-component.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SingleSlotComponent, MultiSlotComponent, ConditionalComponent, ToggleComponentDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'content-projection';
}
