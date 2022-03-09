import { Directive, ViewContainerRef } from '@angular/core';

/**
 * add host
 */
@Directive({
  selector: '[appAddHost]',
  exportAs: 'addHost'
})
export class AddHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
