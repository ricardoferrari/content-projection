import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { ToggleComponentDirective } from '../toggle-component.directive';

let componentCount = 0;

@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.scss',
})
export class ConditionalComponent {
  public expanded: boolean = false;
  public contentID = `conditional-${componentCount++}`;

  @ContentChild(TemplateRef) conditionalTemplate!: TemplateRef<unknown>;
  @ContentChild(ElementRef) buttonToogle!: ElementRef<HTMLButtonElement>;

  constructor() {}

}
