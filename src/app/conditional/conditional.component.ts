import { CommonModule } from '@angular/common';
import { Component, ContentChild, ElementRef, Input, signal, TemplateRef, WritableSignal } from '@angular/core';

let componentCount = 0;

@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.scss',
})
export class ConditionalComponent {
  public expanded: WritableSignal<boolean> = signal(false);
  public contentID = `conditional-${componentCount++}`;

  @ContentChild(TemplateRef) conditionalTemplate!: TemplateRef<unknown>;
  @ContentChild(ElementRef) buttonToogle!: ElementRef<HTMLButtonElement>;

  constructor() {}

}
