import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ConditionalComponent } from './conditional/conditional.component';

@Directive({
  selector: '[appToggleComponent]',
  standalone: true
})
export class ToggleComponentDirective {

  @Input() public parentContainer!: ConditionalComponent;

  @HostListener('click') toggleContent() {
    console.log('ToggleComponentDirective', this.parentContainer);
    this.parentContainer.expanded.update((value) => !value);
  }

  constructor() { }

}
