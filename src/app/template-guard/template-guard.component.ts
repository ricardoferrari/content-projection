import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AlertMessage, TemplateGuardContext } from '../template-guard.directive';

let contextCount = 0;

@Component({
  selector: 'app-template-guard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-guard.component.html',
})
export class TemplateGuardComponent<T extends TemplateGuardContext> implements AfterViewInit{

  @Input() public message!: AlertMessage;

  @ContentChild(TemplateRef<TemplateGuardContext>) innerTemplate!: TemplateRef<TemplateGuardContext>;

  public context!: TemplateGuardContext;

  constructor() {
    this.context = {
      $implicit: `alert-message-${contextCount++}`,
      content: {} as AlertMessage
    } as TemplateGuardContext;
  }


  ngAfterViewInit(): void {
    this.context = {
      $implicit: `alert-message-${contextCount++}`,
      content: this.message
    } as TemplateGuardContext;
    console.log(this.context);
  }

}
