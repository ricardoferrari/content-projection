import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface AlertMessage {
  title: string;
  message: string;
}

export interface TemplateGuardContext {
  $implicit: any;
  content: AlertMessage;
}

@Directive({
  selector: '[appTemplateGuard]',
  standalone: true
})
export class TemplateGuardDirective<T extends TemplateGuardContext> {

  @Input() appTemplateGuard!: any;

  constructor(private templateRef: TemplateRef<T>, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {

    if (this.appTemplateGuard) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.appTemplateGuard);
    }

  }

  static ngTemplateContextGuard<T extends TemplateGuardContext>(
    directive: TemplateGuardDirective<T>,
    context: any
  ): context is TemplateGuardContext {
    return true;
  }

}
