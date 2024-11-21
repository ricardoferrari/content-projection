import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface AlertMessage {
  title: string;
  message: string;
}

export interface TemplateGuardContext {
  $implicit: any;
  content: AlertMessage;
}

let contextCount = 0;

@Directive({
  selector: '[appTemplateGuard]',
  standalone: true
})
export class TemplateGuardDirective<T extends TemplateGuardContext> {

  @Input() appTemplateGuard!: AlertMessage;

  constructor(private templateRef: TemplateRef<T>, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {

    if (this.appTemplateGuard) {
      const context: TemplateGuardContext = {
        $implicit: `alert-message-${contextCount++}`,
        content: {
          title: this.appTemplateGuard.title,
          message: this.appTemplateGuard.message
        }
      };

      this.viewContainerRef.createEmbeddedView(this.templateRef, context);
    }

  }

  static ngTemplateContextGuard<T extends TemplateGuardContext>(
    directive: TemplateGuardDirective<T>,
    context: any
  ): context is TemplateGuardContext {
    return true;
  }

}
