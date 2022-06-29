import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[angularDemoAppAttachHost]',
  exportAs: 'attachHost'
})
export class AttachHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
