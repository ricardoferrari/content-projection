import { Component, ViewChild } from '@angular/core';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from "./multi-slot/multi-slot.component";
import { ConditionalComponent } from "./conditional/conditional.component";
import { ToggleComponentDirective } from './toggle-component.directive';
import { TemplateGuardComponent } from './template-guard/template-guard.component';
import { AlertMessage, TemplateGuardContext, TemplateGuardDirective } from './template-guard.directive';

let contextCount = 0;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SingleSlotComponent,
    MultiSlotComponent,
    ConditionalComponent,
    TemplateGuardComponent,
    ToggleComponentDirective,
    TemplateGuardDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'content-projection';

  alertMessage: AlertMessage = {
    message: 'Hello from the context',
    title: 'Context message',
  };

  getMessageContext(): TemplateGuardContext {
    return {
      $implicit: `alert-message-${contextCount++}`,
      content: this.alertMessage
    } as TemplateGuardContext;
  };
}
